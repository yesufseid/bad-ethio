"use client"

import { Carousel } from "./carousel"

export default function Sponsors() {
  const tiers = [
    {
      title: "Whale - Platinum",
      benefits: [
        "Naming rights",
        "Main stage keynote",
        "Dedicated track",
        "VIP networking",
        "Full talent access",
        "Custom bounty program",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Validator - Gold",
      benefits: ["Workshop hosting", "Hackathon judge", "Booth space", "Talent access", "Optional bounty"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Node - Silver",
      benefits: ["Logo on website", "Social mentions", "Swag distribution", "Mentorship access"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Community Partner",
      benefits: ["Promotion & support", "Mentorship program", "Tooling credits", "Ecosystem access"],
      color: "from-green-500 to-teal-500",
    },
  ]

  const tierCards = tiers.map((tier, i) => (
    <div
      key={i}
      className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300 animate-fade-in h-full"
      style={{ animationDelay: `${i * 0.1}s` }}
    >
      <div
        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${tier.color} text-white`}
      >
        {tier.title}
      </div>
      <ul className="space-y-2">
        {tier.benefits.map((benefit, j) => (
          <li key={j} className="text-sm text-foreground/80 flex items-start">
            <span className="text-primary mr-2">✓</span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Sponsorship Opportunities</h2>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">{tierCards}</div>

        <div className="md:hidden">
          <Carousel items={tierCards} itemsPerView={1} />
        </div>

        <div className="mt-12 p-8 rounded-lg border border-accent/50 bg-accent/5 text-center">
          <p className="text-lg text-foreground/80">
            BlockFest is positioned as a <span className="text-primary font-bold">talent access platform first</span>,
            not just branding. Sponsors gain access to 400-600 high-quality developers, ranked hackathon outputs, GitHub
            repositories, and measurable conversion metrics.
          </p>
        </div>
      </div>
    </section>
  )
}
