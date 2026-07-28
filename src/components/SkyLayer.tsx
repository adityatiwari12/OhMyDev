/*
 * Page-wide atmosphere, rendered once at the root rather than per-section.
 *
 * Three fixed layers sit behind all content:
 *   z0  .sky    — drifting clouds over the body gradient
 *   z1  .grain  — fine film-grain noise, unifies everything above it
 *  (z2  sections themselves, all transparent)
 *
 * Doing this per-section was the mistake: each section painted its own
 * gradient, so seams showed at every boundary and nothing moved.
 */

interface CloudDef {
  /** vertical position within the viewport */
  top: string;
  /** rendered width in px; height follows the SVG aspect ratio */
  width: number;
  opacity: number;
  /** seconds for one full left-to-right pass */
  duration: number;
  /** negative delay so clouds start mid-flight instead of all at the edge */
  delay: number;
  variant: 0 | 1;
}

/*
 * Kept deliberately faint. These are atmosphere, not content — if a cloud
 * ever competes with the text sitting on top of it, it is too strong.
 */
const CLOUDS: CloudDef[] = [
  { top: "4%", width: 300, opacity: 0.5, duration: 70, delay: -8, variant: 0 },
  { top: "26%", width: 210, opacity: 0.3, duration: 96, delay: -52, variant: 1 },
  { top: "45%", width: 270, opacity: 0.4, duration: 60, delay: -30, variant: 0 },
  { top: "63%", width: 175, opacity: 0.26, duration: 110, delay: -74, variant: 1 },
  { top: "12%", width: 225, opacity: 0.34, duration: 80, delay: -46, variant: 0 },
  { top: "54%", width: 150, opacity: 0.24, duration: 124, delay: -18, variant: 1 },
  { top: "33%", width: 240, opacity: 0.26, duration: 88, delay: -22, variant: 0 },
  { top: "78%", width: 210, opacity: 0.22, duration: 116, delay: -60, variant: 1 },
  { top: "88%", width: 170, opacity: 0.24, duration: 100, delay: -12, variant: 0 },
];

/*
 * Each puff is filled with its own soft radial gradient rather than flat
 * white, and the whole shape is blurred slightly. A hard-edged white
 * silhouette reads as a paper cut-out pasted on the page; the gradient plus
 * blur is what makes it sit *in* the sky.
 */
function CloudShape({ variant, id }: { variant: 0 | 1; id: string }) {
  const grad = `cloud-grad-${id}`;
  const defs = (
    <defs>
      <radialGradient id={grad} cx="50%" cy="38%" r="62%">
        <stop offset="0%" stopColor="#fff" stopOpacity="1" />
        <stop offset="62%" stopColor="#fff" stopOpacity="0.92" />
        <stop offset="100%" stopColor="#eaf4fd" stopOpacity="0.72" />
      </radialGradient>
    </defs>
  );

  if (variant === 0) {
    return (
      <svg viewBox="0 0 340 170" className="w-full" aria-hidden>
        {defs}
        <g fill={`url(#${grad})`}>
          <ellipse cx="110" cy="112" rx="86" ry="46" />
          <ellipse cx="176" cy="84" rx="66" ry="56" />
          <ellipse cx="232" cy="110" rx="72" ry="42" />
          <ellipse cx="72" cy="124" rx="56" ry="32" />
          <ellipse cx="268" cy="126" rx="50" ry="28" />
          <rect x="60" y="118" width="216" height="34" rx="17" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 380 140" className="w-full" aria-hidden>
      {defs}
      <g fill={`url(#${grad})`}>
        <ellipse cx="128" cy="92" rx="76" ry="38" />
        <ellipse cx="190" cy="68" rx="58" ry="46" />
        <ellipse cx="252" cy="90" rx="66" ry="36" />
        <ellipse cx="86" cy="102" rx="46" ry="26" />
        <rect x="76" y="96" width="238" height="28" rx="14" />
      </g>
    </svg>
  );
}

export function SkyLayer() {
  return (
    <>
      <div className="sky-layer" aria-hidden>
        {CLOUDS.map((c, i) => (
          <span
            key={i}
            className="cloud"
            style={{
              top: c.top,
              width: c.width,
              opacity: c.opacity,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
            }}
          >
            <CloudShape variant={c.variant} id={String(i)} />
          </span>
        ))}
      </div>
      <div className="grain-layer" aria-hidden />
    </>
  );
}
