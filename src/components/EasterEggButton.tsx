"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const POKES = [
  "ok that tickled",
  "still here 🙂",
  "you have a lot of free time",
  "this really does nothing",
  "respect the persistence though",
  "okay, last one 😤",
];

export function EasterEggButton() {
  const [wiggle, setWiggle] = useState(false);
  const [count, setCount] = useState(0);

  function poke() {
    setCount((c) => c + 1);
    setWiggle(false);
    requestAnimationFrame(() => setWiggle(true));
  }

  return (
    <section className="bg-sky relative overflow-hidden py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-4 text-center sm:px-6">
        <h2 className="font-heading max-w-md text-2xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-3xl">
          This button does absolutely nothing
        </h2>
        <p className="text-ink-soft">
          Don&apos;t poke the little guy. It gets loud.
        </p>
        <button
          onClick={poke}
          onAnimationEnd={() => setWiggle(false)}
          className={`inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_-8px_rgba(240,83,28,0.6)] ${wiggle ? "animate-wiggle" : ""}`}
        >
          Poke it anyway
          <ChevronDown className="size-4" />
        </button>
        {count > 0 && (
          <p className="font-mono text-xs font-semibold text-ink-faint">
            {POKES[Math.min(count - 1, POKES.length - 1)]}
          </p>
        )}
      </div>
    </section>
  );
}
