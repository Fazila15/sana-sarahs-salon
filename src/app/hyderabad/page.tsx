// src/app/hyderabad/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ListChecks, Tag, HomeIcon } from "lucide-react";

const WHATSAPP = "+92XXXXXXXXXX";

export default function Hyderabad() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* glows */}
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-fuchsia-700/10" />
      <div aria-hidden className="absolute -bottom-40 right-10 h-[360px] w-[360px] rounded-full blur-3xl bg-pink-600/10" />

      {/* brand bar (same) */}
      <header className="relative z-10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          {/* Logo + Title */}
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

          {/* Desktop buttons */}
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

          {/* ✅ Mobile-only Home button */}
          <div className="sm:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10 transition"
            >
              <HomeIcon size={14} /> Home
            </Link>
          </div>
        </nav>
      </header>


      {/* content */}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[calc(100svh-120px)] flex flex-col items-center justify-center py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-center max-w-xl mx-auto"
            >
              <p className="text-xs sm:text-sm tracking-widest text-white/70 uppercase">Kindly let us know</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Hyderabad — What are you looking for?</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.04 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
            >
              <OptionCard href="/hyderabad/ratelist" title="Rate List" desc="See prices for Hyderabad" Icon={ListChecks} />
              <OptionCard href="/hyderabad/current-deals" title="Current Deals" desc="Latest offers & bundles" Icon={Tag} />
              <Link
                href={`https://wa.me/${encodeURIComponent(WHATSAPP)}?text=${encodeURIComponent(
                  "Hi Sana Sarah Salon, I need assistance for Hyderabad."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-fuchsia-600 to-pink-500 p-5 hover:brightness-110 transition"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-white/20 grid place-items-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Talk to Agent</h3>
                    <p className="text-white/90 text-sm">WhatsApp our team</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="mt-10 flex flex-col items-center gap-2" id="agent">
              <Link
                href={`https://wa.me/${encodeURIComponent(WHATSAPP)}?text=${encodeURIComponent(
                  "Hi Sana Sarah Salon, I need assistance for Hyderabad."
                )}`}
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

function OptionCard({
  href,
  title,
  desc,
  Icon,
}: {
  href: string;
  title: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number }>;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 hover:bg-white/[0.08] backdrop-blur transition"
    >
      <div className="pointer-events-none absolute -inset-24 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(236,72,153,0.10),rgba(168,85,247,0.10),transparent_70%)] blur-2xl opacity-0 group-hover:opacity-100 transition" />
      <div className="relative z-10 flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-pink-600/80 to-fuchsia-500/80 grid place-items-center">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-white/60 text-sm">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
