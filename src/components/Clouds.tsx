interface CloudSpec {
  top: string;
  left?: string;
  right?: string;
  scale?: number;
}

function Cloud({ top, left, right, scale = 1 }: CloudSpec) {
  return (
    <div
      className="pointer-events-none absolute"
      style={{ top, left, right, transform: `scale(${scale})` }}
      aria-hidden
    >
      <div className="relative h-[70px] w-[190px]">
        <span className="absolute inset-x-0 bottom-0 h-[46px] rounded-full bg-white/90 blur-[1px]" />
        <span className="absolute bottom-1 left-0 size-[52px] rounded-full bg-white/90 blur-[1px]" />
        <span className="absolute bottom-3 left-[38px] size-[44px] rounded-full bg-white/95 blur-[1px]" />
        <span className="absolute bottom-0 left-[80px] size-[62px] rounded-full bg-white blur-[1px]" />
        <span className="absolute bottom-2 left-[136px] size-[46px] rounded-full bg-white/90 blur-[1px]" />
        <span className="absolute right-0 bottom-0 size-[38px] rounded-full bg-white/85 blur-[1px]" />
      </div>
    </div>
  );
}

const DEFAULT_SPECS: CloudSpec[] = [
  { top: "4%", left: "2%", scale: 1.15 },
  { top: "10%", right: "4%", scale: 0.75 },
  { top: "34%", left: "68%", scale: 0.9 },
  { top: "48%", left: "6%", scale: 0.65 },
  { top: "66%", right: "10%", scale: 1.05 },
  { top: "84%", left: "30%", scale: 0.7 },
];

export function Clouds({ specs = DEFAULT_SPECS }: { specs?: CloudSpec[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {specs.map((s, i) => (
        <Cloud key={i} {...s} />
      ))}
    </div>
  );
}
