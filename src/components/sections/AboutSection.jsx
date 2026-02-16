'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Cpu, Globe, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background text-foreground overflow-hidden">

      {/* SECTION HEADER */}
      <div className="mb-20 max-w-4xl">
         <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest uppercase text-neutral-500 mb-4 block"
         >
            (02) — Who I Am
         </motion.span>
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold leading-[1.1]"
         >
            Crafting digital experiences with a focus on <span className="text-neutral-400">precision</span> & <span className="text-neutral-400">passion</span>.
         </motion.h2>
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD 1: MAIN BIO (Wide) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl relative overflow-hidden group"
        >
            <div className="relative z-10">
                <div className="w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <Globe size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Based in Bali, Indonesia</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                    I'm <strong>Ngakan Putu Satria Dewangga</strong>, a Front-End Developer currently studying at <strong>SMK TI Bali Global Denpasar</strong>.
                    I bridge the gap between design and engineering, ensuring every pixel serves a purpose.
                </p>
            </div>
            {/* Hover Decor */}
            <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
        </motion.div>

        {/* CARD 2: EDUCATION (Square) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl flex flex-col justify-between group hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
             <div>
                <div className="w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">Education</h3>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> SMK TI Bali Global
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div> Timedoor Academy
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div> Dicoding
                    </li>
                </ul>
             </div>
        </motion.div>

        {/* CARD 3: TECH STACK (Tall) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="md:row-span-2 bg-black text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
        >
            <div className="relative z-10">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-6">
                    <Code size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-6">Tech Stack</h3>

                <div className="space-y-6">
                    <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Languages</p>
                        <div className="flex flex-wrap gap-2">
                            {['JS (ES6+)', 'Python', 'C++', 'HTML/CSS'].map(t => (
                                <span key={t} className="px-3 py-1 bg-neutral-900 rounded-full text-xs font-mono border border-neutral-800">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Frameworks</p>
                        <div className="flex flex-wrap gap-2">
                             {['React', 'Next.js', 'Vite', 'Tailwind'].map(t => (
                                <span key={t} className="px-3 py-1 bg-neutral-900 rounded-full text-xs font-mono border border-neutral-800">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Tools</p>
                        <div className="flex flex-wrap gap-2">
                             {['Git', 'Figma', 'Supabase'].map(t => (
                                <span key={t} className="px-3 py-1 bg-neutral-900 rounded-full text-xs font-mono border border-neutral-800">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
        </motion.div>

        {/* CARD 4: EXPERIENCE / APPROACH (Wide) */}
        <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             viewport={{ once: true }}
             className="md:col-span-2 bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
             <div className="max-w-md">
                <div className="flex items-center gap-3 mb-4">
                     <div className="w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-sm">
                        <Cpu size={24} />
                     </div>
                     <h3 className="text-xl font-display font-bold">My Approach</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    I don't just write code; I build systems. My focus is on scalability, performance, and accessibility. I treat every project as a chance to solve a problem with elegance.
                </p>
             </div>
             <div>
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:scale-105 transition-transform">
                    Let's Collaborate <ArrowUpRight size={16} />
                </a>
             </div>
        </motion.div>

      </div>
    </section>
  );
}
