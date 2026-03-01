"use client"

import { useState } from "react"
import { Check, Copy, Zap, Star, X, ExternalLink, Shield, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
        Dialog,
        DialogContent,
        DialogHeader,
        DialogTitle,
        DialogDescription,
} from "@/components/ui/dialog"

const WALLETS = {
        evm: {
                label: "EVM (Ethereum & compatible)",
                icon: "🔷",
                address: "0xa8B382EEE1D88eaff0B5398bc6AC6e32f6606fd0",
                explorer: "https://etherscan.io/address/0xa8B382EEE1D88eaff0B5398bc6AC6e32f6606fd0",
        },
        btc: {
                label: "Bitcoin",
                icon: "₿",
                address: "bc1qky8vcnqdsdvp58nuf28g358qcaujp3e0n7guvy",
                explorer: "https://mempool.space/address/bc1qky8vcnqdsdvp58nuf28g358qcaujp3e0n7guvy",
        },
        sol: {
                label: "Solana",
                icon: "◎",
                address: "6dQvTetPzeQrfDG5hfMZ62r7U9r1oX1qbrxSWaXkXXQa",
                explorer: "https://solscan.io/address/6dQvTetPzeQrfDG5hfMZ62r7U9r1oX1qbrxSWaXkXXQa",
        },
}

const STANDARD_FEATURES = [
        "Full Conference Access (Keynotes + Panels)",
        "Full Hackathon Participation",
        "All Workshops & Technical Tracks",
        "Team Formation & Mentorship Sessions",
        "Demo Day Access",
        "Voting Participation (Community Choice)",
        "Digital Certificate of Participation",
        "NFT / On-Chain Ticket (Web3-native access)",
]

const VIP_EXTRAS = [
        "Exclusive After Party Access",
        "Private Networking Lounge",
        "Front Row Reserved Seating",
        "Airline & Hotel Discount Codes",
        "Priority Check-in & VIP Badge",
        "Curated Builder Introductions",
        "Direct Access to Speakers & Organizers",
]

interface TicketsProps {
        onSelectTicket: (type: "standard" | "vip", txHash?: string) => void
}

function CopyButton({ text }: { text: string }) {
        const [copied, setCopied] = useState(false)
        const copy = () => {
                navigator.clipboard.writeText(text)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
        }
        return (
                <button
                        onClick={copy}
                        className="shrink-0 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                >
                        {copied ? (
                                <Check size={14} className="text-green-400" />
                        ) : (
                                <Copy size={14} className="text-neutral-400 group-hover:text-white transition-colors" />
                        )}
                </button>
        )
}

function PaymentModal({
        isOpen,
        onClose,
        onConfirm,
}: {
        isOpen: boolean
        onClose: () => void
        onConfirm: (txHash: string) => void
}) {
        const [txHash, setTxHash] = useState("")
        const [error, setError] = useState("")

        const handleConfirm = () => {
                if (!txHash.trim() || txHash.trim().length < 10) {
                        setError("Please paste a valid transaction hash.")
                        return
                }
                onConfirm(txHash.trim())
        }

        return (
                <Dialog open={isOpen} onOpenChange={onClose}>
                        <DialogContent className="sm:max-w-lg w-[calc(100%-2rem)] bg-neutral-950 border border-amber-500/20 rounded-3xl p-4 sm:p-8 shadow-2xl overflow-y-auto overflow-x-hidden max-h-[90vh] custom-scrollbar">
                                <DialogHeader className="flex flex-row items-center gap-4 space-y-0">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                                                <Crown size={24} className="text-amber-400" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                                <DialogTitle className="text-2xl font-black text-white tracking-tight">VIP Payment</DialogTitle>
                                                <DialogDescription className="text-neutral-500 text-sm font-medium">
                                                        Send $200 equivalent to any wallet below
                                                </DialogDescription>
                                        </div>
                                </DialogHeader>

                                {/* Wallets */}
                                <div className="space-y-3 mb-4 mt-4">
                                        {Object.values(WALLETS).map((w) => (
                                                <div
                                                        key={w.label}
                                                        className="p-4 rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 transition-all"
                                                >
                                                        <div className="flex items-center justify-between mb-2">
                                                                <div className="flex items-center gap-2">
                                                                        <span className="text-lg">{w.icon}</span>
                                                                        <span className="text-sm font-black text-white tracking-tight">{w.label}</span>
                                                                </div>
                                                                <a
                                                                        href={w.explorer}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                                                                >
                                                                        <ExternalLink size={12} className="text-neutral-400" />
                                                                </a>
                                                        </div>
                                                        <div className="flex items-center gap-2 bg-black/40 rounded-xl px-3 py-2">
                                                                <code className="text-xs text-neutral-300 font-mono flex-1 break-all">{w.address}</code>
                                                                <CopyButton text={w.address} />
                                                        </div>
                                                </div>
                                        ))}
                                </div>

                                {/* Divider */}
                                <div className="flex items-center gap-3 mb-6">
                                        <div className="flex-1 h-px bg-white/8" />
                                        <span className="text-xs text-neutral-600 font-black uppercase tracking-widest">After Payment</span>
                                        <div className="flex-1 h-px bg-white/8" />
                                </div>

                                {/* TX Hash input */}
                                <div className="space-y-3 mb-6">
                                        <label className="text-[10px] text-neutral-500 font-black uppercase tracking-widest block">
                                                Transaction Hash / ID
                                        </label>
                                        <input
                                                value={txHash}
                                                onChange={(e) => { setTxHash(e.target.value); setError("") }}
                                                placeholder="Paste your transaction hash here..."
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder:text-neutral-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                                        />
                                        {error && <p className="text-xs text-red-400 font-bold">{error}</p>}
                                        <p className="text-xs text-neutral-600 leading-relaxed">
                                                Your payment will be manually verified by the team. VIP badge will be activated upon confirmation.
                                        </p>
                                </div>

                                <Button
                                        onClick={handleConfirm}
                                        className="w-full h-14 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black rounded-2xl text-sm uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-amber-500/20"
                                >
                                        I've Paid — Proceed to Register
                                </Button>
                        </DialogContent>
                </Dialog>
        )
}

export default function Tickets({ onSelectTicket }: TicketsProps) {
        const [showModal, setShowModal] = useState(false)

        const handleVipConfirm = (txHash: string) => {
                setShowModal(false)
                toast.success("Payment recorded! Complete your registration below.")
                onSelectTicket("vip", txHash)
        }

        return (
                <section id="tickets" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                        {showModal && (
                                <PaymentModal
                                        isOpen={showModal}
                                        onClose={() => setShowModal(false)}
                                        onConfirm={handleVipConfirm}
                                />
                        )}
                        {/* Background glows */}
                        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/4 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
                        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-amber-500/4 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

                        <div className="relative max-w-5xl mx-auto">
                                {/* Header */}
                                <div className="mb-20 text-center">
                                        <p className="text-purple-400/80 text-xs font-black uppercase tracking-[0.3em] mb-4">Access Tiers</p>
                                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                                                Choose your <span className="bg-linear-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent italic pr-8 inline-block">pass.</span>
                                        </h2>
                                        <p className="text-neutral-400 text-lg font-light max-w-xl mx-auto">
                                                Open access for builders. Premium access for ecosystem leaders.
                                        </p>
                                </div>

                                {/* Cards */}
                                <div className="grid md:grid-cols-2 gap-6 items-start">

                                        {/* Standard Pass */}
                                        <div className="relative bg-neutral-950 border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col hover:border-purple-500/30 transition-all duration-500 group">
                                                <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-purple-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                                {/* Badge */}
                                                <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full px-3 py-1 w-fit mb-8">
                                                        <Zap size={12} className="text-purple-400" />
                                                        <span className="text-xs font-black text-purple-400 uppercase tracking-widest">Standard Pass</span>
                                                </div>

                                                <div className="mb-8">
                                                        <div className="flex items-end gap-2 mb-2">
                                                                <span className="text-5xl font-black text-white tracking-tighter">Free</span>
                                                        </div>
                                                        <p className="text-neutral-500 text-sm font-medium">Application required. No hidden costs.</p>
                                                </div>

                                                <ul className="space-y-3 mb-10 flex-1">
                                                        {STANDARD_FEATURES.map((f) => (
                                                                <li key={f} className="flex items-start gap-3">
                                                                        <div className="w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                                                                <Check size={10} className="text-purple-400" />
                                                                        </div>
                                                                        <span className="text-neutral-300 text-sm leading-relaxed">{f}</span>
                                                                </li>
                                                        ))}
                                                </ul>

                                                <div className="mb-6 p-4 rounded-2xl bg-white/3 border border-white/8">
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-neutral-600 mb-1">Who it's for</p>
                                                        <p className="text-neutral-400 text-sm">University students · Developers · Designers · Early-stage founders · Web3-curious builders</p>
                                                </div>

                                                <Button
                                                        onClick={() => onSelectTicket("standard")}
                                                        className="w-full h-14 bg-white/10 hover:bg-white/15 text-white font-black rounded-2xl text-sm uppercase tracking-widest border border-white/10 hover:border-white/20 transition-all hover:scale-[1.01] active:scale-95"
                                                >
                                                        Claim Free Pass
                                                </Button>
                                        </div>

                                        {/* VIP Pass */}
                                        <div className="relative rounded-[2.5rem] p-px group mt-4 md:mt-0">
                                                {/* Gradient border */}
                                                <div className="absolute inset-0 bg-linear-to-br from-amber-400/60 via-orange-500/40 to-amber-600/60 rounded-[2.5rem] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="relative bg-neutral-950 rounded-[2.4rem] p-8 md:p-10 flex flex-col">
                                                        {/* Glow inside */}
                                                        <div className="absolute inset-0 rounded-[2.4rem] bg-linear-to-br from-amber-500/6 via-transparent to-orange-500/4 pointer-events-none" />

                                                        {/* Most popular badge */}
                                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                                                <div className="flex items-center gap-1.5 bg-linear-to-r from-amber-500 to-orange-500 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30 whitespace-nowrap">
                                                                        <Star size={10} fill="currentColor" /> Most Valuable
                                                                </div>
                                                        </div>

                                                        {/* Badge */}
                                                        <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 rounded-full px-3 py-1 w-fit mb-8 mt-2">
                                                                <Crown size={12} className="text-amber-400" />
                                                                <span className="text-xs font-black text-amber-400 uppercase tracking-widest">VIP Ecosystem Pass</span>
                                                        </div>

                                                        <div className="mb-8">
                                                                <div className="flex items-end gap-2 mb-2">
                                                                        <span className="text-5xl font-black text-white tracking-tighter">$200</span>
                                                                        <span className="text-neutral-500 text-sm mb-2 font-medium">one-time</span>
                                                                </div>
                                                                <p className="text-neutral-500 text-sm font-medium">Pay with crypto · EVM / BTC / SOL</p>
                                                        </div>

                                                        {/* Everything in standard */}
                                                        <div className="p-3 rounded-2xl bg-white/3 border border-white/8 mb-4 flex items-center gap-2">
                                                                <Check size={14} className="text-amber-400 shrink-0" />
                                                                <span className="text-sm font-bold text-neutral-300">Everything in Standard Pass</span>
                                                        </div>

                                                        <ul className="space-y-3 mb-10 flex-1">
                                                                {VIP_EXTRAS.map((f) => (
                                                                        <li key={f} className="flex items-start gap-3">
                                                                                <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                                                                        <Check size={10} className="text-amber-400" />
                                                                                </div>
                                                                                <span className="text-neutral-300 text-sm leading-relaxed">{f}</span>
                                                                        </li>
                                                                ))}
                                                        </ul>

                                                        <div className="mb-6 p-4 rounded-2xl bg-white/3 border border-white/8">
                                                                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-600 mb-1">Who it's for</p>
                                                                <p className="text-neutral-400 text-sm">Ecosystem partners · Protocol teams · Startup founders · Investors · Corporate innovation teams</p>
                                                        </div>

                                                        <Button
                                                                onClick={() => setShowModal(true)}
                                                                className="w-full h-14 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black rounded-2xl text-sm uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-95 shadow-lg shadow-amber-500/20"
                                                        >
                                                                Get VIP Access
                                                        </Button>

                                                        <p className="text-center text-xs text-neutral-600 mt-4 flex items-center justify-center gap-1.5">
                                                                <Shield size={10} />
                                                                Manually verified by the team within 24h
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {showModal && (
                                <PaymentModal
                                        isOpen={showModal}
                                        onClose={() => setShowModal(false)}
                                        onConfirm={handleVipConfirm}
                                />
                        )}
                </section>
        )
}
