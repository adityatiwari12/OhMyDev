import type { ReactNode } from "react";
import { FrameTag } from "./FigmaChrome";

export interface LegalSectionData {
  heading: string;
  body: ReactNode;
}

export function LegalPage({
  frame,
  title,
  updated,
  intro,
  sections,
}: {
  frame: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSectionData[];
}) {
  return (
    <section className="canvas-section py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FrameTag label={frame} />
        <h1 className="font-heading mt-4 text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[48px]">
          {title}
        </h1>
        <p className="mt-3 font-mono text-xs font-bold tracking-wide text-ink-faint uppercase">
          last updated {updated}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          {intro}
        </p>

        <div className="mt-14 space-y-10 border-t border-ink/10 pt-10">
          {sections.map((s, i) => (
            <div key={s.heading}>
              <h2 className="font-heading flex items-baseline gap-3 text-xl font-extrabold text-ink sm:text-2xl">
                <span className="font-mono text-sm font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </h2>
              <div className="mt-3 max-w-2xl space-y-3 text-[15px] leading-relaxed text-ink-soft">
                {s.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="font-heading text-lg font-bold text-ink">
            Questions about this?
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            Reach out directly — no forms, no support tickets.
          </p>
          <a
            href="mailto:tiwariaditya005@gmail.com"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
          >
            tiwariaditya005@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
