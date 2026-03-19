"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { RevealOnScroll } from "./visual-effects"

const phases = [
        {
                season: "Season I",
                title: "Genesis",
                period: "May 13 - 15, 2026",
                tagline: "The Seed of Intent",
                description: "In the first days of the week, we plant the seeds. This is the phase of deep architecture, where we align the core team, define our OKRs, and sculpt the technical foundations that will support hundreds of builders.",
                color: "from-purple-500/40 to-transparent",
                glow: "bg-purple-900/30",
                dots: "bg-purple-400",
                outputs: ["Operational Clarity", "Architecture Locked", "Talent Funnel Open"]
        },
        {
                season: "Season II",
                title: "The Surge",
                period: "May 16 - 18, 2026",
                tagline: "Kinetic Momentum",
                description: "The energy shifts. Midweek is about the High School Blockchain Tour, our first major pulse. We lock in partners, prime the speakers, and ignite the community to transition from theory into raw kinetic energy.",
                color: "from-cyan-500/40 to-transparent",
                glow: "bg-cyan-900/30",
                dots: "bg-cyan-400",
                highlight: {
                        date: "May 16-18",
                        label: "The Breakthrough: HS Tour"
                },
                outputs: ["Partner Lock-in", "Community Ignited", "HS Talent Captured"]
        },
        {
                season: "Season III",
                period: "May 13 - May 20, 2026",
                title: "Peak Impact",
                tagline: "Total Manifestation",
                description: "The journey reaches its zenith. BlockFest is not just an event; it's the conversion. We take the early interest and transform it into 80+ validated products, curated talent pools, and absolute ROI for the ecosystem.",
                color: "from-pink-500/40 to-transparent",
                glow: "bg-pink-900/30",
                dots: "bg-pink-400",
                outputs: ["80+ Products Built", "Ecosystem Conversion", "Talent Mastery"]
        }
]

export default function SeasonRoadmap() {
        const containerRef = useRef(null)
        const { scrollYProgress } = useScroll({
                target: containerRef,
                offset: ["start center", "end center"]
        })

        const pathLength = useSpring(scrollYProgress, {
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
        })

        return (
                <section id="roadmap" ref={containerRef} className="py-48 md:py-96 px-4 bg-black relative overflow-hidden">
                        {/* Cinematic Background Elements */}
                        <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-purple-600/5 rounded-full blur-[150px] animate-pulse" />
                                <div className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-cyan-600/5 rounded-full blur-[180px] animate-pulse delay-1000" />
                        </div>

                        <div className="max-w-7xl mx-auto relative">
                                <RevealOnScroll>
                                        <div className="text-center mb-48 md:mb-72">
                                                <h2 className="text-xs font-black uppercase tracking-[0.6em] text-white/40 mb-8 block">The Journey of 2026</h2>
                                                <h3 className="text-5xl md:text-9xl font-black text-white tracking-tighter leading-none mb-12">
                                                        The Seasons <br />
                                                        <span className="italic opacity-30 text-neutral-500">of Growth</span>
                                                </h3>
                                                <p className="text-white/40 text-xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed italic">
                                                        "We don't build events. We build pipelines for the future of blockchain in Ethiopia."
                                                </p>
                                        </div>
                                </RevealOnScroll>

                                {/* The Central Nerve (Pipeline Line) */}
                                <div className="absolute left-5.5 md:left-1/2 top-125 bottom-0 w-px bg-white/5 hidden sm:block">
                                        <motion.div
                                                className="absolute top-0 left-0 w-full bg-linear-to-b from-purple-500 via-cyan-500 to-pink-500 origin-top shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                                                style={{ height: "100%", scaleY: pathLength }}
                                        />
                                </div>

                                <div className="space-y-48 md:space-y-96 relative pb-48">
                                        {phases.map((phase, i) => (
                                                <div key={i} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-start gap-12 md:gap-32`}>
                                                        {/* Vertical Connector Circle (Mobile/Desktop) */}
                                                        <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 mt-12 z-20">
                                                                <motion.div
                                                                        initial={{ scale: 0, opacity: 0 }}
                                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                                        viewport={{ once: true, margin: "-100px" }}
                                                                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${phase.dots} border-4 border-black shadow-[0_0_20px_rgba(255,255,255,0.2)]`}
                                                                />
                                                        </div>

                                                        {/* Content Block */}
                                                        <motion.div
                                                                initial={{ opacity: 0, x: i % 2 === 1 ? 50 : -50, y: 50 }}
                                                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                                                viewport={{ once: true, margin: "-100px" }}
                                                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                                                className="flex-1 w-full pl-12 md:pl-0"
                                                        >
                                                                <div className="relative group">
                                                                        {/* Suggestive Aura */}
                                                                        <div className={`absolute -inset-12 ${phase.glow} rounded-[4rem] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                                                                        <div className="relative z-10">
                                                                                <div className="flex items-center gap-4 mb-6">
                                                                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">{phase.season}</span>
                                                                                        <div className="h-px w-12 bg-white/10" />
                                                                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">{phase.period}</span>
                                                                                </div>

                                                                                <h4 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-none">
                                                                                        {phase.title}
                                                                                </h4>
                                                                                <p className={`text-xl md:text-2xl font-black italic bg-linear-to-r from-white to-white/40 bg-clip-text text-transparent mb-8`}>
                                                                                        {phase.tagline}
                                                                                </p>

                                                                                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                                                                                        {phase.description}
                                                                                </p>

                                                                                {phase.highlight && (
                                                                                        <div className="mb-12 inline-block px-6 py-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-sm">
                                                                                                <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">{phase.highlight.label}</span>
                                                                                                <p className="text-white/60 text-sm mt-1">{phase.highlight.date}</p>
                                                                                        </div>
                                                                                )}

                                                                                <div className="space-y-4">
                                                                                        <h5 className="text-[10px] font-black uppercase tracking-widest text-white/20">Outcome Manifestations</h5>
                                                                                        <div className="flex flex-wrap gap-3">
                                                                                                {phase.outputs.map((out, j) => (
                                                                                                        <span key={j} className="text-[10px] font-bold px-4 py-2 rounded-full border border-white/5 bg-white/3 text-white/40 hover:text-white hover:border-white/20 transition-all cursor-default">
                                                                                                                {out}
                                                                                                        </span>
                                                                                                ))}
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </motion.div>

                                                        {/* Suggestive Visual Metaphor (Decorative) */}
                                                        <div className="hidden md:flex flex-1 items-center justify-center relative min-h-100">
                                                                <motion.div
                                                                        initial={{ opacity: 0, scale: 0.5 }}
                                                                        whileInView={{ opacity: 0.2, scale: 1 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 2 }}
                                                                        className={`absolute w-full aspect-square rounded-full border border-white/5 ${phase.glow} overflow-hidden`}
                                                                >
                                                                        {/* Abstract Particles or Moving Shapes could go here */}
                                                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]" />
                                                                </motion.div>

                                                                <h4 className="absolute text-[12vw] font-black text-white/5 uppercase tracking-tighter select-none pointer-events-none">
                                                                        {phase.title}
                                                                </h4>
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                        </div>

                        {/* Suggestive Light Leaks */}
                        <div className="absolute top-0 left-0 w-full h-screen bg-linear-to-b from-purple-500/5 to-transparent pointer-events-none mix-blend-screen" />
                        <div className="absolute bottom-0 right-0 w-full h-screen bg-linear-to-t from-pink-500/5 to-transparent pointer-events-none mix-blend-screen" />
                </section>
        )
}
