"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Loader2,
  ExternalLink,
  AlertCircle,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Share2,
} from "lucide-react";
import confetti from "canvas-confetti";

/* ── Custom Branded SVG Icons ────────────────────────────────────────────── */
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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    budget: "$5k - $10k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/muhammadzeeshan0477@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            projectType: formState.projectType,
            budget: formState.budget,
            message: formState.message,
            _subject: `⚡ New Project Inquiry from ${formState.name} [Zeeshan Portfolio]`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setSubmitted(true);

        try {
          confetti({
            particleCount: 140,
            spread: 90,
            origin: { y: 0.6 },
            colors: ["#CCFF00", "#FFFFFF", "#38BDF8"],
          });
        } catch {
          // Confetti fallback
        }

        setTimeout(() => {
          setSubmitted(false);
          setFormState({
            name: "",
            email: "",
            projectType: "Full-Stack Web App",
            budget: "$5k - $10k",
            message: "",
          });
        }, 7000);
      } else {
        throw new Error(
          data.message || "Failed to send message. Please try direct email."
        );
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Failed to dispatch message.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const socialsList = [
    {
      name: "LinkedIn",
      href: PORTFOLIO_DATA.personal.socials.linkedin,
      icon: <Linkedin className="h-4 w-4" />,
      color: "hover:text-sky-400 hover:border-sky-400/40",
    },
    {
      name: "GitHub",
      href: PORTFOLIO_DATA.personal.socials.github,
      icon: <Github className="h-4 w-4" />,
      color: "hover:text-[#CCFF00] hover:border-[#CCFF00]/40",
    },
    {
      name: "Instagram",
      href: PORTFOLIO_DATA.personal.socials.instagram,
      icon: <Instagram className="h-4 w-4" />,
      color: "hover:text-pink-400 hover:border-pink-400/40",
    },
    {
      name: "Threads",
      href: PORTFOLIO_DATA.personal.socials.threads,
      icon: <ThreadsIcon className="h-4 w-4" />,
      color: "hover:text-white hover:border-white/40",
    },
    {
      name: "TikTok",
      href: PORTFOLIO_DATA.personal.socials.tiktok,
      icon: <TikTokIcon className="h-4 w-4" />,
      color: "hover:text-rose-400 hover:border-rose-400/40",
    },
    {
      name: "Facebook",
      href: PORTFOLIO_DATA.personal.socials.facebook,
      icon: <Facebook className="h-4 w-4" />,
      color: "hover:text-blue-400 hover:border-blue-400/40",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-4 md:px-12 bg-[#1A1A1E] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Editorial, Phone, Email & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] mb-4">
                <Mail className="h-4 w-4" />
                <span className="tracking-widest uppercase">
                  {"// 07. INITIATE COLLABORATION"}
                </span>
              </div>
              <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-white">
                LET&apos;S BUILD<br />
                <span className="text-[#CCFF00]">TOGETHER.</span>
              </h2>
            </div>

            <p className="font-body text-base sm:text-lg text-graphite-400 font-light leading-relaxed">
              Have an upcoming product idea, website requirement, autonomous AI agent workflow, or full-stack software system? Reach out via form, direct phone call, WhatsApp, or email.
            </p>

            {/* Direct Contact Cards (Phone & Email) */}
            <div className="space-y-4">
              {/* Phone & WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-[#141416] border border-white/10 space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-graphite-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#CCFF00]" />
                    DIRECT CALL / WHATSAPP
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-xs font-bold text-white bg-neutral-900 p-3 rounded-xl border border-white/5">
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`}
                    className="text-white hover:text-[#CCFF00] flex items-center gap-2"
                  >
                    <span className="text-base font-extrabold text-[#CCFF00]">
                      {PORTFOLIO_DATA.personal.phone}
                    </span>
                  </a>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Copy Phone */}
                    <button
                      onClick={copyPhoneToClipboard}
                      type="button"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-800 text-graphite-300 text-xs hover:text-white hover:bg-neutral-700 transition-colors border border-white/10"
                    >
                      {copiedPhone ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#CCFF00]" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      <span>{copiedPhone ? "COPIED" : "COPY"}</span>
                    </button>

                    {/* Direct WhatsApp Chat */}
                    <a
                      href={PORTFOLIO_DATA.personal.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-md"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      <span>WHATSAPP</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Gmail Card */}
              <div className="p-5 rounded-2xl bg-[#141416] border border-white/10 space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-graphite-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-[#CCFF00]" />
                    OFFICIAL GMAIL
                  </span>
                  <span className="font-mono text-[11px] text-graphite-400">
                    24H RESPONSE
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-xs font-bold text-white bg-neutral-900 p-3 rounded-xl border border-white/5">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="truncate text-[#CCFF00] hover:underline flex items-center gap-1.5"
                  >
                    <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
                  </a>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={copyEmailToClipboard}
                      type="button"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#CCFF00] text-black text-xs font-bold hover:bg-white transition-colors"
                    >
                      {copiedEmail ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                    </button>

                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                      className="p-1.5 rounded-lg bg-neutral-800 text-white hover:text-[#CCFF00] border border-white/10 transition-colors"
                      title="Open Email Client"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Social Media Network */}
            <div className="p-5 rounded-2xl bg-[#141416] border border-white/10 space-y-3 shadow-xl">
              <span className="font-mono text-xs text-graphite-400 uppercase tracking-widest flex items-center gap-1.5">
                <Share2 className="h-3.5 w-3.5 text-[#CCFF00]" />
                CONNECT ON SOCIAL MEDIA
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {socialsList.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/5 font-mono text-xs text-graphite-300 transition-all duration-300 group/soc ${soc.color}`}
                  >
                    <span className="shrink-0">{soc.icon}</span>
                    <span className="truncate font-semibold">{soc.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover/soc:opacity-100 ml-auto shrink-0 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Active Interactive Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#141416] border border-white/10 shadow-2xl relative">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] flex items-center justify-center mx-auto border border-[#CCFF00]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
                  MESSAGE DISPATCHED!
                </h3>
                <p className="font-body text-sm sm:text-base text-graphite-400 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been sent directly to{" "}
                  <span className="text-[#CCFF00] font-mono">
                    muhammadzeeshan0477@gmail.com
                  </span>
                  . Zeeshan will review your requirements and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <span className="font-mono text-xs text-graphite-500">
                    Form will reset in a few seconds...
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 font-mono text-xs">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-400" />
                    <div className="space-y-1">
                      <p>{errorMessage}</p>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Project%20Inquiry&body=${encodeURIComponent(
                          formState.message
                        )}`}
                        className="underline text-white font-bold hover:text-[#CCFF00]"
                      >
                        Click here to send directly via Gmail instead →
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-graphite-400 uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-graphite-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-graphite-400 uppercase">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-graphite-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-graphite-400 uppercase">
                      PROJECT CATEGORY
                    </label>
                    <select
                      name="projectType"
                      value={formState.projectType}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                    >
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="AI Agents & Automation">
                        AI Agents &amp; Automation
                      </option>
                      <option value="AI Chatbot Solution">
                        AI Chatbot Solution
                      </option>
                      <option value="Full-Stack SaaS Platform">
                        Full-Stack SaaS Platform
                      </option>
                      <option value="Headless E-Commerce">
                        Headless E-Commerce
                      </option>
                      <option value="Custom Software & API">
                        Custom Software &amp; API
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-graphite-400 uppercase">
                      BUDGET RANGE
                    </label>
                    <select
                      name="budget"
                      value={formState.budget}
                      onChange={(e) =>
                        setFormState({ ...formState, budget: e.target.value })
                      }
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                    >
                      <option value="< $3k">&lt; $3,000</option>
                      <option value="$3k - $7k">$3,000 — $7,000</option>
                      <option value="$7k - $15k">$7,000 — $15,000</option>
                      <option value="> $15k">&gt; $15,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-graphite-400 uppercase">
                    PROJECT VISION &amp; REQUIREMENTS *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me about your product requirements, deadlines, design preferences, and goals..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-graphite-500 focus:outline-none focus:border-[#CCFF00] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="SUBMIT"
                  className="w-full py-4 rounded-xl bg-[#CCFF00] text-black font-mono text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg hover:shadow-lime-accent/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>DISPATCHING TO INBOX...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND INQUIRY DIRECTLY</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
