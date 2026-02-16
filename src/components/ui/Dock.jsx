// src/components/ui/Dock.jsx
'use client';

import React from 'react'; // Pastikan import React
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const DISTANCE = 140;

export default function Dock({ children, className }) {
  const mouseX = useMotionValue(Infinity);

  // PENTING: React.Children.toArray() memecah array navItems menjadi elemen terpisah
  const childrenArray = React.Children.toArray(children);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-950/80 border border-white/10 px-4 pb-3 backdrop-blur-xl shadow-2xl ${className}`}
    >
      {/* Loop menggunakan array yang sudah di-flatten/dipecah */}
      {childrenArray.map((child, i) => (
        <DockIcon key={i} mouseX={mouseX}>
          {child}
        </DockIcon>
      ))}
    </motion.div>
  );
}

// --- FUNGSI MASING-MASING ICON ---
function DockIcon({ mouseX, children }) {
  const ref = useRef(null);

  // 1. HITUNG JARAK MOUSE
  const distance = useTransform(mouseX, (val) => {
    // Ambil posisi elemen icon di layar
    // Gunakan if/else biasa agar mudah dimengerti (pengganti ??)
    let bounds = { x: 0, width: 0 };
    if (ref.current) {
        bounds = ref.current.getBoundingClientRect();
    }

    // Hitung jarak mouse ke tengah elemen ini
    return val - bounds.x - (bounds.width / 2);
  });

  // 2. TENTUKAN LEBAR ICON
  // Jika mouse dekat (jarak 0), lebar jadi 80px.
  // Jika jauh (-140 atau 140), lebar standar 45px.
  const widthSync = useTransform(distance, [-DISTANCE, 0, DISTANCE], [45, 80, 45]);

  // 3. TAMBAHKAN EFEK MEMBAL (SPRING)
  const width = useSpring(widthSync, {
    mass: 0.1,      // Berat benda (makin kecil makin ringan)
    stiffness: 150, // Kekakuan per (makin tinggi makin kaku)
    damping: 12,    // Redaman (biar tidak goyang terus)
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-12 cursor-pointer rounded-full flex items-center justify-center bg-gray-900/50 border border-white/5 hover:bg-indigo-600 hover:border-indigo-400 transition-colors duration-200 group relative"
    >
      <div className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200 flex items-center justify-center">
         {children}
      </div>
    </motion.div>
  );
}
