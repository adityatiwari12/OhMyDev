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
    <section id="work" className="canvas-section py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[48px]">
          Featured works
        </h2>
        <p className="mt-3 text-ink-soft">
          The good kind of name-drop. Hover to peek.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-4xl border-t border-ink/10 px-4 sm:px-6">
        {WORK_ITEMS.map((item) => (
          <div
            key={item.index}
            className="group flex items-center justify-between gap-4 border-b border-ink/10 py-6 transition-colors hover:bg-white/40 sm:py-8"
          >
            <div className="flex min-w-0 items-baseline gap-3 sm:gap-6">
              <span className="hidden font-mono text-sm font-bold text-ink-faint sm:inline">
                {item.index}
              </span>
              <div className="min-w-0">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading block truncate text-2xl font-extrabold text-ink transition-colors hover:text-brand sm:text-3xl"
                  >
                    {item.title}
                  </a>
                ) : (
                  <h3 className="font-heading truncate text-2xl font-extrabold text-ink sm:text-3xl">
                    {item.title}
                  </h3>
                )}
                <p className="mt-1 max-w-md text-sm text-ink-soft">
                  {item.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-ink/10 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="hidden font-mono text-sm text-ink-faint sm:inline">
                {item.year}
              </span>
              {item.video && (
                <button
                  type="button"
                  onClick={() =>
                    setOpenVideo({ title: item.title, src: item.video! })
                  }
                  aria-label={`Watch ${item.title} demo`}
                  className="flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Play className="size-3.5 fill-current" />
                </button>
              )}
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${item.title}`}
                  className="flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#work"
          className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-soft"
        >
          See more work →
        </a>
      </div>

      {openVideo && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setOpenVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-ink px-4 py-2.5">
              <span className="font-mono text-xs font-bold text-white/70">
                {openVideo.title} — demo.mp4
              </span>
              <button
                type="button"
                onClick={() => setOpenVideo(null)}
                aria-label="Close video"
                className="flex size-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
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
