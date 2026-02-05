import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ScrollToTopOnRoute from "@/components/ScrollTop";
import { siteMetadata } from "@/content";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col antialiased`}
        suppressHydrationWarning
      >
        <Script src="/scripts/smooth.js" strategy="afterInteractive" />;
        <ScrollToTopOnRoute />
        <Header />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 pt-20 pb-20 sm:px-8 lg:px-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
