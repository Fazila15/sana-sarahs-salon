// app/karachi/[branch]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ListChecks, Tag, MessageCircle, Image as ImageIcon } from "lucide-react";

const BRANCH_LABELS: Record<string, string> = {
  "johar": "Johar",
  "north-nazimabad": "North Nazimabad",
  "dha": "DHA",
  "tariq-road": "Tariq Road",
};

const WHATSAPP_NUMBER = "+92XXXXXXXXXX"; // replace with real number

export default function BranchOptions() {
  const { branch } = useParams<{ branch: string }>();
  const slug = branch.toLowerCase();
  const title = BRANCH_LABELS[slug] ?? "Branch";

  return (
    <div className="min-h-screen text-white">
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Karachi — {title}</h1>
          <Link href="/karachi" className="text-sm text-white/70 hover:text-white underline underline-offset-4">
            Change branch
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm tracking-widest text-white/60 uppercase">What are you looking for?</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{title} — Options</h2>
        </div>

        {/* Top 3 options as cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {/* 1) Rate List */}
          <Link
            href={`/karachi/${slug}/ratelist`}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] backdrop-blur transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Rate List</h3>
                <p className="text-white/60 text-sm mt-1">Services & pricing</p>
              </div>
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-pink-600/80 to-fuchsia-500/80 grid place-items-center">
                <ListChecks />
              </div>
            </div>
          </Link>

          {/* 2) Current Deals */}
          <Link
            href={`/karachi/${slug}/current-deals`}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] backdrop-blur transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Current Deals</h3>
                <p className="text-white/60 text-sm mt-1">Latest offers</p>
              </div>
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-pink-600/80 to-fuchsia-500/80 grid place-items-center">
                <Tag />
              </div>
            </div>
          </Link>

          {/* 3) Talk to Agent */}
          <Link
            href={`https://wa.me/${encodeURIComponent(WHATSAPP_NUMBER)}?text=${encodeURIComponent(
              `Hi Sana Sarah Salon, I need help for ${title} branch (Karachi).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-gradient-to-tr from-fuchsia-600 to-pink-500 p-6 hover:brightness-110 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Talk to Agent</h3>
                <p className="text-white/80 text-sm mt-1">WhatsApp now</p>
              </div>
              <div className="h-11 w-11 rounded-xl bg-white/15 grid place-items-center">
                <MessageCircle />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Catalogue line + button (not a card) */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="mt-2 text-3xl sm:text-4xl font-bold">
            Would you like to see pictures & makeup catalogue?
          </p>
          <Link
            href={`/karachi/${slug}/gallery`}
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            <ImageIcon size={16} />
            Open Catalogue
          </Link>
        </div>
      </main>
    </div>
  );
}
