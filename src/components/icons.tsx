export function Logomark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="var(--ink)" />
      <path
        d="M9 20.5c0-4.5 2.9-7.5 7-7.5s7 3 7 7.5-2.9 6-7 6-7-1.5-7-6Z"
        fill="var(--brand)"
      />
      <circle cx="13.2" cy="12.2" r="2" fill="#fff" />
      <circle cx="19" cy="12.6" r="1.6" fill="#fff" />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" />
      <path d="M7.2 9.8h3.1V18H7.2V9.8Zm1.55-4.97a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM12.6 9.8h2.97v1.12h.04c.41-.78 1.43-1.6 2.94-1.6 3.15 0 3.73 2.07 3.73 4.77V18h-3.1v-3.35c0-.8-.02-1.83-1.11-1.83-1.12 0-1.29.87-1.29 1.77V18h-3.1V9.8Z" />
    </svg>
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function InitialAvatar({
  name,
  className,
  bg = "var(--tool)",
}: {
  name: string;
  className?: string;
  bg?: string;
}) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full text-white font-heading font-bold ${className ?? ""}`}
      style={{ background: bg }}
      aria-hidden
    >
      {initial}
    </span>
  );
}
