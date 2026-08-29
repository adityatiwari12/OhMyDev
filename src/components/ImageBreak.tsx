export function ImageBreak() {
  return (
    <section className="canvas-section py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-3 sm:px-4 md:px-6">
        <div className="mb-6 sm:mb-8 md:mb-10 rounded-lg sm:rounded-xl md:rounded-2xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #60a5fa 0%, #3b82f6 50%, #1e40af 100%)",
            boxShadow: "inset 0 0 60px rgba(255,255,255,0.1), inset 0 -20px 40px rgba(0,0,0,0.1)"
          }}>
          {/* Cloud effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              style={{ transform: "translate(-30%, -30%)" }} />
            <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"
              style={{ transform: "translate(20%, -10%)" }} />
          </div>
          
          <div className="relative z-10">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 sm:mb-3">
              ohmydev
            </h2>
            <p className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wide text-white/90 uppercase">
              Shipped 15+ products & 6+ hackathon wins
            </p>
          </div>
        </div>
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
