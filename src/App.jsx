import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Benefits from "@/components/sections/Benefits";
import Packages from "@/components/sections/Packages";
import Process from "@/components/sections/Process";
import ContactCTA from "@/components/sections/ContactCTA";

export default function LandingElevaDev() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Benefits />
      <Packages />
      <Process />
      <ContactCTA />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
