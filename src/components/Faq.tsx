"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/data/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="canvas-section py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[48px]">
          The nosy section
        </h2>
        <p className="mt-3 text-ink-soft">
          Everything you&apos;d grill us on a call, minus the call.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4 px-4 sm:px-6">
        {FAQ_ITEMS.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.frame}>
              <span className="ml-3 inline-block rounded-t-md bg-ink/10 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wide text-ink-soft uppercase">
                {item.frame}
              </span>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="frame-shadow flex w-full items-center justify-between gap-4 rounded-2xl bg-white/80 px-6 py-5 text-left backdrop-blur-sm transition-colors hover:bg-white"
                aria-expanded={open}
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-sm font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-lg font-bold text-ink sm:text-xl">
                    {item.question}
                  </span>
                </span>
                <Plus
                  className={`size-5 shrink-0 text-ink transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                />
              </button>
              <div
                className="grid overflow-hidden transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: open ? "1fr" : "0fr",
                  opacity: open ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pt-4 pb-2 text-sm leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
