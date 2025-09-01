// src/app/lahore/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon, MessageCircle, ListChecks, Tag } from "lucide-react";
import { motion } from "framer-motion";
import MobileHome from "@/app/components/MobileHome";

const WHATSAPP = "+92XXXXXXXXXX";

export default function Lahore() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      <MobileHome />
      <header className="relative z-10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Sana Sarah Salon" width={48} height={48} className="rounded-full ring-1 ring-white/20 object-cover bg-white" />
            <div className="leading-tight">
              <span className="block text-[10px] sm:text-xs tracking-widest text-white/60">WELCOME TO</span>
              <h1 className="text-lg sm:text-xl font-semibold tracking-wide">Sana Sarah Salon</h1>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition backdrop-blur-md">
              <HomeIcon size={16} /> Home Page
            </Link>
            <Link href="#agent" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-pink-600 to-fuchsia-500 px-4 py-2 text-sm font-medium shadow-lg hover:brightness-110 transition">
              <MessageCircle size={16} /> Talk to agent
            </Link>
          </div>
        </nav>
      </header>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-xs sm:text-sm tracking-widest text-white/70 uppercase">Kindly let us know</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Lahore — What are you looking for?</h2>
      </motion.div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/lahore/ratelist" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 hover:bg-white/[0.08] backdrop-blur transition">
          <div className="relative z-10 flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-pink-600/80 to-fuchsia-500/80 grid place-items-center">
              <ListChecks size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Rate List</h3>
              <p className="text-white/60 text-sm">See prices for Lahore</p>
            </div>
          </div>
        </Link>

        <Link href="/lahore/current-deals" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 hover:bg-white/[0.08] backdrop-blur transition">
          <div className="relative z-10 flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-pink-600/80 to-fuchsia-500/80 grid place-items-center">
              <Tag size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Current Deals</h3>
              <p className="text-white/60 text-sm">Exclusive Lahore offers</p>
            </div>
          </div>
        </Link>

        <Link href={`https://api.whatsapp.com/send/?phone=03331702212&text&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-fuchsia-600 to-pink-500 p-5 hover:brightness-110 transition">
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
      </div>
    </div>
  );
}
