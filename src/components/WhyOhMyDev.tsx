import { Check, X } from "lucide-react";
import { COMPARISON } from "@/data/content";

export function WhyOhMyDev() {
  return (
    <section className="bg-sky bg-clouds relative overflow-hidden py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="font-hand text-2xl text-brand">why teams switch</span>
        <h2 className="font-heading mt-2 text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[52px]">
          Same brief.
          <br />
          Different studio.
        </h2>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-4xl gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-0">
        <div className="rounded-2xl bg-ink/[0.04] p-6 md:rounded-r-none md:p-8">
          <p className="mb-5 inline-block rounded bg-ink/10 px-2 py-1 font-mono text-[11px] font-bold tracking-wide text-ink-soft uppercase">
            typical agency
          </p>
          <ul className="space-y-4">
            {COMPARISON.map((row, i) => (
              <li key={i} className="flex items-start gap-3 text-ink-faint">
                <X className="mt-0.5 size-4 shrink-0 text-ink-faint" />
                <span className="text-sm sm:text-base">{row.them}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="frame-shadow relative rounded-2xl border border-tool/40 bg-white p-6 md:rounded-l-none md:border-l-0 md:p-8">
          <span className="absolute top-1/2 left-0 hidden size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink font-mono text-[11px] font-bold text-white md:flex">
            VS
          </span>
          <p className="mb-5 inline-block rounded bg-tool/10 px-2 py-1 font-mono text-[11px] font-bold tracking-wide text-tool uppercase">
            oh my dev · selected
          </p>
          <ul className="space-y-4">
            {COMPARISON.map((row, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Check className="size-3 text-brand" />
                </span>
                <span className="text-sm font-semibold text-ink sm:text-base">
                  {row.us}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-4 border-t border-ink/10 px-4 pt-6 sm:flex-row sm:px-6">
        <p className="text-center text-lg font-semibold text-ink sm:text-left">
          Same brief, same budget.{" "}
          <span className="text-brand">Wildly different outcome.</span>
        </p>
        <a
          href="#work"
          className="rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-soft"
        >
          see the work →
        </a>
      </div>
    </section>
  );
}
