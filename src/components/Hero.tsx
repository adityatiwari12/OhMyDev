"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SelectionFrame } from "./FigmaChrome";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    function handleMouseMove(e: MouseEvent) {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="canvas-section relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-soft pt-[30px] sm:pt-[50px]"
      style={
        isInView
          ? {
              background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.08), transparent 50%), linear-gradient(to bottom, white, white, rgb(248, 248, 248))`,
            }
          : undefined
      }
    >
      {/* Gradient orbs */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-br from-brand/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -bottom-1/3 -right-1/4 w-full h-full rounded-full bg-gradient-to-tl from-brand/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-3 pt-8 pb-16 text-center sm:px-4 sm:pt-12 sm:pb-24 md:px-6 md:pt-16 md:pb-28">
        <SelectionFrame
          tone="tool"
          className="mb-4 rounded-lg bg-white/70 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-5 sm:py-2.5 md:px-5 md:mb-8"
        >
          <span className="flex flex-col items-center gap-1 font-mono text-[9px] font-semibold text-ink sm:flex-row sm:gap-2 sm:text-xs sm:justify-center">
            Shipped 15+
            <span className="rounded bg-brand px-1 py-0.5 text-[8px] font-bold text-white sm:px-1.5 sm:py-0.5 sm:text-[10px]">
              ohmydev
            </span>
            <span className="hidden sm:inline">products &amp; 6+ hackathon wins</span>
            <span className="inline sm:hidden">products</span>
          </span>
        </SelectionFrame>

        <h1 className="halftone-text font-heading text-[10vw] leading-[0.92] font-extrabold tracking-tight uppercase sm:text-[14vw] md:text-[68px] lg:text-[86px]">
          Software that
          <br />
          doesn&apos;t sleep.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft sm:mt-6 sm:text-base md:text-lg">
          From concept to deployed — we build production-grade software,
          automation & AI products for founders who move fast.
        </p>

        <button className="group relative mt-8 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/50 px-5 py-2.5 font-mono text-xs font-bold uppercase text-brand shadow-sm backdrop-blur transition-all hover:bg-white hover:border-brand/60 sm:mt-12 sm:px-6 sm:py-3 sm:text-sm">
          <span>Explore work</span>
          <ChevronDown className="size-3.5 sm:size-4 transition-transform group-hover:translate-y-0.5" />
        </button>

        <div className="mt-12 text-xs text-ink-soft sm:mt-20 sm:text-sm">
          Trusted by founders from{" "}
          <span className="font-semibold text-ink">
            FinTech, GovTech, Climate & AI
          </span>
        </div>
      </div>
    </section>
  );
}
