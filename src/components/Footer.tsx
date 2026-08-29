"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useISTClock } from "@/hooks/use-ist-clock";

const COLUMNS = [
  {
    heading: "STUDIO",
    links: [
      { label: "About", href: "/about", external: false },
      { label: "Services", href: "/#services", external: false },
      { label: "Work", href: "/#work", external: false },
      { label: "FAQ", href: "/#faq", external: false },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "Contact", href: "/#contact", external: false },
      { label: "Privacy", href: "/privacy", external: false },
      { label: "Terms", href: "/terms", external: false },
    ],
  },
  {
    heading: "CONNECT",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/adityatiwari12",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/adityatiwari08",
        external: true,
      },
      {
        label: "Email",
        href: "mailto:tiwariaditya005@gmail.com",
        external: true,
      },
    ],
  },
];

export function Footer() {
  const clock = useISTClock();

  return (
    <footer className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl md:rounded-t-[2.5rem] bg-ink pt-8 sm:pt-10 md:pt-14 pb-4 sm:pb-5 md:pb-6 text-white">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6 md:px-10">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded bg-white/10 px-2 py-1 font-mono text-[8px] sm:text-[10px] font-bold tracking-wide text-white/60 uppercase">
            <span className="size-1 sm:size-1.5 rounded-[1px] border border-white/60" />
            footer.frame
          </span>
          <a
            href="#"
            aria-label="Back to top"
            className="flex size-8 sm:size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 flex-shrink-0"
          >
            <ArrowUp className="size-3.5 sm:size-4" />
          </a>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-[8px] sm:text-xs font-bold tracking-wide text-brand uppercase">
              have an idea worth building?
            </p>
            <a
              href="mailto:tiwariaditya005@gmail.com"
              className="font-heading group mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-5xl md:text-6xl font-extrabold break-all leading-tight"
            >
              hello@ohmydev.dev
              <ArrowUpRight className="size-6 sm:size-8 md:size-10 text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
            </a>
            <div className="mt-3 sm:mt-4 md:mt-6 flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
              <Link
                href="/#contact"
                className="rounded-full bg-brand px-4 py-2 text-xs sm:text-sm font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Show us the idea
              </Link>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 font-mono text-[8px] sm:text-xs font-bold text-white/60">
                <span className="size-1.5 sm:size-2 rounded-full bg-emerald-400" />
                available for projects
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3 md:gap-14">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="font-mono text-[8px] sm:text-[11px] font-bold tracking-wide text-white/40 uppercase">
                  {col.heading}
                </p>
                <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2.5">
                  {col.links.map((l) =>
                    l.external ? (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                          className="text-xs sm:text-sm font-semibold text-white/80 transition-colors hover:text-white"
                        >
                          {l.label}
                        </a>
                      </li>
                    ) : (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-xs sm:text-sm font-semibold text-white/80 transition-colors hover:text-white"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 overflow-hidden">
          <p className="font-heading -mx-1 text-[12vw] sm:text-[14vw] md:text-[16vw] leading-[0.82] font-bold tracking-tighter whitespace-nowrap md:text-[130px] lg:text-[170px]">
            <span className="text-brand">OH</span> MY DEV
          </p>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col items-center justify-between gap-2 sm:gap-3 border-t border-white/10 pt-4 sm:pt-6 font-mono text-[8px] sm:text-[10px] text-white/40">
          <span className="rounded bg-white/5 px-2 py-1">ohmydev.fig</span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5 text-center sm:text-left">
            <span className="size-1 sm:size-1.5 rounded-full bg-emerald-400" />
            <span>studio online · {clock?.time ?? "--:--"} IST</span>
          </span>
          <span className="text-center">
            © 2026 · built by Aditya Tiwari &amp;{" "}
            <a
              href="https://www.linkedin.com/in/aryan-singh-bhadoria-70086a28a/"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 underline decoration-white/20 underline-offset-2 hover:text-white"
            >
              Aryan Singh Bhadoria
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
