export default function AboutEvent() {
  return (
    <section id="event" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About BlockFest Ethiopia 2026</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">The BUIDL Track</h3>
              <p className="text-foreground/80 leading-relaxed">
                3-day Web3 hackathon with smart contract workshops, dev-tooling demos, and mentor office hours. Build
                real prototypes, deploy to blockchain, and get ranked submissions reviewed by industry experts.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent mb-3">The Alpha Track</h3>
              <p className="text-foreground/80 leading-relaxed">
                Keynotes on DeFi, DAOs, RWA, DePIN, and Privacy. Learn from protocol experts, explore Web3 career
                pathways, and gain strategic context for your builder journey.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-3">The Culture Track</h3>
              <p className="text-foreground/80 leading-relaxed">
                Networking mixers, NFT showcases, founder-student meetups, and sponsor activations. Build relationships
                and join a long-term Web3 community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Web3-Native Integration</h3>
              <p className="text-foreground/80 leading-relaxed">
                NFT access passes, POAPs for proof-of-participation, and on-chain hackathon voting. BlockFest eats its
                own dog food with composable Web3 infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
