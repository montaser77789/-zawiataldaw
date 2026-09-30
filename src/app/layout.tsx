import type { Metadata } from "next";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-heading",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "زاوية الضوء | Zawiyat Al-Daw",
  description:
    "زاوية الضوء للحلول المتكاملة في الإنارة وأعمدة الإنارة والمشروعات الكهربائية",
  icons: {
    icon: "/favico.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${ibmArabic.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground font-[var(--font-body)]">
        <Header />

        <main className="pt-[76px] lg:pt-[132px]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
