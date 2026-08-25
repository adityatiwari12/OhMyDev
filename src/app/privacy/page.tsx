import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | OH MY DEV",
  description:
    "How OH MY DEV collects, uses and protects information from visitors and clients.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <LegalPage
        frame="privacy.frame"
        title="Privacy Policy"
        updated="25 August 2026"
        intro="OH MY DEV is a solo-founder software engineering studio. This page explains, in plain language, what information we collect through this website and client work, and what we do with it."
        sections={[
          {
            heading: "Who this applies to",
            body: (
              <p>
                This policy covers ohmydev.dev and anyone who contacts us
                through it — visitors, prospective clients, and people who
                book a call or send an email. Separate written agreements
                with active clients (covering project data, credentials and
                deliverables) take precedence over this page where they
                overlap.
              </p>
            ),
          },
          {
            heading: "What we collect",
            body: (
              <>
                <p>We only collect what you give us directly:</p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    Your name, email address and any project details you
                    share when you email us or book a call.
                  </li>
                  <li>
                    Scheduling information (name, email, chosen time slot)
                    when you book through our Calendly link.
                  </li>
                </ul>
                <p>
                  This site does not run analytics, tracking pixels or
                  advertising cookies. The only third-party service embedded
                  here is Calendly&apos;s booking widget, which loads its own
                  script when you open it — see their privacy policy for how
                  they handle that data.
                </p>
              </>
            ),
          },
          {
            heading: "How we use it",
            body: (
              <ul className="list-disc space-y-1.5 pl-5">
                <li>To reply to your enquiry and scope potential work.</li>
                <li>To schedule and run calls you book with us.</li>
                <li>
                  To deliver, invoice and support a project once you become
                  a client.
                </li>
              </ul>
            ),
          },
          {
            heading: "What we don't do",
            body: (
              <p>
                We don&apos;t sell, rent or trade your information to
                anyone. We don&apos;t add you to marketing lists without
                asking first. We don&apos;t share client project details
                outside the team actually building the work, unless the law
                requires it.
              </p>
            ),
          },
          {
            heading: "Data retention",
            body: (
              <p>
                Enquiry emails and call notes are kept for as long as
                they&apos;re useful for follow-up, typically no more than a
                couple of years. Active client data is retained for the
                life of the engagement plus a reasonable support window,
                then deleted on request.
              </p>
            ),
          },
          {
            heading: "Your rights",
            body: (
              <p>
                You can ask what we hold about you, ask us to correct it, or
                ask us to delete it, at any time — just email us. We&apos;ll
                action reasonable requests within a few days.
              </p>
            ),
          },
          {
            heading: "Changes to this policy",
            body: (
              <p>
                If this policy changes, we&apos;ll update the date at the
                top of this page. Material changes will be reflected here
                before they take effect.
              </p>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
