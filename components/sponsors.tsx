"use client"

import Image from "next/image"
import { partnerCategories } from "@/lib/partner-data"
import { RevealOnScroll } from "./visual-effects"

export default function Sponsors() {
  return (
    <section id="partners" className="py-40 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32 animate-fade-in">
          <h2 className="text-4xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
            Ecosystem <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent italic pr-12 inline-block">Backbone</span>
          </h2>
          <p className="text-foreground/40 text-xl font-light max-w-2xl mx-auto">
            The powerhouses fueling the next generation of builders in Ethiopia.
          </p>
        </div>

        <div className="space-y-40">
          {partnerCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-16">
              <div className="flex items-center gap-8">
                <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-white whitespace-nowrap">
                  {group.category}
                </h3>
                <div className="h-px w-full bg-linear-to-r from-white/30 to-transparent" />
              </div>

              {group.category === "Strategic Sponsor" ? (
                <div className="grid grid-cols-1">
                  {group.partners.map((partner, i) => (
                    <RevealOnScroll key={i}>
                      {partner.website ? (
                        <a href={partner.website} target="_blank" rel="noopener noreferrer" className="block">
                          <div className="group relative p-12 md:p-20 rounded-[4rem] border border-purple-500/20 bg-neutral-900/10 backdrop-blur-3xl overflow-hidden hover:border-purple-500/40 transition-all duration-700">
                            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
                              <div className="w-48 h-48 md:w-64 md:h-64 relative transition-all duration-1000">
                                {partner.logo ? (
                                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center border border-white/5 rounded-3xl bg-white/5">
                                    <span className="text-white/20 font-black text-2xl uppercase tracking-tighter">{partner.name}</span>
                                  </div>
                                )}
                              </div>
                              <div className="text-center md:text-left space-y-6 max-w-xl">
                                <span className="text-purple-400 text-sm font-black uppercase tracking-widest">{partner.role}</span>
                                <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">{partner.name}</h4>
                                <p className="text-foreground/40 text-lg md:text-xl font-light leading-relaxed">
                                  {partner.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="group relative p-12 md:p-20 rounded-[4rem] border border-purple-500/20 bg-neutral-900/10 backdrop-blur-3xl overflow-hidden hover:border-purple-500/40 transition-all duration-700">
                          <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
                            <div className="w-48 h-48 md:w-64 md:h-64 relative transition-all duration-1000">
                              {partner.logo ? (
                                <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center border border-white/5 rounded-3xl bg-white/5">
                                  <span className="text-white/20 font-black text-2xl uppercase tracking-tighter">{partner.name}</span>
                                </div>
                              )}
                            </div>
                            <div className="text-center md:text-left space-y-6 max-w-xl">
                              <span className="text-purple-400 text-sm font-black uppercase tracking-widest">{partner.role}</span>
                              <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">{partner.name}</h4>
                              <p className="text-foreground/40 text-lg md:text-xl font-light leading-relaxed">
                                {partner.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </RevealOnScroll>
                  ))}
                </div>
              ) : group.category === "Ecosystem & Protocol Partners" || group.category === "Hospitality & Travel Partners" ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {group.partners.map((partner, i) => (
                    <RevealOnScroll key={i}>
                      {partner.website ? (
                        <a href={partner.website} target="_blank" rel="noopener noreferrer" className="block h-full">
                          <div className="group p-10 rounded-[3rem] border border-white/5 bg-neutral-900/10 backdrop-blur-2xl hover:bg-neutral-900/30 transition-all duration-500 h-full flex flex-col justify-center gap-8">
                            {partner.logo ? (
                              <div className="relative h-16 w-32 transition-all duration-500">
                                <Image
                                  src={partner.logo}
                                  alt={partner.name}
                                  fill
                                  className={`object-contain object-left transition-transform duration-500 ${partner.name === "Africa Blockchain Institute" ? "scale-[1.3] origin-left" : ""
                                    }`}
                                />
                              </div>
                            ) : (
                              <div className="h-16 flex items-center">
                                <span className="text-white/20 font-black text-xl uppercase tracking-tighter">{partner.name}</span>
                              </div>
                            )}
                            <div className="space-y-4">
                              {partner.role && <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest block">{partner.role}</span>}
                              <h4 className="text-2xl font-black text-white tracking-tight">{partner.name}</h4>
                              {partner.description && <p className="text-foreground/40 text-sm font-light leading-relaxed">{partner.description}</p>}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="group p-10 rounded-[3rem] border border-white/5 bg-neutral-900/10 backdrop-blur-2xl hover:bg-neutral-900/30 transition-all duration-500 h-full flex flex-col justify-center gap-8">
                          {partner.logo ? (
                            <div className="relative h-16 w-32 transition-all duration-500">
                              <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className={`object-contain object-left transition-transform duration-500 ${partner.name === "Africa Blockchain Institute" ? "scale-[1.3] origin-left" : ""
                                  }`}
                              />
                            </div>
                          ) : (
                            <div className="h-16 flex items-center">
                              <span className="text-white/20 font-black text-xl uppercase tracking-tighter">{partner.name}</span>
                            </div>
                          )}
                          <div className="space-y-4">
                            {partner.role && <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest block">{partner.role}</span>}
                            <h4 className="text-2xl font-black text-white tracking-tight">{partner.name}</h4>
                            {partner.description && <p className="text-foreground/40 text-sm font-light leading-relaxed">{partner.description}</p>}
                          </div>
                        </div>
                      )}
                    </RevealOnScroll>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {group.partners.map((partner, i) => (
                    <RevealOnScroll key={i}>
                      {partner.website ? (
                        <a href={partner.website} target="_blank" rel="noopener noreferrer" className="block">
                          <div className="group p-2 rounded-[2.5rem] border border-white/5 bg-neutral-900/10 backdrop-blur-xl hover:bg-neutral-900/20 hover:border-white/10 transition-all duration-500">
                            <div className="aspect-square p-8 flex items-center justify-center relative">
                              <div className="relative w-full h-full group-hover:scale-110 transition-all duration-700">
                                {partner.logo ? (
                                  <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className={`object-contain ${partner.name === 'GIDA' ? 'scale-120' : ''}`}
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-center">
                                    <span className="text-white/20 font-black text-xl uppercase tracking-tighter px-4">{partner.name}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="px-4 pb-6 text-center">
                              <div className="h-px w-8 bg-white/10 mx-auto mb-4 group-hover:w-12 group-hover:bg-purple-500/50 transition-all duration-500" />
                              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-all duration-500 block leading-relaxed">
                                {partner.name}
                              </span>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="group p-2 rounded-[2.5rem] border border-white/5 bg-neutral-900/10 backdrop-blur-xl hover:bg-neutral-900/20 hover:border-white/10 transition-all duration-500">
                          <div className="aspect-square p-8 flex items-center justify-center relative">
                            <div className="relative w-full h-full group-hover:scale-110 transition-all duration-700">
                              {partner.logo ? (
                                <Image
                                  src={partner.logo}
                                  alt={partner.name}
                                  fill
                                  className={`object-contain ${partner.name === 'GIDA' ? 'scale-120' : ''}`}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-center">
                                  <span className="text-white/20 font-black text-xl uppercase tracking-tighter px-4">{partner.name}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="px-4 pb-6 text-center">
                            <div className="h-px w-8 bg-white/10 mx-auto mb-4 group-hover:w-12 group-hover:bg-purple-500/50 transition-all duration-500" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-all duration-500 block leading-relaxed">
                              {partner.name}
                            </span>
                          </div>
                        </div>
                      )}
                    </RevealOnScroll>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Call to Action */}
          <RevealOnScroll>
            <div className="relative p-12 md:p-20 rounded-[4rem] border border-dashed border-white/10 bg-white/5 flex flex-col items-center text-center gap-8">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Want to build with us?</h3>
              <p className="text-foreground/40 text-lg font-light max-w-xl">
                Join our network of partners and help shape the future of Web3 in Ethiopia.
              </p>
              <a
                href="mailto:ethiopiabad@gmail.com?subject=Partnership Inquiry"
                className="px-12 py-6 rounded-full bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform"
              >
                Become a Partner
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
