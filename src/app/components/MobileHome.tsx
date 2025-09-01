// src/app/components/MobileHome.tsx
"use client";

import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function MobileHome() {
  return (
    <div className="sm:hidden fixed top-3 right-3 z-50">
      <Link
        href="/"
        className="inline-flex items-center gap-1 rounded-xl 
                   bg-white text-black font-semibold shadow-lg
                   px-3 py-2 text-xs hover:bg-gray-200 transition"
      >
        <HomeIcon size={14} className="text-black" />
        Home
      </Link>
    </div>
  );
}
