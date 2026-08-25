import { InitialAvatar } from "./icons";

interface Msg {
  step: string;
  label: string;
  author: "you" | "studio";
  day: string;
  text: string;
  attachment?: string;
  reaction?: string;
}

const MESSAGES: Msg[] = [
  {
    step: "01",
    label: "UNDERSTAND",
    author: "you",
    day: "10:02",
    text: "got a workflow that's eating our whole week 😅",
  },
  {
    step: "01",
    label: "UNDERSTAND",
    author: "studio",
    day: "10:03",
    text: "send it over — let's see what's actually happening in there",
  },
  {
    step: "02",
    label: "DESIGN",
    author: "you",
    day: "10:31",
    text: "here's how it runs today, probably overkill on detail",
    attachment: "current-workflow.pdf",
  },
  {
    step: "02",
    label: "DESIGN",
    author: "studio",
    day: "10:32",
    text: "never too much. mapping the architecture now",
  },
  {
    step: "03",
    label: "BUILD",
    author: "studio",
    day: "Day 2",
    text: "first working version's up 👀",
    attachment: "demo-v1.mp4",
  },
  {
    step: "03",
    label: "BUILD",
    author: "you",
    day: "Day 2",
    text: "this is exactly it. one tweak on the dashboard?",
    reaction: "🔥 2",
  },
  {
    step: "04",
    label: "LAUNCH",
    author: "studio",
    day: "Day 5",
    text: "shipped ✨ it's live in prod",
  },
  {
    step: "05",
    label: "IMPROVE",
    author: "studio",
    day: "Day 30",
    text: "usage looks solid — found 2 more things worth automating",
  },
];

function withDividers(messages: Msg[]) {
  let lastStep = "";
  return messages.map((m) => {
    const showDivider = m.step !== lastStep;
    lastStep = m.step;
    return { ...m, showDivider };
  });
}

export function Process() {
  const annotated = withDividers(MESSAGES);
  return (
    <section id="process" className="canvas-section py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="font-hand text-2xl text-brand">how it works</span>
        <h2 className="font-heading mt-2 text-[40px] leading-[0.98] font-bold tracking-tight text-ink uppercase sm:text-[56px] md:text-[68px]">
          No forms. No hoops. Just this.
        </h2>
        <span className="mt-6 inline-block -rotate-1 rounded-md bg-[#fdf3d3] px-4 py-2 text-sm font-semibold text-ink-soft shadow-sm">
          One thread, zero chaos. Here&apos;s how it goes.
        </span>
      </div>

      <div className="reveal-up mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
          <span className="font-mono text-sm font-bold text-ink">
            # oh-my-dev × your-brand
          </span>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              <InitialAvatar name="A" className="size-5 border-2 border-white text-[10px]" bg="var(--brand)" />
              <InitialAvatar name="You" className="size-5 border-2 border-white text-[10px]" bg="var(--tool)" />
            </div>
            <span className="flex items-center gap-1 font-mono text-[11px] font-semibold text-ink-soft">
              <span className="size-1.5 rounded-full bg-emerald-500" />2
              online
            </span>
          </div>
        </div>

        <div className="px-5 py-6 sm:max-h-[520px] sm:overflow-y-auto">
          {annotated.map((m, i) => {
            const { showDivider } = m;
            return (
              <div key={i}>
                {showDivider && (
                  <div className="my-5 flex items-center gap-3 first:mt-0">
                    <span className="h-px flex-1 bg-ink/10" />
                    <span className="font-mono text-[11px] font-bold tracking-wide text-brand uppercase">
                      {m.step} · {m.label}
                    </span>
                    <span className="h-px flex-1 bg-ink/10" />
                  </div>
                )}
                <div className="mb-4 flex gap-3">
                  <InitialAvatar
                    name={m.author === "you" ? "You" : "O"}
                    className="mt-0.5 size-8 shrink-0 text-sm"
                    bg={m.author === "you" ? "var(--tool)" : "var(--brand)"}
                  />
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-ink">
                        {m.author === "you" ? "You" : "OH MY DEV"}
                      </span>
                      <span className="font-mono text-[11px] text-ink-faint">
                        {m.day}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-ink-soft">{m.text}</p>
                    {m.attachment && (
                      <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-md border border-ink/10 bg-soft px-2.5 py-1 font-mono text-[11px] font-semibold text-ink-soft">
                        📎 {m.attachment}
                      </span>
                    )}
                    {m.reaction && (
                      <span className="mt-1.5 inline-flex w-fit rounded-full bg-soft px-2 py-0.5 text-xs">
                        {m.reaction}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
