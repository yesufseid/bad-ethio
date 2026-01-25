"use client"

import Image from "next/image"

const tracks = [
  {
    title: "The BUIDL Track",
    color: "text-purple-400",
    description: "3-day Web3 hackathon with smart contract workshops, dev-tooling demos, and mentor office hours. Build real prototypes and deploy to blockchain.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_3.jpg"
  },
  {
    title: "The Alpha Track",
    color: "text-cyan-400",
    description: "Keynotes on DeFi, DAOs, RWA, DePIN, and Privacy. Learn from protocol experts and gain strategic context for your builder journey.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_2.jpg"
  },
  {
    title: "The Culture Track",
    color: "text-pink-400",
    description: "Networking mixers, NFT showcases, founder-student meetups, and sponsor activations. Build relationships in a long-term community.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_12_2026-01-25_22-37-31.jpg"
  },
  {
    title: "Web3 Integration",
    color: "text-blue-400",
    description: "NFT access passes, POAPs, and on-chain voting. BLOCKFEST eats its own dog food with composable Web3 infrastructure.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_15_2026-01-25_22-37-31.jpg"
  }
]

export default function AboutEvent() {
  return (
    <section id="event" className="py-40 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-8xl font-black text-white mb-24 tracking-tighter leading-none animate-slide-up">
          The <span className="italic opacity-50 text-neutral-500">Tracks</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {tracks.map((track, i) => (
            <div
              key={i}
              className="group relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-900/30 backdrop-blur-3xl animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Image
                src={track.image}
                alt={track.title}
                fill
                className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[2s] grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-linear-to-t from-black via-black/80 to-transparent z-20">
                <h3 className={`text-3xl font-black mb-4 tracking-tighter ${track.color}`}>{track.title}</h3>
                <p className="text-white/40 text-xl font-light leading-relaxed max-w-sm">{track.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
