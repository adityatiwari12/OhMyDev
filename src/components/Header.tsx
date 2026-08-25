"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logomark } from "./icons";
import { useISTClock } from "@/hooks/use-ist-clock";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const TICKS = Array.from({ length: 13 }, (_, i) => i * 100);

export function Header() {
  const clock = useISTClock();
  const progress = useScrollProgress();
  const stripRef = useRef<HTMLDivElement>(null);
  const [cursorX, setCursorX] = useState<number | null>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const strip = stripRef.current;
      if (!strip) return;
      const rect = strip.getBoundingClientRect();
      if (e.clientY > rect.height + 40) return;
      setCursorX(Math.min(Math.max(e.clientX, 0), window.innerWidth));
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={stripRef}
      className="fixed inset-x-0 top-0 z-60 h-[30px] border-b border-ink/10 bg-white/[0.82] backdrop-blur-md"
    >
      <div className="relative flex h-full items-center px-3 sm:px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 font-mono text-[11px] font-bold tracking-tight text-ink sm:text-xs"
        >
          <Logomark className="size-5" />
          <span className="hidden sm:inline">OH MY DEV</span>
        </Link>

        <span className="ml-2 shrink-0 rounded bg-brand px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
          {progress}%
        </span>

        <div className="ruler-strip relative mx-4 hidden h-full flex-1 items-center overflow-hidden md:flex">
          {TICKS.map((t) => (
            <span
              key={t}
              className="absolute top-1/2 -translate-y-1/2 font-mono text-[9px] text-ink-faint"
              style={{ left: `${(t / 1200) * 100}%` }}
            >
              {t}
            </span>
          ))}
          {cursorX !== null && (
            <div
              className="pointer-events-none absolute top-full flex -translate-x-1/2 flex-col items-center transition-[left] duration-75"
              style={{ left: cursorX }}
            >
              <span className="-mt-1 size-0 border-x-4 border-b-4 border-x-transparent border-b-tool" />
              <span className="rounded bg-tool px-1.5 py-0.5 font-mono text-[9px] font-bold text-white shadow-sm">
                You
              </span>
            </div>
          )}
          <div className="animate-float pointer-events-none absolute top-full left-[68%] flex flex-col items-center">
            <span className="-mt-1 size-0 border-x-4 border-b-4 border-x-transparent border-b-brand" />
            <span className="rounded bg-brand px-1.5 py-0.5 font-mono text-[9px] font-bold text-white shadow-sm">
              Aditya
            </span>
          </div>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 font-mono text-[10px] font-bold text-ink sm:text-xs">
          <span className="relative flex size-1.5">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          <span>LIVE ·</span>
          <span className="tabular-nums">{clock?.time ?? "--:--:-- --"}</span>
        </div>
      </div>
    </div>
  );
}
