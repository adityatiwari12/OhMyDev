"use client";

import { useISTClock } from "@/hooks/use-ist-clock";

export function TimezoneBanner() {
  const clock = useISTClock();
  const isDaylight = clock ? clock.hour24 >= 6 && clock.hour24 < 19 : true;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <h2 className="font-heading text-[32px] leading-none font-extrabold tracking-tight text-ink uppercase sm:text-[42px]">
          So are we.
        </h2>
        <p className="font-mono text-sm font-bold tracking-wide text-brand uppercase">
          {isDaylight ? "the sun's up in india" : "it's late in india, still building"}
        </p>
        <p className="max-w-md text-lg text-ink-soft">
          It&apos;s{" "}
          <span className="font-semibold text-ink tabular-nums">
            {clock?.time ?? "--:--"}
          </span>{" "}
          at the studio. Perfect light for building, so send it over.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_-8px_rgba(240,83,28,0.6)] transition-transform hover:scale-[1.03]"
          >
            Talk with us
          </a>
          <a
            href="#contact"
            className="text-sm font-bold text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-ink"
          >
            or book a call
          </a>
        </div>
      </div>
    </section>
  );
}
