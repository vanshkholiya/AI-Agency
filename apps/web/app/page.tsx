
 import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Solutions from "@/components/sections/Solutions";
import Industries from "@/components/sections/Industries";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

      <Hero />

      <Services />

      <Products />

      <Solutions />

      <Industries />

      <About />

      <Contact />
    </main>
  );
}