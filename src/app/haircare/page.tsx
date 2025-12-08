"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HaircarePage() {
  const hairImages = [
    "/gallery/hair-ratelist/hair1.jpeg",
    "/gallery/hair-ratelist/hair2.jpeg",
    "/gallery/hair-ratelist/hair3.jpeg",
    "/gallery/hair-ratelist/hair4.jpeg",
    "/gallery/hair-ratelist/hair5.jpeg",
    "/gallery/hair-ratelist/hair6.jpeg",
    "/gallery/hair-ratelist/hair7.jpeg",
    "/gallery/hair-ratelist/hair8.jpeg",
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* --- Heading --- */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl font-bold mb-12"
          >
            Hair Services
          </motion.h1>

          {/* --- Image Grid --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {hairImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition group"
              >
                <Image
                  src={src}
                  alt={`Hair service ${i + 1}`}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
