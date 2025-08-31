// src/app/components/MobileHome.tsx
"use client";

import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function MobileHome() {
  return (
    <div className="sm:hidden fixed top-3 right-3 z-50">
      <Link
        href="/"
        className="inline-flex items-center gap-1 rounded-xl border border-white/15 bg-white/10 backdrop-blur px-3 py-2 text-xs font-medium hover:bg-white/20 transition"
      >
        <HomeIcon size={14} />
        Home
      </Link>
    </div>
  );
}
