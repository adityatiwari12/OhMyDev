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
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 pt-6 sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-xs font-bold text-ink shadow-sm">
          <span className="relative flex size-2">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          available for projects
        </span>

        <nav className="order-3 hidden w-full items-center justify-center gap-1 rounded-full bg-white px-2 py-2 shadow-sm md:order-2 md:flex md:w-auto">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink/90"
          >
            Contact
          </a>
        </nav>

        <a
          href="mailto:tiwariaditya005@gmail.com"
          className="order-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-xs font-bold text-ink shadow-sm md:order-3"
        >
          <Mail className="size-3.5 text-brand" />
          hello@ohmydev.dev
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="order-4 flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-sm md:hidden"
        >
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-[1400px] px-4 sm:px-6 md:hidden">
          <nav className="flex flex-col gap-1 rounded-2xl bg-white p-2 shadow-sm">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-soft hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-ink/90"
            >
              Contact
            </a>
          </nav>
        </div>
      )}

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-4 pt-16 pb-28 text-center sm:pt-20">
        <SelectionFrame
          tone="tool"
          className="mb-8 rounded-lg bg-white/70 px-5 py-2.5 backdrop-blur-sm"
        >
          <span className="flex items-center gap-2 font-mono text-sm font-semibold text-ink">
            Shipped 15+
            <span className="rounded bg-brand px-1.5 py-0.5 text-[11px] font-bold text-white">
              OMD
            </span>
            products &amp; 6+ hackathon wins
          </span>
        </SelectionFrame>

        <h1 className="halftone-text font-heading text-[15vw] leading-[0.92] font-extrabold tracking-tight uppercase sm:text-[68px] md:text-[86px]">
          Software that
          <br />
          doesn&apos;t sleep.
        </h1>

        <div className="mt-8 flex flex-col items-center gap-3">
          <span className="font-mono text-xs font-bold tracking-wide text-brand uppercase">
            we build what scales ✦
          </span>
          <SelectionFrame
            tone="tool"
            className="max-w-lg rounded-lg bg-white/70 px-6 py-4 backdrop-blur-sm"
          >
            <p className="font-sans text-lg leading-snug text-ink-soft sm:text-xl">
              Most software you outgrow in a year. What we build scales with
              your business instead.
            </p>
          </SelectionFrame>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_-8px_rgba(240,83,28,0.6)] transition-transform hover:scale-[1.03]"
          >
            Book a call
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#work"
            className="rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-soft"
          >
            See the work
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1400px] items-end justify-between px-4 pb-8 font-mono text-[11px] font-bold tracking-wide text-ink-soft uppercase sm:px-6">
        <div className="leading-relaxed">
          working from indore
          <br />
          no office, on purpose
        </div>
        <div className="text-right leading-relaxed">
          open for 2026
          <br />
          your timezone, handled
        </div>
      </div>
    </section>
  );
}
