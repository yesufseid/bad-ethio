"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Event", href: "#event" },
    { label: "Speakers", href: "#speakers" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            {/* Increased from w-10 to w-14 */}
            <div className="w-14 h-14 relative flex items-center justify-center">

              {/* 1. The White Hexagon Background */}
              <div
                /* 
                   Increased translation from 2px to 3px to keep the 
                   alignment consistent with the larger size 
                */
                className="absolute bg-white w-[60%] h-[60%] z-0 translate-x-[3px] -translate-y-[3px]"
                style={{
                  clipPath: "polygon(40% 30%, 90% 24%, 90% 72%, 50% 90%, 4% 70%, 8% 22%)"
                }}
              />

              {/* 2. Your Logo */}
              <Image
                src="/blockfest-logo.png"
                alt="Block Fest Logo"
                width={56} // Matches w-14
                height={56} // Matches h-14
                className="w-full h-full object-contain relative z-10"
              />
            </div>

            {/* I also bumped the text to text-2xl to match the larger logo */}
            <span className="text-2xl font-bold bg-white bg-clip-text text-transparent">
              BlockFest
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-4">
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted bg-transparent"
              onClick={() => (window.location.href = "#community")}
            >
              Join Community
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold cta-glow shadow-lg shadow-purple-500/50"
              onClick={() => (window.location.href = "#register")}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent" onClick={() => (window.location.href = "#community")}>
                Join Community
              </Button>
              <Button size="sm" className="flex-1 bg-primary" onClick={() => {
                setIsOpen(false);
                window.location.href = "#register";
              }}>
                Register
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
