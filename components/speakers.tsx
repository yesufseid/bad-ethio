"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const speakers = [
  { name: "BaD Ethiopia", role: "Event Organizer", expertise: "Ecosystem Building" },
  { name: "Protocol Experts", role: "Founding Partners", expertise: "Layer 2s & Infrastructure" },
  { name: "Ecosystem Builders", role: "Mentors & Judges", expertise: "Web3 Development" },
  { name: "Early-Stage Founders", role: "Guest Speakers", expertise: "Startup & DAO Pathways" },
  { name: "University Partners", role: "Co-Organizers", expertise: "Talent Pipeline" },
  { name: "Web3 Investors", role: "Opportunity Access", expertise: "Grants & Internships" },
]

export default function Speakers() {
  const items = speakers.map((speaker) => ({
    name: speaker.name,
    title: speaker.role,
    quote: speaker.expertise,
  }))

  return (
    <section id="speakers" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Organizers & Partners</h2>

        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={items} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  )
}
