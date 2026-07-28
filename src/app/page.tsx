import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { ImageBreak } from "@/components/ImageBreak";
import { WhyOhMyDev } from "@/components/WhyOhMyDev";
import { Testimonials } from "@/components/Testimonials";
import { TimezoneBanner } from "@/components/TimezoneBanner";
import { Faq } from "@/components/Faq";
import { EasterEggButton } from "@/components/EasterEggButton";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Process />
        <Services />
        <SelectedWork />
        <ImageBreak />
        <WhyOhMyDev />
        <Testimonials />
        <TimezoneBanner />
        <Faq />
        <EasterEggButton />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
