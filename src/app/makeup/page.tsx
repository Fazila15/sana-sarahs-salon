"use client";
import React, { useState } from "react";
import RatesModal from "@/app/components/RatesModal";
import { makeupRates, CategoryKey } from "@/app/data/makeupRates";


const CATEGORIES = ["Signature by Sana Sarah", "Signature Artist", "Senior Artist", "Expert Artist"];

export default function MakeupPage() {
  const [selectedCat, setSelectedCat] = useState<CategoryKey>(CATEGORIES[0] as CategoryKey);
  const [selectedSubcat, setSelectedSubcat] = useState<string | null>(null);

  const subcategories = Object.keys(makeupRates[selectedCat as keyof typeof makeupRates]);

  return (
    <div className="min-h-screen pt-24 text-white">
      <h1 className="text-center text-3xl font-bold">Choose a Category</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mt-6 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat as CategoryKey)} // ✅ explicit cast fixes TS
            className={`px-4 py-2 rounded-full text-sm font-semibold ${selectedCat === cat
                ? "bg-pink-600 text-white"
                : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 px-6 max-w-7xl mx-auto">
        {subcategories.map((sub, i) => (
          <div key={sub} className="bg-white/5 border border-white/10 rounded-2xl p-3">
            <video
              src={`/gallery/makeup/${selectedCat.toLowerCase().replace(/ /g, "-")}/${i + 1}.mp4`}
              autoPlay
              muted
              loop
              className="rounded-xl mb-3 w-full object-contain aspect-[3/4]"

            />
            <div className="flex justify-between items-center">
              <span className="font-medium">{sub}</span>
              <button
                onClick={() => setSelectedSubcat(sub)}
                className="px-3 py-1 bg-pink-600/80 rounded-full text-xs hover:bg-pink-600 transition"
              >
                View Rates
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSubcat && (
        <RatesModal
          open={!!selectedSubcat}
          topCat={selectedCat}
          subcat={selectedSubcat}
          onClose={() => setSelectedSubcat(null)}
        />
      )}
    </div>
  );
}
