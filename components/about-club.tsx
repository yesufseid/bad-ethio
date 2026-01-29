"use client"

import { Carousel } from "./carousel"
import Image from "next/image"

export default function AboutClub() {
  const clubItems = [
    { title: "Developer Focus", description: "Talent discovery, onboarding, and conversion in Web3" },
    { title: "Outcome-Driven", description: "Measurable impact through hackathons and ecosystem access" },
    { title: "Chain-Agnostic", description: "Supporting all blockchain ecosystems and technologies" },
  ]

  const clubCards = clubItems.map((item, i) => (
    <div
      key={i}
      className="p-10 rounded-[2.5rem] border border-white/10 bg-neutral-900/30 backdrop-blur-3xl hover:bg-neutral-900/50 transition-all duration-500 animate-fade-in h-full shadow-2xl group hover:scale-[1.02]"
      style={{ animationDelay: `${i * 0.1}s` }}
    >
      <h3 className="text-3xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors tracking-tighter">{item.title}</h3>
      <p className="text-foreground/70 text-xl font-light leading-relaxed">{item.description}</p>
    </div>
  ))

  return (
    <section id="about" className="relative py-24 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Background Image Accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-0 opacity-10 pointer-events-none hidden lg:block translate-x-20">
        <Image
          src="https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/core_team_members_2.jpg?updatedAt=1769371906280"
          alt="Team Background"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-background/10 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 animate-fade-in max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[clamp(4rem,10vw,8rem)] font-black text-white mb-6 md:mb-10 leading-[1.1] md:leading-[1.2] tracking-tighter animate-slide-up py-8 md:py-12 overflow-visible">
            Our <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic inline-block px-6 md:px-12 py-4 md:py-8 -mx-6 md:-mx-12 -my-4 md:-my-8 overflow-visible">Community</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/70 leading-tight text-balance font-light animate-fade-in tracking-tight px-2" style={{ animationDelay: "0.2s" }}>
            BaD (Builders & Developers) Ethiopia is the driving force behind BlockFest,
            cultivating a vibrant ecosystem where technical excellence meets radical innovation.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">{clubCards}</div>

        <div className="md:hidden">
          <Carousel items={clubCards} itemsPerView={1} />
        </div>
      </div>
    </section>
  )
}
