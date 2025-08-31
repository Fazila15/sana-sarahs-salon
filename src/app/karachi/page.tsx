// src/app/karachi/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, HomeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const branches = [
  { slug: "johar", label: "Johar" },
  { slug: "north-nazimabad", label: "North Nazimabad" },
  { slug: "dha", label: "DHA" },
  { slug: "tariq-road", label: "Tariq Road" },
];

export default function Karachi() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* glows */}
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-fuchsia-700/10" />
      <div aria-hidden className="absolute -bottom-40 right-10 h-[360px] w-[360px] rounded-full blur-3xl bg-pink-600/10" />

      {/* brand bar (same as home) */}
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
              <span className="block text-[10px] sm:text-xs tracking-widest text-white/60">WELCOME TO</span>
              <h1 className="text-lg sm:text-xl font-semibold tracking-wide">Sana Sarah Salon</h1>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition backdrop-blur-md">
              <HomeIcon size={16} /> Home Page
            </Link>
            <Link
             href="#agent" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-pink-600 to-fuchsia-500 px-4 py-2 text-sm font-medium shadow-lg hover:brightness-110 transition">
              <MessageCircle size={16} /> Talk to agent
            </Link>
          </div>
        </nav>
      </header>

      {/* page content */}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[calc(100svh-120px)] flex flex-col items-center justify-center py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-xs sm:text-sm tracking-widest text-white/70 uppercase">Kindly let us know</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">For which branch are you asking about?</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
            >
              {branches.map((b) => (
                <Link
                  key={b.slug}
                  href={`/karachi/${b.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] backdrop-blur transition"
                >
                  <div className="pointer-events-none absolute -inset-24 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(236,72,153,0.10),rgba(168,85,247,0.10),transparent_70%)] blur-2xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold">{b.label}</h3>
                      <p className="text-white/60 text-sm inline-flex items-center gap-1">
                        <MapPin size={14} /> Karachi
                      </p>
                    </div>
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-pink-600/80 to-fuchsia-500/80 flex items-center justify-center text-xl font-bold">
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>

            <div className="mt-10 flex flex-col items-center gap-2" id="agent">
              <Link
                href="https://wa.me/92XXXXXXXXXX?text=Hi%20Sana%20Sarah%20Salon%2C%20I%20want%20info%20for%20Karachi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-pink-500 px-6 py-3 text-sm sm:text-base font-semibold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition"
              >
                <MessageCircle />
                Talk to Agent
              </Link>
              <p className="text-xs text-white/60">Open 7 days • 11:00 AM – 8:00 PM</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
