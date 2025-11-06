"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HomeIcon, MessageCircle, MapPin, Phone } from "lucide-react";

const WA_LINK =
  "https://api.whatsapp.com/send/?phone=03331702212&text&type=phone_number&app_absent=0";

export default function HyderabadBranchMain() {
  const branch = {
    name: "Hyderabad",
    address:
      "Plot No. B/1-54, Ground Floor, Railway Employees Housing Society, Main Auto Bhan Road, Next to Bank Islamic & Haveli Restaurant",
    phones: ["0370-0918026", "022-3823358", "+92 340 2043923"],
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.871960944083!2d68.34655131502803!3d25.37519418381925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c710034718e5f%3A0x72761edfbabe8786!2sSana%20Sarahs%20Salon%20and%20Studio%20-%20Hyderabad!5e0!3m2!1sen!2s!4v1730915402321!5m2!1sen!2s"
        width="100%"
        height="260"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* Soft glows */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full blur-3xl bg-fuchsia-700/10"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 right-0 h-[340px] w-[340px] rounded-full blur-3xl bg-pink-600/10"
      />

      {/* Header */}
      <header className="relative z-10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Sana Sarah Salon"
              width={48}
              height={48}
              className="rounded-full ring-1 ring-white/20 object-cover bg-white"
            />
            <div className="leading-tight">
              <span className="block text-[10px] sm:text-xs tracking-widest text-white/60">
                SANA SARAH SALON — HYDERABAD
              </span>
              <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
                Hyderabad Branch
              </h1>
            </div>
          </div>

          {/* Desktop actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition backdrop-blur-md"
            >
              <HomeIcon size={16} /> Home
            </Link>
            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-pink-600 to-fuchsia-500 px-4 py-2 text-sm font-medium shadow-lg hover:brightness-110 transition"
            >
              <MessageCircle size={16} /> Talk to Agent
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile home */}
      <div className="sm:hidden fixed bottom-4 right-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-xl bg-white text-black font-semibold shadow-lg px-3 py-2 text-xs hover:bg-gray-200 transition"
        >
          <HomeIcon size={14} className="text-black" /> Home
        </Link>
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-xs sm:text-sm tracking-widest text-white/70 uppercase">
              Address and Contact Details
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              Hyderabad — Branch
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 space-y-5">
              <InfoCard icon={<MapPin />} title="Address" text={branch.address} />
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5" />
                  <div>
                    <p className="text-sm text-white/60">Phone Numbers</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {branch.phones.map((p) => (
                        <Link
                          key={p}
                          href={`tel:${p.replace(/\s+/g, "")}`}
                          className="inline-flex rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20 transition"
                        >
                          {p}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
              {branch.mapEmbed}
            </div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <ServiceCard title="Rate List" href="/hyderabad/ratelist" />
            <ServiceCard title="Current Deals" href="/hyderabad/current-deals" />
            <ServiceCard title="Makeup Catalogue" href="/hyderabad/gallery/makeup" />
            <ServiceCard title="Haircare Catalogue" href="/hyderabad/gallery/haircare" />
            <ServiceCard title="Skincare Catalogue" href="/hyderabad/gallery/skincare" />
            <ServiceCard title="Book Appointment" href={WA_LINK} external accent />
          </motion.div>

          <div className="mt-10 flex flex-col items-center gap-2">
            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-pink-500 px-6 py-3 text-sm sm:text-base font-semibold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition"
            >
              <MessageCircle />
              Talk to Agent
            </Link>
            <p className="text-xs text-white/60">Open 7 days • 11:00 AM – 8:00 PM</p>
          </div>
        </section>
      </main>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
      <div className="flex items-start gap-3">
        {icon}
        <div>
          <p className="text-sm text-white/60">{title}</p>
          <p className="font-medium mt-0.5 text-white/90">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  href,
  external = false,
  accent = false,
}: {
  title: string;
  href: string;
  external?: boolean;
  accent?: boolean;
}) {
  const content = (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 p-5 backdrop-blur transition ${
        accent
          ? "bg-gradient-to-tr from-pink-600 to-fuchsia-500 hover:brightness-110"
          : "bg-white/[0.04] hover:bg-white/[0.06]"
      }`}
    >
      {!accent && (
        <div className="pointer-events-none absolute -inset-24 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(236,72,153,0.10),rgba(168,85,247,0.10),transparent_70%)] blur-2xl opacity-0 group-hover:opacity-100 transition" />
      )}
      <h3 className="text-xl font-semibold relative z-10">{title}</h3>
    </div>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link href={href}>{content}</Link>
  );
}
