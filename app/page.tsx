import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

import Developer from "@/components/Developer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <Hero />

      <About />

      <Founder />

      <Portfolio />

      <Testimonials />

      <Contact />

      <Developer />

    


    </main>
  );
}