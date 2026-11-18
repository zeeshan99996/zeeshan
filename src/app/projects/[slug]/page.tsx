import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2, Calendar, User, Clock, Layers, Globe } from "lucide-react";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = PROJECTS[(PROJECTS.findIndex((p) => p.slug === params.slug) + 1) % PROJECTS.length];

  return (
    <main className="relative min-h-screen w-full bg-[#161618] text-white selection:bg-[#CCFF00] selection:text-black">
      <Navbar />

      <article className="pt-32 pb-24 px-4 md:px-12 max-w-7xl mx-auto">
        <Link
          href="/#projects"
          data-cursor="BACK"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#CCFF00] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        {/* Hero Header */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex items-center gap-3 font-mono text-xs text-graphite-400 mb-4">
            <span className="text-[#CCFF00] font-bold">{project.number}</span>
            <span>{"//"}</span>
            <span>{project.category}</span>
            <span>{"//"}</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            {project.title}
          </h1>

          <p className="mt-4 font-mono text-base sm:text-lg text-[#CCFF00] font-medium">
            {project.subtitle}
          </p>

          <p className="mt-6 font-body text-lg sm:text-xl text-graphite-600 font-light max-w-3xl leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LIVE DEMO"
              className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-7 py-3.5 font-mono text-xs font-bold text-black hover:bg-white transition-all shadow-lg hover:shadow-lime-accent/20"
            >
              <span>VISIT LIVE WEBSITE</span>
              <ExternalLink className="h-4 w-4 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Full-Width Project Screenshot Showcase Frame */}
        <div className="mb-16 rounded-3xl overflow-hidden bg-[#101012] border border-white/15 shadow-2xl">
          <div className="bg-[#121214] px-4 py-3 border-b border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-white/10 font-mono text-xs text-graphite-300 hover:text-[#CCFF00] transition-colors truncate max-w-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <Globe className="h-3.5 w-3.5 text-graphite-400 shrink-0" />
              <span className="truncate">{project.demoUrl}</span>
              <ExternalLink className="h-3 w-3 shrink-0" />
            </a>

            <span className="font-mono text-xs text-[#CCFF00] hidden sm:inline">LIVE PREVIEW</span>
          </div>

          <div className="relative w-full h-[280px] sm:h-[420px] md:h-[540px] lg:h-[640px] overflow-hidden bg-neutral-950">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-white/10 mb-16 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-graphite-400 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-[#CCFF00]" /> ROLE
            </span>
            <p className="font-bold text-white text-sm">{project.role}</p>
          </div>
          <div className="space-y-1">
            <span className="text-graphite-400 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-[#CCFF00]" /> CLIENT
            </span>
            <p className="font-bold text-white text-sm">{project.client}</p>
          </div>
          <div className="space-y-1">
            <span className="text-graphite-400 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#CCFF00]" /> DURATION
            </span>
            <p className="font-bold text-white text-sm">{project.duration}</p>
          </div>
          <div className="space-y-1">
            <span className="text-graphite-400 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#CCFF00]" /> YEAR
            </span>
            <p className="font-bold text-white text-sm">{project.year}</p>
          </div>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4 p-8 rounded-2xl bg-neutral-900/60 border border-white/10">
            <h3 className="font-display text-2xl font-bold uppercase text-rose-400 tracking-tight">
              01 // THE CHALLENGE
            </h3>
            <p className="font-body text-base text-graphite-600 font-light leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 p-8 rounded-2xl bg-neutral-900/60 border border-white/10">
            <h3 className="font-display text-2xl font-bold uppercase text-[#CCFF00] tracking-tight">
              02 // THE SOLUTION
            </h3>
            <p className="font-body text-base text-graphite-600 font-light leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/10 mb-16 space-y-8">
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight border-b border-white/10 pb-4">
            KEY ARCHITECTURAL FEATURES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#161618] border border-white/5">
                <CheckCircle2 className="h-5 w-5 text-[#CCFF00] shrink-0 mt-0.5" />
                <span className="font-body text-sm text-graphite-600 font-normal leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer */}
        <div className="border-t border-white/10 pt-16 flex justify-between items-center">
          <span className="font-mono text-xs text-graphite-400">UP NEXT</span>
          <Link
            href={`/projects/${nextProject.slug}`}
            data-cursor="NEXT"
            className="group text-right"
          >
            <span className="block font-mono text-xs text-[#CCFF00]">{nextProject.number} {"//"} {nextProject.category}</span>
            <span className="font-display text-3xl sm:text-5xl font-black uppercase text-white group-hover:text-[#CCFF00] transition-colors">
              {nextProject.title} →
            </span>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
