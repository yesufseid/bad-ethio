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
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import { InteractiveCanvas, ScrollProgress, RevealOnScroll } from "@/components/visual-effects"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  })
  const [selectedTicket, setSelectedTicket] = useState<"standard" | "vip">("standard")
  const [selectedTxHash, setSelectedTxHash] = useState<string>("")
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const handleTicketSelect = (type: "standard" | "vip", txHash?: string) => {
    setSelectedTicket(type)
    setSelectedTxHash(txHash || "")
    setIsRegistrationOpen(true)
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

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        ticketType={selectedTicket}
        txHash={selectedTxHash}
      />

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

function RegistrationModal({
  isOpen,
  onClose,
  ticketType,
  txHash
}: {
  isOpen: boolean
  onClose: () => void
  ticketType: "standard" | "vip"
  txHash: string
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl w-[calc(100%-2rem)] p-0 bg-transparent border-none overflow-hidden max-h-[95vh] custom-scrollbar gap-0!">
        <VisuallyHidden>
          <DialogTitle>Registration Form</DialogTitle>
          <DialogDescription>
            Complete your registration to join the community.
          </DialogDescription>
        </VisuallyHidden>
        <div className="w-full overflow-x-hidden">
          <Registration
            ticketType={ticketType}
            txHash={txHash}
            isModal={true}
            onSuccess={() => {
              // Optional: close modal on success after a delay
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
