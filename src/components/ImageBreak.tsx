export function ImageBreak() {
  return (
    <section className="canvas-section py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-3 sm:px-4 md:px-6">
        <div className="frame-shadow overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-ink/10 bg-ink">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-2.5 py-1.5 sm:px-4 sm:py-2.5">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="size-1.5 sm:size-2.5 rounded-full bg-red-400/70" />
              <span className="size-1.5 sm:size-2.5 rounded-full bg-yellow-400/70" />
              <span className="size-1.5 sm:size-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="font-mono text-[8px] sm:text-[10px] text-white/40 truncate px-2">
              app.oh-my-dev.io
            </span>
            <span className="w-6 sm:w-12" />
          </div>
          <video
            className="w-full bg-black aspect-video object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/a_Custom_Software_Buil.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
