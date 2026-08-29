"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
import { WORK_ITEMS } from "@/data/content";

export function SelectedWork() {
  const [openVideo, setOpenVideo] = useState<{ title: string; src: string } | null>(
    null,
  );

  useEffect(() => {
    if (!openVideo) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenVideo(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openVideo]);

  return (
    <section id="work" className="canvas-section py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-3 sm:px-4 md:px-6 text-center">
        <h2 className="font-heading text-[28px] sm:text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase md:text-[48px]">
          Featured works
        </h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-ink-soft">
          The good kind of name-drop. Hover to peek.
        </p>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 md:mt-14 max-w-4xl border-t border-ink/10 px-3 sm:px-4 md:px-6">
        {WORK_ITEMS.map((item) => (
          <div
            key={item.index}
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-ink/10 py-4 sm:py-6 md:py-8 transition-colors hover:bg-white/40"
          >
            <div className="flex min-w-0 items-baseline gap-2 sm:gap-3 md:gap-6 flex-1 min-w-0">
              <span className="hidden font-mono text-xs sm:text-sm font-bold text-ink-faint sm:inline flex-shrink-0">
                {item.index}
              </span>
              <div className="min-w-0 flex-1">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading block truncate text-xl sm:text-2xl md:text-3xl font-extrabold text-ink transition-colors hover:text-brand"
                  >
                    {item.title}
                  </a>
                ) : (
                  <h3 className="font-heading truncate text-xl sm:text-2xl md:text-3xl font-extrabold text-ink">
                    {item.title}
                  </h3>
                )}
                <p className="mt-1 max-w-md text-xs sm:text-sm text-ink-soft">
                  {item.description}
                </p>
                <div className="mt-1.5 sm:mt-2 flex flex-wrap gap-1">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-ink/10 bg-white px-1.5 py-0.5 font-mono text-[8px] sm:text-[10px] font-bold text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3 self-start sm:self-center">
              <span className="hidden font-mono text-xs text-ink-faint sm:inline">
                {item.year}
              </span>
              {item.video && (
                <button
                  type="button"
                  onClick={() =>
                    setOpenVideo({ title: item.title, src: item.video! })
                  }
                  aria-label={`Watch ${item.title} demo`}
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white flex-shrink-0"
                >
                  <Play className="size-3 sm:size-3.5 fill-current" />
                </button>
              )}
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${item.title}`}
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white flex-shrink-0"
                >
                  <ArrowUpRight className="size-3.5 sm:size-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <a
          href="#work"
          className="rounded-full border border-ink/15 bg-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-ink transition-colors hover:bg-soft"
        >
          See more work →
        </a>
      </div>

      {openVideo && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/80 p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setOpenVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-lg sm:rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-ink px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="font-mono text-[8px] sm:text-xs font-bold text-white/70 truncate">
                {openVideo.title} — demo.mp4
              </span>
              <button
                type="button"
                onClick={() => setOpenVideo(null)}
                aria-label="Close video"
                className="flex size-6 sm:size-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white flex-shrink-0 ml-2"
              >
                <X className="size-3.5 sm:size-4" />
              </button>
            </div>
            <video
              key={openVideo.src}
              src={openVideo.src}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
