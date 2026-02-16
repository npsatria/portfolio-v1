'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AsciiLoader from '@/components/ui/AsciiLoader';

// --- 3. KOMPONEN UTAMA ---
const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  // --- LOGIC PRELOADER / LOADING SCREEN ---
  useEffect(() => {
    // Hilangkan loading screen setelah 1.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // --- VARIABEL UNTUK KONTEN UI (Agar return bersih) ---

  // 1. Tampilan Preloader (Layar Putih Loading)
  const renderPreloader = (
    <AnimatePresence>
      {isLoading && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
           className="fixed inset-0 z-50 bg-neutral-900 text-white flex flex-col items-center justify-center p-8"
        >
          {/* Komponen Loading (Ascii Dots) */}
          <AsciiLoader className="text-white" />
        </motion.div>
      )}
    </AnimatePresence>
  );

  // 2. Konten Hero (Swiss Style / Brutalist)
  const heroContent = (
    <div className="relative min-h-screen w-full bg-background text-foreground flex flex-col justify-between px-6 py-12 md:px-12 md:py-20 overflow-hidden">

      {/* --- TOP BAR (Decorative) --- */}
      <div className="w-full flex justify-between items-start font-mono text-xs md:text-sm tracking-widest opacity-60">
        <span>EST. 2024</span>
        <span className="hidden md:block">BALI, ID</span>
        <span>AVAILABLE FOR WORK</span>
      </div>

      {/* --- MAIN TYPOGRAPHY --- */}
      <div className="flex flex-col z-10 mt-12 md:mt-0">
        {/* Baris 1: I AM */}
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
          className="text-[15vw] md:text-[8rem] lg:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter"
        >
          CREATIVE
        </motion.h1>

        {/* Baris 2: DEVELOPER (Indented) */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.7 }}
              className="text-[15vw] md:text-[8rem] lg:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter md:ml-24 text-neutral-900"
            >
              DEVELOPER
            </motion.h1>

            {/* Description Box (Desktop only right side) */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 2.2, duration: 1 }}
               className="hidden md:block max-w-xs mt-4 text-sm font-sans font-medium leading-relaxed text-neutral-600"
            >
              <p>
                Specializing in building exceptional digital experiences.
                Focusing on accessibility, performance, and interaction.
              </p>
            </motion.div>
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8 z-10">

        {/* Mobile Description */}
        <p className="md:hidden text-sm font-sans text-neutral-600 max-w-xs">
           Specializing in building exceptional digital experiences with a focus on interaction and performance.
        </p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex items-center gap-4"
        >
           <div className="h-[1px] w-12 bg-neutral-400"></div>
           <span className="font-mono text-xs tracking-wider">SCROLL TO EXPLORE</span>
        </motion.div>

        {/* Big Name Watermark (Optional Visual Element) */}
        <div className="absolute right-0 bottom-20 opacity-5 pointer-events-none">
           <h1 className="text-[12rem] font-display font-black leading-none text-neutral-900">SATRIA</h1>
        </div>
      </div>

      {/* Background Grid Pattern (Optional) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

    </div>
  );

  return (
    <>
      {renderPreloader}
      {!isLoading && heroContent}
    </>
  );
};

export default HeroSection;
