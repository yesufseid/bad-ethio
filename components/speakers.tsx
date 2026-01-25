"use client"

import Image from "next/image"

const speakers = [
  {
    name: "BaD Ethiopia",
    role: "Event Organizer",
    expertise: "Ecosystem Building",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/BaD_Ethiopia.jpg"
  },
  {
    name: "Protocol Experts",
    role: "Founding Partners",
    expertise: "Infrastructure",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_session.jpg"
  },
  {
    name: "Builders",
    role: "Mentors & Judges",
    expertise: "Web3 Development",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_6.jpg"
  },
  {
    name: "Founders",
    role: "Guest Speakers",
    expertise: "Startup Pathways",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/core_team_members_3.jpg"
  },
  {
    name: "Partners",
    role: "Co-Organizers",
    expertise: "University Hubs",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/core_team_members_6.jpg"
  },
  {
    name: "Investors",
    role: "Opportunity Access",
    expertise: "Grants & Interns",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_18_2026-01-25_22-37-31.jpg"
  },
]

export default function Speakers() {
  return (
    <section id="speakers" className="py-40 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/2 tracking-tighter whitespace-nowrap pointer-events-none uppercase">
        Collaborators
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-8xl font-black text-white mb-32 text-center tracking-tighter leading-none animate-slide-up">
          Our <span className="italic opacity-50 text-neutral-500">Collaborators</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          {speakers.map((speaker, i) => (
            <div key={i} className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-900/30 backdrop-blur-3xl animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-10">
                <span className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-2">{speaker.role}</span>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-2">{speaker.name}</h3>
                <p className="text-white/40 font-light text-lg">{speaker.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
