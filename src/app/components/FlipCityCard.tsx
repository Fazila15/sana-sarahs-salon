"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type BranchItem = {
  name: string;
  slug: string;
  hrefBase: string; // e.g. "/karachi/johar"
};

export default function FlipCityCard({
  city,
  branches = [],
  hrefBase = "#",
}: {
  city: string;
  branches?: BranchItem[];
  hrefBase?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const isSingleCity = branches.length === 0;

  return (
    <div
      className="relative h-[260px] cursor-pointer [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((p) => !p)} // tap toggle for mobile
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:shadow-[0_16px_60px_-20px_rgba(250,5,120,0.45)] transition [backface-visibility:hidden]">
          <h3 className="text-2xl font-semibold">{city}</h3>
          <p className="mt-1 text-sm text-white/60">
            {isSingleCity ? "Explore our branch" : "Explore services & offers"}
          </p>
          <div className="mt-3 h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-pink-600/70 to-fuchsia-500/70 flex items-center justify-center text-lg sm:text-xl font-bold">
            →
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-800/20 to-pink-800/10 backdrop-blur-lg p-5 overflow-hidden">
          <h4 className="text-lg font-semibold mb-3 text-pink-300">
            {city} Branch{!isSingleCity && "es"}
          </h4>

          {/* --- Main Menu --- */}
          <p className="text-sm font-semibold text-fuchsia-200 mb-2">
            Main Menu
          </p>

          {/* --- Branch List --- */}
          <div className="space-y-2">
            {isSingleCity ? (
              <>
                {/* Locations heading above outlet links */}
                <p className="text-sm font-semibold text-fuchsia-200 mb-1 mt-2">
                  Locations
                </p>
                <div className="flex items-center justify-between text-sm border-b border-white/10 pb-2">
                  <Link
                    href={hrefBase}
                    className="text-white/90 hover:text-white underline-offset-4 hover:underline transition"
                  >
                    {city} Branch
                  </Link>
                  <Link
                    href={`${hrefBase}/location`}
                    className="text-xs font-medium text-pink-400 hover:text-pink-300 underline transition"
                  >
                    Outlet Location →
                  </Link>
                </div>
              </>
            ) : (
              <>
                {branches.map((b) => (
                  <div
                    key={b.slug}
                    className="flex items-center justify-between gap-3 text-sm border-b border-white/10 pb-2"
                  >
                    <Link
                      href={b.hrefBase}
                      className="text-white/90 hover:text-white underline-offset-4 hover:underline transition"
                    >
                      {b.name}
                    </Link>
                    <Link
                      href={`${b.hrefBase}/location`}
                      className="text-xs font-medium text-pink-400 hover:text-pink-300 underline transition"
                    >
                      Outlet Location →
                    </Link>
                  </div>
                ))}
                {/* Locations heading at bottom above outlet links */}
                <p className="text-sm font-semibold text-fuchsia-200 mt-3">
                  Locations
                </p>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
