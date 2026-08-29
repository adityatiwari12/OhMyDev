"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Bot,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SERVICES } from "@/data/content";
import type { ServiceItem } from "@/types/content";

function ChromeBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/20 px-2.5 py-2 sm:gap-2 sm:px-3.5 sm:py-2.5">
      <span className="size-2 sm:size-2.5 rounded-full bg-red-400/70" />
      <span className="size-2 sm:size-2.5 rounded-full bg-yellow-400/70" />
      <span className="size-2 sm:size-2.5 rounded-full bg-green-400/70" />
      <span className="ml-1.5 flex-1 truncate rounded-full bg-white/10 px-2 py-0.5 text-center font-mono text-[8px] sm:ml-2 sm:px-3 sm:text-[10px] text-white/50">
        {label}
      </span>
    </div>
  );
}

function Caption({ text }: { text: string }) {
  return (
    <div className="border-t border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[8px] text-white/40 sm:px-4 sm:py-2 sm:text-[10px]">
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
        className="relative flex flex-1 items-center justify-center px-3 sm:px-6"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <div className="flex w-full max-w-md items-center justify-between gap-1 sm:gap-2 md:gap-3">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center flex-1 min-w-0">
              <div className="flex flex-col items-center gap-1 sm:gap-2 w-full">
                <span
                  className={`flex size-9 sm:size-12 items-center justify-center rounded-lg sm:rounded-xl shadow-lg shrink-0 ${
                    i === 2
                      ? "bg-brand"
                      : "border border-white/10 bg-white/10 backdrop-blur"
                  }`}
                >
                  <s.icon
                    className={`size-4 sm:size-5 ${i === 2 ? "text-white" : "text-white/70"}`}
                  />
                </span>
                <span className="font-mono text-[7px] sm:text-[9px] font-semibold text-white/50 uppercase text-center leading-tight">
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span className="relative mx-0.5 sm:mx-2 h-px w-1 sm:w-8 overflow-hidden bg-white/15 flex-shrink-0">
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
  return (
    <div className="flex h-full flex-col bg-black">
      <ChromeBar label="Custom Software · Built to fit" />
      <video
        src="/a_Custom_Software_Buil.mp4"
        className="flex-1 object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <Caption text="built around your workflow · production ready" />
    </div>
  );
}

function WebAppVisual() {
  return (
    <div className="flex h-full flex-col bg-black">
      <ChromeBar label="ohmydev.dev" />
      <video
        src="https://mvpd8cafqolvswjj.public.blob.vercel-storage.com/services/web-applications.mp4"
        className="flex-1 object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <Caption text="production build · Next.js + Vercel" />
    </div>
  );
}

function MobileAppVisual() {
  return (
    <div className="flex h-full items-center justify-center bg-black">
      <video
        src="/WhatsApp Video 2026-08-26 at 1.59.01 PM.mp4"
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

function ChatbotVisual() {
  return (
    <div className="flex h-full flex-col bg-black">
      <ChromeBar label="chatbot.oh-my-dev.io" />
      <video
        src="/veo-3.1-audio-1080p_a_generate_a_video_AI_.mp4"
        className="flex-1 object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <Caption text="rag powered · business context aware · 24/7 available" />
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
        <span className="absolute top-1/2 left-1/2 z-10 flex size-10 sm:size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg sm:rounded-2xl bg-brand font-mono text-[8px] sm:text-[10px] font-bold text-white shadow-xl">
          OH MY
          <br />
          DEV
        </span>
        {nodes.map((n) => (
          <span
            key={n.label}
            className={`absolute ${n.pos} flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 sm:px-2.5 sm:py-1.5 text-[7px] sm:text-[9px] font-bold text-white shadow-lg backdrop-blur`}
          >
            <span
              className="size-1.5 sm:size-2 rounded-full"
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
    <div className="w-[90vw] shrink-0 sm:w-[85vw] md:w-[min(86vw,1180px)]">
      <p className="mb-2 font-mono text-[9px] sm:text-xs font-bold tracking-wide text-brand">
        □ {item.index} {item.title.replace(/\s+/g, "-")}
      </p>
      <div className="frame-shadow max-h-[75vh] overflow-y-auto rounded-xl sm:rounded-2xl border border-ink/10 bg-white p-4 sm:p-6 lg:p-10">
        <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex size-8 sm:size-10 items-center justify-center rounded-lg bg-soft font-mono text-[10px] sm:text-xs font-bold text-ink-faint">
              {item.index}
            </span>
            <h3 className="font-heading mt-3 sm:mt-5 text-2xl sm:text-4xl leading-[0.95] font-extrabold text-ink lg:text-5xl">
              {item.title}
            </h3>
            <p className="font-heading text-2xl sm:text-4xl leading-[0.95] font-extrabold text-brand lg:text-5xl">
              {item.subtitle}
            </p>
            <p className="mt-2 sm:mt-4 max-w-sm text-sm sm:text-base text-ink-soft">
              {item.description}
            </p>

            <button
              onClick={() => setOpen((v) => !v)}
              className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full border border-brand/40 px-3 py-1.5 font-mono text-[9px] sm:text-[11px] font-bold tracking-wide text-brand uppercase transition-colors hover:bg-brand/5"
            >
              see process + deliverables
              {open ? (
                <ChevronUp className="size-3 sm:size-3.5" />
              ) : (
                <ChevronDown className="size-3 sm:size-3.5" />
              )}
            </button>
          </div>

          <div className="h-[240px] sm:h-[300px] w-full overflow-hidden rounded-lg sm:rounded-xl border border-ink/10 shadow-2xl lg:h-[360px]">
            <Visual />
          </div>
        </div>

        {open && (
          <div className="mt-4 sm:mt-8 grid gap-4 sm:gap-6 border-t border-ink/10 pt-4 sm:pt-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[9px] sm:text-[11px] font-bold tracking-wide text-ink-faint uppercase">
                the work
              </p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-soft">
                {item.work}
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] sm:text-[11px] font-bold tracking-wide text-ink-faint uppercase">
                deliverables
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                {item.deliverables.map((d) => (
                  <span
                    key={d}
                    className="rounded border border-ink/10 bg-soft px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-ink-soft"
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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const index = Math.round(latest * (SERVICES.length - 1));
      setActive(Math.min(index, SERVICES.length - 1));
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-white">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 sm:gap-8 md:gap-10 px-3 sm:px-4 md:px-6 md:px-[calc((100vw-1180px)/2)]"
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} item={s} />
          ))}
        </motion.div>
      </div>

      <div className="h-[300vh] w-full" />

      <div className="pointer-events-none fixed bottom-10 left-1/2 -translate-x-1/2 flex justify-center gap-1 sm:gap-1.5 z-50">
        {SERVICES.map((s, i) => (
          <span
            key={s.slug}
            className={`h-1 sm:h-1.5 rounded-full transition-all ${
              i === active ? "w-4 sm:w-6 bg-brand" : "w-1 sm:w-1.5 bg-ink/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="canvas-section py-12 sm:py-16 md:py-0">
      <div className="mx-auto max-w-3xl px-3 pt-0 pb-6 sm:px-4 sm:pb-8 md:pt-24 md:pb-12 text-center md:pb-12">
        <h2 className="font-heading text-[28px] sm:text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase md:text-[48px]">
          What we make
        </h2>
        <p className="mt-2 sm:mt-3 text-sm text-ink-soft">
          Six services. Keep scrolling — the cards pan themselves.
        </p>
      </div>

      <ScrollPan />
    </section>
  );
}
