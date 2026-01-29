"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

const faqs = [
  {
    question: "What is Blockfest Ethiopia?",
    answer: "Blockfest is Ethiopia's premier Web3 ecosystem-building initiative, bringing together developers, builders, and visionaries to shape the decentralized future through hackathons and high-intensity community events."
  },
  {
    question: "Who can participate?",
    answer: "Any developer, student, or innovator interested in Web3. We are university-first but open to all who want to build the decentralized future of Ethiopia."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, Blockfest is free for all accepted participants. We provide the platform, mentorship, and community infrastructure to help you succeed."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-40 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative Background Image */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 z-0 opacity-5 pointer-events-none">
        <Image
          src="https://ik.imagekit.io/kalkidanyishak/BaD_Ethiopia/photo_13_2026-01-25_22-37-31.jpg"
          alt="Background"
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover grayscale"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-none tracking-tighter">Questions?</h2>
          <p className="text-foreground/40 text-2xl font-light tracking-tight">Everything you need to know about joining the movement.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              value={`item-${i}`}
              key={i}
              className="border-none bg-neutral-900/30 backdrop-blur-3xl rounded-4xl px-8 py-4 transition-all hover:bg-neutral-900/50"
            >
              <AccordionTrigger className="text-xl md:text-2xl font-bold text-white hover:no-underline py-6 tracking-tight text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/40 text-lg font-light leading-relaxed pb-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
