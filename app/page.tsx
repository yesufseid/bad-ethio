"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutClub from "@/components/about-club"
import AboutEvent from "@/components/about-event"
import EventHighlights from "@/components/event-highlights"
import Timeline from "@/components/timeline"
import Speakers from "@/components/speakers"
import Registration from "@/components/registration"
import Sponsors from "@/components/sponsors"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  })

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutClub />
      <AboutEvent />
      <EventHighlights />
      <Timeline />
      <Speakers />
      <Registration />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  )
}
