"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const speakers = [
  { name: "BaD Ethiopia", role: "Event Organizer", expertise: "Ecosystem Building" },
  { name: "Protocol Experts", role: "Founding Partners", expertise: "Layer 2s & Infrastructure" },
  { name: "Ecosystem Builders", role: "Mentors & Judges", expertise: "Web3 Development" },
  { name: "Early-Stage Founders", role: "Guest Speakers", expertise: "Startup & DAO Pathways" },
  { name: "University Partners", role: "Co-Organizers", expertise: "Talent Pipeline" },
  { name: "Web3 Investors", role: "Opportunity Access", expertise: "Grants & Internships" },
]

export default function Speakers() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="speakers" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Organizers & Partners</h2>

        <div className="md:hidden">
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={goToPrev}
              className="p-2 rounded-lg bg-primary/20 border border-primary/30 hover:bg-primary/30 transition-colors"
            >
              <ChevronLeft size={20} className="text-primary" />
            </button>

            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {speakers.map((speaker, i) => (
                  <div key={i} className="w-full flex-shrink-0">
                    <div className="p-6 rounded-lg border border-border bg-card/50">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{speaker.name.charAt(0)}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{speaker.name}</h3>
                      <p className="text-sm text-accent mb-2">{speaker.role}</p>
                      <p className="text-foreground/70 text-sm">{speaker.expertise}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-lg bg-primary/20 border border-primary/30 hover:bg-primary/30 transition-colors"
            >
              <ChevronRight size={20} className="text-primary" />
            </button>
          </div>

          <div className="flex justify-center gap-2">
            {speakers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-primary w-8" : "bg-primary/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{speaker.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{speaker.name}</h3>
              <p className="text-sm text-accent mb-2">{speaker.role}</p>
              <p className="text-foreground/70 text-sm">{speaker.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
