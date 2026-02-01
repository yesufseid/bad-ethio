"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { RevealOnScroll } from "./visual-effects"
import { X, Cpu, Globe, Zap, Users, Shield, Code, TrendingUp, Presentation } from "lucide-react"

const speakers = [
  {
    name: "Addis Alemayehou",
    role: "Market Specialist",
    expertise: "Chairman of Kazana Group, driving market expansion and innovation in Africa. Addis is a visionary leader with over two decades of experience in bridging the gap between global markets and African potential.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/25-2-1024x1024.jpg",
    icon: TrendingUp,
    tags: ["Market Expansion", "Venture"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "Solomon Kassa",
    role: "Tech Strategist",
    expertise: "Founder of 1888EC, TV personality, and author translating tech into impact. Solomon is renowned for his ability to synthesize complex technological trends into actionable strategies for emerging economies.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/solomonkassa?updatedAt=1769698277641",
    icon: Globe,
    tags: ["Strategy", "Innovation"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Kal Kassa",
    role: "Hashlabs CEO",
    expertise: "Bitcoin advocate pushing mining and education in Ethiopia's global role. Kal is a thought leader in the decentralized infrastructure space, focusing on sustainable energy and on-chain security.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/kalkassa?updatedAt=1769699146540",
    icon: Cpu,
    tags: ["Bitcoin", "Infra"],
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    name: "Hana Terefe",
    role: "Ecosystem Lead",
    expertise: "Organizer of Ethiopia Blockchain Week, driving adoption across African markets. Hana has been instrumental in building the initial bridges for protocol foundations in East Africa.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/G2R8KEbWAAAp3xZ.jpg",
    icon: Zap,
    tags: ["Ecosystem", "Africa"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    name: "Aziz (Motomoto) Mohammed",
    role: "DAO Specialist",
    expertise: "Designing modular DAO systems for scalable governance and inclusive Web3 communities. Aziz focuses on human-centric coordination and sustainable treasury management.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/aziz-motomoto?updatedAt=1769640759050",
    icon: Users,
    tags: ["DAO Ops", "Governance"],
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    name: "Mearaf Tadewos",
    role: "Product Engineer",
    expertise: "A decentralized systems strategist, blockchain ecosystem analyst, and product-centric builder shaping the future of Web3 adoption and innovation. She blends technical expertise with strategic insight to help projects, communities, and markets unlock value and scale responsibly in the decentralized economy.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/mearaf%20tadewos-speaker?updatedAt=1769640970459",
    icon: Code,
    tags: ["Web3 Strategy", "Ecosystem Analyst"],
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    name: "Dawit Mengistu",
    role: "Data Analyst",
    expertise: "Building Web3 communities through data-driven insights across DeFi, crypto markets, and on-chain systems.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/dawit-mengistu?updatedAt=1769641853961",
    icon: Presentation,
    tags: ["Data", "On-chain"],
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    name: "Kokeb Solomon",
    role: "Community Builder",
    expertise: "Contributing to Web3Clubs, ETHSafari, and AfricanOnChain to grow connected Web3 ecosystems.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/koko?updatedAt=1769697954882",
    icon: Users,
    tags: ["Events", "Builder"],
    color: "from-pink-500/20 to-red-500/20"
  },
  {
    name: "Solene Daviaud",
    role: "Dev Educator",
    expertise: "Training developers globally to transition from Web2 to Web3 on blockchain. Solene is the curriculum lead for several global Web3 onboarding initiatives.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/solena%20daviaud?updatedAt=1769698497487",
    icon: Shield,
    tags: ["Education", "Dev3Pack"],
    color: "from-red-500/20 to-orange-500/20",
    objectPosition: "object-[center_20%]"
  },
  {
    name: "Dagim Jida",
    role: "Web3 Developer",
    expertise: "Creating decentralized applications and empowering African communities through on-chain innovation.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/1758712919721_e=1771459200&v=beta&t=4fwLZcCX4_W9cN-wn72DL8hjPRBK4YTpOwDzkBOoLgk",
    icon: Zap,
    tags: ["Founder", "DeFi", "base"],
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    name: "Joanne Wendoh",
    role: "Product Architect",
    expertise: "Visionary technologist and systems builder designing human-centered AI and blockchain platforms that decentralize power and expand access. Founder and product architect focused on sustainable, long-term innovation in ownership, identity, and emerging tech ecosystems.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/1767705951639_e=1771459200&v=beta&t=waeFsaIuLJpIZcScnGazp0HLyY4CukrD1-BL7IxiNnE",
    icon: Shield,
    tags: ["AI", "Blockchain"],
    color: "from-blue-500/20 to-cyan-500/20"
  }
]

export default function Speakers() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Lock body scroll when speaker is selected
  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [selectedId])

  return (
    <section id="speakers" className="py-24 md:py-48 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
            <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-purple-400">Voices of Value</h2>
              <h3 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
                The <br />
                <span className="italic opacity-30 text-neutral-500">Leaders</span>
              </h3>
            </div>

            <p className="text-white/40 text-xl font-light max-w-sm italic border-l border-white/10 pl-8 hidden lg:block">
              "Honoring the builders, thinkers, and visionaries leading Ethiopia’s digital transformation."
            </p>
          </div>
        </RevealOnScroll>

        {/* Aggressive Grid: 1 col on mobile (Apple Today style), 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {speakers.map((speaker, i) => (
            <motion.div
              layoutId={`card-${i}`}
              key={i}
              onClick={() => setSelectedId(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative aspect-4/5 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden cursor-pointer group border border-white/10 bg-neutral-900/40 hover:border-purple-500/30 transition-all duration-500"
              whileHover={{ y: -10, scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div layoutId={`image-${i}`} className="absolute inset-0">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={`object-cover transition-all duration-1000 ${speaker.objectPosition || "object-center"} ${hoveredIndex === i ? "scale-110" : "scale-100"
                    }`}
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <motion.div layoutId={`content-${i}`} className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10">
                      <speaker.icon className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-purple-400/80">{speaker.role}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-none">{speaker.name}</h4>

                  <div className="mt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {speaker.tags.slice(0, 2).map((tag, j) => (
                      <span key={j} className="text-[8px] font-bold px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/70 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] md:rounded-[3rem] pointer-events-none" />
            </motion.div>
          ))}


        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedId !== null && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-0 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-3xl cursor-pointer"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="w-full h-full md:h-auto md:max-w-6xl md:min-h-[70vh] bg-neutral-900 rounded-none md:rounded-[4rem] overflow-hidden relative z-10 flex flex-col lg:flex-row border-0 md:border border-white/10"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 md:top-12 md:right-12 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/20 hover:bg-white hover:text-black transition-all z-20 shadow-2xl"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="h-[45vh] lg:h-auto lg:flex-1 relative">
                <motion.div layoutId={`image-${selectedId}`} className="absolute inset-0">
                  <Image
                    src={speakers[selectedId].image}
                    alt={speakers[selectedId].name}
                    fill
                    priority
                    className={`object-cover ${speakers[selectedId].objectPosition || "object-center"}`}
                  />
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-neutral-900 to-transparent lg:hidden" />
              </div>

              <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-y-auto">
                <motion.div layoutId={`content-${selectedId}`} className="space-y-6 md:space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 md:p-4 rounded-2xl bg-purple-500/20 border border-purple-500/30">
                      {(() => {
                        const Icon = speakers[selectedId].icon;
                        return <Icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />;
                      })()}
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-purple-400 block">{speakers[selectedId].role}</span>
                      <h4 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">{speakers[selectedId].name}</h4>
                    </div>
                  </div>

                  <div className="h-0.5 w-16 bg-purple-500/50" />

                  <p className="text-white/70 text-lg md:text-2xl font-light leading-relaxed italic">
                    {speakers[selectedId].expertise}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {speakers[selectedId].tags.map((tag, j) => (
                      <span key={j} className="text-[10px] md:text-xs font-black px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 bg-white/5 text-white/50 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none opacity-50" />
    </section>
  )
}
