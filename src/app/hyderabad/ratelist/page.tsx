// app/hyderabad/ratelist/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import Image from "next/image";

// 🔧 Update with the real details
const CITY_INFO = {
  address: "Address: Plot No. B/1-54, ground floor, Railway Employees Housing Society, Main Auto Bhan Road, next to Bank Islamic & Haveli Restaurant ",
  phone: "Call us (Hyderabad Branch): 03700918026 022 3823358 , +92 340 2043923,",
};
const WHATSAPP_NUMBER = "+92 340 2043923"; // <- your WhatsApp number

export default function HyderabadRateList() {
  // Prefer .jpeg (common in your project), then .jpg, then .png
  const chain = useMemo(
    () => ["/ratelists/hyderabad/hyderabad.jpeg", "/ratelists/hyderabad.jpg", "/ratelists/hyderabad.png"],
    []
  );
  const src = chain[0];


  return (
    <div className="min-h-screen text-white">
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Hyderabad — Rate List</h1>
          <Link href="/hyderabad" className="text-sm text-white/70 hover:text-white underline underline-offset-4">
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-10">
        {/* 1) Rate list image */}
        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative w-full max-w-3xl mx-auto aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-white/5">
                      <Image
                        src={src}          // e.g. "/ratelists/karachi/johar.jpeg"
                       alt="Rate list — Hyderabad"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
        </motion.section>

        {/* 2) Address + 3) Phone */}
        <section className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5" />
              <div>
                <p className="text-sm text-white/60">Address</p>
                <p className="font-medium mt-0.5">{CITY_INFO.address}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5" />
              <div>
                <p className="text-sm text-white/60">Branch Number</p>
                <Link href={`tel:${CITY_INFO.phone}`} className="font-medium mt-0.5 underline underline-offset-4 hover:text-white">
                  {CITY_INFO.phone}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4) Talk to agent */}
        <section className="flex flex-col items-center gap-2">
          <Link
            href={`https://wa.me/${encodeURIComponent(WHATSAPP_NUMBER)}?text=${encodeURIComponent(
              "Hi Sana Sarah Salon, please assist me for the Hyderabad branch."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-pink-500 px-6 py-3 text-sm sm:text-base font-semibold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition"
          >
            <MessageCircle />
            Talk to Agent
          </Link>
          <p className="text-xs text-white/60">Open 7 days • 11:00 AM – 11:00 PM</p>
        </section>
      </main>
    </div>
  );
}
