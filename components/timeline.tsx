"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const events = [
  {
    time: "January 2026",
    title: "High School Tour",
    description: "Blockchain education in 3 STEM-focused schools across Ethiopia",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_4.jpg"
  },
  {
    time: "Feb 1-3",
    title: "Hackathon Days 1-3",
    description: "BUIDL Track: 3-day hackathon with workshops and mentorship",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_5.jpg"
  },
  {
    time: "Feb 2-3",
    title: "Alpha Track",
    description: "Keynotes on DeFi, DAOs, RWA, DePIN, Privacy & careers",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_3.jpg"
  },
  {
    time: "Feb 2-3",
    title: "Culture Track",
    description: "Networking mixers, sponsor activations, founder meetups",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/pizza_party_2.jpg"
  },
  {
    time: "Feb 3 Evening",
    title: "Final Demos & Judging",
    description: "Showcase projects to judges from protocol foundations",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_11_2026-01-25_22-37-31.jpg"
  },
  {
    time: "Feb 3",
    title: "Awards Ceremony",
    description: "Winners announced for prizes, grants, and internships",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_14_2026-01-25_22-37-31.jpg"
  },
]

export default function Timeline() {
  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-8xl font-black text-white mb-32 text-center tracking-tighter leading-none animate-slide-up">
          Season <span className="italic opacity-50 text-neutral-500">Timeline</span>
        </h2>

        <div className="space-y-32">
          {events.map((event, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-12 items-center animate-fade-in ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex-1 space-y-4 text-center md:text-left">
                <p className="text-purple-400 font-black uppercase tracking-[0.3em] text-xs">{event.time}</p>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">{event.title}</h3>
                <p className="text-foreground/40 text-xl font-light leading-relaxed max-w-md mx-auto md:mx-0">{event.description}</p>
              </div>

              <div className="flex-1 relative w-full h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-900/30 group">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
