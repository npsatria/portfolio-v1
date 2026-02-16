'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Karakter yang akan dipakai untuk animasi "noise"
const CHARS = ['.', ':', ';', '~', ',', '*', '+', '=', '-', '|'];

export default function AsciiLoader({ className = "" }) {
  const [grid, setGrid] = useState([]);

  // --- LOGIKA ANIMASI ---
  useEffect(() => {
    // 1. Buat grid awal (misal 4 baris x 8 kolom)
    const rows = 4;
    const cols = 8;

    // Fungsi untuk generate karakter acak
    const generateGrid = () => {
      const newGrid = [];
      for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            // Pilih karakter acak dari CHARS
            const char = CHARS[Math.floor(Math.random() * CHARS.length)];
            row += char + " "; // Tambah spasi agar tidak terlalu rapat
        }
        newGrid.push(row);
      }
      return newGrid;
    };

    // Set awal
    setGrid(generateGrid());

    // 2. Update grid setiap 100ms
    const interval = setInterval(() => {
      setGrid(generateGrid());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
        className={`font-mono text-sm leading-none text-neutral-500 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
      {/* Render setiap baris */}
      {grid.map((row, i) => (
        <div key={i} className="whitespace-pre">
            {row}
        </div>
      ))}
      <div className="mt-4 text-xs tracking-widest text-neutral-400">
        SYSTEM LOADING...
      </div>
    </motion.div>
  );
}
