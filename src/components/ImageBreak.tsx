export function ImageBreak() {
  return (
    <section className="canvas-section relative py-24 sm:py-32 md:py-40 overflow-hidden" style={{ background: "linear-gradient(180deg, #87CEEB 0%, #E0F6FF 100%)" }}>
      {/* Decorative Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-20 bg-white rounded-full opacity-70 blur-xl" />
        <div className="absolute top-1/3 right-20 w-40 h-24 bg-white rounded-full opacity-60 blur-2xl" />
        <div className="absolute bottom-20 left-1/4 w-36 h-20 bg-white rounded-full opacity-50 blur-xl" />
      </div>

      <div className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6 relative z-10">
        {/* Headline and Tagline */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block bg-red-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-red-600">
              Shipped 15+
            </span>
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl font-extrabold text-red-500 mb-6 sm:mb-8 leading-tight tracking-tight">
            SOFTWARE THAT
            <br />
            DOESN'T SLEEP.
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            From concept to deployed — we build production-grade software, automation & AI products for founders who move fast.
          </p>
        </div>

        {/* Subheading */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="font-mono text-xs sm:text-sm text-red-500 font-bold uppercase tracking-widest">
            We Build What Scales +
          </p>
        </div>

        {/* Description Box */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 mb-8 sm:mb-12 max-w-2xl mx-auto border border-white/60 shadow-lg">
          <p className="text-center text-gray-700 text-base sm:text-lg">
            Most software you outgrow in a year. What we build scales with your business instead.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          <button className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 sm:px-10 py-3 sm:py-4 font-bold text-sm sm:text-base rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
            Book a call
            <span>→</span>
          </button>
          <button className="inline-block text-gray-700 hover:text-red-500 px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base border-b-2 border-transparent hover:border-red-500 transition-all">
            See the work
          </button>
        </div>

        {/* Video */}
        <div className="frame-shadow overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-white/30 bg-black mb-8 sm:mb-12 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-2.5 py-1.5 sm:px-4 sm:py-2.5">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="size-1.5 sm:size-2.5 rounded-full bg-red-400" />
              <span className="size-1.5 sm:size-2.5 rounded-full bg-yellow-400" />
              <span className="size-1.5 sm:size-2.5 rounded-full bg-green-400" />
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

        {/* Bottom Text */}
        <div className="text-center space-y-2 text-xs sm:text-sm text-gray-700">
          <p className="font-bold uppercase tracking-widest">Working from Indore</p>
          <p>So Office, or Purpose</p>
        </div>
      </div>
    </section>
  );
}