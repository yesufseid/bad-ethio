"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Code2, Rocket } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-40 md:pb-48">
      <div className="absolute inset-0 gradient-web3" />

      {/* Animated background elements with blockchain theme */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96  bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-purple-500/30 rounded-lg animate-float opacity-40" />
      <div
        className="absolute bottom-32 left-20 w-24 h-24 border-2 border-cyan-400/30 rounded-lg animate-float opacity-40"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/50 mb-8 animate-fade-in animate-glow-pulse">
          <Zap size={16} className="text-cyan-400" />
          <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            Web3 Hackathon & Community Event
          </span>
        </div>

        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 animate-slide-up leading-tight text-balance">
            <span className="block mb-2">Build the Future</span>
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              of Web3
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto animate-slide-up leading-relaxed text-balance font-light">
          Join <span className="font-semibold text-cyan-400">Block Fest</span> - Ethiopia's premier Web3 hackathon where
          innovators, builders, and visionaries collaborate to shape the decentralized future
        </p>

        <div className="inline-block bg-card/50 backdrop-blur-sm border-glow rounded-xl p-8 mb-16 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            <div>
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-widest">Event Date</p>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                March 15-17, 2025
              </p>
            </div>
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
            <div>
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-widest">Location</p>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-10 py-6 text-lg font-bold group cta-glow shadow-2xl shadow-purple-500/50 border-2 border-purple-400/50"
            onClick={() => (window.location.href = "#register")}
          >
            <Rocket className="mr-2 w-5 h-5" />
            Register Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            className="border-2 border-gradient-to-r from-cyan-400/50 to-purple-400/50 text-foreground hover:bg-card/50 px-10 py-6 text-lg font-semibold bg-transparent backdrop-blur-sm transition-all hover:border-cyan-400"
            onClick={() => (window.location.href = "#community")}
          >
            <Code2 className="mr-2 w-5 h-5" />
            Join the Community
          </Button>
        </div>

        <div className="relative mt-20 mb-8">
          <div className="flex justify-center items-center gap-8 md:gap-12">
            <div className="w-32 h-32 relative animate-float">
              <Image
                src="/blockfest-logo.png"
                alt="Block Fest Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto text-center">
          <div className="border border-purple-500/30 rounded-lg p-4 bg-purple-500/5 animate-glow-pulse">
            <p className="text-2xl md:text-3xl font-bold text-cyan-400">500+</p>
            <p className="text-xs text-muted-foreground mt-1">Builders</p>
          </div>
          <div
            className="border border-purple-500/30 rounded-lg p-4 bg-purple-500/5 animate-glow-pulse"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-2xl md:text-3xl font-bold text-purple-400">$50K</p>
            <p className="text-xs text-muted-foreground mt-1">In Prizes</p>
          </div>
          <div
            className="border border-purple-500/30 rounded-lg p-4 bg-purple-500/5 animate-glow-pulse"
            style={{ animationDelay: "2s" }}
          >
            <p className="text-2xl md:text-3xl font-bold text-pink-400">3 Days</p>
            <p className="text-xs text-muted-foreground mt-1">of Building</p>
          </div>
        </div>
      </div>
    </section>
  )
}
