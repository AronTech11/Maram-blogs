import React from "react";
import { formatDate } from "../../../utilis/dateFormater";
import EditorJSHTML from "editorjs-html";

const editorJSHTML = EditorJSHTML();

const BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const resolveImg = (url) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${BACKEND_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};

const SingleBlogCard = ({ blog }) => {
  if (!blog) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
      </div>
    );
  }

  const { title, createdAt, author, writer, content, coverImg, category } =
    blog || {};
  // Images are rendered via `BlogGallery` for a nicer layout.
  const contentWithoutImages = content
    ? {
        ...content,
        blocks: Array.isArray(content.blocks)
          ? content.blocks.filter((b) => b?.type !== "image")
          : [],
      }
    : null;

  const htmlContent = contentWithoutImages
    ? editorJSHTML.parse(contentWithoutImages).join("")
    : "";
  const formattedDate = createdAt ? formatDate(createdAt) : "N/A";
  const publisherName = author?.username || "Unknown";
  const writerName = writer && writer.trim() ? writer.trim() : null;
  const coverImage = resolveImg(coverImg);

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-soft-gray/50">
      {/* Cover Image */}
      {coverImage && (
        <div className="w-full">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-auto max-h-[600px] object-contain bg-soft-gray/10"
          />
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          {category && (
            <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
              {category}
            </span>
          )}
          <span className="text-sm text-primary/40">{formattedDate}</span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-4 leading-tight">
          {title}
        </h1>

        {/* Author */}
        <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-soft-gray mb-6">
          {writerName && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-accent">
                  {writerName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-medium text-primary text-sm">{writerName}</p>
                <p className="text-xs text-primary/40">Writer</p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-earth-green/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-earth-green">
                {publisherName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-medium text-primary text-sm">
                {publisherName}
              </p>
              <p className="text-xs text-primary/40">Published by</p>
            </div>
          </div>
        </div>

        {/* Content */}
        {htmlContent && (
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="prose prose-lg max-w-none editorjsdiv text-primary/80 leading-relaxed"
          />
        )}
      </div>
    </article>
  );
};

export default SingleBlogCard;
