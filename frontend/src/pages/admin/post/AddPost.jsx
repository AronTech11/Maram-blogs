import React, { useEffect, useRef, useState } from "react";
import { usePostBlogMutation } from "../../../redux/features/blogs/blogsApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";

const BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const AddPost = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [coverPreview, setCoverPreview] = useState("");
  const [category, setCategory] = useState("");
  const [writer, setWriter] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [uploadingAttachment, setUploadingAttachment] = useState(false);
  const [PostBlog, { isLoading }] = usePostBlogMutation();

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // editor js setup
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        editorRef.current = editor;
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
    });

    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file size (25MB)
    if (file.size > 25 * 1024 * 1024) {
      setMessage("Image must be less than 25MB");
      return;
    }

    // Show local preview immediately
    const localPreview = URL.createObjectURL(file);
    setCoverPreview(localPreview);

    // Upload to server
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

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
  const url = data?.file?.url || data?.imageUrl;
  if (!url) throw new Error("No image URL returned");
  setCoverImg(`${BACKEND_URL}${url}`);
      setMessage("");
    } catch (error) {
      console.error("Image upload error:", error);
      setMessage("Failed to upload image. Please try again.");
      setCoverPreview("");
      setCoverImg("");
    } finally {
      setUploading(false);
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

      // Insert images into the editor content
      const blocks = urls.map((u) => ({
        type: "image",
        data: {
          file: { url: `${BACKEND_URL}${u}` },
          caption: "",
          withBorder: false,
          stretched: false,
          withBackground: false,
        },
      }));

      // EditorJS v2 doesn't have a stable native insert API for custom blocks.
      // We append blocks by re-rendering merged content.
      const current = await editorRef.current.save();
      await editorRef.current.render({
        time: Date.now(),
        blocks: [...(current?.blocks || []), ...blocks],
        version: current?.version || "2.0.0",
      });
    } catch (error) {
      console.error("Gallery upload error:", error);
      setMessage("Failed to upload gallery images. Please try again.");
    } finally {
      setUploadingGallery(false);
      // allow re-uploading the same file selection
      e.target.value = "";
    }
  };

  const handleAttachmentUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 25MB max for PDFs/docs
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
        url: `${BACKEND_URL}${data.fileUrl}`,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!coverImg) {
      setMessage("Please upload a cover image");
      return;
    }

    try {
      const content = await editorRef.current.save();
      const newPost = {
        title,
        content,
        coverImg,
        category,
        description: metaDescription,
        author: user._id,
        writer,
        attachments,
        rating,
      };
      const response = await PostBlog(newPost).unwrap();
      alert(response.message);
      navigate("/blogs");
    } catch (error) {
      console.error(error);
      setMessage("Failed to add blog post. Please try again.");
    }
  };

  return (
    <div className="bg-white md:p-8 p-2">
      <h2 className="font-heading text-2xl font-bold text-primary">
        Create A New Blog Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 pt-8">
        <div className="space-y-4">
          <label className="font-semibold text-primary">Blog Title</label>
          <input
            type="text"
            value={title}
            className="w-full inline-block bg-bgPrimary focus:outline-none focus:ring-2 focus:ring-accent/30 px-5 py-3 rounded-lg border border-soft-gray/50"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your blog title"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="md:w-2/3 w-full">
            <p className="font-semibold text-primary mb-5">Content Section</p>
            <p className="text-xs italic text-primary/50 mb-2">
              Write your post here...
            </p>
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
                      src={coverPreview}
                      alt="Cover preview"
                      className="w-full h-40 object-cover rounded-lg border border-soft-gray/50"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all rounded-lg flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => {
                          setCoverPreview("");
                          setCoverImg("");
                        }}
                        className="text-white text-xs bg-red-500 px-3 py-1.5 rounded-lg"
                      >
                        Remove
                      </button>
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
                <div className="space-y-1">
                  <p className="text-xs text-primary/50">Attachments:</p>
                  <ul className="text-xs text-primary/40 list-disc pl-5">
                    {attachments.map((a, idx) => (
                      <li key={`${a.url}-${idx}`} className="break-all">
                        {a.name || a.url}
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
                value={category}
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
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={3}
                className="w-full bg-bgPrimary focus:outline-none focus:ring-2 focus:ring-accent/30 px-4 py-2.5 rounded-lg border border-soft-gray/50 text-sm"
                placeholder="Brief description for SEO..."
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm text-primary/70">
                Writer / Original Author
              </label>
              <input
                type="text"
                value={writer}
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
          disabled={isLoading || uploading}
          className="w-full mt-5 bg-accent hover:bg-accent/90 text-white font-medium py-3 rounded-lg transition disabled:opacity-50"
        >
          {isLoading
            ? "Publishing..."
            : uploading
              ? "Uploading image..."
              : "Publish Blog Post"}
        </button>
      </form>
    </div>
  );
};

export default AddPost;
