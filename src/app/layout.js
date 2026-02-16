import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import CustomCursor from "@/components/ui/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portofolio Satria | Creative Developer",
  description: "Satria | Frontend Developer Portofolio",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning wajib ada jika pakai next-themes
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased font-sans bg-background text-foreground`}
      >
        {/* Cursor Custom */}
        <CustomCursor />

        {/* Bungkus children dengan Providers */}
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
