import type {
  ServiceItem,
  WorkItem,
  ComparisonRow,
  Testimonial,
  FaqItem,
} from "@/types/content";

export const SERVICES: ServiceItem[] = [
  {
    index: "01",
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "n8n. LangChain.",
    description:
      "Repetitive busywork, replaced with agents that just handle it.",
    work: "We wire AI into the parts of your business that run on habit, not judgment. Lead qualification, document processing, WhatsApp and email flows, internal assistants — the stuff nobody enjoys doing twice.",
    deliverables: [
      "AI agents",
      "Process automation",
      "Email automation",
      "CRM automation",
      "WhatsApp automation",
      "Document processing",
      "Lead qualification",
      "Internal AI assistants",
    ],
  },
  {
    index: "02",
    slug: "custom-software",
    title: "Custom Software",
    subtitle: "Built to fit.",
    description:
      "Inventory, ERP, CRM — software shaped around how you actually work.",
    work: "Off-the-shelf tools bend your workflow to fit them. We build the opposite: inventory systems, admin dashboards, booking platforms and internal tools engineered from your actual process, not a generic template.",
    deliverables: [
      "Inventory management",
      "ERP & CRM",
      "Admin dashboards",
      "Internal tools",
      "Booking platforms",
      "Healthcare systems",
      "Education platforms",
      "Business portals",
    ],
  },
  {
    index: "03",
    slug: "web-applications",
    title: "Web Applications",
    subtitle: "Next.js. FastAPI.",
    description:
      "Fast, modern web apps with auth, payments and analytics built in.",
    work: "Full-stack builds on React, Next.js, Node and FastAPI, backed by Postgres or Supabase. Authentication, payments, analytics and admin panels come standard, not bolted on at the end.",
    deliverables: [
      "React & Next.js",
      "Node & FastAPI",
      "PostgreSQL / Supabase",
      "Authentication",
      "Payments",
      "Analytics",
      "Admin panels",
      "API design",
    ],
  },
  {
    index: "04",
    slug: "mobile-applications",
    title: "Mobile Applications",
    subtitle: "React Native.",
    description:
      "Native-feeling apps for iOS and Android, offline and in sync.",
    work: "One React Native codebase, shipped to both stores, built to survive bad connectivity. Offline support, push notifications and real-time sync are the default, not an upgrade.",
    deliverables: [
      "React Native",
      "iOS & Android",
      "Offline support",
      "Push notifications",
      "Real-time sync",
      "App store deploy",
    ],
  },
  {
    index: "05",
    slug: "ai-chatbots",
    title: "AI Chatbots",
    subtitle: "RAG. LLMs.",
    description:
      "Chatbots that actually know your business, not just your FAQ page.",
    work: "RAG systems and LLM integrations trained on your own docs and data — for customer support, sales assistance, internal knowledge bases, or a chatbot on your site that gives real answers instead of a contact form.",
    deliverables: [
      "Website chatbots",
      "Customer support AI",
      "Knowledge base AI",
      "Sales assistants",
      "Internal company AI",
      "RAG systems",
    ],
  },
  {
    index: "06",
    slug: "api-integrations",
    title: "API Integrations",
    subtitle: "Stripe. Claude.",
    description:
      "Every tool you use, wired together and talking to each other.",
    work: "Stripe, Razorpay, Slack, WhatsApp, OpenAI, Claude, AWS, Firebase — if it has an API, we can connect it to the rest of your stack, or build the custom API your product needs.",
    deliverables: [
      "Stripe & Razorpay",
      "Slack & WhatsApp",
      "OpenAI & Claude",
      "AWS & Firebase",
      "Google APIs",
      "Custom APIs",
    ],
  },
];

export const WORK_ITEMS: WorkItem[] = [
  {
    index: "/01",
    title: "Tokenistt",
    description:
      "Enterprise AI financial ops platform to monitor usage and optimise LLM cost.",
    tags: ["FINTECH", "AI OPS"],
    year: "2026",
    href: "https://tokenistt.com",
  },
  {
    index: "/02",
    title: "Saarthi",
    description:
      "AI-powered emergency healthcare ecosystem linking homes, ambulances and hospitals.",
    tags: ["HEALTHTECH", "IOT"],
    year: "2026",
  },
  {
    index: "/03",
    title: "Astitava",
    description:
      "AI forest rights decision-support system built for the Ministry of Tribal Affairs.",
    tags: ["GOVTECH", "GIS"],
    year: "2025",
  },
  {
    index: "/04",
    title: "Dharohar",
    description:
      "Digital heritage preservation platform built for AWS AI For Bharat.",
    tags: ["AI", "HERITAGE"],
    year: "2025",
  },
  {
    index: "/05",
    title: "Onestore Mysha",
    description:
      "End-to-end fashion commerce platform with inventory, payments and admin dashboard.",
    tags: ["COMMERCE", "NEXT.JS"],
    year: "2025",
  },
  {
    index: "/06",
    title: "Surprizo",
    description:
      "Personalised gifting platform for managing products, customers and online orders.",
    tags: ["COMMERCE", "SAAS"],
    year: "2025",
  },
];

export const COMPARISON: ComparisonRow[] = [
  {
    them: "Pitched by a senior, built by whoever is free.",
    us: "You talk to the engineer actually writing the code.",
  },
  {
    them: "Booked out for weeks, then slow to deliver.",
    us: "First working build in days, not quarters.",
  },
  {
    them: "Fat monthly retainer, plus surprise invoices.",
    us: "Fixed scope, fixed price, zero surprises.",
  },
  {
    them: "Five calls and a deck before a single line of code.",
    us: "Fewer meetings. More shipping.",
  },
  {
    them: "Generic stack, safe choices, instantly forgettable.",
    us: "Production-grade, AI-first, built to scale.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-01",
    quote:
      "Aditya got the storefront right on the first real pass — inventory, payments, the admin panel, all of it just worked. Rare to hand off a brief and get back exactly what you pictured.",
    name: "Yash Biyani",
    role: "Founder, Mysha Creation",
  },
  {
    id: "review-02",
    quote:
      "What stood out was how little we had to manage. We'd explain what we needed and it showed up built properly, not half-done. Made the whole gifting platform feel like a real product, not a side project.",
    name: "Sidhhant Chouhan",
    role: "Co-Founder, Surprizo",
  },
  {
    id: "review-03",
    quote:
      "Direct access to the person actually building it changed everything. No relay through account managers — just fast, sharp decisions and a product that shipped on time.",
    name: "Yash Salvi",
    role: "Founder, Inslit",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    frame: "TIMELINE.FRAME",
    question: "How long does a project take?",
    answer:
      "Depends on scope — a focused MVP or automation usually lands in 2-4 weeks, a full platform with multiple modules runs 6-12 weeks. You get a real timeline after the first understand-and-design pass, not a guess upfront.",
  },
  {
    frame: "MVP.FRAME",
    question: "Do you build MVPs?",
    answer:
      "Yes, and it's most of what founders come to us for. Lean scope, production-grade code from day one, so the MVP doesn't become throwaway work once you raise or scale.",
  },
  {
    frame: "REWORK.FRAME",
    question: "Can you improve existing software?",
    answer:
      "Regularly. We audit the current codebase, flag what's fragile or slow, and ship improvements incrementally instead of a risky full rewrite — unless a rewrite is genuinely the faster path.",
  },
  {
    frame: "AUTOMATE.FRAME",
    question: "Can you automate our current workflow?",
    answer:
      "That's the AI Automation service. Walk us through how the workflow runs today and we'll map which parts can run themselves — usually more of it than people expect.",
  },
  {
    frame: "AI-INTEGRATION.FRAME",
    question: "Can you integrate AI into existing products?",
    answer:
      "Yes — RAG over your own data, LLM-powered features, chat interfaces, or automation layered onto software you already have. No need to rebuild the product to add AI to it.",
  },
  {
    frame: "MAINTENANCE.FRAME",
    question: "Do you provide long-term maintenance?",
    answer:
      "Yes. Most clients stay on for ongoing support, monitoring and iteration after launch — it's easier to keep improving something one engineer already understands deeply than to hand it to someone new.",
  },
];
