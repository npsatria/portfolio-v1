'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      {/* --- DESKTOP & MOBILE HEADER --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-foreground/5' : 'bg-transparent'
        }`}
      >
        {/* LOGO (Name) */}
        <a href="#" className="font-display font-bold text-xl md:text-2xl tracking-tight z-50 mix-blend-difference text-foreground">
          Satria<span className="text-neutral-400">.Dev</span>
        </a>

        {/* DESKTOP NAV (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="hover:text-neutral-500 transition-colors">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* MOBILE TOGGLES */}
        <div className="flex items-center gap-4 md:hidden z-50">
           <button onClick={toggleTheme} className="mix-blend-difference text-foreground">
             {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
           </button>
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="mix-blend-difference text-foreground"
           >
             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
           </button>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU (Brutalist Overlay) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-foreground text-background flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="font-display font-black text-6xl tracking-tighter hover:text-neutral-500 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="absolute bottom-12 font-mono text-xs opacity-50">
               BALI, ID — EST. 2024
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
