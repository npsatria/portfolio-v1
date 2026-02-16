'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AuroraBackground({ children }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white dark:bg-black transition-colors duration-500">

      {/* AURORA BLOBS */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30 pointer-events-none">

        {/* Blob 1: Cyan/Blue */}
        <motion.div
            animate={{
                x: [0, 100, -50, 0],
                y: [0, -50, 50, 0],
                scale: [1, 1.2, 0.9, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-400/30 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        />

        {/* Blob 2: Violet/Purple */}
        <motion.div
            animate={{
                x: [0, -70, 30, 0],
                y: [0, 60, -40, 0],
                scale: [1, 1.1, 0.8, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-violet-400/30 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        />

        {/* Blob 3: Fuschia/Pink */}
        <motion.div
            animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 60, 0],
                scale: [1, 1.3, 0.9, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
            className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-fuchsia-400/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* NOISE OVERLAY (Texture) */}
      <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
