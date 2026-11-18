"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, Send, CheckCircle2, Copy, Loader2, ExternalLink, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

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
        throw new Error(data.message || "Failed to send message. Please try direct email.");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to dispatch message.";
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

  return (
    <section
      id="contact"
      className="relative py-28 px-4 md:px-12 bg-[#1A1A1E] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Editorial & Quick Direct Link */}
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
              Have an upcoming product idea, website requirement, autonomous AI agent workflow, or full-stack software system? Send over your vision and let&apos;s engineer a high-impact solution.
            </p>

            {/* Direct Gmail Card with Clickable mailto and Copy */}
            <div className="p-6 rounded-2xl bg-[#141416] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-graphite-400 uppercase tracking-widest">
                  OFFICIAL INBOX
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#CCFF00]">
                  <span className="h-2 w-2 rounded-full bg-[#CCFF00] animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-xs font-bold text-white bg-neutral-900 p-3.5 rounded-xl border border-white/5">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="truncate text-[#CCFF00] hover:underline flex items-center gap-1.5"
                  title="Open in your email client"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
                </a>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={copyEmailToClipboard}
                    data-cursor="COPY"
                    type="button"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#CCFF00] text-black text-xs font-bold hover:bg-white transition-colors"
                  >
                    {copiedEmail ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                  </button>

                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                    data-cursor="SEND"
                    className="p-2 rounded-lg bg-neutral-800 text-white hover:text-[#CCFF00] border border-white/10 transition-colors"
                    title="Open mail application"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
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
                  Your inquiry has been sent directly to <span className="text-[#CCFF00] font-mono">muhammadzeeshan0477@gmail.com</span>. Zeeshan will review your requirements and respond within 24 hours.
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
                        href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Project%20Inquiry&body=${encodeURIComponent(formState.message)}`}
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
                        setFormState({ ...formState, projectType: e.target.value })
                      }
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="AI Agents & Automation">AI Agents &amp; Automation</option>
                      <option value="AI Chatbot Solution">AI Chatbot Solution</option>
                      <option value="Full-Stack SaaS Platform">Full-Stack SaaS Platform</option>
                      <option value="Headless E-Commerce">Headless E-Commerce</option>
                      <option value="Custom Software & API">Custom Software &amp; API</option>
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
