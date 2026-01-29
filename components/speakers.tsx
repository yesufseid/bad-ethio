"use client"

import Image from "next/image"

const speakers = [
  {
    name: "Solomon Tigabu",
    role: "Founder of CRE8IVY Designs",
    expertise: "Creative technologist in software, branding, and product design with 600+ designs delivered.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/solomon-tigabu-speaker?updatedAt=1769640352168"
  },
  {
    name: "Aziz Mohammed",
    role: "DAO Strategist at BuildaDAO",
    expertise: "Operating at the intersection of blockchain and AI to design lean, modular DAO systems.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/aziz-motomoto?updatedAt=1769640759050"
  },
  {
    name: "Mearaf Tadewos",
    role: "Full-stack Web3 Developer",
    expertise: "Specializing in decentralized systems, complex frontend architecture, and high-quality UX/UI.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/mearaf%20tadewos-speaker?updatedAt=1769640970459"
  },
  {
    name: "Dawit Mengistu",
    role: "Blockchain Researcher and DeFi Data Analyst",
    expertise: "Actively building Web3 communities through data-driven insights across decentralized finance, crypto markets, and on-chain systems.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/dawit-mengistu?updatedAt=1769641853961"
  },
]

export default function Speakers() {
  return (
    <section id="speakers" className="py-40 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/2 tracking-tighter whitespace-nowrap pointer-events-none uppercase">
        Speakers
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-8xl font-black text-white mb-32 text-center tracking-tighter leading-none animate-slide-up">
          Our <span className="italic opacity-50 text-neutral-500">Speakers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {speakers.map((speaker, i) => (
            <div key={i} className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-900/30 backdrop-blur-3xl animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{speaker.role}</span>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-2">{speaker.name}</h3>
                <p className="text-white/60 font-light text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 line-clamp-3">
                  {speaker.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
