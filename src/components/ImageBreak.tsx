export function ImageBreak() {
  return (
    <section className="canvas-section py-16 sm:py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6">
        {/* Headline and Tagline */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-red-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded">
              Shipped 15+
            </span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-red-600 mb-4 sm:mb-6 leading-tight">
            SOFTWARE THAT
            <br />
            DOESN'T SLEEP.
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            From concept to deployed — we build production-grade software, automation & AI products for founders who move fast.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <button className="inline-block border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 sm:px-10 py-3 sm:py-4 font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200">
            EXPLORE WORK
          </button>
        </div>

        {/* Video */}
        <div className="frame-shadow overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-ink/10 bg-ink mb-8 sm:mb-12">
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

        {/* Trust Line */}
        <div className="text-center text-xs sm:text-sm text-ink/60">
          Trusted by founders from <span className="font-semibold text-ink">FinTech, GovTech, Climate & AI</span>
        </div>
      </div>
    </section>
  );
}