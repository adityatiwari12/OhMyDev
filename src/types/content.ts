export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessMessage {
  step: string;
  stepLabel: string;
  author: "you" | "studio";
  day: string;
  text: string;
  attachment?: string;
  reaction?: { emoji: string; count: number };
}

export interface ServiceItem {
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  work: string;
  deliverables: string[];
}

export interface WorkItem {
  index: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
}

export interface ComparisonRow {
  them: string;
  us: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  frame: string;
  question: string;
  answer: string;
}
