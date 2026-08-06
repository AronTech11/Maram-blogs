import React, { useEffect, useRef, useState } from "react";
import {
  useFetchBlogByIdQuery,
  useUpdateBlogMutation,
} from "../../../redux/features/blogs/blogsApi";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";

const BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const UpdatePosts = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [coverPreview, setCoverPreview] = useState("");
  const [category, setCategory] = useState("");
  const [writer, setWriter] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [uploadingAttachment, setUploadingAttachment] = useState(false);
  const [galleryPreviewMode, setGalleryPreviewMode] = useState("grid");
  const [galleryPreviewContent, setGalleryPreviewContent] = useState(null);
  const [PostBlog] = useUpdateBlogMutation();
  const [saving, setSaving] = useState(false);
  const { id } = useParams();
  const {
    data: blog = {},
    error,
    isLoading,
    refetch,
  } = useFetchBlogByIdQuery(id);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Set existing cover image preview
  useEffect(() => {
    if (blog.post?.coverImg) {
      // Always store the raw value in `coverImg` (could be '/uploads/..' or absolute).
      // Always store an absolute URL in `coverPreview` for immediate rendering.
      setCoverImg(blog.post.coverImg);
      setCoverPreview(resolvePublicUrl(blog.post.coverImg));
    }
    if (Array.isArray(blog.post?.attachments)) {
      setAttachments(blog.post.attachments);
    }
  }, [blog]);

  // Initialize editor js with default content
  useEffect(() => {
    if (blog.post) {
      const editor = new EditorJS({
        holder: "editorjs",
        onReady: () => {
          editorRef.current = editor;
          editor.isReady.then(() => {
            editor.render(blog.post.content);
          });
        },
        autofocus: true,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: `${BACKEND_URL}/api/blogs/upload-image`,
              },
              additionalRequestHeaders: {},
            },
          },
        },
        data: blog.post.content,
      });

      return () => {
        editor.destroy();
        editorRef.current = null;
      };
    }
  }, [blog]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      setMessage("Image must be less than 25MB");
      return;
    }

    const localPreview = URL.createObjectURL(file);
    setCoverPreview(localPreview);

    setUploading(true);
    setMessage("");
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(`${BACKEND_URL}/api/blogs/upload-image`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      // Backend returns EditorJS-compatible file response
      const url = data?.file?.url || data?.imageUrl;
      if (!url) throw new Error("No image URL returned");
      // Persist the public URL in a consistent format:
      // - Prefer storing the path returned by backend ("/uploads/...")
      // - Render as absolute only at display time
      const nextCoverPath = url.startsWith("http") ? url : url;
      setCoverImg(nextCoverPath);

      const nextPreview = url.startsWith("http") ? url : `${BACKEND_URL}${url}`;
      setCoverPreview(nextPreview);
      setMessage("Cover image uploaded. Don't forget to click Update Blog.");
    } catch (error) {
      console.error("Image upload error:", error);
      setMessage("Failed to upload image. Please try again.");
      // Revert to old image
      setCoverPreview(resolvePublicUrl(blog.post?.coverImg || ""));
      setCoverImg(blog.post?.coverImg || "");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make failures visible immediately instead of silently doing nothing.
    if (saving) return;
    if (!editorRef.current) {
      setMessage(
        "Editor is still loading. Please wait 1-2 seconds and try again.",
      );
      return;
    }
    if (!user?._id) {
      setMessage("You must be logged in to update a blog post.");
      return;
    }
    if (!blog?.post?._id) {
      setMessage("Blog post hasn't loaded yet. Please refresh and try again.");
      return;
    }

    setSaving(true);

    try {
      const content = await editorRef.current.save();
      const updatedPost = {
        title: title || blog.post.title,
        content,
        coverImg: coverImg || blog.post.coverImg,
        category: category || blog.post.category,
        description: description || blog.post.description,
        author: user._id,
        writer: writer !== "" ? writer : blog.post.writer || "",
        attachments,
        rating: rating || blog.post.rating,
      };
      await PostBlog({ id, ...updatedPost }).unwrap();
      setMessage("");
      setSuccessModalOpen(true);
      // Keep local state in sync right away
      await refetch();
    } catch (error) {
      console.error(error);
      const status = error?.status;
      const apiMessage = error?.data?.message || error?.error;
      const details = apiMessage
        ? `${apiMessage}${status ? ` (status ${status})` : ""}`
        : "Failed to update blog post. Please try again.";

      setMessage(details);
      setSuccessModalOpen(false);
    } finally {
      setSaving(false);
    }
  };

  const handleGalleryUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    if (files.length > 10) {
      setMessage("You can upload up to 10 photos at a time.");
      return;
    }

    const tooLarge = files.find((f) => f.size > 25 * 1024 * 1024);
    if (tooLarge) {
      setMessage("Each image must be less than 25MB");
      return;
    }

    setUploadingGallery(true);
    setMessage("");
    try {
      const formData = new FormData();
      files.forEach((f) => formData.append("images", f));

      const response = await fetch(`${BACKEND_URL}/api/blogs/upload-images`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) throw new Error("Upload failed");
      const data = await response.json();
      const urls = data?.imageUrls || [];

      if (!urls.length) {
        setMessage("Upload succeeded but no images were returned.");
        return;
      }

      const blocks = urls.map((u) => ({
        type: "image",
        data: {
          // Store as a path so it works across environments; renderer resolves to absolute.
          file: { url: u },
          caption: "",
          withBorder: false,
          stretched: false,
          withBackground: false,
        },
      }));

      const current = await editorRef.current.save();
      const nextContent = {
        time: Date.now(),
        blocks: [...(current?.blocks || []), ...blocks],
        version: current?.version || "2.0.0",
      };

      await editorRef.current.render(nextContent);
      setGalleryPreviewContent(nextContent);
    } catch (error) {
      console.error("Gallery upload error:", error);
      setMessage("Failed to upload gallery images. Please try again.");
    } finally {
      setUploadingGallery(false);
      e.target.value = "";
    }
  };

  const handleDeleteGalleryImage = async (imgUrl) => {
    if (!editorRef.current) return;
    try {
      const current = await editorRef.current.save();
      const filtered = {
        ...current,
        blocks: current.blocks.filter(
          (b) => !(b.type === "image" && b.data?.file?.url === imgUrl),
        ),
      };
      await editorRef.current.render(filtered);
      setGalleryPreviewContent(filtered);
    } catch (err) {
      console.error("Error deleting gallery image:", err);
    }
  };

  const handleAttachmentUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      setMessage("Attachment must be less than 25MB");
      return;
    }

    setUploadingAttachment(true);
    setMessage("");
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `${BACKEND_URL}/api/blogs/upload-attachment`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        },
      );
      if (!response.ok) throw new Error("Upload failed");
      const data = await response.json();

      const newAttachment = {
        // Store as a path so it works across environments; display can resolve.
        url: data.fileUrl,
        name: data.originalName || file.name,
        mimeType: data.mimeType || file.type,
        size: data.size || file.size,
      };
      setAttachments((prev) => [...prev, newAttachment]);
    } catch (error) {
      console.error("Attachment upload error:", error);
      setMessage("Failed to upload attachment. Please try again.");
    } finally {
      setUploadingAttachment(false);
      e.target.value = "";
    }
  };

  const resolvePublicUrl = (maybeUrl) => {
    if (!maybeUrl) return "";
    if (typeof maybeUrl !== "string") return "";
    if (maybeUrl.startsWith("http")) return maybeUrl;
    if (maybeUrl.startsWith("/")) return `${BACKEND_URL}${maybeUrl}`;
    return `${BACKEND_URL}/${maybeUrl}`;
  };

  return (
    <div className="bg-white md:p-8 p-2 relative">
      <h2 className="font-heading text-2xl font-bold text-primary pt-5">
        Edit or Update Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 pt-8">
        <div className="space-y-4">
          <label className="font-semibold text-primary">Blog Title</label>
          <input
            type="text"
            defaultValue={blog?.post?.title}
            className="w-full inline-block bg-bgPrimary focus:outline-none focus:ring-2 focus:ring-accent/30 px-5 py-3 rounded-lg border border-soft-gray/50"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="md:w-2/3 w-full">
            <p className="font-semibold text-primary mb-5">Content Section</p>
            <div
              id="editorjs"
              className="border border-soft-gray/50 rounded-lg p-4 min-h-[200px]"
            ></div>
          </div>

          <div className="md:w-1/3 w-full border border-soft-gray/50 p-5 space-y-5 rounded-lg">
            <p className="font-semibold text-primary">Post Settings</p>

            {/* IMAGE UPLOAD */}
            <div className="space-y-2">
              <label className="font-medium text-sm text-primary/70">
                Cover Image
              </label>
              <div className="relative">
                {coverPreview ? (
                  <div className="relative group">
                    <img
                      src={coverPreview || resolvePublicUrl(coverImg)}
                      alt="Cover preview"
                      className="w-full h-40 object-cover rounded-lg border border-soft-gray/50"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all rounded-lg flex items-center justify-center gap-2">
                      <label className="text-white text-xs bg-accent px-3 py-1.5 rounded-lg cursor-pointer">
                        Change
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {uploading && (
                      <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-soft-gray/80 rounded-lg cursor-pointer hover:border-accent/50 hover:bg-accent/5 transition-all">
                    <div className="text-center">
                      <p className="text-3xl mb-2">📷</p>
                      <p className="text-xs text-primary/50">
                        Click to upload image
                      </p>
                      <p className="text-xs text-primary/30 mt-1">
                        JPG, PNG, WebP (max 5MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* GALLERY UPLOAD */}
            <div className="space-y-2">
              <label className="font-medium text-sm text-primary/70">
                Upload Photos (up to 10)
              </label>
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-soft-gray/80 rounded-lg cursor-pointer hover:border-accent/50 hover:bg-accent/5 transition-all">
                <div className="text-center">
                  <p className="text-xs text-primary/50">
                    Click to upload multiple images
                  </p>
                  <p className="text-[11px] text-primary/30 mt-1">
                    JPG, PNG, WebP (max 5MB each)
                  </p>
                  {uploadingGallery && (
                    <p className="text-[11px] text-accent mt-1">Uploading...</p>
                  )}
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleGalleryUpload}
                  className="hidden"
                />
              </label>
              <p className="text-[11px] text-primary/40">
                Uploaded photos will be appended into the editor content.
              </p>

              {/* Admin preview (grid/carousel) */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-primary/60">
                    Gallery preview
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          const current = await editorRef.current?.save();
                          setGalleryPreviewContent(current || null);
                          setGalleryPreviewMode("grid");
                        } catch {
                          setGalleryPreviewMode("grid");
                        }
                      }}
                      className={`text-[11px] px-2 py-1 rounded-md border ${
                        galleryPreviewMode === "grid"
                          ? "border-accent text-accent"
                          : "border-soft-gray/60 text-primary/50 hover:border-accent/40"
                      }`}
                    >
                      Grid
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          const current = await editorRef.current?.save();
                          setGalleryPreviewContent(current || null);
                          setGalleryPreviewMode("carousel");
                        } catch {
                          setGalleryPreviewMode("carousel");
                        }
                      }}
                      className={`text-[11px] px-2 py-1 rounded-md border ${
                        galleryPreviewMode === "carousel"
                          ? "border-accent text-accent"
                          : "border-soft-gray/60 text-primary/50 hover:border-accent/40"
                      }`}
                    >
                      Carousel
                    </button>
                  </div>
                </div>

                {/* Deletable gallery preview */}
                {(() => {
                  const content = galleryPreviewContent || blog.post?.content;
                  const imgBlocks = (content?.blocks || []).filter(
                    (b) => b?.type === "image" && b?.data?.file?.url,
                  );
                  if (!imgBlocks.length) return null;
                  return (
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {imgBlocks.map((b, idx) => {
                        const raw = b.data.file.url;
                        const src = raw.startsWith("http")
                          ? raw
                          : `${BACKEND_URL}${raw.startsWith("/") ? "" : "/"}${raw}`;
                        return (
                          <div
                            key={`${raw}-${idx}`}
                            className="relative group rounded-lg overflow-hidden border border-soft-gray/50"
                          >
                            <img
                              src={src}
                              alt={`Gallery ${idx + 1}`}
                              className="w-full h-24 object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => handleDeleteGalleryImage(raw)}
                              className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow"
                              title="Delete photo"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* PDF / ATTACHMENT */}
            <div className="space-y-2">
              <label className="font-medium text-sm text-primary/70">
                Upload Newspaper PDF (optional)
              </label>
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-soft-gray/80 rounded-lg cursor-pointer hover:border-accent/50 hover:bg-accent/5 transition-all">
                <div className="text-center">
                  <p className="text-xs text-primary/50">
                    Click to upload file
                  </p>
                  <p className="text-[11px] text-primary/30 mt-1">
                    PDF or image (max 10MB)
                  </p>
                  {uploadingAttachment && (
                    <p className="text-[11px] text-accent mt-1">Uploading...</p>
                  )}
                </div>
                <input
                  type="file"
                  accept="application/pdf,image/*"
                  onChange={handleAttachmentUpload}
                  className="hidden"
                />
              </label>

              {attachments.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-primary/50 font-medium">
                    Attachments:
                  </p>
                  <ul className="space-y-1.5">
                    {attachments.map((a, idx) => (
                      <li
                        key={`${a.url}-${idx}`}
                        className="flex items-center justify-between gap-2 bg-soft-gray/20 rounded-lg px-3 py-2"
                      >
                        <span className="text-xs text-primary/70 break-all line-clamp-1 flex-1">
                          {a.name || a.url}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setAttachments((prev) =>
                              prev.filter((_, i) => i !== idx),
                            )
                          }
                          className="flex-shrink-0 text-red-400 hover:text-red-600 transition p-1 rounded hover:bg-red-50"
                          title="Remove attachment"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6M14 11v6" />
                            <path d="M9 6V4h6v2" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm text-primary/70">
                Category
              </label>
              <select
                value={category || blog?.post?.category || ""}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-bgPrimary focus:outline-none focus:ring-2 focus:ring-accent/30 px-4 py-2.5 rounded-lg border border-soft-gray/50 text-sm"
                required
              >
                <option value="">Select a category</option>
                <option value="Culture">Culture</option>
                <option value="Festival">Festival</option>
                <option value="Village">Village</option>
                <option value="History">History</option>
                <option value="Education">Education</option>
                <option value="Language">Language</option>
                <option value="News">News</option>
                <option value="Livelihood">Livelihood</option>
                <option value="Folk Tales">Folk Tales</option>
                <option value="Tradition">Tradition</option>
                <option value="Food">Food</option>
                <option value="Music & Dance">Music & Dance</option>
                <option value="Sports">Sports</option>
                <option value="Religion">Religion</option>
                <option value="Art & Craft">Art & Craft</option>
                <option value="Story">Story</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm text-primary/70">
                Meta Description
              </label>
              <textarea
                cols={4}
                rows={4}
                defaultValue={blog?.post?.description}
                className="w-full inline-block bg-bgPrimary focus:outline-none focus:ring-2 focus:ring-accent/30 px-4 py-2.5 rounded-lg border border-soft-gray/50 text-sm"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description for SEO..."
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm text-primary/70">
                Writer / Original Author
              </label>
              <input
                type="text"
                defaultValue={blog?.post?.writer || ""}
                onChange={(e) => setWriter(e.target.value)}
                className="w-full inline-block bg-bgPrimary focus:outline-none focus:ring-2 focus:ring-accent/30 px-4 py-2.5 rounded-lg border border-soft-gray/50 text-sm"
                placeholder="e.g. Kanga Monica (leave blank if you wrote it)"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm text-primary/70">
                Published by
              </label>
              <input
                type="text"
                value={user.username}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-4 py-2.5 rounded-lg border border-soft-gray/50 text-sm text-primary/50"
                disabled
              />
            </div>
          </div>
        </div>

        {message && <p className="text-red-500 text-sm">{message}</p>}
        <button
          type="submit"
          disabled={isLoading || uploading || saving}
          className="w-full mt-5 bg-accent hover:bg-accent/90 text-white font-medium py-3 rounded-lg transition disabled:opacity-50"
        >
          {uploading
            ? "Uploading image..."
            : saving
              ? "Saving..."
              : "Update Blog"}
        </button>
      </form>

      {/* Success Modal */}
      {successModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSuccessModalOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl border border-soft-gray/60 p-6">
            <h3 className="font-heading text-xl font-bold text-primary">
              Updated successfully
            </h3>
            <p className="text-primary/60 text-sm mt-2">
              Your blog post was saved. What do you want to do next?
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setSuccessModalOpen(false);
                  navigate(`/blogs/${id}`);
                }}
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-medium px-4 py-2.5 rounded-lg"
              >
                View blog
              </button>
              <button
                type="button"
                onClick={() => setSuccessModalOpen(false)}
                className="w-full sm:w-auto bg-soft-gray/30 hover:bg-soft-gray/40 text-primary font-medium px-4 py-2.5 rounded-lg"
              >
                Keep editing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePosts;
