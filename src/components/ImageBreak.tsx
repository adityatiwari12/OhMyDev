export function ImageBreak() {
  return (
    <section className="canvas-section relative py-16 sm:py-24 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #87CEEB 0%, #E0F6FF 100%)" }}>
      {/* Decorative Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-32 bg-white rounded-full opacity-60 blur-3xl" />
        <div className="absolute top-1/2 right-32 w-48 h-40 bg-white rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-44 h-32 bg-white rounded-full opacity-40 blur-2xl" />
      </div>

      <div className="mx-auto max-w-3xl px-3 sm:px-4 md:px-6 relative z-10">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
            Shipped 15+
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-red-500 text-center mb-6 leading-tight">
          SOFTWARE THAT
          <br />
          DOESN'T SLEEP.
        </h2>

        {/* Description */}
        <p className="font-body text-base sm:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          From concept to deployed — we build production-grade software, automation & AI products for founders who move fast.
        </p>

        {/* Button */}
        <div className="text-center mb-16">
          <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 font-bold text-sm uppercase tracking-wider transition-all">
            EXPLORE WORK
          </button>
        </div>

        {/* Video */}
        <div className="overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-300 bg-black mb-12 shadow-lg">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-3 py-2 sm:px-4 sm:py-3">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="size-2 rounded-full bg-red-400" />
              <span className="size-2 rounded-full bg-yellow-400" />
              <span className="size-2 rounded-full bg-green-400" />
            </div>
            <span className="font-mono text-xs text-white/40">app.oh-my-dev.io</span>
            <span className="w-8" />
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
        <div className="text-center text-sm text-gray-700">
          Trusted by founders from <span className="font-semibold">FinTech, GovTech, Climate & AI</span>
        </div>
      </div>
    </section>
  );
}