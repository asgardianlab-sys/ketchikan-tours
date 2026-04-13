import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ketchikan Expeditions | Best Ketchikan Tours",
  description: "We are a small, locally owned business that provides first class, private excursions in Southeast Alaska that are customized based on your own interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" strategy="lazyOnload" />
      </body>
    </html>
  );
}
