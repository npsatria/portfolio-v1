'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Komponen untuk satu kata
const Word = ({ children, progress, range }) => {
  // Opacity: 0.1 (Gelap) -> 1 (Terang)
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <span className="relative inline-block mr-1.5 lg:mr-2">
      <motion.span
        style={{ opacity }}
        // Tambahkan transition agar perubahan warna lebih halus (tidak kaget)
        transition={{ duration: 0.5 }}
        className="text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default function ScrollReveal({ text, className = "" }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    // --- PENGATURAN KECEPATAN (OFFSET) ---
    // Lama: ["start 0.9", "start 0.25"] (Jarak pendek = Cepat)
    // Baru: ["start 0.8", "start 0.05"] (Jarak jauh = Lambat)
    // Artinya: Mulai saat elemen masuk 80% layar, Selesai saat hampir keluar di atas (5%)
    offset: ["start 0.8", "start 0.05"]
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        // PERHITUNGAN TIMING ANIMASI
        // Kita hitung kapan setiap kata mulai muncul dan selesai muncul
        // berdasarkan urutannya (index 'i').
        const totalWords = words.length;
        const start = i / totalWords;       // Waktu mulai (0.0 sampai 1.0)
        const end = start + (1 / totalWords); // Waktu selesai

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
