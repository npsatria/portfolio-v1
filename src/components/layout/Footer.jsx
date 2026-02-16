'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">

      {/* 1. HUGE CALL TO ACTION */}
      <div className="w-full text-center space-y-8 z-10">
        <span className="font-mono text-xs tracking-widest uppercase text-neutral-500">Have an idea?</span>

        <motion.a
            href="mailto:contact@satriadewangga.com"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block text-[12vw] font-display font-black leading-none hover:text-neutral-400 transition-colors"
        >
            LET'S TALK
        </motion.a>
      </div>

      {/* 2. FOOTER INFO */}
      <div className="absolute bottom-12 w-full px-12 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-500 uppercase tracking-widest">
         <span>© 2024 Satria Dewangga</span>
         <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
         </div>
         <span className="mt-4 md:mt-0">Bali, ID</span>
      </div>

    </footer>
  );
}
