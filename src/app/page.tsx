import { Contact } from "@/components/Contactnew";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import SkillsDisplay from "@/components/skills-display";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#27273f] text-white">
      <Navbar />
      <Hero />
      <SkillsDisplay />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
