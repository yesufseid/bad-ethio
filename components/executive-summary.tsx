"use client"

import { RevealOnScroll } from "./visual-effects"

export default function ExecutiveSummary() {
        return (
                <section id="executive-summary" className="py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
                        {/* Background radial glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="max-w-7xl mx-auto relative z-10">
                                <RevealOnScroll>
                                        <div className="mb-24">
                                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                                                        <div>
                                                                <h2 className="text-sm font-black uppercase tracking-[0.5em] text-purple-400 mb-4">Executive Overview</h2>
                                                                <p className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                                                                        Talent Access. <br />
                                                                        <span className="opacity-40 italic">Developer Outcomes.</span>
                                                                </p>
                                                        </div>
                                                        <div className="flex flex-col gap-4 border-l border-white/10 pl-8">
                                                                <div>
                                                                        <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">Season Duration</p>
                                                                        <p className="text-xl font-bold text-white">May 13 – May 20, 2026</p>
                                                                </div>
                                                                <div>
                                                                        <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">BlockFest Dates</p>
                                                                        <p className="text-xl font-bold text-purple-400">May 13 – May 20, 2026</p>
                                                                </div>
                                                                <div>
                                                                        <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">HS Blockchain Tour</p>
                                                                        <p className="text-xl font-bold text-cyan-400">May 13 – May 20, 2026</p>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-12 items-start">
                                                        <div className="space-y-6">
                                                                <h3 className="text-purple-400 font-black uppercase tracking-widest text-xs">Strategic Positioning</h3>
                                                                <p className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight">
                                                                        BlockFest is a <span className="text-purple-400">structured conversion engine</span> — transforming early interest into skilled builders and long-term ecosystem contributors.
                                                                </p>
                                                        </div>
                                                        <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed pt-8 md:pt-12">
                                                                This calendar presents BlockFest not as a one-off event, but as a multi-month pipeline
                                                                delivering measurable developer engagement and partner ROI.
                                                        </p>
                                                </div>
                                        </div>
                                </RevealOnScroll>

                                <RevealOnScroll>
                                        <div className="grid md:grid-cols-3 gap-8 mb-32">
                                                <div className="p-12 rounded-[3.5rem] bg-linear-to-br from-purple-500/10 to-transparent border border-white/10 backdrop-blur-xl group hover:border-purple-500/30 transition-all duration-500">
                                                        <h3 className="text-purple-400 font-black uppercase tracking-widest text-xs mb-8">Mission Statement</h3>
                                                        <p className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight group-hover:text-purple-300 transition-colors">
                                                                To bridge the gap between <span className="text-white/40 italic">Web2 students</span> and real <span className="text-purple-400">Web3 opportunities</span>.
                                                        </p>
                                                </div>
                                                <div className="md:col-span-2 p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                                                        <h3 className="text-cyan-400 font-black uppercase tracking-widest text-xs mb-8">Ecosystem Pipeline</h3>
                                                        <div className="grid sm:grid-cols-2 gap-12">
                                                                <div>
                                                                        <p className="text-xl text-white/50 font-light mb-6">
                                                                                Bridging protocol foundations and student talent through
                                                                                <span className="text-white font-medium italic block mt-2">Measurable outputs and validated products.</span>
                                                                        </p>
                                                                </div>
                                                                <div className="space-y-6">
                                                                        {[
                                                                                { title: "Talent Discovery", desc: "Identifying top STEM potential early" },
                                                                                { title: "Structured Onboarding", desc: "Guided path from interest to building" },
                                                                                { title: "Ecosystem ROI", desc: "Long-term value for protocol partners" },
                                                                        ].map((item, i) => (
                                                                                <div key={i} className="flex gap-4">
                                                                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                                                                                        <div>
                                                                                                <h4 className="text-white font-black text-sm uppercase tracking-wider">{item.title}</h4>
                                                                                                <p className="text-white/30 text-sm">{item.desc}</p>
                                                                                        </div>
                                                                                </div>
                                                                        ))}
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </RevealOnScroll>

                                <RevealOnScroll>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                                                {[
                                                        { label: "Expected Attendance", value: "400-600", sub: "Students" },
                                                        { label: "Universities", value: "3-5", sub: "Represented" },
                                                        { label: "Primary Focus", value: "Developer", sub: "Outcomes" },
                                                        { label: "Secondary Focus", value: "Ecosystem", sub: "Onboarding" },
                                                ].map((stat, i) => (
                                                        <div key={i} className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-4 group-hover:text-purple-400/50 transition-colors">{stat.label}</span>
                                                                <span className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2 group-hover:scale-105 transition-transform origin-left">{stat.value}</span>
                                                                <span className="text-lg font-light text-white/40 italic">{stat.sub}</span>
                                                        </div>
                                                ))}
                                        </div>
                                </RevealOnScroll>
                        </div>
                </section>
        )
}
