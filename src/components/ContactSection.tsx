import { CalendarDays, Mail, ArrowUpRight } from "lucide-react";
import { FrameTag } from "./FigmaChrome";
import { CalendlyButton } from "./CalendlyButton";
import { LinkedinIcon } from "./icons";

const cardClass =
  "group frame-shadow flex flex-col items-start gap-4 rounded-2xl border border-ink/10 bg-white p-6 text-left transition-transform hover:-translate-y-1";
const iconWrapClass =
  "flex size-11 items-center justify-center rounded-xl bg-soft text-ink transition-colors group-hover:bg-brand group-hover:text-white";

export function ContactSection() {
  return (
    <section id="contact" className="bg-sky bg-clouds relative overflow-hidden py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FrameTag label="contact.frame" className="mx-auto" />
        <h2 className="font-heading mt-4 text-[36px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[48px]">
          Let&apos;s build something meaningful.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Whether it&apos;s a website, AI automation, internal dashboard or a
          complete SaaS product — pick whichever&apos;s easiest for you.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 px-4 sm:px-6 md:grid-cols-3">
        <CalendlyButton className={cardClass}>
          <span className={iconWrapClass}>
            <CalendarDays className="size-5" />
          </span>
          <span>
            <span className="font-heading block text-lg font-bold text-ink">
              Book a call
            </span>
            <span className="mt-1 block text-sm text-ink-soft">
              30 min, pick a slot that works for you.
            </span>
          </span>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-brand">
            Open Calendly
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </CalendlyButton>

        <a
          href="mailto:tiwariaditya005@gmail.com"
          className={cardClass}
        >
          <span className={iconWrapClass}>
            <Mail className="size-5" />
          </span>
          <span>
            <span className="font-heading block text-lg font-bold text-ink">
              Email
            </span>
            <span className="mt-1 block text-sm break-all text-ink-soft">
              tiwariaditya005@gmail.com
            </span>
          </span>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-brand">
            Send an email
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/adityatiwari08"
          target="_blank"
          rel="noreferrer"
          className={cardClass}
        >
          <span className={iconWrapClass}>
            <LinkedinIcon className="size-5" />
          </span>
          <span>
            <span className="font-heading block text-lg font-bold text-ink">
              LinkedIn
            </span>
            <span className="mt-1 block text-sm text-ink-soft">
              @adityatiwari08
            </span>
          </span>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-brand">
            View profile
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
