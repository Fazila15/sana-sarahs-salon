"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ---- Category Tabs ----
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

// ---- Branch-wise pricing ----
const PRICE_MAP: Record<string, Partial<Record<Category, string>>> = {
  // 🏙️ Karachi branches
  johar: {
    "signature-by-sana-sarah": "Bridal Makeup — PKR 40,000",
    "signature-artist": "PKR 32,000",
    "senior-artist": "PKR 28,000",
    "expert-artist": "PKR 22,000",
  },
  dha: {
    "signature-by-sana-sarah": "Bridal Makeup — PKR 70,000",
    "signature-artist": "PKR 32,000",
    "senior-artist": "PKR 28,000",
  },
  "tariq-road": {
    "signature-by-sana-sarah": "Bridal Makeup — PKR 70,000",
    "signature-artist": "PKR 32,000",
    "senior-artist": "PKR 28,000",
  },
  "north-nazimabad": {
    "signature-by-sana-sarah": "Bridal Makeup — PKR 70,000",
    "signature-artist": "PKR 32,000",
    "senior-artist": "PKR 28,000",
    "expert-artist": "PKR 20,000",
  },
};

// ---- Component ----
export default function MakeupCatalogue() {
  const { branch } = useParams<{ branch: string }>();
  const branchKey = (branch || "dha").toLowerCase();

  // Filter categories dynamically (hide where not available)
  const availableCategories = Object.keys(CATEGORY_LABELS).filter(
    (c) => PRICE_MAP[branchKey]?.[c as Category]
  ) as Category[];

  const [tab, setTab] = useState<Category>(availableCategories[0]);
  const [active, setActive] = useState<number | null>(null);
  const [priceModal, setPriceModal] = useState<string | null>(null);

  // file counts per category
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

  const showPrice = () => {
    const price = PRICE_MAP[branchKey]?.[tab];
    setPriceModal(price ?? "Price not available");
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex justify-between">
          <h1 className="text-lg font-semibold capitalize">
            {branchKey} — Makeup Catalogue
          </h1>
          <Link
            href="../"
            className="text-sm text-white/70 hover:text-white underline underline-offset-4"
          >
            Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
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
          {availableCategories.map((c) => (
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {files.map((file, i) => (
            <div
              key={file}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <MediaCard file={file} i={i} openLightbox={setActive} />
              <button
                onClick={showPrice}
                className="w-full mt-1 text-center bg-gradient-to-tr from-pink-600 to-fuchsia-500 py-2 rounded-b-2xl text-sm font-medium hover:brightness-110 transition"
              >
                View Price
              </button>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex justify-end px-4 py-3 border-b border-white/10">
                <button
                  onClick={() => setActive(null)}
                  className="rounded border border-white/10 px-2 py-1 hover:bg-white/10"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 grid place-items-center p-4">
                <MediaDisplay base={files[active]} />
              </div>
            </motion.div>
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
                <p className="text-lg font-semibold mb-2">💄 {CATEGORY_LABELS[tab]}</p>
                <p className="text-base text-white/90">{priceModal}</p>
                <button
                  onClick={() => setPriceModal(null)}
                  className="mt-4 inline-flex rounded-xl bg-gradient-to-tr from-pink-600 to-fuchsia-500 px-5 py-2 text-sm font-medium hover:brightness-110 transition"
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

// ---- Media Display Components ----
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
  const exts = [".mp4", ".mov", ".jpeg", ".jpg", ".png"];
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

function MediaDisplay({ base }: { base: string }) {
  const [extIdx, setExtIdx] = useState(0);
  const exts = [".mp4", ".mov", ".jpeg", ".jpg", ".png"];
  const src = base + exts[extIdx];
  const isVideo = [".mp4", ".mov"].includes(exts[extIdx]);

  return isVideo ? (
    <video
      src={src}
      controls
      autoPlay
      playsInline
      className="max-h-[85svh] w-auto rounded-xl"
      onError={() =>
        setExtIdx((prev) => (prev < exts.length - 1 ? prev + 1 : prev))
      }
    />
  ) : (
    <Image
      src={src}
      alt="Gallery"
      width={800}
      height={900}
      className="object-contain max-h-[85svh]"
      onError={() =>
        setExtIdx((prev) => (prev < exts.length - 1 ? prev + 1 : prev))
      }
    />
  );
}
