# Page Topology — OH MY DEV homepage (cloned from ohhmydesign.com)

Core creative concept of the source: the **entire site is styled as a live Figma canvas** — top ruler bar, floating selection-handle annotations, frame-name tags (`file.frame`), cursor-presence badges, "editing/locked" states, `.fig` file chips. This is the identity to preserve, reskinned with OH MY DEV facts.

## Design tokens (extracted via getComputedStyle / CSS custom properties)

```
--canvas: #AFD8F0   (sky background, gradient to lighter blue toward bottom of hero)
--frame:  #FFFFFF
--ink:      #14202B
--ink-soft: #4A6173
--ink-faint:#8AA6B8
--brand:      #F0531C (orange)
--brand-deep: #D2410E
--tool:  #0D99FF (blue — cursor/link accent)
--grid:  #EFEEE9
--line:  #14202b12
--line-2:#14202b22
--soft:  #F1F6FA
--sh: 0 20px 50px -32px rgba(20,19,16,.32)

--display: 'Bricolage Grotesque', sans-serif   (big headings: 700-800wt, uppercase, letter-spacing ~-2%)
--body:    'Hanken Grotesk', system-ui, sans-serif
--mono:    'Space Mono', ui-monospace, monospace  (tags/labels/frame-names, uppercase, small)
--hand:    'Shantell Sans', cursive              (script accent labels e.g. "how it works")
```

Footer is the one dark section: bg `--ink` (#14202B), text white/orange. Everything else sits on the `--canvas` sky gradient with cloud illustrations.

## Section order (top → bottom) + OH MY DEV content mapping

1. **Header chrome** — Figma ruler bar (px ticks, scroll-% pill), wordmark + mark icon, "available for projects" pill, pill nav (Home/About/Process/Services/Work/Contact — Pricing dropped), email chip, live IST clock, dual cursor tags ("You" + "Aditya").
2. **Hero** — floating annotation card "Worked with 15+ [badge] ...", giant halftone dot-pattern headline, dashed-border tagline card, CTA buttons (Book a call / See the work), corner labels (WORKING WORLDWIDE / OPEN FOR 2026).
3. **About ("What's up")** — STATEMENT.TXT label, big statement heading, bio paragraph, studio badge, METRICS (stats), CAPABILITIES pills, 3 floating showcase cards (product-mockup card, tool-stack card, single review card).
4. **Process ("No forms. No hoops. Just this.")** — script label "how it works", heading, sticky-note tagline, Discord-style `#PROJECT-CHANNEL` thread with 5 numbered steps as chat messages.
5. **Services ("What we make")** — sticky horizontal scroll-pan container, one card per service (OH MY DEV: 6 services vs source's 3 — same card anatomy: numbered chip, heading, subheading, browser-mockup visual, expandable deliverables list).
6. **Selected Work ("Featured works")** — row-list cards (not grid), index/title/tags/year/arrow-link, 6 OH MY DEV projects. "See more work" anchor (no /work route this round).
7. **Mid-page visual break** — CSS-generated technical visual (no stock photo), placeholder for a real product screenshot.
8. **Why OH MY DEV ("same brief. different studio.")** — two-column comparison (muted "typical agency" list w/ X icons vs. OH MY DEV list w/ check icons), center VS badge.
9. **Testimonials ("Loved by clients")** — 3 cards, real named clients (Yash Biyani/Mysha Creation, Sidhhant Chouhan/Surprizo, Yash Salvi/Inslit) — DRAFT quotes, need sign-off before launch.
10. **Timezone banner ("So are we.")** — India/IST framing, near-verbatim reuse.
11. ~~Pricing~~ — **omitted** per decision.
12. **FAQ ("The nosy section")** — accordion, 6 Q&As from brief, answers authored by builder.
13. **Joke button** — "This button does absolutely nothing" easter egg, kept.
14. **Contact section (new, inline)** — Name/Company/Email/Budget/Timeline/Description/Preferred contact, Book Discovery Call / Send Enquiry buttons. Styled to match (checked source `/contact` field styling — rounded input fields, `--soft` bg, `--line` borders).
15. **Footer** — dark `footer.frame`, huge outline-ish wordmark "OH MY DEV", 3 link columns, back-to-top, easter-egg copyright line.

## Interaction models

- **Scroll-driven:** header ruler scroll-% fill, section reveal-on-scroll (fade+rise, IntersectionObserver), Services horizontal pan (sticky container translated by scroll progress within its own tall wrapper).
- **Click-driven:** nav links (smooth-scroll to anchor), Services "see deliverables" expand, FAQ accordion, joke button (wiggle + reveal), footer back-to-top.
- **Hover-driven:** work-list rows (image peek — skipped exact hover-preview asset since no real device mockups per project were available; using tag/arrow emphasis instead), card lifts, nav underline.
- **Time-driven:** live IST clock ticking every second; ambient "Aditya" cursor drifting.
- **Pointer-driven:** "You" cursor tag follows real mouse position (desktop only).

## Responsive

- Breakpoints: desktop ≥1024px (full multi-column, horizontal pan, ruler visible), tablet 768–1023px (ruler hidden, nav collapses to icon menu, comparison/pricing-style two-column stacks), mobile ≤639px (single column throughout, Services becomes vertical stack instead of horizontal pan, footer wordmark scales down via clamp()).
