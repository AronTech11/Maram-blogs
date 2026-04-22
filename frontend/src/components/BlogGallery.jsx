import React, { useMemo, useState } from "react";

const isImageBlock = (block) =>
  block?.type === "image" && block?.data?.file?.url;

const normalizeUrl = (url) => {
  if (!url) return "";
  if (typeof url !== "string") return "";
  return url;
};

/**
 * BlogGallery
 * - extracts EditorJS image blocks and renders them as either a grid or a simple carousel
 */
const BlogGallery = ({ content, mode = "grid" }) => {
  const images = useMemo(() => {
    const blocks = content?.blocks || [];
    return blocks
      .filter(isImageBlock)
      .map((b) => ({
        url: normalizeUrl(b.data.file.url),
        caption: b.data.caption || "",
      }))
      .filter((img) => !!img.url);
  }, [content]);

  const [active, setActive] = useState(0);

  if (!images.length) return null;

  if (mode === "carousel") {
    const current = images[active];
    return (
      <section className="bg-white rounded-xl border border-soft-gray/50 p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading text-lg font-bold text-primary">
            Photo gallery
          </h3>
          <p className="text-xs text-primary/40">
            {active + 1} / {images.length}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-soft-gray/10">
          <img
            src={current.url}
            alt={current.caption || `Gallery image ${active + 1}`}
            className="w-full max-h-[520px] object-contain"
            loading="lazy"
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={() =>
                  setActive((p) => (p - 1 + images.length) % images.length)
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => setActive((p) => (p + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center"
              >
                ›
              </button>
            </>
          )}
        </div>

        {current.caption && (
          <p className="text-sm text-primary/60 mt-3">{current.caption}</p>
        )}

        {images.length > 1 && (
          <div className="mt-4 grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-2">
            {images.map((img, idx) => (
              <button
                key={`${img.url}-${idx}`}
                type="button"
                onClick={() => setActive(idx)}
                className={`rounded-md overflow-hidden border transition ${
                  idx === active
                    ? "border-accent ring-2 ring-accent/30"
                    : "border-soft-gray/60 hover:border-accent/40"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.caption || `Thumbnail ${idx + 1}`}
                  className="w-full h-12 object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </section>
    );
  }

  // grid
  return (
    <section className="bg-white rounded-xl border border-soft-gray/50 p-4 md:p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-heading text-lg font-bold text-primary">
          Photo gallery
        </h3>
        <p className="text-xs text-primary/40">{images.length} photos</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, idx) => (
          <a
            key={`${img.url}-${idx}`}
            href={img.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-lg overflow-hidden border border-soft-gray/60 bg-soft-gray/10"
            title={img.caption || "Open image"}
          >
            <img
              src={img.url}
              alt={img.caption || `Gallery image ${idx + 1}`}
              className="w-full h-44 md:h-48 object-cover group-hover:scale-[1.02] transition"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogGallery;
