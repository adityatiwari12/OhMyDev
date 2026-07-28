"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useISTClock } from "@/hooks/use-ist-clock";

const COLUMNS = [
  {
    heading: "STUDIO",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    heading: "CONNECT",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/adityatiwari08" },
      { label: "Email", href: "mailto:tiwariaditya005@gmail.com" },
    ],
  },
];

export function Footer() {
  const clock = useISTClock();

  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-ink pt-14 pb-6 text-white">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded bg-white/10 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wide text-white/60 uppercase">
            <span className="size-1.5 rounded-[1px] border border-white/60" />
            footer.frame
          </span>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-xs font-bold tracking-wide text-brand uppercase">
              have an idea worth building?
            </p>
            <a
              href="mailto:tiwariaditya005@gmail.com"
              className="font-heading group mt-3 flex flex-wrap items-center gap-3 text-3xl font-extrabold break-all sm:text-5xl md:text-6xl"
            >
              hello@ohmydev.dev
              <ArrowUpRight className="size-8 text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-10" />
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Show us the idea
              </a>
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white/60">
                <span className="size-2 rounded-full bg-emerald-400" />
                available for projects
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 sm:gap-14">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="font-mono text-[11px] font-bold tracking-wide text-white/40 uppercase">
                  {col.heading}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm font-semibold text-white/80 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <p className="font-heading -mx-1 text-[16vw] leading-[0.82] font-bold tracking-tighter whitespace-nowrap sm:text-[130px] md:text-[170px]">
            <span className="text-brand">OH</span> MY DEV
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[11px] text-white/40 sm:flex-row">
          <span className="rounded bg-white/5 px-2 py-1">ohmydev.fig</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            studio online · {clock?.time ?? "--:--"} IST
          </span>
          <span>© 2026 · made by OH MY DEV, not a template</span>
        </div>
      </div>
    </footer>
  );
}
