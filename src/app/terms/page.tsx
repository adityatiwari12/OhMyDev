import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | OH MY DEV",
  description:
    "The terms that apply when you engage OH MY DEV for a project, or use ohmydev.dev.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <LegalPage
        frame="terms.frame"
        title="Terms of Service"
        updated="25 August 2026"
        intro="OH MY DEV is an independent software engineering studio founded and operated by Aditya Tiwari, based in Indore, India. These terms cover this website and the general basis on which project work is engaged — the signed proposal or contract for a specific project always governs where it's more specific than this page."
        sections={[
          {
            heading: "Engagements",
            body: (
              <p>
                Projects are scoped and priced individually, usually as a
                fixed-scope, fixed-price engagement agreed in writing
                (email is sufficient) before work starts. Timelines given
                during scoping are estimates; a firm timeline is confirmed
                once requirements are locked.
              </p>
            ),
          },
          {
            heading: "Payment",
            body: (
              <p>
                Unless a project agreement states otherwise, work is billed
                in milestones: an upfront deposit to begin, with the
                remainder tied to agreed checkpoints or delivery. Late
                payment can pause active work until resolved.
              </p>
            ),
          },
          {
            heading: "Intellectual property",
            body: (
              <p>
                Ownership of the code and deliverables built specifically
                for your project transfers to you once payment is received
                in full. Pre-existing tools, internal libraries, and generic
                components we bring into a project remain ours, and are
                licensed to you for use within that project.
              </p>
            ),
          },
          {
            heading: "Client responsibilities",
            body: (
              <p>
                You&apos;re responsible for the accuracy of requirements,
                content and data you provide, for timely feedback during
                review cycles, and for keeping any third-party accounts,
                API keys or credentials you supply valid and in good
                standing.
              </p>
            ),
          },
          {
            heading: "Warranty & support",
            body: (
              <p>
                We fix bugs introduced by our own work at no charge for a
                reasonable period after delivery, as agreed per project.
                New features, scope changes, and ongoing maintenance beyond
                that window are billed separately — most clients move to an
                ongoing support arrangement after launch.
              </p>
            ),
          },
          {
            heading: "Limitation of liability",
            body: (
              <p>
                We build carefully and take ownership of what we ship, but
                OH MY DEV&apos;s liability for any claim relating to a
                project is limited to the fees paid for that project. We
                are not liable for indirect or consequential losses,
                including lost revenue or data, to the extent permitted by
                law.
              </p>
            ),
          },
          {
            heading: "Termination",
            body: (
              <p>
                Either party can end an engagement with written notice.
                You&apos;re billed for work completed up to that point;
                deliverables finished and paid for are yours to keep.
              </p>
            ),
          },
          {
            heading: "Governing law",
            body: (
              <p>
                These terms are governed by the laws of India, and any
                dispute falls under the jurisdiction of the courts in
                Indore, Madhya Pradesh.
              </p>
            ),
          },
          {
            heading: "Changes to these terms",
            body: (
              <p>
                We may update this page as the studio evolves. Changes
                apply to new engagements from the date posted here; active
                projects are governed by the terms agreed at their start.
              </p>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
