import { CheckCircle2 } from "lucide-react"

const events = [
  { time: "Q4 2025", title: "Sponsor Outreach", description: "Finalize partnerships and ecosystem coordination" },
  {
    time: "January 2026",
    title: "High School Tour",
    description: "Blockchain education in 3 STEM-focused schools across Ethiopia",
  },
  {
    time: "Feb 1-3",
    title: "Hackathon Days 1-3",
    description: "BUIDL Track: 3-day hackathon with workshops and mentorship",
  },
  { time: "Feb 2-3", title: "Alpha Track", description: "Keynotes on DeFi, DAOs, RWA, DePIN, Privacy & careers" },
  { time: "Feb 2-3", title: "Culture Track", description: "Networking mixers, sponsor activations, founder meetups" },
  {
    time: "Feb 3 Evening",
    title: "Final Demos & Judging",
    description: "Showcase projects to judges from protocol foundations",
  },
  { time: "Feb 3", title: "Awards Ceremony", description: "Winners announced for prizes, grants, and internships" },
  {
    time: "30 Days Post",
    title: "Impact Report",
    description: "Sponsor reports with conversion metrics and top talent data",
  },
]

export default function Timeline() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">BlockFest Timeline</h2>

        <div className="space-y-8">
          {events.map((event, i) => (
            <div key={i} className="flex gap-6 animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-6 h-6 text-primary mb-2" />
                {i < events.length - 1 && <div className="w-1 h-12 bg-border" />}
              </div>
              <div className="pb-4">
                <p className="text-sm text-accent font-semibold">{event.time}</p>
                <h3 className="text-lg font-bold text-white mt-1">{event.title}</h3>
                <p className="text-foreground/70 mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
