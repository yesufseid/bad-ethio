"use client"

import { Carousel } from "./carousel"

export default function AboutClub() {
  const clubItems = [
    { title: "Developer Focus", description: "Talent discovery, onboarding, and conversion in Web3" },
    { title: "Outcome-Driven", description: "Measurable impact through hackathons and ecosystem access" },
    { title: "Chain-Agnostic", description: "Supporting all blockchain ecosystems and technologies" },
  ]

  const clubCards = clubItems.map((item, i) => (
    <div
      key={i}
      className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors animate-fade-in h-full"
      style={{ animationDelay: `${i * 0.1}s` }}
    >
      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
      <p className="text-foreground/70">{item.description}</p>
    </div>
  ))

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About BaD Ethiopia</h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-balance">
            BaD Ethiopia is a university-first Web3 ecosystem-building initiative designed to unlock, identify, and
            accelerate the next generation of blockchain developers, builders, and founders in Ethiopia. We bridge the
            gap between Web2 student developers and real Web3 opportunities, while creating a sustainable pipeline of
            blockchain talent for the global Web3 ecosystem.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">{clubCards}</div>

        <div className="md:hidden">
          <Carousel items={clubCards} itemsPerView={1} />
        </div>
      </div>
    </section>
  )
}
