
 import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Service";
import Products from "@/components/sections/Products";
import Solutions from "@/components/sections/Solution";
import Industries from "@/components/sections/Industries";
import About from "@/components/sections/About";
import Contact from "@/components/sections/contacts";
import CaseStudies from "@/components/sections/CaseStudies";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Solutions />
      <Industries />
      <CaseStudies />
      <About />
      <Contact/>
      <Footer />
    </main>
  );
}