import { Zap, Users, Award, Rocket, Code, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "3-Day Hackathon",
    description: "Build Web3 prototypes with real-world impact",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from industry builders and protocol experts",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description: "Access internships, grants, and Web3 opportunities",
  },
  {
    icon: Award,
    title: "Hackathon Tracks",
    description: "DeFi, Identity, AI×Blockchain, GovTech & more",
  },
  {
    icon: Globe,
    title: "Ecosystem Access",
    description: "Meet 400-600 developers from across Ethiopia",
  },
  {
    icon: Zap,
    title: "Web3-Native Experience",
    description: "NFT tickets, POAPs, and on-chain voting",
  },
]

export default function EventHighlights() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Event Highlights</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="p-8 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-accent/40 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
