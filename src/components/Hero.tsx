"use client";

import { useState } from "react";
import { Mail, ArrowRight, Menu, X } from "lucide-react";
import { SelectionFrame } from "./FigmaChrome";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "/about" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="top" className="canvas-section pt-[82px]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-3 pt-3 sm:gap-3 sm:px-4 sm:pt-6 md:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 font-mono text-[10px] font-bold text-ink shadow-sm sm:px-4 sm:py-2 sm:text-xs">
          <span className="relative flex size-1.5">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="hidden xs:inline">available for projects</span>
          <span className="inline xs:hidden">available</span>
        </span>

        <nav className="order-3 hidden w-full items-center justify-center gap-0.5 rounded-full bg-white px-1.5 py-1.5 shadow-sm sm:gap-1 sm:px-2 sm:py-2 md:order-2 md:flex md:w-auto md:gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:text-brand sm:px-4 sm:py-2 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-ink/90 sm:px-5 sm:py-2 sm:text-sm"
          >
            Contact
          </a>
        </nav>

        <a
          href="mailto:tiwariaditya005@gmail.com"
          className="order-2 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 font-mono text-[9px] font-bold text-ink shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs md:order-3"
        >
          <Mail className="size-3 sm:size-3.5" />
          <span className="hidden xs:inline">hello@ohmydev.dev</span>
          <span className="inline xs:hidden text-[8px]">hello@</span>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="order-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-sm sm:size-9 md:hidden"
        >
          {menuOpen ? <X className="size-3.5" /> : <Menu className="size-3.5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-[1400px] px-3 sm:px-4 md:hidden">
          <nav className="flex flex-col gap-0.5 rounded-2xl bg-white p-1.5 shadow-sm sm:gap-1 sm:p-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-xs font-semibold text-ink transition-colors hover:bg-soft hover:text-brand sm:px-4 sm:py-3 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-ink px-3 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-ink/90 sm:px-4 sm:py-3 sm:text-sm"
            >
              Contact
            </a>
          </nav>
        </div>
      )}

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-3 pt-8 pb-16 text-center sm:px-4 sm:pt-12 sm:pb-24 md:px-6 md:pt-16 md:pb-28">
        <SelectionFrame
          tone="tool"
          className="mb-4 rounded-lg bg-white/70 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-5 sm:py-2.5 md:px-5 md:mb-8"
        >
          <span className="flex flex-col items-center gap-1 font-mono text-[9px] font-semibold text-ink sm:flex-row sm:gap-2 sm:text-xs sm:justify-center">
            Shipped 15+
            <span className="rounded bg-brand px-1 py-0.5 text-[8px] font-bold text-white sm:px-1.5 sm:py-0.5 sm:text-[10px]">
              OMD
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

        <div className="mt-4 flex flex-col items-center gap-2 sm:mt-6 md:mt-8">
          <span className="font-mono text-[8px] font-bold tracking-wide text-brand uppercase sm:text-xs">
            we build what scales ✦
          </span>
          <SelectionFrame
            tone="tool"
            className="max-w-lg rounded-lg bg-white/70 px-4 py-2.5 backdrop-blur-sm sm:px-6 sm:py-4 md:max-w-2xl"
          >
            <p className="font-sans text-xs leading-relaxed text-ink-soft sm:text-base sm:leading-snug md:text-lg md:leading-snug">
              Most software you outgrow in a year. What we build scales with
              your business instead.
            </p>
          </SelectionFrame>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-7 md:mt-9 md:gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-bold text-white shadow-[0_10px_30px_-8px_rgba(240,83,28,0.6)] transition-transform hover:scale-[1.03] sm:px-6 sm:py-3.5 sm:text-sm md:gap-2"
          >
            Book a call
            <ArrowRight className="size-3 sm:size-4" />
          </a>
          <a
            href="#work"
            className="rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-bold text-ink transition-colors hover:bg-soft sm:px-6 sm:py-3.5 sm:text-sm"
          >
            See the work
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-3 pb-4 font-mono text-[8px] font-bold tracking-wide text-ink-soft uppercase sm:flex-row sm:px-4 sm:pb-8 sm:text-[10px] md:px-6">
        <div className="leading-relaxed text-center sm:text-left">
          working from indore
          <br />
          no office, on purpose
        </div>
        <div className="text-center leading-relaxed sm:text-right">
          open for 2026
          <br />
          your timezone, handled
        </div>
      </div>
    </section>
  );
}
