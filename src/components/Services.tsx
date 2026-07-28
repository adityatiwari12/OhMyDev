"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Bot,
  CheckCircle2,
  Search,
  Bell,
  LayoutGrid,
  Users,
  Settings,
  Home,
  Send,
  Sparkles,
} from "lucide-react";
import { SERVICES } from "@/data/content";
import type { ServiceItem } from "@/types/content";
import { Clouds } from "./Clouds";

function ChromeBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-3.5 py-2.5">
      <span className="size-2.5 rounded-full bg-red-400/70" />
      <span className="size-2.5 rounded-full bg-yellow-400/70" />
      <span className="size-2.5 rounded-full bg-green-400/70" />
      <span className="ml-2 flex-1 truncate rounded-full bg-white/10 px-3 py-0.5 text-center font-mono text-[10px] text-white/50">
        {label}
      </span>
    </div>
  );
}

function Caption({ text }: { text: string }) {
  return (
    <div className="border-t border-white/10 bg-black/30 px-4 py-2 font-mono text-[10px] text-white/40">
      {text}
    </div>
  );
}

function AutomationVisual() {
  const steps = [
    { icon: Zap, label: "New lead" },
    { icon: Sparkles, label: "AI enrich" },
    { icon: Bot, label: "AI agent" },
    { icon: CheckCircle2, label: "CRM synced" },
  ];
  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-[#1a2230] to-[#0c1118]">
      <ChromeBar label="workflow.oh-my-dev.app" />
      <div
        className="relative flex flex-1 items-center justify-center px-6"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <div className="flex w-full max-w-md items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                <span
                  className={`flex size-12 items-center justify-center rounded-xl shadow-lg ${
                    i === 2
                      ? "bg-brand"
                      : "border border-white/10 bg-white/10 backdrop-blur"
                  }`}
                >
                  <s.icon
                    className={`size-5 ${i === 2 ? "text-white" : "text-white/70"}`}
                  />
                </span>
                <span className="font-mono text-[9px] font-semibold text-white/50 uppercase">
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span className="relative mx-2 h-px w-8 overflow-hidden bg-white/15 sm:w-10">
                  <span className="absolute inset-y-0 left-0 w-2 animate-[pulse-dot_1.8s_linear_infinite] bg-brand" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption text="3 workflows running · 24/7 · zero manual touch" />
    </div>
  );
}

function CustomSoftwareVisual() {
  const rows = [
    ["#4021", "Mysha Creation", "Shipped", "128"],
    ["#4020", "Surprizo", "In transit", "86"],
    ["#4019", "Onestore", "Processing", "204"],
  ];
  return (
    <div className="flex h-full flex-col bg-[#0e1520]">
      <ChromeBar label="app.oh-my-dev.io/dashboard" />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden w-11 flex-col items-center gap-4 border-r border-white/10 bg-black/20 py-4 sm:flex">
          {[Home, LayoutGrid, Users, Settings].map((Icon, i) => (
            <Icon
              key={i}
              className={`size-4 ${i === 1 ? "text-brand" : "text-white/30"}`}
            />
          ))}
        </div>
        <div className="flex-1 space-y-3 p-4">
          <div className="flex items-center justify-between">
            <span className="font-heading text-sm font-bold text-white">
              Orders
            </span>
            <Search className="size-3.5 text-white/30" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ["128", "Orders"],
              ["42", "Stock"],
              ["9.4k", "Revenue"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2"
              >
                <p className="font-heading text-base leading-none font-extrabold text-white">
                  {v}
                </p>
                <p className="mt-1 font-mono text-[8px] font-bold text-white/40 uppercase">
                  {l}
                </p>
              </div>
            ))}
          </div>
          <div className="flex h-16 items-end gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
            {[35, 55, 40, 70, 50, 85, 60, 45].map((h, i) => (
              <span
                key={i}
                className="w-full rounded-sm bg-brand/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="hidden overflow-hidden rounded-lg border border-white/10 sm:block">
            {rows.map((r, i) => (
              <div
                key={r[0]}
                className={`flex items-center justify-between px-3 py-1.5 text-[10px] text-white/60 ${i % 2 ? "bg-white/[0.03]" : ""}`}
              >
                <span className="font-mono text-white/40">{r[0]}</span>
                <span className="flex-1 truncate px-2 text-white/80">
                  {r[1]}
                </span>
                <span className="text-white/40">{r[2]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Caption text="internal ops dashboard · built around your workflow" />
    </div>
  );
}

function WebAppVisual() {
  return (
    <div className="flex h-full flex-col bg-white">
      <ChromeBar label="ohmydev.dev" />
      <div className="flex flex-1 flex-col bg-white">
        <div className="flex items-center justify-between border-b border-ink/10 px-4 py-2.5">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-brand" />
            <span className="font-heading text-[11px] font-extrabold text-ink">
              OH MY DEV
            </span>
          </span>
          <span className="hidden gap-3 sm:flex">
            {["Home", "Work", "Pricing"].map((l) => (
              <span key={l} className="font-mono text-[9px] text-ink-faint">
                {l}
              </span>
            ))}
          </span>
          <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[8px] font-bold text-white">
            Contact
          </span>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center gap-2.5 bg-gradient-to-b from-tool/10 to-brand/5 px-6 py-6 text-center">
          <span className="h-2 w-40 rounded-full bg-ink/15" />
          <span className="h-2 w-28 rounded-full bg-ink/10" />
          <span className="mt-2 rounded-full bg-brand px-4 py-1.5 font-mono text-[9px] font-bold text-white">
            Book a call
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 border-t border-ink/10 p-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1 rounded-md border border-ink/10 p-1.5">
              <span className="block h-6 rounded bg-soft" />
              <span className="block h-1 w-3/4 rounded-full bg-ink/10" />
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-ink/10 bg-soft px-4 py-2 font-mono text-[10px] text-ink-faint">
        production build · Next.js + Vercel
      </div>
    </div>
  );
}

function MobileAppVisual() {
  return (
    <div className="flex h-full items-center justify-center gap-6 bg-gradient-to-br from-[#eef4fb] to-[#dcebf7] py-4">
      <div className="flex h-[92%] w-[150px] flex-col overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-ink px-3 py-1.5">
          <span className="font-mono text-[7px] font-bold text-white/70">
            9:41
          </span>
          <span className="h-1.5 w-8 rounded-full bg-white/30" />
        </div>
        <div className="flex items-center justify-between px-3 pt-2.5">
          <span className="font-heading text-[11px] font-extrabold text-ink">
            Orders
          </span>
          <Bell className="size-3 text-ink-faint" />
        </div>
        <div className="mx-3 mt-2 rounded-lg bg-gradient-to-r from-brand to-brand-deep px-2.5 py-2">
          <p className="font-mono text-[7px] font-bold text-white/80 uppercase">
            This week
          </p>
          <p className="font-heading text-base leading-none font-extrabold text-white">
            ₹42,180
          </p>
        </div>
        <div className="mt-2 flex-1 space-y-1.5 px-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-md border border-ink/10 p-1.5"
            >
              <span className="size-4 shrink-0 rounded-full bg-tool/20" />
              <span className="h-1.5 flex-1 rounded-full bg-ink/10" />
              <span className="h-1.5 w-4 rounded-full bg-brand/50" />
            </div>
          ))}
        </div>
        <div className="flex justify-around border-t border-ink/10 py-2">
          {[Home, LayoutGrid, Users, Settings].map((Icon, i) => (
            <Icon
              key={i}
              className={`size-3 ${i === 0 ? "text-brand" : "text-ink-faint/50"}`}
            />
          ))}
        </div>
      </div>
      <div className="hidden flex-col gap-2 sm:flex">
        <span className="rounded-full border border-ink/10 bg-white px-3 py-1.5 font-mono text-[9px] font-semibold text-ink-soft shadow-sm">
          📱 iOS + Android
        </span>
        <span className="rounded-full border border-ink/10 bg-white px-3 py-1.5 font-mono text-[9px] font-semibold text-ink-soft shadow-sm">
          🔄 Real-time sync
        </span>
        <span className="rounded-full border border-ink/10 bg-white px-3 py-1.5 font-mono text-[9px] font-semibold text-ink-soft shadow-sm">
          📶 Works offline
        </span>
      </div>
    </div>
  );
}

function ChatbotVisual() {
  return (
    <div className="flex h-full flex-col bg-[#f3f6fb]">
      <div className="flex items-center gap-2.5 border-b border-ink/10 bg-white px-4 py-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-brand">
          <Bot className="size-4 text-white" />
        </span>
        <div>
          <p className="font-heading text-xs font-bold text-ink">
            OH MY DEV Assistant
          </p>
          <p className="flex items-center gap-1 font-mono text-[9px] text-emerald-600">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            online now
          </p>
        </div>
      </div>
      <div className="flex-1 space-y-2.5 overflow-hidden px-4 py-4">
        <div className="flex justify-start">
          <span className="max-w-[75%] rounded-xl rounded-bl-sm bg-white px-3 py-2 text-[11px] leading-snug text-ink shadow-sm">
            Hey! What are your hours this week?
          </span>
        </div>
        <div className="flex justify-end">
          <span className="max-w-[75%] rounded-xl rounded-br-sm bg-brand px-3 py-2 text-[11px] leading-snug text-white shadow-sm">
            We&apos;re open 9–6 IST, every day 👋 want to book a slot?
          </span>
        </div>
        <div className="flex justify-start">
          <span className="max-w-[75%] rounded-xl rounded-bl-sm bg-white px-3 py-2 text-[11px] leading-snug text-ink shadow-sm">
            Yes please, Thursday afternoon
          </span>
        </div>
        <div className="flex justify-start">
          <span className="flex items-center gap-1 rounded-xl rounded-bl-sm bg-white px-3 py-2 shadow-sm">
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
      <div className="flex items-center gap-2 border-t border-ink/10 bg-white px-3 py-2.5">
        <span className="flex-1 rounded-full bg-soft px-3 py-1.5 font-mono text-[10px] text-ink-faint">
          Type a message…
        </span>
        <span className="flex size-7 items-center justify-center rounded-full bg-brand">
          <Send className="size-3.5 text-white" />
        </span>
      </div>
    </div>
  );
}

function ApiIntegrationsVisual() {
  const nodes = [
    { label: "Stripe", pos: "top-3 left-1/2 -translate-x-1/2", bg: "#635bff" },
    { label: "Claude", pos: "top-1/4 right-4", bg: "#d97757" },
    { label: "AWS", pos: "bottom-1/4 right-4", bg: "#ff9900" },
    { label: "WhatsApp", pos: "bottom-3 left-1/2 -translate-x-1/2", bg: "#25d366" },
    { label: "Firebase", pos: "bottom-1/4 left-4", bg: "#ffca28" },
    { label: "Slack", pos: "top-1/4 left-4", bg: "#611f69" },
  ];
  return (
    <div className="relative flex h-full flex-col bg-gradient-to-br from-[#1a2230] to-[#0c1118]">
      <ChromeBar label="api.oh-my-dev.io/gateway" />
      <div
        className="relative flex-1"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <svg className="absolute inset-0 size-full" aria-hidden>
          {nodes.map((n, i) => (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={
                n.pos.includes("left-1/2")
                  ? "50%"
                  : n.pos.includes("right")
                    ? "78%"
                    : "22%"
              }
              y2={
                n.pos.includes("top-3")
                  ? "16%"
                  : n.pos.includes("bottom-3")
                    ? "84%"
                    : "50%"
              }
              stroke="rgba(255,255,255,0.15)"
              strokeDasharray="3 3"
            />
          ))}
        </svg>
        <span className="absolute top-1/2 left-1/2 z-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-brand font-mono text-[10px] font-bold text-white shadow-xl">
          OH MY
          <br />
          DEV
        </span>
        {nodes.map((n) => (
          <span
            key={n.label}
            className={`absolute ${n.pos} flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1.5 text-[9px] font-bold text-white shadow-lg backdrop-blur`}
          >
            <span
              className="size-2 rounded-full"
              style={{ background: n.bg }}
            />
            {n.label}
          </span>
        ))}
      </div>
      <Caption text="12 integrations connected · webhooks in sync" />
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
    <div className="w-[90vw] shrink-0 md:w-[min(86vw,1180px)]">
      <p className="mb-3 font-mono text-xs font-bold tracking-wide text-brand">
        □ {item.index} {item.title.replace(/\s+/g, "-")}
      </p>
      <div className="frame-shadow max-h-[78vh] overflow-y-auto rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-soft font-mono text-xs font-bold text-ink-faint">
              {item.index}
            </span>
            <h3 className="font-heading mt-5 text-4xl leading-[0.95] font-extrabold text-ink lg:text-5xl">
              {item.title}
            </h3>
            <p className="font-heading text-4xl leading-[0.95] font-extrabold text-brand lg:text-5xl">
              {item.subtitle}
            </p>
            <p className="mt-4 max-w-sm text-base text-ink-soft">
              {item.description}
            </p>

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
          </div>

          <div className="h-[300px] w-full overflow-hidden rounded-xl border border-ink/10 shadow-2xl lg:h-[360px]">
            <Visual />
          </div>
        </div>

        {open && (
          <div className="mt-8 grid gap-6 border-t border-ink/10 pt-6 sm:grid-cols-2">
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
          className="flex gap-10 px-4 will-change-transform sm:px-6 md:px-[calc((100vw-1180px)/2)]"
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
    <section id="services" className="bg-sky relative py-24 md:py-0">
      <div className="relative overflow-hidden">
        <Clouds specs={[{ top: "10%", left: "4%", scale: 0.9 }, { top: "55%", right: "6%", scale: 0.7 }]} />
        <div className="mx-auto max-w-3xl px-4 pt-0 pb-12 text-center sm:px-6 md:pt-24">
          <h2 className="font-heading text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[48px]">
            What we make
          </h2>
          <p className="mt-3 text-ink-soft">
            Six services, one engineer. Keep scrolling — the cards pan
            themselves.
          </p>
        </div>
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
