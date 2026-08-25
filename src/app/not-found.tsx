import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { FrameTag } from "@/components/FigmaChrome";

export default function NotFound() {
  return (
    <PageShell>
      <section className="canvas-section flex flex-col items-center px-4 py-28 text-center sm:px-6">
        <FrameTag label="404.frame" />
        <p className="font-heading halftone-text mt-6 text-[26vw] leading-none font-extrabold sm:text-[160px]">
          404
        </p>
        <h1 className="font-heading mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          This page didn&apos;t ship.
        </h1>
        <p className="mt-3 max-w-md text-ink-soft">
          Whatever you were looking for either moved or was never built here.
          Let&apos;s get you back to something real.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Back to home
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-soft"
          >
            Contact us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
