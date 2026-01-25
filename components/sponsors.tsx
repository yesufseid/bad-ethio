"use client"

import Image from "next/image"

const sponsors = [
  { name: "Avalanche", logo: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche.jpg", tier: "Gold" },
  { name: "ImageKit", logo: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/BaD_Ethiopia.jpg", tier: "Platinum" },
  // Add more as needed
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-40 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Backed by <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Powerhouses</span>
          </h2>
          <p className="text-foreground/40 text-xl font-light">Join the global leaders supporting the future of Web3 in Ethiopia.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] border border-white/5 bg-neutral-900/30 backdrop-blur-3xl hover:bg-neutral-900/50 transition-all duration-500 group"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white/30 font-black tracking-[0.2em] uppercase text-[10px]">{sponsor.tier}</span>
            </div>
          ))}

          {/* Placeholder for "Your Logo" */}
          <div className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] border border-dashed border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer group">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white/40 text-4xl font-light">+</span>
            </div>
            <span className="text-white/40 font-black tracking-widest uppercase text-xs">Become a Sponsor</span>
          </div>
        </div>
      </div>
    </section>
  )
}
