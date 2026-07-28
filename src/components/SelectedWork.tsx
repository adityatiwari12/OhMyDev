import { ArrowUpRight } from "lucide-react";
import { WORK_ITEMS } from "@/data/content";
import { Clouds } from "./Clouds";

export function SelectedWork() {
  return (
    <section id="work" className="bg-sky relative overflow-hidden py-24">
      <Clouds />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[48px]">
          Featured works
        </h2>
        <p className="mt-3 text-ink-soft">
          The good kind of name-drop. Hover to peek.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-4xl border-t border-ink/10 px-4 sm:px-6">
        {WORK_ITEMS.map((item) => {
          const Wrapper = item.href ? "a" : "div";
          return (
            <Wrapper
              key={item.index}
              {...(item.href
                ? { href: item.href, target: "_blank", rel: "noreferrer" }
                : {})}
              className="group flex items-center justify-between gap-4 border-b border-ink/10 py-6 transition-colors hover:bg-white/40 sm:py-8"
            >
              <div className="flex min-w-0 items-baseline gap-3 sm:gap-6">
                <span className="hidden font-mono text-sm font-bold text-ink-faint sm:inline">
                  {item.index}
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading truncate text-2xl font-extrabold text-ink transition-colors group-hover:text-brand sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 hidden max-w-md text-sm text-ink-soft sm:block">
                    {item.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-ink/10 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <span className="hidden font-mono text-sm text-ink-faint sm:inline">
                  {item.year}
                </span>
                <span className="flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Wrapper>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#work"
          className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-soft"
        >
          See more work →
        </a>
      </div>
    </section>
  );
}
