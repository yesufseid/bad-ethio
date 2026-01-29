"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">

          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8 group cursor-default">
              <div className="w-12 h-12 relative flex items-center justify-center transition-transform group-hover:rotate-12 duration-500">
                <div
                  className="absolute bg-white/10 w-full h-full z-0 rotate-15"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                />
                <Image
                  src="/BLOCKFEST-logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="relative z-10 grayscale invert brightness-200"
                />
              </div>
              <h2 className="text-4xl font-black text-white tracking-tighter italic">BLOCKFEST</h2>
            </div>
            <p className="text-foreground/70 text-xl font-light leading-relaxed max-w-sm mb-12">
              The bridge between Web2 talent and the global Web3 ecosystem. Building the decentralized future of Ethiopia.
            </p>
            <div className="flex gap-6">
              {/* Social icons could go here */}
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer group">
                <span className="text-white/60 text-xs font-black group-hover:text-black transition-colors">X</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer group">
                <span className="text-white/60 text-xs font-black group-hover:text-black transition-colors">TG</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8 opacity-60">Navigation</h4>
            <ul className="space-y-6">
              <li><Link href="#about" className="text-foreground/60 hover:text-white transition-colors text-lg font-light">About</Link></li>
              <li><Link href="#community" className="text-foreground/60 hover:text-white transition-colors text-lg font-light">Community</Link></li>
              <li><Link href="#highlights" className="text-foreground/60 hover:text-white transition-colors text-lg font-light">Highlights</Link></li>
              <li><Link href="#register" className="text-foreground/60 hover:text-white transition-colors text-lg font-light">Register</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8 opacity-60">Legal</h4>
            <ul className="space-y-6">
              <li><span className="text-foreground/60 hover:text-white transition-colors text-lg font-light cursor-pointer">Privacy Policy</span></li>
              <li><span className="text-foreground/60 hover:text-white transition-colors text-lg font-light cursor-pointer">Code of Conduct</span></li>
              <li><span className="text-foreground/60 hover:text-white transition-colors text-lg font-light cursor-pointer">Media Kit</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-black uppercase tracking-widest">© 2026 BaD Ethiopia. All rights reserved.</p>
          <div className="flex gap-12 text-white/20 text-xs font-black uppercase tracking-widest">
            <span>Built by builders for builders</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
