"use client";

import React, { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef      = useRef<HTMLDivElement>(null);
  const textLeftRef  = useRef<HTMLHeadingElement>(null);
  const textRightRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    /* ── DESKTOP only ──────────────────────────────────────────────── */
    mm.add("(min-width: 1024px)", () => {
      const card = cardRef.current!;

      /*
       * HOW IT WORKS
       * ─────────────
       * 1. We wait 600ms so fonts + images fully settle (layout is stable).
       * 2. We measure card center and both spacer centers via
       *    getBoundingClientRect() while the page is at scroll ≈ 0.
       *    At scroll=0, getBoundingClientRect().top === page-space Y, so
       *    the difference (spacer.top − card.top) is the exact pixel offset
       *    GSAP needs to translate the card to that position.
       * 3. We build TWO separate tweens:
       *      Tween A: gsap.to()     — origin → Stage 1 (About left column)
       *      Tween B: gsap.fromTo() — Stage 1 → Stage 2 (Services right column)
       *    Using fromTo() for Tween B means it ALWAYS starts from Stage 1
       *    values, so there's no jump when Tween B kicks in.
       * 4. On window resize we kill + rebuild everything.
       */

      let tweenA: gsap.core.Tween | null = null;
      let tweenB: gsap.core.Tween | null = null;

      const build = () => {
        // Kill previous instances
        tweenA?.scrollTrigger?.kill();
        tweenB?.scrollTrigger?.kill();
        tweenA?.kill();
        tweenB?.kill();
        gsap.set(card, { clearProps: "x,y,scale,rotation" });

        // ── Measure at current scroll position ──────────────────────
        // getBoundingClientRect() is viewport-relative, but since both
        // card and spacer are measured at the same instant, the DIFFERENCE
        // is scroll-position-independent and equals the page-space offset.
        const cR = card.getBoundingClientRect();
        const cardCX = cR.left + cR.width  / 2;
        const cardCY = cR.top  + cR.height / 2;

        const aboutSpacer    = document.querySelector<HTMLElement>("#about .about-spacer");
        const servicesSpacer = document.querySelector<HTMLElement>("#about .services-spacer");

        // Stage 1 offsets (About left column)
        let s1X = -440, s1Y = 660;
        if (aboutSpacer) {
          const r = aboutSpacer.getBoundingClientRect();
          s1X = (r.left + r.width  / 2) - cardCX;
          s1Y = (r.top  + r.height / 2) - cardCY;
        }

        // Stage 2 offsets (Services right column)
        let s2X = 360, s2Y = 1340;
        if (servicesSpacer) {
          const r = servicesSpacer.getBoundingClientRect();
          s2X = (r.left + r.width  / 2) - cardCX;
          s2Y = (r.top  + r.height / 2) - cardCY;
        }

        // ── Tween A: origin → About left column ─────────────────────
        tweenA = gsap.to(card, {
          x: s1X,
          y: s1Y,
          scale: 0.97,
          ease: "none",
          scrollTrigger: {
            trigger: "#about",
            start: "top 90%",
            end: "top 20%",
            scrub: 1.5,
          },
        });

        // ── Tween B: About column → Services column ──────────────────
        // fromTo() ensures B always starts exactly where A ends,
        // so there is never a jump when B takes over.
        tweenB = gsap.fromTo(
          card,
          { x: s1X, y: s1Y, scale: 0.97 },
          {
            x: s2X,
            y: s2Y,
            scale: 0.94,
            ease: "none",
            scrollTrigger: {
              trigger: ".capabilities-heading",
              start: "top 90%",
              end: "top 20%",
              scrub: 1.5,
            },
          }
        );
      };

      // Build after layout settles
      const initTimer = setTimeout(build, 600);

      // Rebuild on resize
      const onResize = () => {
        ScrollTrigger.refresh();
        build();
      };
      window.addEventListener("resize", onResize);

      // ── Headline text parallax ──────────────────────────────────
      if (textLeftRef.current) {
        gsap.to(textLeftRef.current, {
          x: -40, opacity: 0.5, ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
      if (textRightRef.current) {
        gsap.to(textRightRef.current, {
          x: 40, opacity: 0.5, ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      return () => {
        clearTimeout(initTimer);
        window.removeEventListener("resize", onResize);
        tweenA?.scrollTrigger?.kill();
        tweenB?.scrollTrigger?.kill();
        tweenA?.kill();
        tweenB?.kill();
      };
    });

    /* ── MOBILE / TABLET — static card, no glide ───────────────── */
    mm.add("(max-width: 1023px)", () => {
      if (cardRef.current) gsap.set(cardRef.current, { clearProps: "all" });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative z-40 min-h-screen w-full flex flex-col justify-between
                 pt-24 sm:pt-28 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8
                 overflow-hidden lg:overflow-visible bg-[#161618] text-white select-none"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[350px] sm:w-[700px] lg:w-[900px]
                      h-[350px] sm:h-[700px] lg:h-[900px]
                      bg-[#CCFF00]/5 rounded-full blur-[120px] sm:blur-[170px] pointer-events-none" />

      {/* Editorial layout */}
      <div className="my-auto relative flex flex-col lg:flex-row items-center
                      justify-between py-4 sm:py-6 lg:py-12 z-10
                      max-w-7xl mx-auto w-full gap-4 lg:gap-1">

        {/* Left headline */}
        <div className="w-full lg:w-[42%] text-center lg:text-right z-20
                        lg:-translate-y-10 lg:-translate-x-6 px-1 shrink-0">
          <h1
            ref={textLeftRef}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.2vw]
                       font-black tracking-tight uppercase leading-none text-white
                       drop-shadow-md whitespace-nowrap"
          >
            FULL-STACK
          </h1>
        </div>

        {/* Portrait card — z-[999] keeps it above all sections while gliding */}
        <div className="w-full lg:w-auto flex justify-center items-center
                        my-4 lg:my-0 z-[999] shrink-0 mx-1">
          <div
            ref={cardRef}
            className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[390px]
                       max-w-full rounded-[2rem] sm:rounded-[2.4rem] p-3 sm:p-4
                       bg-[#F5F3EF] shadow-2xl shadow-black/90 will-change-transform"
          >
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px]
                            rounded-[1.6rem] sm:rounded-[1.9rem] overflow-hidden bg-neutral-100">
              <img
                src="/images/hero-portrait.jpg"
                alt="Zeeshan Portrait"
                className="w-full h-full object-cover object-top block"
              />
            </div>
          </div>
        </div>

        {/* Right headline */}
        <div className="w-full lg:w-[42%] text-center lg:text-left z-20
                        lg:translate-y-10 px-1 shrink-0">
          <h2
            ref={textRightRef}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.6vw]
                       font-black tracking-tight uppercase leading-none text-white
                       drop-shadow-md whitespace-nowrap"
          >
            DEVELOPER
          </h2>
        </div>
      </div>

      {/* Scroll CTA */}
      <div className="flex justify-end items-center font-mono text-xs
                      text-graphite-400 border-t border-white/10 pt-4 z-10">
        <a
          href="#about"
          className="flex items-center gap-1.5 text-white hover:text-[#CCFF00]
                     transition-colors font-medium ml-auto"
        >
          <span>SCROLL DOWN</span>
          <ArrowDownRight className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
