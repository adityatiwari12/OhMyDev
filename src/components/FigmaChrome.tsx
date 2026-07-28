import type { ReactNode } from "react";

const HANDLE_POS = [
  "-top-1 -left-1",
  "-top-1 -right-1",
  "-bottom-1 -left-1",
  "-bottom-1 -right-1",
];

export function SelectionFrame({
  children,
  className,
  tone = "tool",
}: {
  children: ReactNode;
  className?: string;
  tone?: "tool" | "brand";
}) {
  const ring = tone === "tool" ? "border-tool" : "border-brand";
  const handle = tone === "tool" ? "border-tool" : "border-brand";
  return (
    <div className={`relative border border-dashed ${ring} ${className ?? ""}`}>
      {HANDLE_POS.map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} size-2 rounded-[2px] border bg-white ${handle}`}
          aria-hidden
        />
      ))}
      {children}
    </div>
  );
}

export function FrameTag({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wide text-ink-soft ${className ?? ""}`}
    >
      <span className="size-1.5 rounded-[1px] border border-ink-soft" />
      {label}
    </span>
  );
}
