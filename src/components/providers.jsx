'use client'; // Wajib ada di baris paling atas

import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

export default function Providers({ children }) {

  // Logic Mouse Spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Mengirim koordinat mouse ke CSS variable
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // Membungkus aplikasi dengan ThemeProvider (Dark/Light Mode)
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
