// src/components/BackgroundVideo.tsx
"use client";

import React from "react";

export default function BackgroundVideo() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="block absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center center", transform: "translateZ(0)" }}
      >
        {/* ✅ same demo video for ALL pages */}
        <source src="/catalogue/signature-by-sana-sarah/sana.mp4" type="video/mp4" />
        {/* <source src="/catalogue/signature-by-sana-sarah/sana.webm" type="video/webm" /> */}
      </video>

      {/* subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
