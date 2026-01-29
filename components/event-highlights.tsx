"use client"

import { motion } from "motion/react"
import Image from "next/image"

const highlights = [
  {
    title: "3-Day Hackathon",
    category: "Competition",
    description: "Build Web3 prototypes with real-world impact alongside top developers.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp.jpg",
    color: "bg-purple-500/10"
  },
  {
    title: "Expert Mentorship",
    category: "Guidance",
    description: "Learn directly from industry builders and global protocol experts.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/solomon-tigabu-speaker?updatedAt=1769640352168",
    color: "bg-cyan-500/10"
  },
  {
    title: "Career Acceleration",
    category: "Results",
    description: "Access exclusive internships, grants, and Web3 career pipelines.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_session.jpg",
    color: "bg-pink-500/10"
  },
  {
    title: "Global Ecosystem",
    category: "Network",
    description: "Connect with 600+ builders and founders from the Ethereum community.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_4.jpg",
    color: "bg-blue-500/10"
  },
  {
    title: "Web3 Native",
    category: "Experience",
    description: "On-chain voting, NFT tickets, and POAPs for every participant.",
    image: "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_2.jpg",
    color: "bg-indigo-500/10"
  },
]

export default function EventHighlights() {
  return (
    <section id="highlights" className="py-24 md:py-40 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto mb-16 md:mb-32">
        <h2 className="text-4xl sm:text-5xl md:text-[10rem] font-black text-white tracking-tighter leading-[1.1] md:leading-[1.2] animate-slide-up py-8 md:py-12 overflow-visible">
          Season <span className="italic opacity-50 text-neutral-500 inline-block px-6 md:px-12 py-4 md:py-8 -mx-6 md:-mx-12 -my-4 md:-my-8 overflow-visible">Highlights</span>
        </h2>
        <p className="text-white/40 text-lg sm:text-2xl md:text-3xl max-w-2xl mt-6 md:mt-12 font-light tracking-tight">
          An intense, 7-day immersion into the future of decentralization.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-32">
        {highlights.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-24 items-center`}
          >
            {/* Massive Image Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full aspect-4/3 md:aspect-16/10 rounded-[3.5rem] overflow-hidden border border-white/5 relative group bg-neutral-900"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-[filter,transform,opacity] duration-[2.5s] opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Content Block */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 1 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 space-y-8"
            >
              <span className="text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
                {item.category}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">
                {item.title}
              </h3>
              <p className="text-white/40 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-lg">
                {item.description}
              </p>

              <div className="pt-8">
                <div className="h-px w-24 bg-linear-to-r from-white/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Background Decorative atmosphere */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-500/5 to-transparent pointer-events-none" />
    </section>
  )
}
