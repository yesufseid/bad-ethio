import { Twitter, Mail, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BF</span>
              </div>
              <span className="font-bold text-white">BlockFest Ethiopia</span>
            </div>
            <p className="text-foreground/60 text-sm">
              University Blockchain Week • Hackathon • Conference • Ecosystem Festival
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">About</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li>
                <a href="#event" className="hover:text-primary transition-colors">
                  Event Details
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-primary transition-colors">
                  Organizers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@blockfest.eth" className="hover:text-primary transition-colors">
                  hello@blockfest.eth
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              © 2026 BlockFest Ethiopia. Organized by BaD Ethiopia & University Partners.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Send size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
