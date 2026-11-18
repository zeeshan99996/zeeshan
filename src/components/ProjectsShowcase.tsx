"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { FolderGit2, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLHeadingElement>(null);

  // Exact 5 featured projects for the home page showcase
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current && sectionRef.current) {
        gsap.to(marqueeRef.current, {
          x: "-30%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Sticky Stacking Deck Scroll Animation
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 0.94 - (cards.length - 1 - index) * 0.015,
            opacity: 0.85,
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top 80%",
              end: "top 25%",
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 bg-[#141416] text-white border-t border-white/10 overflow-visible"
    >
      {/* Top Header Bar */}
      <div className="px-4 md:px-12 max-w-7xl mx-auto mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00]">
          <FolderGit2 className="h-4 w-4" />
          <span className="tracking-widest uppercase">{"// 04. FEATURED WORK & CASE STUDIES"}</span>
        </div>

        {/* Link to Dedicated All Projects Page */}
        <Link
          href="/projects"
          data-cursor="ALL WORK"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-[#CCFF00] transition-colors border-b border-white/20 hover:border-[#CCFF00] pb-1 w-fit group"
        >
          <span>VIEW ALL PROJECTS ARCHIVE ({PROJECTS.length}+)</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Giant Marquee Heading */}
      <div className="w-full overflow-hidden select-none mb-16 py-4 border-y border-white/5 bg-[#1A1A1E]/30">
        <h2
          ref={marqueeRef}
          className="font-display text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter text-white/5 whitespace-nowrap leading-none"
        >
          SELECTED PROJECTS — SELECTED PROJECTS — SELECTED PROJECTS —
        </h2>
      </div>

      {/* 5 Sticky Stacking Project Cards */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-12 pb-16">
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            total={featuredProjects.length}
          />
        ))}
      </div>

      {/* Bottom CTA to Dedicated Projects Page with Categories */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A1A1E] border border-white/10 flex flex-col items-center justify-center space-y-6 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[#CCFF00]/5 blur-3xl pointer-events-none" />

          <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] uppercase tracking-widest relative z-10">
            <Sparkles className="h-4 w-4" />
            <span>MORE IN MY ARCHIVE</span>
          </div>

          <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white max-w-2xl relative z-10">
            WANT TO EXPLORE ALL PROJECTS BY CATEGORY?
          </h3>

          <p className="font-body text-sm sm:text-base text-graphite-400 font-light max-w-xl leading-relaxed relative z-10">
            Browse through full portfolios organized into Website Development, AI Agents, AI Chatbots, Custom Software &amp; SaaS, and E-Commerce.
          </p>

          <Link
            href="/projects"
            data-cursor="EXPLORE"
            className="relative z-10 inline-flex items-center gap-3 rounded-full bg-[#CCFF00] px-8 py-4 font-mono text-xs font-extrabold text-black hover:bg-white transition-all shadow-xl hover:shadow-lime-accent/30 group"
          >
            <span>VIEW ALL PROJECTS &amp; CATEGORIES</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
