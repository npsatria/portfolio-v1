'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// DATA PROJECT (Showcase)
const projects = [
  {
    title: 'Lumina Fashion',
    category: 'E-Commerce',
    description: 'A high-performance fashion store featuring real-time inventory, 3D product previews, and seamless checkout flow involving Stripe integration.',
    tech: ['Next.js 14', 'TypeScript', 'Prisma', 'Stripe', 'Three.js'],
    link: '#',
    github: '#',
    image: 'bg-neutral-200',
  },
  {
    title: 'Nexus Dashboard',
    category: 'SaaS Platform',
    description: 'Comprehensive analytics platform for social media capability. Features interactive charts, automated reporting, and AI-driven insights.',
    tech: ['React', 'Python (FastAPI)', 'Tremor UI', 'PostgreSQL', 'Redis'],
    link: '#',
    github: '#',
    image: 'bg-neutral-300',
  },
  {
    title: 'Aether Lens',
    category: 'Visual Tool',
    description: 'Web-based image processing tool allowing photographers to apply batch presets and AI-upscaling directly in the browser.',
    tech: ['WebAssembly', 'React', 'WebGL', 'Tailwind CSS'],
    link: '#',
    github: '#',
    image: 'bg-neutral-400',
  },
  {
    title: 'Mono Portfolio',
    category: 'Personal Site',
    description: 'This very website. Built with a focus on Swiss Design principles, accessibility, and fluid micro-interactions.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind v4'],
    link: '#',
    github: '#',
    image: 'bg-neutral-500',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-background text-foreground">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="space-y-4">
          <h2 className="text-6xl md:text-8xl font-display font-bold leading-none tracking-tighter">
            SELECTED
            <br />
            <span className="text-neutral-400">WORKS</span>
          </h2>
        </div>

        <div className="max-w-xs text-sm font-sans text-neutral-600 pb-2 border-b border-black">
          <p>A collection of projects exploring interface design, interaction, and technical performance.</p>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>

    </section>
  );
}

// SUB-COMPONENT: Project Item (Swiss Style Card)
function ProjectItem({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col gap-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. IMAGE AREA (Minimalist Box) */}
      <div className={`aspect-[4/3] w-full overflow-hidden ${project.image} relative`}>
         {/* Overlay Overlay on Hover */}
         <div className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

         {/* Floating Action Button */}
         <div className={`absolute bottom-6 right-6 p-4 bg-white rounded-full shadow-xl transform transition-transform duration-500 ${isHovered ? 'scale-100' : 'scale-0'}`}>
            <ArrowUpRight size={24} className="text-black" />
         </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="space-y-3">
        {/* Title & Category */}
        <div className="flex justify-between items-start border-t border-neutral-300 pt-6">
           <h3 className="text-3xl font-display font-bold leading-none group-hover:text-neutral-500 transition-colors">
             {project.title}
           </h3>
           <span className="text-xs font-mono uppercase tracking-widest border border-neutral-200 px-2 py-1 rounded-full text-neutral-500">
             {project.category}
           </span>
        </div>

        {/* Description */}
        <p className="text-neutral-600 text-sm max-w-md font-sans leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t, i) => (
                <span key={i} className="text-xs text-neutral-400 font-sans">• {t}</span>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
