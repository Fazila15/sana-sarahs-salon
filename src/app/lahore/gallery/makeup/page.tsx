"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Category =
  | "signature-by-sana-sarah"
  | "signature-artist"
  | "senior-artist"
  | "expert-artist";

const CATEGORY_LABELS: Record<Category, string> = {
  "signature-by-sana-sarah": "Signature by Sana Sarah",
  "signature-artist": "Signature Artist",
  "senior-artist": "Senior Artist",
  "expert-artist": "Expert Artist",
};

// 💄 Lahore branch prices
const PRICE_MAP: Record<Category, { actual: string; discount?: string }> = {
  "signature-by-sana-sarah": { actual: "PKR 150,000" },
  "signature-artist": { actual: "PKR 100,000", discount: "PKR 50,000" },
  "senior-artist": { actual: "PKR 60,000", discount: "PKR 30,000" },
  "expert-artist": { actual: "PKR 50,000", discount: "PKR 25,000" },
};

export default function LahoreMakeupCatalogue() {
  const [tab, setTab] = useState<Category>("signature-by-sana-sarah");
  const [active, setActive] = useState<number | null>(null);
  const [priceModal, setPriceModal] = useState(false);

  const totalByTab: Record<Category, number> = {
    "signature-by-sana-sarah": 6,
    "signature-artist": 6,
    "senior-artist": 4,
    "expert-artist": 4,
  };

  const basePath = `/gallery/makeup/${tab}`;
  const total = totalByTab[tab];
  const files = useMemo(
    () => Array.from({ length: total }, (_, i) => `${basePath}/${i + 1}`),
    [basePath, total]
  );

  const priceData = PRICE_MAP[tab];

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex justify-between">
          <h1 className="text-lg font-semibold">Lahore — Makeup Catalogue</h1>
          <Link
            href="/lahore"
            className="text-sm text-white/70 hover:text-white underline underline-offset-4"
          >
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-xs text-white/60 uppercase tracking-widest">
            Sana Sarah’s Salon & Studio — Makeup Gallery
          </p>
          <h2 className="text-3xl font-bold">Catalogue</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`px-5 py-2 rounded-2xl text-sm font-medium transition ${
                tab === c
                  ? "bg-gradient-to-tr from-pink-600 to-fuchsia-500"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {CATEGORY_LABELS[c]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {files.map((file, i) => (
            <div
              key={file}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <MediaCard file={file} i={i} openLightbox={setActive} />
              <button
                onClick={() => setPriceModal(true)}
                className={`w-full mt-1 text-center py-2 rounded-b-2xl text-sm font-medium transition ${
                  tab === "signature-by-sana-sarah"
                    ? "bg-gradient-to-tr from-pink-600 to-fuchsia-500 hover:brightness-110"
                    : "bg-gradient-to-tr from-pink-600 to-fuchsia-500 animate-pulse hover:brightness-125"
                }`}
              >
                {tab === "signature-by-sana-sarah"
                  ? "View Price"
                  : "✨ 50% OFF ✨ View Price"}
              </button>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {active !== null && (
            <Lightbox
              files={files}
              index={active}
              onClose={() => setActive(null)}
            />
          )}
        </AnimatePresence>

        {/* Price Modal */}
        <AnimatePresence>
          {priceModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center max-w-sm">
                <p className="text-lg font-semibold mb-3">
                  💄 {CATEGORY_LABELS[tab]}
                </p>
                {tab === "signature-by-sana-sarah" ? (
                  <p className="text-base text-white/90 font-medium">
                    Price: {priceData.actual}
                  </p>
                ) : (
                  <>
                    <p className="text-sm text-white/70 mb-1">
                      <strong>Actual Price:</strong> {priceData.actual}
                    </p>
                    <p className="text-sm text-pink-400 font-semibold mb-3">
                      <strong>After 50% Off:</strong> {priceData.discount}
                    </p>
                  </>
                )}
                <button
                  onClick={() => setPriceModal(false)}
                  className="mt-3 inline-flex rounded-xl bg-gradient-to-tr from-pink-600 to-fuchsia-500 px-5 py-2 text-sm font-medium hover:brightness-110 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// --- Media Components ---
function MediaCard({
  file,
  i,
  openLightbox,
}: {
  file: string;
  i: number;
  openLightbox: (i: number) => void;
}) {
  const [extIdx, setExtIdx] = useState(0);
  const exts = [".mp4", ".mov", ".jpg", ".jpeg", ".png"];
  const src = file + exts[extIdx];
  const isVideo = [".mp4", ".mov"].includes(exts[extIdx]);

  return (
    <div onClick={() => openLightbox(i)} className="cursor-pointer">
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[300px] object-cover"
          onError={() =>
            setExtIdx((prev) => (prev < exts.length - 1 ? prev + 1 : prev))
          }
        />
      ) : (
        <Image
          src={src}
          alt={`Makeup ${i + 1}`}
          width={400}
          height={500}
          className="object-cover w-full h-[300px]"
          onError={() =>
            setExtIdx((prev) => (prev < exts.length - 1 ? prev + 1 : prev))
          }
        />
      )}
    </div>
  );
}

function Lightbox({
  files,
  index,
  onClose,
}: {
  files: string[];
  index: number;
  onClose: () => void;
}) {
  const base = files[index];
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-end px-4 py-3 border-b border-white/10">
        <button
          onClick={onClose}
          className="rounded border border-white/10 px-2 py-1 hover:bg-white/10"
        >
          <X size={18} />
        </button>
      </div>
      <div className="flex-1 grid place-items-center p-4">
        <video
          src={`${base}.mp4`}
          controls
          autoPlay
          playsInline
          className="max-h-[85svh] w-auto rounded-xl"
        />
      </div>
    </motion.div>
  );
}
