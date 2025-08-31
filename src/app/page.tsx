// src/app/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, HomeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* soft glows */}
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-fuchsia-700/10" />
      <div aria-hidden className="absolute -bottom-40 right-10 h-[360px] w-[360px] rounded-full blur-3xl bg-pink-600/10" />

      {/* brand bar (left) — right side buttons come from TopActions globally */}
      <header className="relative z-10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Sana Sarah Salon"
              width={48}
              height={48}
              className="rounded-full ring-1 ring-white/20 object-cover bg-white"
            />
            <div className="leading-tight">
              <span className="block text-[10px] sm:text-xs tracking-widest text-white/60">
                WELCOME TO
              </span>
              <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
                Sana Sarah Salon
              </h1>
            </div>
          </div>

          {/* keep this minimal; TopActions already renders Back/Home/Agent */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition backdrop-blur-md"
            >
              <HomeIcon size={16} /> Home Page
            </Link>
            <Link
              href="#agent"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-pink-600 to-fuchsia-500 px-4 py-2 text-sm font-medium shadow-lg hover:brightness-110 transition"
            >
              <MessageCircle size={16} /> Talk to agent
            </Link>
          </div>
        </nav>
      </header>

      {/* content */}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[calc(100svh-120px)] flex flex-col items-center justify-center py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-3xl text-center"
            >
              <p className="text-xs sm:text-sm md:text-base tracking-widest text-white/70 uppercase">
                Welcome to
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                  Sana Sarah Salon
                </span>
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/70">
                Premium hair, beauty & bridal services. Experience luxury with expert stylists.
              </p>
            </motion.div>

            {/* city cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 w-full max-w-3xl"
            >
              <CityCard city="Karachi" href="/karachi" />
              <CityCard city="Hyderabad" href="/hyderabad" />
              <CityCard city="Lahore" href="/lahore" />
            </motion.div>

            {/* footer CTA */}
            <div className="mt-8 sm:mt-12 flex flex-col items-center gap-2" id="agent">
              <Link
                href="https://wa.me/92XXXXXXXXXX?text=Hi%20Sana%20Sarah%20Salon%2C%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-pink-500 px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition"
              >
                <MessageCircle className="transition group-hover:rotate-6" />
                Talk to Agent
              </Link>
              <p className="text-[11px] sm:text-xs text-white/70">Open 7 days • 11:00 AM – 8:00 PM</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/60">
          <p>© {new Date().getFullYear()} Sana Sarah Salon. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white/90 transition">Privacy</Link>
            <Link href="#" className="hover:text-white/90 transition">Terms</Link>
            <Link href="#" className="hover:text-white/90 transition">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CityCard({ city, href }: { city: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-md hover:shadow-[0_16px_60px_-20px_rgba(250,5,120,0.45)] transition"
    >
      <div className="pointer-events-none absolute -inset-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(236,72,153,0.08),rgba(168,85,247,0.08),transparent_70%)] blur-2xl opacity-0 group-hover:opacity-100 transition" />
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{city}</h3>
          <p className="mt-1 text-xs sm:text-sm text-white/60">Explore services & offers</p>
        </div>
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-pink-600/70 to-fuchsia-500/70 flex items-center justify-center text-lg sm:text-xl font-bold">
          →
        </div>
      </div>
    </Link>
  );
}
