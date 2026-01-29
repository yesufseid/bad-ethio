"use client"

import { Check, Info, TrendingUp, Users, Target, ShieldCheck, Zap, Briefcase, GraduationCap } from "lucide-react"

const tiers = [
        {
                name: "Node",
                type: "Community Partner",
                price: "$500 - $2,999",
                color: "from-slate-400 to-slate-200",
                description: "Ideal for community-focused organizations and emerging protocols.",
                benefits: [
                        "Logo on website & official materials",
                        "Social media mentions",
                        "Branded swag distribution",
                        "Community partner recognition",
                        "Mentorship participation",
                        "Tooling credits/product access",
                ]
        },
        {
                name: "Validator",
                type: "Ecosystem & Hiring Partner",
                price: "$2,999 - $3,999",
                color: "from-amber-400 to-yellow-200",
                description: "For established protocols looking to hire top-tier Ethiopian talent.",
                benefits: [
                        "All Node benefits",
                        "Workshop hosting opportunity",
                        "Hackathon judging panel seat",
                        "Booth space in BUIDL zone",
                        "Talent access (Resumes & GitHub)",
                        "Optional sponsored side bounty",
                        "Enhanced brand visibility",
                ],
                featured: true
        },
        {
                name: "Whale",
                type: "Strategic Title Partner",
                price: "$3,999+",
                color: "from-cyan-400 to-blue-200",
                description: "Maximum visibility and strategic alignment with the ecosystem.",
                benefits: [
                        "All Validator benefits",
                        "Event naming rights (Powered by...)",
                        "Main stage keynote session",
                        "Dedicated sponsored track",
                        "VIP networking dinner access",
                        "Full talent data & GitHub access",
                        "Custom branded bounty program",
                ]
        }
]

const valueProps = [
        {
                icon: <Users className="w-6 h-6 text-purple-400" />,
                title: "Talent Access",
                description: "Direct connection to high-potential Ethiopian builders with ranked hackathon outputs."
        },
        {
                icon: <Target className="w-6 h-6 text-cyan-400" />,
                title: "Branding",
                description: "Establish your protocol as a leader in one of Africa's fastest-growing tech hubs."
        },
        {
                icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
                title: "Ecosystem Growth",
                description: "Drive adoption of your tech stack through hands-on workshops and real project deployment."
        }
]

const budget = [
        { label: "Venue & Logistics", value: "40%", color: "bg-purple-500" },
        { label: "Marketing & PR", value: "20%", color: "bg-cyan-500" },
        { label: "Speakers & Travel", value: "20%", color: "bg-pink-500" },
        { label: "Operational Reserves", value: "20%", color: "bg-amber-500" },
]

export default function SponsorshipDetails() {
        return (
                <section id="partnership" className="py-40 px-4 sm:px-6 lg:px-8 bg-black relative">
                        <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-24">
                                        <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                                                Partner with <span className="italic opacity-50 text-neutral-500">Purpose</span>
                                        </h2>
                                        <p className="text-foreground/40 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                                                BlockFest is positioned as a talent access platform first, not just a branding exercise.
                                        </p>
                                </div>

                                {/* Value Prop */}
                                <div className="grid md:grid-cols-3 gap-8 mb-24">
                                        {valueProps.map((prop, i) => (
                                                <div key={i} className="p-10 rounded-[2.5rem] border border-white/5 bg-neutral-900/20 backdrop-blur-3xl">
                                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                                                                {prop.icon}
                                                        </div>
                                                        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{prop.title}</h3>
                                                        <p className="text-foreground/40 text-lg font-light leading-relaxed">{prop.description}</p>
                                                </div>
                                        ))}
                                </div>

                                {/* Audience & Reach ROI */}
                                <div className="grid lg:grid-cols-2 gap-16 mb-40">
                                        <div className="space-y-12">
                                                <div>
                                                        <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-none">Target Audience</h3>
                                                        <p className="text-foreground/40 text-lg font-light">Estimated breakdown based on ecosystem data.</p>
                                                </div>
                                                <div className="space-y-8">
                                                        {[
                                                                { label: "Developers & Engineering Students", value: "60%", color: "bg-purple-500" },
                                                                { label: "Early-Stage Founders & Builders", value: "20%", color: "bg-cyan-500" },
                                                                { label: "Designers & Product Thinkers", value: "10%", color: "bg-pink-500" },
                                                                { label: "Community Leaders & Researchers", value: "10%", color: "bg-amber-500" },
                                                        ].map((item, i) => (
                                                                <div key={i} className="space-y-4">
                                                                        <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                                                                                <span className="text-white/60">{item.label}</span>
                                                                                <span className="text-white">{item.value}</span>
                                                                        </div>
                                                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                                                <div className={`h-full ${item.color}`} style={{ width: item.value }} />
                                                                        </div>
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>

                                        <div className="bg-neutral-900/10 p-12 rounded-[3rem] border border-white/5 flex flex-col justify-center">
                                                <h3 className="text-2xl font-black text-white mb-8 tracking-tighter uppercase">Projected Reach</h3>
                                                <div className="grid grid-cols-2 gap-8 mb-12">
                                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                                                <div className="text-4xl font-black text-cyan-400 mb-2">10k+</div>
                                                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Digital Impressions</div>
                                                        </div>
                                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                                                <div className="text-4xl font-black text-purple-400 mb-2">30+</div>
                                                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Campus activations</div>
                                                        </div>
                                                </div>
                                                <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-6">Distribution Channels</h4>
                                                <div className="flex flex-wrap gap-3">
                                                        {["University Clubs", "Telegram", "Discord", "X / Twitter", "LinkedIn", "Partner Cross-Promotion"].map((channel, i) => (
                                                                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60">
                                                                        {channel}
                                                                </span>
                                                        ))}
                                                </div>
                                        </div>
                                </div>

                                {/* Tiers */}
                                <div className="grid lg:grid-cols-3 gap-8 mb-40">
                                        {tiers.map((tier, i) => (
                                                <div
                                                        key={i}
                                                        className={`relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${tier.featured
                                                                ? "border-purple-500/50 bg-neutral-900/40 shadow-[0_0_50px_rgba(168,85,247,0.15)] scale-105 z-10"
                                                                : "border-white/5 bg-neutral-900/20 hover:border-white/20"
                                                                }`}
                                                >
                                                        {tier.featured && (
                                                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-lg">
                                                                        Most Popular
                                                                </div>
                                                        )}

                                                        <div className="mb-8">
                                                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 block bg-linear-to-r ${tier.color} bg-clip-text text-transparent`}>
                                                                        {tier.type}
                                                                </span>
                                                                <h3 className="text-4xl font-black text-white mb-2">{tier.name}</h3>
                                                                <div className="text-2xl font-light text-white/40">{tier.price}</div>
                                                        </div>

                                                        <p className="text-foreground/40 text-sm mb-8 leading-relaxed italic">{tier.description}</p>

                                                        <div className="space-y-4 mb-12 grow">
                                                                {tier.benefits.map((benefit, j) => (
                                                                        <div key={j} className="flex items-start gap-3">
                                                                                <Check className="w-4 h-4 text-white/60 mt-1 shrink-0" />
                                                                                <span className="text-white/60 text-sm font-light leading-snug">{benefit}</span>
                                                                        </div>
                                                                ))}
                                                        </div>

                                                        <a
                                                                href={`mailto:ethiopiabad@gmail.com?subject=Sponsorship Inquiry: ${tier.name} Tier`}
                                                                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center ${tier.featured
                                                                        ? "bg-purple-500 text-white hover:bg-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                                                                        : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                                                                        }`}
                                                        >
                                                                Become a {tier.name}
                                                        </a>
                                                </div>
                                        ))}
                                </div>

                                {/* Outcomes & Budget */}
                                <div className="grid lg:grid-cols-2 gap-16">
                                        <div className="p-12 rounded-[3rem] border border-white/5 bg-neutral-900/10">
                                                <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">Sponsor Outcomes We Fully Control</h3>
                                                <div className="grid gap-4">
                                                        {[
                                                                "Ranked hackathon outputs",
                                                                "GitHub repositories & demos",
                                                                "Permission-based talent data",
                                                                "Mentor & judge engagement",
                                                                "Conversion tracking"
                                                        ].map((outcome, i) => (
                                                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                                                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                                                        <span className="text-white/60 font-bold uppercase tracking-widest text-[10px]">{outcome}</span>
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>

                                        <div className="p-12 rounded-[3rem] border border-white/5 bg-neutral-900/10">
                                                <h3 className="text-3xl font-black text-white mb-8 tracking-tighter leading-none">Technical Involvement</h3>
                                                <p className="text-foreground/40 text-sm mb-8 font-light italic leading-relaxed">Sponsors can optionally deepen their engagement through:</p>
                                                <div className="space-y-6">
                                                        {[
                                                                { title: "Custom Bounties", desc: "Define side bounties using your SDKs, APIs, or tooling" },
                                                                { title: "Stack Alignment", desc: "Provide mentors and judges aligned to your technology" },
                                                                { title: "Talent Pipeline", desc: "Offer follow-on grants, internships, or accelerator access" }
                                                        ].map((item, i) => (
                                                                <div key={i} className="space-y-2">
                                                                        <h4 className="text-white text-xs font-black uppercase tracking-widest">{item.title}</h4>
                                                                        <p className="text-white/40 text-xs font-light leading-relaxed">{item.desc}</p>
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>

                                        <div className="p-12 rounded-[3rem] border border-white/5 bg-neutral-900/10">
                                                <h3 className="text-3xl font-black text-white mb-8 tracking-tighter leading-none">Budget Allocation</h3>
                                                <div className="space-y-8">
                                                        {budget.map((item, i) => (
                                                                <div key={i} className="space-y-4">
                                                                        <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                                                                                <span className="text-white/40">{item.label}</span>
                                                                                <span className="text-white">{item.value}</span>
                                                                        </div>
                                                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                                                <div className={`h-full ${item.color}`} style={{ width: item.value }} />
                                                                        </div>
                                                                </div>
                                                        ))}
                                                        <p className="pt-4 text-foreground/40 text-[9px] font-medium leading-relaxed uppercase tracking-widest italic">
                                                                *Detailed budget breakdown available upon request.
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
