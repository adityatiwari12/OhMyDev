"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Zap, Bot, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/content";
import type { ServiceItem } from "@/types/content";

function AutomationVisual() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-soft px-4 py-6">
      <div className="flex w-full items-center justify-between">
        <span className="flex flex-col items-center gap-1">
          <span className="flex size-8 items-center justify-center rounded-lg border border-ink/10 bg-white shadow-sm">
            <Zap className="size-4 text-ink-faint" />
          </span>
          <span className="font-mono text-[8px] font-bold text-ink-faint uppercase">
            trigger
          </span>
        </span>
        <span className="h-px flex-1 border-t border-dashed border-ink/25" />
        <span className="flex flex-col items-center gap-1">
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand shadow-md">
            <Bot className="size-5 text-white" />
          </span>
          <span className="font-mono text-[8px] font-bold text-brand uppercase">
            ai agent
          </span>
        </span>
        <span className="h-px flex-1 border-t border-dashed border-ink/25" />
        <span className="flex flex-col items-center gap-1">
          <span className="flex size-8 items-center justify-center rounded-lg border border-ink/10 bg-white shadow-sm">
            <CheckCircle2 className="size-4 text-emerald-500" />
          </span>
          <span className="font-mono text-[8px] font-bold text-ink-faint uppercase">
            done
          </span>
        </span>
      </div>
      <span className="font-mono text-[9px] text-ink-faint">
        3 workflows running · 24/7
      </span>
    </div>
  );
}

function CustomSoftwareVisual() {
  return (
    <div className="flex h-full flex-col gap-2.5 bg-white p-3.5">
      <div className="grid grid-cols-3 gap-2">
        {["Orders", "Stock", "Revenue"].map((label, i) => (
          <div
            key={label}
            className="rounded-md border border-ink/10 bg-soft px-2 py-1.5"
          >
            <p className="font-heading text-sm leading-none font-extrabold text-ink">
              {[128, 42, "9.4k"][i]}
            </p>
            <p className="mt-1 font-mono text-[7px] font-bold text-ink-faint uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1.5 rounded-md border border-ink/10 bg-soft px-3 py-2">
        {[40, 65, 35, 80, 55, 70, 45].map((h, i) => (
          <span
            key={i}
            className="w-full rounded-sm bg-brand/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function WebAppVisual() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center gap-1.5 border-b border-ink/10 px-3 py-2">
        <span className="size-2 rounded-full bg-brand" />
        <span className="h-1.5 flex-1 rounded-full bg-soft" />
        <span className="h-1.5 w-6 rounded-full bg-soft" />
      </div>
      <div className="mx-3 mt-3 h-9 rounded-md bg-gradient-to-r from-tool/20 to-brand/20" />
      <div className="grid grid-cols-2 gap-2 px-3 py-3">
        <div className="space-y-1.5 rounded-md border border-ink/10 p-2">
          <span className="block h-1.5 w-3/4 rounded-full bg-ink/15" />
          <span className="block h-1.5 w-1/2 rounded-full bg-ink/10" />
        </div>
        <div className="space-y-1.5 rounded-md border border-ink/10 p-2">
          <span className="block h-1.5 w-3/4 rounded-full bg-ink/15" />
          <span className="block h-1.5 w-1/2 rounded-full bg-ink/10" />
        </div>
      </div>
    </div>
  );
}

function MobileAppVisual() {
  return (
    <div className="flex h-full items-center justify-center bg-soft py-3">
      <div className="h-full w-[92px] overflow-hidden rounded-2xl border-4 border-ink bg-white shadow-md">
        <div className="flex items-center justify-between bg-ink px-2 py-1">
          <span className="h-1 w-6 rounded-full bg-white/40" />
          <span className="size-1.5 rounded-full bg-white/40" />
        </div>
        <div className="space-y-1.5 p-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-md border border-ink/10 p-1.5"
            >
              <span className="size-4 shrink-0 rounded-full bg-brand/70" />
              <span className="h-1.5 flex-1 rounded-full bg-ink/10" />
            </div>
          ))}
        </div>
        <div className="mt-auto flex justify-center gap-3 border-t border-ink/10 py-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`size-1.5 rounded-full ${i === 0 ? "bg-brand" : "bg-ink/15"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatbotVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 bg-soft px-3 py-4">
      <div className="flex justify-start">
        <span className="max-w-[80%] rounded-xl rounded-bl-sm bg-white px-2.5 py-1.5 text-[9px] leading-snug text-ink shadow-sm">
          Hey, what are your hours this week?
        </span>
      </div>
      <div className="flex justify-end">
        <span className="max-w-[80%] rounded-xl rounded-br-sm bg-brand px-2.5 py-1.5 text-[9px] leading-snug text-white shadow-sm">
          We&apos;re open 9–6 IST, every day 👋
        </span>
      </div>
      <div className="flex justify-start">
        <span className="flex items-center gap-1 rounded-xl rounded-bl-sm bg-white px-2.5 py-1.5 shadow-sm">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="size-1 animate-pulse rounded-full bg-ink-faint"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

function ApiIntegrationsVisual() {
  const nodes = [
    { label: "S", pos: "top-1 left-1/2 -translate-x-1/2", bg: "#635bff" },
    { label: "C", pos: "top-1/2 right-1 -translate-y-1/2", bg: "#d97757" },
    { label: "A", pos: "bottom-1 left-1/2 -translate-x-1/2", bg: "#ff9900" },
    { label: "W", pos: "top-1/2 left-1 -translate-y-1/2", bg: "#25d366" },
  ];
  return (
    <div className="relative flex h-full items-center justify-center bg-soft">
      <svg className="absolute inset-0 size-full" aria-hidden>
        <line x1="50%" y1="18%" x2="50%" y2="50%" stroke="#14202b22" strokeDasharray="3 3" />
        <line x1="82%" y1="50%" x2="50%" y2="50%" stroke="#14202b22" strokeDasharray="3 3" />
        <line x1="50%" y1="82%" x2="50%" y2="50%" stroke="#14202b22" strokeDasharray="3 3" />
        <line x1="18%" y1="50%" x2="50%" y2="50%" stroke="#14202b22" strokeDasharray="3 3" />
      </svg>
      <span className="z-10 flex size-9 items-center justify-center rounded-lg bg-ink font-mono text-[10px] font-bold text-white shadow-md">
        API
      </span>
      {nodes.map((n) => (
        <span
          key={n.label}
          className={`absolute ${n.pos} flex size-6 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-sm`}
          style={{ background: n.bg }}
        >
          {n.label}
        </span>
      ))}
    </div>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "ai-automation": AutomationVisual,
  "custom-software": CustomSoftwareVisual,
  "web-applications": WebAppVisual,
  "mobile-applications": MobileAppVisual,
  "ai-chatbots": ChatbotVisual,
  "api-integrations": ApiIntegrationsVisual,
};

function ServiceCard({ item }: { item: ServiceItem }) {
  const [open, setOpen] = useState(false);
  const Visual = VISUALS[item.slug] ?? CustomSoftwareVisual;
  return (
    <div className="w-[86vw] shrink-0 sm:w-[560px]">
      <p className="mb-3 font-mono text-xs font-bold tracking-wide text-brand">
        □ {item.index} {item.title.replace(/\s+/g, "-")}
      </p>
      <div className="frame-shadow max-h-[72vh] overflow-y-auto rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-soft font-mono text-xs font-bold text-ink-faint">
              {item.index}
            </span>
            <h3 className="font-heading mt-4 text-3xl leading-none font-extrabold text-ink">
              {item.title}
            </h3>
            <p className="font-heading text-3xl leading-none font-extrabold text-brand">
              {item.subtitle}
            </p>
            <p className="mt-3 max-w-xs text-sm text-ink-soft">
              {item.description}
            </p>
          </div>
          <div className="h-40 w-full max-w-[220px] overflow-hidden rounded-lg border border-ink/10 shadow-lg">
            <Visual />
          </div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/40 px-4 py-2 font-mono text-[11px] font-bold tracking-wide text-brand uppercase transition-colors hover:bg-brand/5"
        >
          see process + deliverables
          {open ? (
            <ChevronUp className="size-3.5" />
          ) : (
            <ChevronDown className="size-3.5" />
          )}
        </button>

        {open && (
          <div className="mt-6 grid gap-6 border-t border-ink/10 pt-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] font-bold tracking-wide text-ink-faint uppercase">
                the work
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.work}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] font-bold tracking-wide text-ink-faint uppercase">
                deliverables
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.deliverables.map((d) => (
                  <span
                    key={d}
                    className="rounded-md border border-ink/10 bg-soft px-2.5 py-1 text-xs font-semibold text-ink-soft"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ScrollPan() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState<number | null>(null);
  const [active, setActiveIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    // How much vertical scroll one card "costs" — decoupled from the card's
    // actual pixel width so panning always takes a deliberate amount of
    // scrolling, regardless of viewport size or card count.
    const SCROLL_PER_CARD_VH = 0.9;

    function scrollDistance() {
      return window.innerHeight * SCROLL_PER_CARD_VH * SERVICES.length;
    }

    function measure() {
      if (!mq.matches || !viewportRef.current || !trackRef.current) {
        setWrapperHeight(null);
        return;
      }
      setWrapperHeight(window.innerHeight + scrollDistance());
    }

    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!mq.matches || !wrapperRef.current || !trackRef.current || !viewportRef.current)
          return;
        const maxTranslate =
          trackRef.current.scrollWidth - viewportRef.current.clientWidth;
        if (maxTranslate <= 0) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        const progress = Math.min(
          Math.max(-rect.top / scrollDistance(), 0),
          1,
        );
        trackRef.current.style.transform = `translate3d(${-progress * maxTranslate}px,0,0)`;
        setActiveIndex(
          Math.min(
            SERVICES.length - 1,
            Math.round(progress * (SERVICES.length - 1)),
          ),
        );
      });
    }

    measure();
    onScroll();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", measure);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative hidden md:block"
      style={{ height: wrapperHeight ?? "100vh" }}
    >
      <div
        ref={viewportRef}
        className="sticky top-0 flex h-screen items-center overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex gap-6 px-4 will-change-transform sm:px-6 md:px-[calc((100vw-1400px)/2+24px)]"
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} item={s} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center gap-1.5">
        {SERVICES.map((s, i) => (
          <span
            key={s.slug}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-brand" : "w-1.5 bg-ink/15"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-sky bg-clouds relative py-24 md:py-0">
      <div className="mx-auto max-w-3xl px-4 pt-0 pb-12 text-center sm:px-6 md:pt-24">
        <h2 className="font-heading text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[48px]">
          What we make
        </h2>
        <p className="mt-3 text-ink-soft">
          Six services, one engineer. Keep scrolling — the cards pan
          themselves.
        </p>
      </div>

      <ScrollPan />

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 md:hidden">
        {SERVICES.map((s) => (
          <div key={s.slug} className="snap-center">
            <ServiceCard item={s} />
          </div>
        ))}
        <div className="w-px shrink-0" aria-hidden />
      </div>
    </section>
  );
}
