import "./globals.css";
import type { Metadata } from "next";
import BackgroundVideo from "@/app/components/BackgroundVideo";
import SiteHeader from "@/app/components/SiteHeader"; // ✅ add this line

export const metadata: Metadata = {
  title: "Sana Sarah's Salon & Studio",
  description: "Premium hair, beauty & bridal services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <script src="//code.tidio.co/4wogdldh1cgsyrbtjt6lpohdtlwyvuna.js" async></script>
      <body className="min-h-screen text-white relative overflow-x-hidden">
        {/* ✅ Background video always at the very back */}
        <div className="fixed inset-0 -z-10">
          <BackgroundVideo />
        </div>

        {/* ✅ Single, global header — always on top */}
        <SiteHeader />

        {/* ✅ Main content */}
        <main className="relative z-0">{children}</main>
      </body>
    </html>
  );
}
