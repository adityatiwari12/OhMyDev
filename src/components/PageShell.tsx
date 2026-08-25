import type { ReactNode } from "react";
import { SkyLayer } from "@/components/SkyLayer";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SkyLayer />
      <Header />
      <main className="relative z-2 flex-1 pt-[82px]">{children}</main>
      <Footer />
    </>
  );
}
