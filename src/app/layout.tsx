import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script"; // ⭐ zaroori
import BackgroundVideo from "@/app/components/BackgroundVideo";
import SiteHeader from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "Sana Sarah's Salon & Studio",
  description: "Premium hair, beauty & bridal services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-white relative overflow-x-hidden">
        {/* ✅ Sirf Tawk.to chat widget */}
        <Script
          id="tawk-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/69197c1cdde8a319591800a0/1ja5opk53';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        {/* ✅ Background video at the back */}
        <div className="fixed inset-0 -z-10">
          <BackgroundVideo />
        </div>

        {/* ✅ Global header */}
        <SiteHeader />

        {/* ✅ Page content */}
        <main className="relative z-0">{children}</main>
      </body>
    </html>
  );
}
