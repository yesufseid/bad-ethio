"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30">
      {/* Background Image with Heavy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche.jpg"
          alt="Web3 Atmosphere"
          fill
          className="object-cover opacity-20 grayscale scale-110"
          priority
        />
        <div className="absolute inset-0 bg-background/90 z-10" />
        <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent z-15" />
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-linear-to-t from-background via-background/80 to-transparent z-15" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
          {/* Main Logo Pill */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/BLOCKFEST-logo.png"
                alt="Logo"
                fill
                className="object-contain grayscale invert brightness-200"
              />
            </div>
            <span className="text-[10px] text-white/40 font-black tracking-[0.3em] uppercase">
              Blockfest Ethiopia 2026 • March 18 - 25
            </span>
          </div>

          <div className="hidden md:block w-px h-6 bg-white/10" />

          {/* Organizer Pill */}
          <a
            href="https://bad.et"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <span className="text-[10px] text-white/40 font-black tracking-[0.2em] uppercase group-hover:text-white/60 transition-colors">
              Organized by
            </span>
            <div className="relative w-5 h-5 rounded-sm overflow-hidden bg-white shadow-lg shadow-white/5">
              <Image
                src="/bad-ethiopia.jpg"
                alt="BaD Ethiopia Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <span className="text-[10px] text-white/60 font-black tracking-[0.2em] uppercase group-hover:text-white transition-colors">
              BaD Ethiopia
            </span>
          </a>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-[clamp(5rem,15vw,10rem)] font-black text-white mb-8 animate-slide-up leading-[0.8] tracking-[-0.05em]">
            <span className="block mb-6 opacity-60 text-2xl md:text-4xl lg:text-6xl tracking-[0.2em] uppercase font-bold">University Blockchain Week</span>
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">
              BlockFest Ethiopia
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-2xl text-foreground/80 mb-8 max-w-5xl mx-auto animate-slide-up leading-relaxed text-balance font-light tracking-wide">
          Talent Access · Developer Outcomes · Ecosystem Onboarding
        </p>

        <p className="text-base md:text-lg text-foreground/60 mb-16 max-w-4xl mx-auto animate-slide-up leading-relaxed font-light">
          Experience a <span className="text-white font-medium">Chain-Agnostic</span>, Hybrid (In-Person + Online) event at <br />
          <span className="text-white font-bold decoration-purple-500/30 underline underline-offset-8">Addis Ababa Science and Technology University (AASTU)</span>.
          <br /><br />
          <span className="text-xs opacity-70 uppercase tracking-[0.3em] flex items-center justify-center gap-3">
            Organized by
            <span className="inline-flex items-center gap-2 text-white font-bold hover:text-purple-400 transition-colors">
              <div className="relative w-5 h-5 rounded-full overflow-hidden bg-white ring-1 ring-white/20">
                <Image
                  src="/bad-ethiopia.jpg"
                  alt="BaD"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              BaD Ethiopia
            </span>
            & University Partners
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24 animate-fade-in px-4">
          <Button
            size="lg"
            className="h-16 md:h-20 bg-white text-black hover:bg-neutral-100 px-8 md:px-16 text-lg md:text-2xl font-black rounded-full shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95"
            onClick={() => (window.location.href = "#register")}
          >
            Register Now
            <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-16 md:h-20 text-white/70 hover:text-white hover:bg-white/5 px-8 md:px-16 text-base md:text-xl font-bold rounded-full transition-all border border-white/5"
            onClick={() => (window.location.href = "#community")}
          >
            Explore Community
          </Button>
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
