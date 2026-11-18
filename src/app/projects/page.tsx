"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, CATEGORIES, ProjectCategory, Project } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  ArrowUpRight,
  Search,
  Globe,
  SlidersHorizontal,
  FolderGit2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.categoryGroup === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Extract display host name
  const getDomainName = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  };

  // Count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.categoryGroup] = (counts[p.categoryGroup] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#161618] text-white selection:bg-[#CCFF00] selection:text-black">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-32 pb-14 px-4 md:px-12 max-w-7xl mx-auto border-b border-white/10">
        {/* Back Link */}
        <Link
          href="/"
          data-cursor="BACK"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#CCFF00] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO HOME</span>
        </Link>

        {/* Section Label */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] mb-4">
          <FolderGit2 className="h-4 w-4" />
          <span className="tracking-widest uppercase">
            {"// ARCHIVE & CATEGORIZED SHOWCASE"}
          </span>
        </div>

        {/* Main Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              ALL <span className="text-[#CCFF00]">PROJECTS.</span>
            </h1>
            <p className="mt-4 font-body text-base sm:text-lg text-graphite-400 font-light max-w-2xl leading-relaxed">
              Explore my complete portfolio categorized into Website Development, Autonomous AI Agents, Conversational AI Chatbots, SaaS Software, and Headless E-Commerce.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 font-mono text-xs text-graphite-400 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
            <div>
              <p className="text-2xl sm:text-3xl font-display font-black text-white">
                {PROJECTS.length}
              </p>
              <p className="uppercase text-[11px] text-graphite-400">Total Projects</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-2xl sm:text-3xl font-display font-black text-[#CCFF00]">
                5
              </p>
              <p className="uppercase text-[11px] text-graphite-400">Categories</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-2xl sm:text-3xl font-display font-black text-white">
                100%
              </p>
              <p className="uppercase text-[11px] text-graphite-400">Live Ready</p>
            </div>
          </div>
        </div>

        {/* Controls Bar: Search & Category Filter Pills */}
        <div className="mt-12 space-y-6">
          {/* Search Box */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-graphite-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, tech stack, or keyword..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#141416] border border-white/15 font-mono text-xs text-white placeholder-graphite-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-graphite-400 hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <SlidersHorizontal className="h-4 w-4 text-[#CCFF00] shrink-0 mr-1 hidden sm:inline" />
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-[#CCFF00] text-black shadow-lg shadow-lime-accent/20 scale-105"
                      : "bg-[#141416] text-graphite-400 border border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive
                        ? "bg-black text-[#CCFF00]"
                        : "bg-white/10 text-graphite-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          /* Empty State */
          <div className="py-24 text-center space-y-4 rounded-3xl bg-[#141416] border border-white/10 p-8">
            <Sparkles className="h-8 w-8 text-[#CCFF00] mx-auto opacity-60" />
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
              NO PROJECTS FOUND
            </h3>
            <p className="font-body text-sm text-graphite-400 max-w-md mx-auto">
              No projects matched your search criteria. Try a different keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-[#CCFF00] transition-colors"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          /* Grid of Projects */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const domain = getDomainName(project.demoUrl);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="flex flex-col justify-between rounded-3xl bg-[#1A1A1E] border border-white/10 shadow-xl overflow-hidden hover:border-[#CCFF00]/40 transition-all duration-300 group"
                  >
                    {/* Top: Browser Mockup Showcase */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden bg-[#101012] border-b border-white/10 group/browser"
                    >
                      {/* Browser Chrome Header */}
                      <div className="bg-[#121214] px-4 py-2.5 border-b border-white/10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="h-2 w-2 rounded-full bg-rose-500/80 inline-block" />
                          <span className="h-2 w-2 rounded-full bg-amber-500/80 inline-block" />
                          <span className="h-2 w-2 rounded-full bg-emerald-500/80 inline-block" />
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-900 border border-white/5 font-mono text-[10px] text-graphite-400 group-hover/browser:text-white transition-colors truncate max-w-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                          <Globe className="h-2.5 w-2.5 text-graphite-400 shrink-0" />
                          <span className="truncate">{domain}</span>
                        </div>

                        <span className="text-[10px] font-mono text-[#CCFF00] shrink-0 flex items-center gap-1 opacity-80 group-hover/browser:opacity-100">
                          <span>LIVE</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </span>
                      </div>

                      {/* Screenshot Container */}
                      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden bg-neutral-950">
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/browser:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Visit Pill */}
                        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[10px] text-white flex items-center gap-1 opacity-0 group-hover/browser:opacity-100 transition-opacity">
                          <span>VISIT {domain.toUpperCase()}</span>
                          <ArrowUpRight className="h-3 w-3 text-[#CCFF00]" />
                        </div>
                      </div>
                    </a>

                    {/* Bottom: Project Info & CTAs */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                      <div className="space-y-3">
                        {/* Meta Tags */}
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span className="text-[#CCFF00] font-bold">
                            {project.number}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-graphite-400 text-[11px]">
                            {project.categoryGroup} {"//"} {project.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white group-hover:text-[#CCFF00] transition-colors leading-tight">
                          {project.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="font-mono text-xs text-[#CCFF00] uppercase font-medium">
                          {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="font-body text-xs sm:text-sm text-graphite-400 font-light leading-relaxed line-clamp-3">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-[#141416] border border-white/10 font-mono text-[10px] text-graphite-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        {/* Direct Live Preview */}
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2.5 font-mono text-xs font-bold text-black hover:bg-white transition-all shadow-md"
                        >
                          <span>LIVE PREVIEW</span>
                          <ExternalLink className="h-3 w-3 stroke-[2.5]" />
                        </a>

                        {/* Case Study Link */}
                        <Link
                          href={`/projects/${project.slug}`}
                          className="flex items-center justify-center gap-1.5 rounded-full bg-neutral-900 border border-white/15 px-4 py-2.5 font-mono text-xs font-bold text-white hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all"
                        >
                          <span>DETAILS</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
