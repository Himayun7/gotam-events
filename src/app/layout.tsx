"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";

// 👇 Import Google Fonts using next/font
import { Playfair_Display, Lora } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html
      suppressHydrationWarning={true}
      className={`${playfair.variable} ${lora.variable} !scroll-smooth`}
      lang="en"
    >
      <head />
      <body className="font-sans">
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <ToasterContext />
              <Header />
              {children}
              {/* <Footer /> */}
              <ScrollToTop />
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
