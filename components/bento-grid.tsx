"use client"

import Image from "next/image"
import { motion } from "motion/react"

export default function BentoGrid() {
        return (
                <section id="community" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
                        <div className="max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-8 h-auto md:h-[1300px]">

                                        {/* Main Vision Tile */}
                                        <div className="md:col-span-2 md:row-span-2 relative group rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-950/50 backdrop-blur-3xl transition-all duration-700 hover:scale-[0.99] shadow-2xl">
                                                <Image
                                                        src="https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/BaD_Ethiopia.jpg"
                                                        alt="BaD Ethiopia Vision"
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-[3s] opacity-70"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent pointer-events-none" />
                                                <div className="absolute bottom-12 left-12 right-12 z-20">
                                                        <h3 className="text-5xl md:text-6xl font-black text-white mb-6 leading-none tracking-tighter">Empowering a new world of builders.</h3>
                                                        <p className="text-white/40 text-xl max-w-md font-light">Real-world Web3 opportunities starts with the right community.</p>
                                                </div>
                                        </div>

                                        {/* Action Tile 1 */}
                                        <div className="md:col-span-2 md:row-span-1 relative group rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-950/50 backdrop-blur-3xl shadow-2xl">
                                                <Image
                                                        src="https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/bootcamp_2.jpg"
                                                        alt="Bootcamp"
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-[3s] opacity-40 grayscale hover:grayscale-0"
                                                />
                                                <div className="absolute inset-0 flex flex-col justify-center px-12 z-20">
                                                        <span className="text-cyan-400 text-sm font-black uppercase tracking-widest mb-3">Education</span>
                                                        <h4 className="text-4xl font-black text-white leading-tight tracking-tighter">Intensive Web3 Bootcamps</h4>
                                                </div>
                                        </div>

                                        {/* Location / Map Tile */}
                                        <div className="md:col-span-1 md:row-span-2 relative group rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-950/50 backdrop-blur-3xl flex flex-col shadow-2xl">
                                                <div className="flex-1 relative">
                                                        <iframe
                                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9400582230473!2d38.8071784750642!3d8.885165391170506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b82a7e392203f%3A0xb05f440eacc98f9f!2sAddis%20Ababa%20Science%20and%20Technology%20University!5e0!3m2!1sen!2set!4v1769016012576!5m2!1sen!2set"
                                                                width="100%"
                                                                height="100%"
                                                                style={{ border: 0 }}
                                                                allowFullScreen
                                                                loading="lazy"
                                                                referrerPolicy="no-referrer-when-downgrade"
                                                                title="Event Location"
                                                                className="grayscale contrast-125 opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                                                        />
                                                </div>
                                                <div className="p-10 bg-black/80 backdrop-blur-2xl border-t border-white/5">
                                                        <p className="text-xs text-purple-400 uppercase tracking-widest font-black mb-2">Our Base</p>
                                                        <h4 className="text-2xl font-black text-white tracking-tighter leading-none">AASTU Hub</h4>
                                                </div>
                                        </div>

                                        {/* Core Members Tile */}
                                        <div className="md:col-span-1 md:row-span-1 relative group rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-950/50 backdrop-blur-3xl shadow-2xl">
                                                <Image
                                                        src="https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/core_team_members_2.jpg?updatedAt=1769371906280"
                                                        alt="Team"
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-[3s] opacity-30"
                                                />
                                                <div className="absolute inset-0 flex flex-col justify-end p-10">
                                                        <h4 className="text-2xl font-black text-white tracking-tighter leading-none">The Core Team</h4>
                                                </div>
                                        </div>

                                        {/* Prize Pool / Stats Tile */}
                                        <div className="md:col-span-1 md:row-span-1 relative group rounded-[3rem] overflow-hidden border border-white/5 bg-linear-to-br from-purple-500/30 to-blue-500/10 backdrop-blur-3xl shadow-2xl">
                                                <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center">
                                                        <span className="text-white/40 text-sm mb-2 uppercase font-bold tracking-tight">Total Rewards</span>
                                                        <h4 className="text-6xl font-black text-white tracking-tighter">$50K</h4>
                                                        <div className="mt-8 px-8 py-3 bg-white/5 rounded-full text-xs text-cyan-400 font-black border border-white/10 uppercase tracking-widest transition-colors hover:bg-white/10">Join Now</div>
                                                </div>
                                        </div>

                                        {/* Action Tile 2 (Avalanche) */}
                                        <div className="md:col-span-1 md:row-span-1 relative group rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-950/50 backdrop-blur-3xl shadow-2xl">
                                                <Image
                                                        src="https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/Avalanche_session.jpg"
                                                        alt="Avalanche Session"
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-[3s] opacity-30"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                                                        <h4 className="text-2xl font-black text-white leading-tight tracking-tighter uppercase">Global Partners</h4>
                                                </div>
                                        </div>

                                        {/* Pizza Party Tile */}
                                        <div className="md:col-span-2 md:row-span-1 relative group rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-950/50 backdrop-blur-3xl shadow-2xl">
                                                <Image
                                                        src="https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/pizza_party.jpg"
                                                        alt="Pizza Party"
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-[3s] opacity-30 grayscale hover:grayscale-0"
                                                />
                                                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                                        <h4 className="text-4xl font-black text-white tracking-tighter leading-none mb-3 italic">Beyond Just Code.</h4>
                                                        <p className="text-white/40 text-xl font-light">Networking, parties, and human connections.</p>
                                                </div>
                                        </div>

                                </div>
                        </div>
                </section>
        )
}
