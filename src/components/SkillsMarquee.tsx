"use client";

import React from "react";

/* ─── Marquee item lists ────────────────────────────────────────────────── */
const ROW_1 = [
  "NEXT.JS 14",
  "REACT 18",
  "TYPESCRIPT",
  "NODE.JS",
  "TAILWIND CSS",
  "POSTGRESQL",
  "PRISMA ORM",
  "GSAP",
  "FRAMER MOTION",
  "DOCKER",
  "STRIPE",
  "REDIS",
];

const ROW_2 = [
  "FULL-STACK DEV",
  "SAAS PLATFORMS",
  "E-COMMERCE",
  "UI / UX DESIGN",
  "REST API",
  "GRAPHQL",
  "DEVOPS",
  "SEO OPTIMIZED",
  "PERFORMANCE",
  "RESPONSIVE UI",
  "WEB ANIMATIONS",
  "CLEAN CODE",
];

/* ─── Lime diamond separator ────────────────────────────────────────────── */
const Diamond = () => (
  <span
    aria-hidden
    className="mx-8 sm:mx-10 lg:mx-12 inline-block shrink-0 select-none
               leading-none text-[#CCFF00]"
    style={{ fontSize: "clamp(12px, 1.2vw, 20px)" }}
  >
    ◆
  </span>
);

/* ─── Single infinite scrolling track ──────────────────────────────────── */
interface TrackProps {
  items: string[];
  direction: "left" | "right";
  color: "white" | "lime";
  speed?: number; // animation duration in seconds
}

function Track({ items, direction, color, speed = 26 }: TrackProps) {
  const textColor = color === "lime" ? "#CCFF00" : "#FFFFFF";
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  /* Build one copy of the items list */
  const itemNodes = items.map((skill, i) => (
    <span
      key={i}
      className="inline-flex shrink-0 items-center font-display font-black
                 uppercase leading-none"
      style={{
        color: textColor,
        fontSize: "clamp(26px, 3.8vw, 62px)",
        letterSpacing: "0.06em",
        wordSpacing: "0.1em",
      }}
    >
      {skill}
      <Diamond />
    </span>
  ));

  return (
    <div className="flex w-full overflow-hidden">
      {/* Two identical copies → seamless infinite loop */}
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={`flex shrink-0 ${animClass} hover:[animation-play-state:paused]`}
          style={{ animationDuration: `${speed}s` }}
        >
          {itemNodes}
        </div>
      ))}
    </div>
  );
}

/* ─── Exported section ──────────────────────────────────────────────────── */
export default function SkillsMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-[#141416] border-t border-b border-white/10">

      {/* Ambient lime glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-36 w-1/2 rounded-full bg-[#CCFF00]/[0.04] blur-[70px]" />
      </div>

      {/* Section label */}
      <p className="relative z-10 pt-8 pb-5 text-center font-mono uppercase
                    tracking-[0.35em] text-[#CCFF00] opacity-70"
         style={{ fontSize: "clamp(9px, 0.75vw, 11px)" }}>
        {"// SKILLS & TECHNOLOGIES"}
      </p>

      {/* Row 1 — white, scrolls left */}
      <div className="relative z-10 mb-3 sm:mb-4">
        <Track items={ROW_1} direction="left" color="white" speed={50} />
      </div>

      {/* Row 2 — white text + lime diamonds, scrolls right */}
      <div className="relative z-10 pb-8">
        <Track items={ROW_2} direction="right" color="white" speed={42} />
      </div>

    </section>
  );
}
