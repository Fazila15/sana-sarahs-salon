// src/app/karachi/gallery/[category]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { GALLERY_VIDEOS } from "@/app/components/data/gallery";
import TopActions from "@/app/components/TopActions"; // ✅ navbar actions
import Link from "next/link";

const WHATSAPP = "+92XXXXXXXXXX";

export default function CategoryVideosPage() {
  const { category } = useParams<{ category: string }>();
  const cat = decodeURIComponent(category).toLowerCase();

  const list = GALLERY_VIDEOS[cat] || [];

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* ✅ top navbar actions */}
      <TopActions />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs sm:text-sm tracking-widest text-white/70 uppercase">
            Open Catalogue
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold capitalize">
            {cat.replace(/[-_]+/g, " ")}
          </h2>
          <p className="mt-2 text-white/60">
            Tap any video to play. (No downloads, inline playback only)
          </p>
        </motion.div>

        {list.length === 0 ? (
          <div className="mt-10 text-center text-white/70">
            No videos found for this category.
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {list.map((item, i) => (
              <article
                key={item.src}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] backdrop-blur transition"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <video
                    src={item.src}
                    playsInline
                    preload="metadata"
                    controls
                    className="h-full w-full object-cover"
                    controlsList="nodownload noplaybackrate"
                    disablePictureInPicture
                  />
                </div>

                {/* ✅ title under each card */}
                <div className="p-3 text-center">
                  <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
                  <p className="text-[11px] text-white/50 mt-0.5">
                    {i + 1} / {list.length}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        )}

        {/* ✅ Talk to Agent button bottom */}
        <div className="mt-10 flex justify-center">
          <Link
            href={`https://wa.me/${encodeURIComponent(
              WHATSAPP
            )}?text=${encodeURIComponent(
              `Hi Sana Sarah Salon, I’m viewing the ${cat} catalogue — can you assist?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-pink-500 px-6 py-3 text-sm sm:text-base font-semibold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition"
          >
            <MessageCircle />
            Talk to Agent
          </Link>
        </div>
      </section>
    </div>
  );
}
