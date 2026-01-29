"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Update scrolled state for styling
      setScrolled(currentScrollY > 20)

      // Handle visibility on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { label: "Community", href: "#community" },
    { label: "About", href: "#about" },
    { label: "Event", href: "#event" },
    { label: "Partnership", href: "#partnership" },
    { label: "Speakers", href: "#speakers" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } ${scrolled ? "py-4" : "py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`relative flex items-center justify-between transition-all duration-500 rounded-full border border-white/5 px-6 md:px-8 overflow-hidden backdrop-blur-3xl shadow-2xl ${scrolled ? "h-14 bg-black/40" : "h-16 bg-black/20"
              }`}
          >
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <Image
                    src="/blockfest-logo.png"
                    alt="Logo"
                    width={28}
                    height={28}
                    className="relative z-10 grayscale invert brightness-200 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black tracking-[0.4em] text-white uppercase leading-none">
                    BLOCKFEST
                  </span>
                  <span className="text-[7px] font-black tracking-[0.6em] text-white/20 uppercase mt-1">
                    ETHIOPIA
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10px] font-black tracking-[0.25em] text-white/50 hover:text-white transition-all duration-300 uppercase relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/20 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Section */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Live 2026</span>
              </div>

              <Link href="#register">
                <Button
                  size="sm"
                  className="h-10 px-6 rounded-full bg-white text-black hover:bg-neutral-200 font-black text-[10px] tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] border-none"
                >
                  Register
                  <ChevronRight size={10} className="ml-1" />
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[90] bg-black/60 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-12 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl md:text-5xl font-black text-white/40 hover:text-white transition-all tracking-tighter"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-12"
              >
                <Link href="#register" onClick={() => setIsOpen(false)}>
                  <Button size="lg" className="h-20 px-16 rounded-full bg-white text-black text-xl font-black shadow-2xl">
                    Register Now
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
