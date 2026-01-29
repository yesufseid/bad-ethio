"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Send, Mail, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">

          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8 group cursor-default">
              <div className="w-12 h-12 relative flex items-center justify-center transition-transform group-hover:rotate-12 duration-500 bg-white/5 rounded-xl border border-white/10">
                <Image
                  src="/blockfest-logo.jpg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="relative z-10"
                />
              </div>
              <h2 className="text-4xl font-black text-white tracking-tighter italic">BLOCKFEST</h2>
            </div>
            <p className="text-foreground/70 text-xl font-light leading-relaxed max-w-sm mb-12">
              The bridge between Web2 talent and the global Web3 ecosystem. Building the decentralized future of Ethiopia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://t.me/BaDEthiopia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#229ED9] hover:border-[#229ED9] transition-all cursor-pointer group shadow-lg hover:shadow-[#229ED9]/20">
                <Send className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com/company/daoethiopia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] transition-all cursor-pointer group shadow-lg hover:shadow-[#0077B5]/20">
                <Linkedin className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a href="https://x.com/BaDEthiopia?s=20" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:border-white transition-all cursor-pointer group shadow-lg hover:shadow-white/20">
                <Twitter className="w-5 h-5 text-white/40 group-hover:text-black transition-colors" />
              </a>
              <a href="https://github.com/daoethiopia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#333] hover:border-[#333] transition-all cursor-pointer group shadow-lg hover:shadow-black/20">
                <Github className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a href="mailto:ethiopiabad@gmail.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition-all cursor-pointer group shadow-lg hover:shadow-purple-500/20">
                <Mail className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a href="https://discord.gg/Wnma6VrA7" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#5865F2] hover:border-[#5865F2] transition-all cursor-pointer group shadow-lg hover:shadow-[#5865F2]/20">
                <MessageSquare className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </a>
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
          <p className="text-white/20 text-[10px] font-black tracking-widest uppercase">
            © 2026 <span className="normal-case">BaD</span> Ethiopia. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-white/20 text-[10px] font-black uppercase tracking-widest">
            <span>Built by builders for builders</span>
            <a href="tel:+251922469656" className="hover:text-white transition-colors tracking-[0.2em]">+251 922 469 656</a>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
