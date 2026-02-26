"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ExecutiveSummary from "@/components/executive-summary"
import CommunityMarquee from "@/components/community-marquee"
import BentoGrid from "@/components/bento-grid"
import AboutClub from "@/components/about-club"
import AboutEvent from "@/components/about-event"
import EventHighlights from "@/components/event-highlights"
import SeasonRoadmap from "@/components/season-roadmap"
import Timeline from "@/components/timeline"
import Speakers from "@/components/speakers"
import Tickets from "@/components/tickets"
import Registration from "@/components/registration"
import Sponsors from "@/components/sponsors"
import SponsorshipDetails from "@/components/sponsorship-details"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import { InteractiveCanvas, ScrollProgress, RevealOnScroll } from "@/components/visual-effects"

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  })
  const [selectedTicket, setSelectedTicket] = useState<"standard" | "vip">("standard")
  const [selectedTxHash, setSelectedTxHash] = useState<string>("")

  const handleTicketSelect = (type: "standard" | "vip", txHash?: string) => {
    setSelectedTicket(type)
    setSelectedTxHash(txHash || "")
    setTimeout(() => {
      document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <ScrollProgress />
      <InteractiveCanvas />

      <Header />

      <Hero />

      <RevealOnScroll>
        <ExecutiveSummary />
      </RevealOnScroll>

      <RevealOnScroll>
        <CommunityMarquee />
      </RevealOnScroll>

      <RevealOnScroll>
        <BentoGrid />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutClub />
      </RevealOnScroll>

      <RevealOnScroll>
        <EventHighlights />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutEvent />
      </RevealOnScroll>

      <RevealOnScroll>
        <SeasonRoadmap />
      </RevealOnScroll>

      <RevealOnScroll>
        <Timeline />
      </RevealOnScroll>

      <RevealOnScroll>
        <Speakers />
      </RevealOnScroll>

      <RevealOnScroll>
        <Tickets onSelectTicket={handleTicketSelect} />
      </RevealOnScroll>

      <RevealOnScroll>
        <Registration ticketType={selectedTicket} txHash={selectedTxHash} />
      </RevealOnScroll>

      <RevealOnScroll>
        <SponsorshipDetails />
      </RevealOnScroll>

      <RevealOnScroll>
        <Sponsors />
      </RevealOnScroll>

      <RevealOnScroll>
        <FAQ />
      </RevealOnScroll>

      <Footer />
    </main>
  )
}
