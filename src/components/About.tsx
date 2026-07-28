import { Star } from "lucide-react";
import { FrameTag } from "./FigmaChrome";
import { InitialAvatar } from "./icons";
import { TESTIMONIALS } from "@/data/content";
import { Clouds } from "./Clouds";

const METRICS = [
  { value: "15+", label: "PRODUCTS SHIPPED" },
  { value: "6+", label: "HACKATHON WINS" },
  { value: "100K+", label: "LINES SHIPPED" },
];

const CAPABILITIES = [
  "AI Automation",
  "Web Apps",
  "Mobile Apps",
  "AI Chatbots",
  "APIs",
  "Cloud & DevOps",
];

export function About() {
  return (
    <section id="about" className="bg-sky relative overflow-hidden">
      <Clouds />
      <div className="relative mx-auto max-w-[1400px] px-4 pt-24 pb-10 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="reveal-up rounded-2xl border border-ink/10 bg-ink text-white shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-[10px] font-bold tracking-wide text-white/60 uppercase">
              <span>your brand</span>
              <span>hero.frame</span>
            </div>
            <div className="px-5 py-6">
              <p className="font-heading text-2xl leading-none font-bold">
                Ship
                <br />
                <span className="text-brand">faster.</span>
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="rounded bg-brand px-3 py-1.5 text-xs font-bold text-white">
                  View demo →
                </span>
                <span className="rounded bg-white/10 px-3 py-1.5 text-xs font-bold text-white/70">
                  OH MY DEV
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 font-mono text-[10px] font-bold text-white/50">
              <span>LIVE PRODUCT</span>
              <span className="rounded bg-tool px-1.5 py-0.5 text-white">
                1440 × 900
              </span>
            </div>
          </div>

          <div
            className="reveal-up rounded-2xl border border-ink/10 bg-white p-5 shadow-xl"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="font-mono text-[10px] font-bold tracking-wide text-ink-faint uppercase">
              ▶ currently building in
            </p>
            <p className="font-heading mt-1 text-xl font-bold text-ink">
              Next.js &amp; Claude
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js", "FastAPI", "Claude"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-ink/10 bg-soft px-2.5 py-1 text-xs font-semibold text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-end gap-1">
              {[6, 10, 14, 9, 16].map((h, i) => (
                <span
                  key={i}
                  className="w-2 rounded-sm bg-brand"
                  style={{ height: h }}
                />
              ))}
            </div>
          </div>

          <div
            className="reveal-up rounded-2xl border border-ink/10 bg-white p-5 shadow-xl"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-between">
              <FrameTag label="review" />
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-brand" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm leading-snug text-ink">
              &ldquo;{TESTIMONIALS[2].quote.split(".")[0]}.&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-2">
              <InitialAvatar
                name={TESTIMONIALS[2].name}
                className="size-6 text-[10px]"
                bg="var(--tool)"
              />
              <span className="font-mono text-[10px] font-bold tracking-wide text-ink-faint uppercase">
                {TESTIMONIALS[2].name} · {TESTIMONIALS[2].role.split(",")[0]}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 pt-16 pb-24 sm:px-6">
        <p className="font-mono text-xs font-bold tracking-wide text-brand uppercase">
          statement.txt
        </p>
        <h2 className="font-heading mt-3 max-w-4xl text-[40px] leading-[1.02] font-extrabold tracking-tight text-ink sm:text-[52px] md:text-[60px]">
          We make people ask, who wrote that code?
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            That reaction is the whole point. One engineer doing
            architecture, design and code for businesses that refuse to run
            on spreadsheets and guesswork. No templates, ever.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-ink px-4 py-2 font-mono text-[11px] font-bold tracking-wide text-white uppercase">
              oh my dev · indore, india
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 font-mono text-[11px] font-bold tracking-wide text-emerald-700 uppercase">
              available now
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.label}>
              <p className="font-heading text-4xl font-extrabold text-ink sm:text-5xl">
                {m.value}
              </p>
              <p className="mt-1 font-mono text-[11px] font-bold tracking-wide text-ink-faint uppercase">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {CAPABILITIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink-soft shadow-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
