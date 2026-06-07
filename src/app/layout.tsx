import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "PDX Pulse — Portland, Oregon Guide & Blog",
  description:
    "Discover Portland, Oregon — from food carts to forest trails, bridges to bookstores. Your guide to the Rose City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        <header className="bg-emerald-800 text-white shadow-lg">
          <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-3xl">🌹</span>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">PDX Pulse</h1>
                <p className="text-emerald-200 text-sm">Portland, Oregon Guide & Blog</p>
              </div>
            </Link>
            <nav className="hidden sm:flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-emerald-200 transition-colors">Home</Link>
              <Link href="/#posts" className="hover:text-emerald-200 transition-colors">Blog</Link>
              <Link href="/#about" className="hover:text-emerald-200 transition-colors">About</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-emerald-900 text-emerald-200 py-8 mt-12">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm">
            <p> 2026 PDX Pulse. All rights reserved.</p>
            <p className="mt-1 text-emerald-400">Keep Portland weird. Keep Portland wonderful.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
