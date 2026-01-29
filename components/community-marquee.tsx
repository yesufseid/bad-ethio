"use client"

import Image from "next/image"
import { motion } from "motion/react"

const imagesRow1 = [
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_2.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_3.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_session.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/BaD_Ethiopia.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_2.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_3.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_4.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_5.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_6.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_7_2026-01-25_22-37-31.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_8_2026-01-25_22-45-59.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_9_2026-01-25_22-34-06.jpg",
]

const imagesRow2 = [
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/core_team_members_10.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/core_team_members_11.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/core_team_members_12.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/core_team_members_2.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_11_2026-01-25_22-34-06.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_12_2026-01-25_22-34-06.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_15_2026-01-25_22-34-06.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_16_2026-01-25_22-34-06.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_17_2026-01-25_22-34-06.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/pizza_2.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/pizza_3.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/pizza_party_1.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/pizza_party.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/road_to_sub_zero.jpg",
]

const imagesRow3 = [
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_18_2026-01-25_22-34-06.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_19_2026-01-25_22-37-31.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_20_2026-01-25_22-34-06.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_7_2026-01-25_22-45-52.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_9_2026-01-25_22-45-52.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/pizza_4.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/pizza_party_3.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/polkadot.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/polkadot_3.jpg",
        "https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/core_team_members_8.jpg"
]

export default function CommunityMarquee() {
        return (
                <section className="py-24 md:py-40 bg-background overflow-hidden relative">
                        <div className="max-w-7xl mx-auto px-4 mb-16 md:mb-24 text-center">
                                <h2 className="text-4xl sm:text-5xl md:text-[10rem] font-black text-white mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[1.2] animate-slide-up py-8 md:py-12 overflow-visible">
                                        Massive <span className="italic opacity-50 text-neutral-500 block md:inline-block px-6 md:px-12 py-4 md:py-8 -mx-6 md:-mx-12 -my-4 md:-my-8 overflow-visible">Momentum</span>
                                </h2>
                                <p className="text-foreground/40 text-lg sm:text-2xl md:text-3xl max-w-4xl mx-auto font-light tracking-tight mt-6 md:mt-12 px-4">
                                        Behind every line of code is a builder. Behind every builder is a community.
                                </p>
                        </div>

                        <div className="space-y-12">
                                {/* Row 1 */}
                                <div className="flex w-full no-scrollbar overflow-hidden">
                                        <div
                                                className="flex gap-8 animate-marquee-left w-fit"
                                                style={{ "--duration": "120s" } as React.CSSProperties}
                                        >
                                                {[...imagesRow1, ...imagesRow1].map((src, i) => (
                                                        <div
                                                                key={i}
                                                                className="relative shrink-0 w-80 h-48 md:w-[600px] md:h-[350px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl transition-[transform,filter] duration-700 hover:scale-95 group"
                                                        >
                                                                <Image
                                                                        src={src}
                                                                        alt="Community"
                                                                        fill
                                                                        sizes="(max-width: 768px) 320px, 600px"
                                                                        className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500"
                                                                />
                                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                                        </div>
                                                ))}
                                        </div>
                                </div>

                                {/* Row 2 */}
                                <div className="flex w-full no-scrollbar overflow-hidden">
                                        <div
                                                className="flex gap-8 animate-marquee-right w-fit"
                                                style={{ "--duration": "150s" } as React.CSSProperties}
                                        >
                                                {[...imagesRow2, ...imagesRow2].map((src, i) => (
                                                        <div
                                                                key={i}
                                                                className="relative shrink-0 w-80 h-48 md:w-[600px] md:h-[350px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl transition-[transform,filter] duration-700 hover:scale-95 group"
                                                        >
                                                                <Image
                                                                        src={src}
                                                                        alt="Community"
                                                                        fill
                                                                        sizes="(max-width: 768px) 320px, 600px"
                                                                        className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500"
                                                                />
                                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                                        </div>
                                                ))}
                                        </div>
                                </div>

                                {/* Row 3 */}
                                <div className="flex w-full no-scrollbar overflow-hidden">
                                        <div
                                                className="flex gap-8 animate-marquee-left w-fit"
                                                style={{ "--duration": "135s" } as React.CSSProperties}
                                        >
                                                {[...imagesRow3, ...imagesRow3].map((src, i) => (
                                                        <div
                                                                key={i}
                                                                className="relative shrink-0 w-80 h-48 md:w-[600px] md:h-[350px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl transition-[transform,filter] duration-700 hover:scale-95 group"
                                                        >
                                                                <Image
                                                                        src={src}
                                                                        alt="Community"
                                                                        fill
                                                                        sizes="(max-width: 768px) 320px, 600px"
                                                                        className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500"
                                                                />
                                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </div>

                        {/* Side Gradients */}
                        <div className="absolute inset-y-0 left-0 w-64 bg-linear-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-64 bg-linear-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />
                </section>
        )
}
