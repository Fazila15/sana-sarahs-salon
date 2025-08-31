// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import BackgroundVideo from "@/app/components/BackgroundVideo";

export const metadata: Metadata = {
  title: "Sana Sarah Salon",
  description: "Premium hair, beauty & bridal services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* no solid bg so video stays visible */}
      <body className="min-h-screen text-white relative overflow-x-hidden">
        <BackgroundVideo />
        {children}
      </body>
    </html>
  );
}
