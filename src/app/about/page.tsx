import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { FrameTag } from "@/components/FigmaChrome";

export const metadata: Metadata = {
  title: "About | OH MY DEV",
  description:
    "We didn't start OhhMyDev to become another software agency. We started it because we were already building.",
};

const BELIEFS = [
  {
    title: "Understand before we build",
    body: "The best technical solution means very little if it solves the wrong problem. We spend time understanding the product before deciding how to engineer it.",
  },
  {
    title: "Build fast, but build properly",
    body: "Speed matters. So does architecture. We find the balance between getting something into the hands of users quickly and building a foundation that won't collapse when the product grows.",
  },
  {
    title: "Communication is part of engineering",
    body: "You should never have to wonder what is happening with your product. We keep things clear, transparent and straightforward.",
  },
  {
    title: "Take ownership",
    body: "If we build it, we care about what happens after launch too. Bugs, improvements, scaling, new features and unexpected problems are part of building software.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="canvas-section py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FrameTag label="about.frame" className="mx-auto" />
          <h1 className="font-heading mt-4 text-[40px] leading-[1.05] font-extrabold tracking-tight text-ink uppercase sm:text-[56px]">
            About OhhMyDev
          </h1>
          <p className="mt-5 font-mono text-sm font-bold tracking-wide text-brand uppercase">
            We didn&apos;t start OhhMyDev to become another software agency.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl space-y-5 px-4 text-lg leading-relaxed text-ink-soft sm:px-6">
          <p>We started it because we were already building.</p>
          <p>
            Long before OhhMyDev had a name, we were the people who stayed up
            late turning ideas into prototypes, breaking things, fixing
            them, and figuring out how to make them work when the obvious
            solution wasn&apos;t enough.
          </p>
          <p>
            We built products for ourselves. We competed in hackathons. We
            worked with new technologies, tight deadlines, incomplete
            requirements and problems that didn&apos;t come with a
            ready-made solution.
          </p>
          <p>And somewhere along the way, people started coming to us with their own ideas.</p>
          <p>They didn&apos;t just need developers.</p>
          <p>
            They needed someone who could understand what they were trying
            to build, figure out the right way to build it, and actually
            take responsibility for getting it done.
          </p>
          <p className="text-xl font-bold text-ink">That became OhhMyDev.</p>
        </div>

        <div className="mx-auto mt-20 max-w-2xl px-4 sm:px-6">
          <p className="font-mono text-xs font-bold tracking-wide text-brand uppercase">
            01 · statement
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            From an idea to something real
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>Every product starts somewhere.</p>
            <p>
              Sometimes it&apos;s a business idea written on a notebook.
              Sometimes it&apos;s a problem someone has been trying to solve
              for years. Sometimes it&apos;s a prototype that works, but
              isn&apos;t ready for the real world.
            </p>
            <p>Our job is to take that starting point and turn it into something people can actually use.</p>
            <p>
              We work across product design, web and mobile development,
              AI, automation, cloud and modern software engineering to
              build products from the ground up.
            </p>
            <p>But technology is only part of it.</p>
            <p>
              The harder part is knowing what to build, what not to build,
              and how to make the right technical decisions along the way.
            </p>
            <p className="font-semibold text-ink">That&apos;s where we come in.</p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6">
          <p className="font-mono text-xs font-bold tracking-wide text-brand uppercase">
            02 · statement
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            We build like owners, not vendors.
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              When you work with OhhMyDev, we don&apos;t want to be the team
              that simply receives a specification, writes code and
              disappears.
            </p>
            <p>We want to understand the problem behind the product.</p>
            <p>
              We question assumptions. We think about the user. We care
              about performance, security, scalability and maintainability.
              And we stay involved from the first idea to the point where
              the product is actually being used.
            </p>
            <p>Because good software isn&apos;t defined by how much code was written.</p>
            <p className="font-semibold text-ink">It&apos;s defined by what that software makes possible.</p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
          <p className="font-mono text-xs font-bold tracking-wide text-brand uppercase">
            03 · statement
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            What we believe
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {BELIEFS.map((b) => (
              <div
                key={b.title}
                className="frame-shadow rounded-2xl border border-ink/10 bg-white p-6"
              >
                <h3 className="font-heading text-lg font-bold text-ink">
                  {b.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6">
          <p className="font-mono text-xs font-bold tracking-wide text-brand uppercase">
            04 · statement
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Why OhhMyDev?
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>Because we&apos;ve been on both sides of the table.</p>
            <p>We&apos;ve been the developers trying to make an ambitious idea work.</p>
            <p>We&apos;ve been the team working against a deadline.</p>
            <p>
              We&apos;ve been the people presenting a product we built from
              scratch and defending every technical decision behind it.
            </p>
            <p>That experience shapes how we work with our clients today.</p>
            <p className="font-semibold text-ink">
              You bring the problem, the idea or the ambition.
              <br />
              We bring the engineering.
              <br />
              Together, we turn it into something real.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-extrabold text-ink sm:text-4xl">
            Built by developers. Trusted with ideas.
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              OhhMyDev is still driven by the same curiosity that made us
              start building in the first place.
            </p>
            <p>
              The only difference now is that we&apos;re building alongside
              people who have something of their own they want to bring to
              the world.
            </p>
            <p className="font-semibold text-ink">And we&apos;re here to help them build it.</p>
          </div>

          <p className="font-heading mt-10 text-2xl font-extrabold text-brand">
            OhhMyDev
          </p>
          <p className="font-hand mt-2 text-xl text-ink-soft">
            Ideas are easy. Building them isn&apos;t. That&apos;s what
            we&apos;re here for.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_-8px_rgba(240,83,28,0.6)] transition-transform hover:scale-[1.03]"
          >
            Show us the idea
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
