"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Registration() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setName("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="register" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-accent" />

      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Join BlockFest Ethiopia 2026</h2>
        <p className="text-lg text-foreground/80 mb-12 animate-fade-in">
          Register for our 7-day university blockchain week and start your Web3 journey. 400-600 developers, 3-day
          hackathon, expert mentorship, and real career opportunities.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-card border-border text-white placeholder:text-foreground/50 flex-1"
            />
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-card border-border text-white placeholder:text-foreground/50 flex-1"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            {submitted ? "Registration Submitted!" : "Register Now"}
            {!submitted && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </Button>
        </form>

        <p className="text-sm text-foreground/60 mt-6">
          We'll send you event updates, schedule, and mentor information
        </p>
      </div>
    </section>
  )
}
