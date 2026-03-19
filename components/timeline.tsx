"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const events = [
  {
    time: "May 13",
    title: "Opening & Alignment",
    description: "Opening ceremony, ecosystem vision, and expectations. Brand association with national Web3 initiative.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_5.jpg",
    value: "National Visibility"
  },
  {
    time: "May 14",
    title: "Team Formation & Ideation",
    description: "Team formation, ideation sprints, and workshops. Early exposure to top student builders.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_3.jpg",
    value: "Talent Discovery"
  },
  {
    time: "May 15",
    title: "Hackathon Kickoff",
    description: "Intense hacking begins with focused workshops. Hands-on protocol engagement for builders.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/pizza_party_2.jpg",
    value: "Protocol Integration"
  },
  {
    time: "May 16",
    title: "Build Phase",
    description: "Active development with 24/7 technical support and mentor guidance. Real product engineering.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp.jpg",
    value: "Product Development"
  },
  {
    time: "May 17",
    title: "Final Submission",
    description: "Code freeze and pitch preparation. Culmination of technical development with measurable deliverables.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_session.jpg",
    value: "Measurable ROI"
  },
  {
    time: "May 18",
    title: "Internal Demo Day",
    description: "Technical demos and mentor review. Shortlisting the top 10 projects from the cohort.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_18_2026-01-25_22-34-06.jpg?updatedAt=1769371906138",
    value: "Curated Deal Flow"
  },
  {
    time: "May 19",
    title: "Conference Preparation",
    description: "Demo polish, storytelling, and stage preparation for the main stage presentation.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_4.jpg",
    value: "Storytelling"
  },
  {
    time: "May 20",
    title: "Conference & Awards",
    description: "Top 10 demos on the main stage, keynotes, panels, and award ceremony. Thought leadership visibility.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_14_2026-01-25_22-37-31.jpg",
    value: "Global Exposure"
  },
]

export default function Timeline() {
  return (
    <section id="schedule" className="py-40 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-[clamp(4rem,10vw,8rem)] font-black text-white mb-32 text-center tracking-tighter leading-none animate-slide-up">
          Core <span className="italic text-purple-500/50">Program</span>
        </h2>

        <div className="space-y-40">
          {events.map((event, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-16 items-center animate-fade-in ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <p className="text-purple-400 font-bold uppercase tracking-[0.2em] text-[10px]">{event.time}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-[10px]">{event.value}</p>
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
                  {event.title}
                </h3>
                <p className="text-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto md:mx-0">
                  {event.description}
                </p>
              </div>

              <div className="flex-1 relative w-full h-[350px] md:h-[450px] rounded-4xl md:rounded-[3rem] overflow-hidden border border-white/10 bg-neutral-900/30 group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-1 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
