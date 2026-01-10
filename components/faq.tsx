"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Who can join BlockFest Ethiopia 2026?",
    answer:
      "BlockFest is designed for university students and early-stage developers interested in Web3. We welcome developers, designers, founders, and community leaders from across Ethiopia and beyond. No prior Web3 experience required.",
  },
  {
    question: "What is the hackathon track about?",
    answer:
      "The BUIDL Track is a 3-day hackathon focused on 6 main categories: DeFi & Financial Infrastructure, Identity & Privacy, AI × Blockchain, Public Infrastructure & GovTech, Education & Credentialing, and Social Impact.",
  },
  {
    question: "When and where is BlockFest?",
    answer:
      "BlockFest Ethiopia 2026 takes place February – March 2026 at Addis Ababa Science and Technology University (AASTU). It's a hybrid event with both in-person and online components.",
  },
  {
    question: "Is BlockFest free to attend?",
    answer:
      "Yes! BlockFest is free for all participants. Registration includes access to workshops, mentorship, meals, and all event programming.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, and team! You can register individually or with a team. If joining solo, you can find teammates at the event or during pre-event team formation.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center bg-card/50 hover:bg-card transition-colors group"
              >
                <span className="text-lg font-semibold text-white text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className="text-accent flex-shrink-0 ml-4 transition-transform duration-300 group-hover:text-primary"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0)" }}
                />
              </button>
              {openIndex === i && (
                <div className="p-6 bg-background border-t border-border">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
