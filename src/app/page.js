import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Footer from '@/components/layout/Footer';
import AuroraBackground from "@/components/ui/AuroraBackground";
import ScrollReveal from '@/components/ui/ScrollReveal';
import SatriaBot from "@/components/ui/SatriaBot";


export default function Home() {
  return (
    <AuroraBackground>
      <main className="relative z-10 w-full overflow-x-hidden selection:bg-orange-500/30">
             <Navbar />
             <HeroSection />
             <ProjectsSection />
             <AboutSection />
             <Footer />
          <SatriaBot />
      </main>
    </AuroraBackground>
  );
}
