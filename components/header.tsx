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
            <div className="w-10 h-10 relative">
              <Image
                src="/blockfest-logo.png"
                alt="Block Fest Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Block Fest
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
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                Join Community
              </Button>
              <Button size="sm" className="flex-1 bg-primary">
                Register
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
