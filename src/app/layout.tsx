import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  Space_Mono,
  Shantell_Sans,
} from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = Space_Mono({
  variable: "--font-mono-omd",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const hand = Shantell_Sans({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "OH MY DEV | Software Engineering Studio",
  description:
    "OH MY DEV is an independent software engineering studio building custom software, AI systems and automation infrastructure for modern businesses. Founded by Aditya Tiwari, based in Indore, India.",
  openGraph: {
    type: "website",
    siteName: "OH MY DEV",
    title: "OH MY DEV | Software Engineering Studio",
    description:
      "Building software that works for your business, even when you don't.",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${hand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
