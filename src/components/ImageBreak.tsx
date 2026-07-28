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
              architecture.tsx — oh-my-dev
            </span>
            <span className="w-12" />
          </div>
          <pre className="overflow-x-auto px-6 py-8 font-mono text-[12px] leading-relaxed text-white/70 sm:text-sm">
            <code>{`export const stack = {
  frontend: ["Next.js", "React", "TypeScript"],
  backend: ["FastAPI", "Node.js", "PostgreSQL"],
  ai: ["Claude", "LangChain", "RAG"],
  infra: ["AWS", "Docker", "Vercel"],
};

// one engineer. zero handoffs. shipped in prod.
deploy(stack).then(() => console.log("done ✓"));`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
