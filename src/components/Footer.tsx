"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp, Github, Linkedin, Instagram, Facebook, Mail, Phone } from "lucide-react";

/* ── Custom SVGs ─────────────────────────────────────────────────────────── */
const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const TikTokIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.37 6.37 0 0 0-.86-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.82 4.48c1.92-1.92 2.04-5.01 2.04-5.01V8.6a8.28 8.28 0 0 0 4.79 1.54V6.69h-.2z" />
  </svg>
);

const ThreadsIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.186 24C5.46 24 0 18.666 0 12.083 0 5.498 5.46 0 12.186 0c6.644 0 12.08 5.347 12.08 11.932 0 .614-.047 1.226-.14 1.833h-4.32c.046-.412.068-.823.068-1.233 0-4.398-3.447-7.978-7.688-7.978-4.242 0-7.689 3.58-7.689 7.978 0 4.4 3.447 7.979 7.689 7.979 2.455 0 4.64-1.2 6.096-3.09l3.35 2.508C19.78 22.25 16.242 24 12.186 24zm4.498-11.458c0 2.53-1.966 4.542-4.498 4.542-2.533 0-4.499-2.012-4.499-4.542 0-2.531 1.966-4.542 4.499-4.542 2.532 0 4.498 2.011 4.498 4.542z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-14 px-4 md:px-12 bg-[#141416] text-white border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 font-mono text-xs text-graphite-400">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display text-lg font-black uppercase text-white tracking-tight">
            ZEESHAN<span className="text-[#CCFF00]">.DEV</span>
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>© {new Date().getFullYear()} — ALL RIGHTS RESERVED</span>
        </div>

        {/* Social Icons Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* LinkedIn */}
          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-900 border border-white/5 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          {/* GitHub */}
          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-900 border border-white/5 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          {/* Instagram */}
          <a
            href={PORTFOLIO_DATA.personal.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-900 border border-white/5 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
            title="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>

          {/* Threads */}
          <a
            href={PORTFOLIO_DATA.personal.socials.threads}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-900 border border-white/5 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
            title="Threads"
          >
            <ThreadsIcon className="h-4 w-4" />
          </a>

          {/* TikTok */}
          <a
            href={PORTFOLIO_DATA.personal.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-900 border border-white/5 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
            title="TikTok"
          >
            <TikTokIcon className="h-4 w-4" />
          </a>

          {/* Facebook */}
          <a
            href={PORTFOLIO_DATA.personal.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-900 border border-white/5 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
            title="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>

          {/* WhatsApp */}
          <a
            href={PORTFOLIO_DATA.personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-900 border border-white/5 hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
            title="WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>

          {/* Phone */}
          <a
            href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`}
            className="p-2 rounded-full bg-neutral-900 border border-white/5 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
            title={PORTFOLIO_DATA.personal.phone}
          >
            <Phone className="h-4 w-4" />
          </a>

          {/* Mail */}
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2 rounded-full bg-neutral-900 border border-white/5 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
            title={PORTFOLIO_DATA.personal.email}
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          data-cursor="TOP"
          className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform text-[#CCFF00]" />
        </button>
      </div>
    </footer>
  );
}
