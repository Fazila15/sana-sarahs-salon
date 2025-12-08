"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SkincarePage() {
  const skincareImages = [
    "/gallery/skincare-ratelist/sk1.jpeg",
    "/gallery/skincare-ratelist/sk2.jpeg",
    "/gallery/skincare-ratelist/sk3.jpeg",
    "/gallery/skincare-ratelist/sk4.jpeg",
    "/gallery/skincare-ratelist/sk5.jpeg",
    "/gallery/skincare-ratelist/sk6.jpeg",
    "/gallery/skincare-ratelist/sk7.jpeg",
    "/gallery/skincare-ratelist/sk8.jpeg",
    "/gallery/skincare-ratelist/sk9.jpeg",
    "/gallery/skincare-ratelist/sk10.jpeg",
    "/gallery/skincare-ratelist/sk11.jpeg",
    "/gallery/skincare-ratelist/sk12.jpeg",
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
            Skincare Services
          </motion.h1>

          {/* --- Image Grid --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skincareImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition group"
              >
                <Image
                  src={src}
                  alt={`Skincare service ${i + 1}`}
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
