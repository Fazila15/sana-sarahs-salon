"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

// Only declare hooks at top-level
export default function LahoreCurrentDealsPage() {
  const bases = useMemo(() => Array.from({ length: 10 }, (_, i) => `/deals/lahore/${i + 1}`), []);

  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => { setActiveIdx(i); setOpen(true); };
  const closeLightbox = () => setOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen text-white">
      {/* ... header ... */}

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Lahore — 9 Deals</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
        >
          {bases.map((base, i) => (
            <div
              key={base}
              onClick={() => openLightbox(i)}
              className="cursor-pointer relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
            >
              <Image
                src={`${base}.jpeg`}
                alt={`Deal ${i + 1}`}
                width={400}
                height={500}
                className="object-contain w-full h-auto"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-black/40">
                <p className="text-sm">Deal #{i + 1}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {open && activeIdx !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative max-w-3xl w-full p-4">
                <button onClick={closeLightbox} className="absolute top-4 right-4 text-white">
                  <X size={24} />
                </button>
                <Image
                  src={`${bases[activeIdx]}.jpeg`}
                  alt={`Deal ${activeIdx + 1}`}
                  width={800}
                  height={1000}
                  className="object-contain w-full h-auto"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
