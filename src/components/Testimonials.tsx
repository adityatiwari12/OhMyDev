import { Star } from "lucide-react";
import { InitialAvatar } from "./icons";
import { TESTIMONIALS } from "@/data/content";

export function Testimonials() {
  return (
    <section className="bg-sky bg-clouds relative overflow-hidden py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="font-hand text-2xl text-brand">kind words</span>
        <h2 className="font-heading mt-2 text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[52px]">
          Loved by clients
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.id}
            className="frame-shadow reveal-up flex flex-col rounded-2xl border border-ink/10 bg-white p-6 md:[&:nth-child(2)]:-translate-y-4"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold tracking-wide text-ink-faint uppercase">
                {t.id}
              </span>
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-3.5 fill-brand" />
                ))}
              </div>
            </div>
            <p className="flex-1 text-[15px] leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <InitialAvatar
                name={t.name}
                className="size-9 text-sm"
                bg="var(--tool)"
              />
              <div>
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-ink-soft">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-md px-4 text-center text-xs text-ink-faint">
        Quotes drafted from real client relationships — pending final sign-off
        before publishing.
      </p>
    </section>
  );
}
