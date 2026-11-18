"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  // Extract display host name from demoUrl (e.g. erhatechnologies.com)
  const getDomainName = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  };

  const domain = getDomainName(project.demoUrl);

  return (
    <div
      style={{
        top: `${90 + index * 22}px`,
        zIndex: index + 10,
      }}
      className="project-card sticky w-full rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 bg-[#1A1A1E] border border-white/10 shadow-2xl shadow-black/95 overflow-hidden group transition-all duration-500 mb-8"
    >
      {/* Background Gradient Atmosphere */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.visualIdentity.bgPattern} opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Project Editorial & Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Header Metadata */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl md:text-3xl font-extrabold text-[#CCFF00]">
                {project.number}
              </span>
              <span className="font-mono text-xs text-graphite-400">
                / {String(total).padStart(2, "0")}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-graphite-300">
              {project.category} {"//"} {project.year}
            </span>
          </div>

          {/* Title & Descriptions */}
          <div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="mt-2 font-mono text-xs text-[#CCFF00] uppercase tracking-wider font-semibold">
              {project.subtitle}
            </p>
            <p className="mt-4 font-body text-sm sm:text-base text-graphite-600 font-light leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-[#141416] border border-white/10 font-mono text-[11px] text-graphite-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {/* Primary Backlink: Live Site Link */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="VISIT"
              className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-5 py-3 font-mono text-xs font-bold text-black hover:bg-white transition-all shadow-lg hover:shadow-lime-accent/30"
            >
              <span>LIVE PREVIEW</span>
              <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>

            {/* Case Study Deep Dive Link */}
            <Link
              href={`/projects/${project.slug}`}
              data-cursor="CASE STUDY"
              className="flex items-center gap-2 rounded-full bg-neutral-900 border border-white/15 px-5 py-3 font-mono text-xs font-bold text-white hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all"
            >
              <span>CASE STUDY</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: High-Fidelity Browser Window Showcase */}
        <div className="lg:col-span-7 w-full">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN ↗"
            className="block w-full rounded-2xl overflow-hidden bg-[#101012] border border-white/15 shadow-2xl hover:border-[#CCFF00]/50 transition-all duration-500 group/browser"
          >
            {/* Sleek Browser Window Chrome Bar */}
            <div className="bg-[#121214] px-4 py-2.5 border-b border-white/10 flex items-center justify-between gap-3">
              {/* Traffic Light Window Controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* Minimal URL Address Pill */}
              <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-white/5 font-mono text-[11px] text-graphite-400 group-hover/browser:text-white transition-colors truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <Globe className="h-3 w-3 text-graphite-400 shrink-0" />
                <span className="truncate">{domain}</span>
              </div>

              {/* Direct Open Hint */}
              <div className="flex items-center gap-1 text-[11px] font-mono text-[#CCFF00] opacity-80 group-hover/browser:opacity-100 transition-opacity shrink-0">
                <span className="hidden sm:inline">LIVE</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>

            {/* Project Screenshot Container with Smooth Responsive Aspect Ratio */}
            <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-neutral-950">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/browser:scale-[1.03]"
                loading="lazy"
              />

              {/* Subtle Vignette Gradient on Image Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Hover Badge Indicator */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[11px] text-white flex items-center gap-1.5 opacity-0 group-hover/browser:opacity-100 transition-opacity duration-300">
                <span>VISIT {domain.toUpperCase()}</span>
                <ArrowUpRight className="h-3 w-3 text-[#CCFF00]" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
