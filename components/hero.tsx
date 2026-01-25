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
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-16 animate-fade-in hover:bg-white/10 transition-colors cursor-default">
          <div className="relative w-4 h-4">
            <Image
              src="/BLOCKFEST-logo.png"
              alt="Logo"
              fill
              className="object-contain grayscale invert brightness-200"
            />
          </div>
          <span className="text-[10px] text-white/40 font-black tracking-[0.3em] uppercase">
            Blockfest Ethiopia 2026
          </span>
        </div>

        <div className="mb-16">
          <h1 className="text-7xl md:text-[12rem] font-black text-white mb-8 animate-slide-up leading-[0.8] tracking-[-0.05em]">
            <span className="block mb-6 opacity-40">Build</span>
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">
              the Future
            </span>
          </h1>
        </div>

        <p className="text-2xl md:text-4xl text-foreground/40 mb-16 max-w-4xl mx-auto animate-slide-up leading-tight text-balance font-light tracking-tight">
          Join <span className="font-black text-white uppercase tracking-widest">Blockfest</span>. Ethiopia's premier Web3 ecosystem-building initiative.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24 animate-fade-in">
          <Button
            size="lg"
            className="h-20 bg-white text-black hover:bg-white/90 px-16 text-2xl font-black rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all hover:scale-105"
            onClick={() => (window.location.href = "#register")}
          >
            Register Now
            <ArrowRight className="ml-3 w-8 h-8" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-20 text-white/50 hover:text-white hover:bg-white/5 px-16 text-xl font-bold rounded-full transition-all"
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
