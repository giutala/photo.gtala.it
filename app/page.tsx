"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Navigation scrolled={scrolled} />
      <Hero />
      <Portfolio />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}