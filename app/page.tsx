'use client';

import About from "@/components/ui/About";
import Contacts from "@/components/ui/Contacts";
import Experiences from "@/components/ui/Experiences";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import Projects from "@/components/ui/Projects";
import Technologies from "@/components/ui/Technologies";

export default function Home() {
  return (
    <main className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_80%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences />
        <Projects />
        <Contacts />
      </div>
    </main>
  );
}
