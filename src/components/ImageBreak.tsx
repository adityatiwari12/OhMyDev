export function ImageBreak() {
  return (
    <section className="canvas-section py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="frame-shadow overflow-hidden rounded-2xl border border-ink/10 bg-ink">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/70" />
              <span className="size-2.5 rounded-full bg-yellow-400/70" />
              <span className="size-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="font-mono text-[11px] text-white/40">
              app.oh-my-dev.io/dashboard
            </span>
            <span className="w-12" />
          </div>
          <video
            className="w-full bg-black"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/a_Custom_Software_Buil.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
