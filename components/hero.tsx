"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[7.5rem]">
      {/* Background Image with Heavy Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-black" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 md:mb-20 animate-fade-in group/top">
          {/* Main Logo Container */}
          <div className="relative flex items-center gap-4 md:gap-6 px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl bg-white/5 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-xl hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] transition-all duration-500 cursor-default group/logo overflow-hidden">
            {/* Animated Glow Effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700" />

            <div className="relative w-10 h-10 md:w-16 md:h-16">
              <Image
                src="/blockfest-logo.jpg"
                alt="Blockfest Logo"
                fill
                sizes="(max-width: 768px) 40px, 64px"
                className="object-contain transition-all duration-700 group-hover/logo:scale-110 group-hover/logo:rotate-3"
                priority
              />
            </div>
            <div className="relative flex flex-col items-start">
              <span className="text-lg md:text-2xl font-black text-white tracking-widest uppercase italic leading-none group-hover/logo:tracking-[0.15em] transition-all duration-500">
                Blockfest
              </span>
              <span className="text-[8px] md:text-[10px] text-white/60 font-black tracking-[0.4em] uppercase mt-1 md:mt-2 transition-colors group-hover/logo:text-white">
                Ethiopia 2026 • Mar 18-25
              </span>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* Organizer Shoutout */}
          <a
            href="https://bad.et"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 md:gap-6 px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 group/org"
          >
            <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl overflow-hidden bg-white shadow-2xl transition-transform duration-700 group-hover/org:scale-110">
              <Image
                src="/bad-ethiopia.jpg"
                alt="BaD Ethiopia Logo"
                fill
                sizes="(max-width: 768px) 40px, 64px"
                className="object-contain p-1 md:p-1.5"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[8px] md:text-[10px] text-white/40 font-black tracking-[0.3em] uppercase transition-colors group-hover/org:text-white/60">
                Organized by
              </span>
              <span className="text-lg md:text-2xl font-black text-white/60 tracking-widest group-hover/org:text-white transition-colors leading-none mt-1 md:mt-2">
                BaD ETHIOPIA
              </span>
            </div>
          </a>
        </div>

        <div className="mb-8 md:mb-12 overflow-visible">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[clamp(5rem,15vw,10rem)] font-black text-white mb-6 md:mb-8 animate-slide-up leading-[1.1] md:leading-[1.2] tracking-[-0.05em] py-8 md:py-12 overflow-visible">
            <span className="block mb-2 md:mb-4 opacity-40 text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[0.4em] uppercase font-black">University Blockchain Week</span>
            <div className="relative w-full max-w-xl aspect-square mx-auto animate-bounce-slow px-4 sm:px-8">
              <Image
                src="/blockfest-logo.jpg"
                alt="Blockfest Ethiopia 2026"
                fill
                className="object-contain"
                priority
              />
            </div>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-2xl text-foreground/80 mb-6 md:mb-8 max-w-5xl mx-auto animate-slide-up leading-relaxed text-balance font-light tracking-wide px-4">
          Talent Access · Developer Outcomes · Ecosystem Onboarding
        </p>

        <p className="text-sm sm:text-base md:text-lg text-foreground/60 mb-12 md:mb-16 max-w-4xl mx-auto animate-slide-up leading-relaxed font-light px-4">
          Experience a <span className="text-white font-medium">Chain-Agnostic</span>, Hybrid (In-Person + Online) event at <br className="hidden sm:block" />
          <span className="text-white font-bold decoration-purple-500/30 underline underline-offset-4 md:underline-offset-8">Addis Ababa Science and Technology University (AASTU)</span>.
          <br /><br />
          <span className="text-[10px] opacity-70 uppercase tracking-[0.3em] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            Organized by
            <span className="inline-flex items-center gap-3 md:gap-4 text-white font-bold hover:text-purple-400 transition-colors bg-white/5 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/10">
              <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl overflow-hidden bg-white ring-1 md:ring-2 ring-white/20">
                <Image
                  src="/bad-ethiopia.jpg"
                  alt="BaD"
                  fill
                  sizes="32px md:40px"
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xs md:text-sm">BaD Ethiopia</span>
            </span>
            & University Partners
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-16 md:mb-24 animate-fade-in px-4">
          <button
            className="h-14 md:h-20 bg-white text-black hover:bg-neutral-100 px-8 md:px-16 text-base md:text-2xl font-black rounded-full shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 md:gap-3"
            onClick={() => (window.location.href = "#register")}
          >
            Register Now
            <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
          </button>
          <button
            className="h-14 md:h-20 text-white/70 hover:text-white hover:bg-white/5 px-8 md:px-16 text-sm md:text-xl font-bold rounded-full transition-all border border-white/5 flex items-center justify-center"
            onClick={() => (window.location.href = "#community")}
          >
            Explore Community
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-4 opacity-20">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white">Scroll</span>
          <div className="w-px h-24 bg-linear-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  )
}
