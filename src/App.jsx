import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyItWorks } from "@/components/sections/WhyItWorks";
import { Projects } from "@/components/sections/Projects";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { Guarantees } from "@/components/sections/Guarantees";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyItWorks />
        <Projects />
        <Packages />
        <Process />
        <Guarantees />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
