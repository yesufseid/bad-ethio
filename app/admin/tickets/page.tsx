"use client"

import { useState, useEffect, useTransition } from "react"
import { Crown, CheckCircle2, XCircle, Clock, Copy, ExternalLink, RefreshCw, Users, Zap } from "lucide-react"
import { verifyTicketAction, unverifyTicketAction, getAllRegistrations } from "@/app/actions/verify-ticket"
import { toast } from "sonner"

type Registration = Awaited<ReturnType<typeof getAllRegistrations>>[number]

function getTxUrl(hash: string | null | undefined): string | null {
        if (!hash) return null
        if (hash.startsWith("0x")) return `https://etherscan.io/tx/${hash}`
        if (hash.startsWith("bc1") || hash.startsWith("1") || hash.startsWith("3"))
                return `https://mempool.space/tx/${hash}`
        return `https://solscan.io/tx/${hash}`
}

function CopyBtn({ text }: { text: string }) {
        const [copied, setCopied] = useState(false)
        return (
                <button
                        onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500) }}
                        className="p-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-all ml-1 shrink-0"
                >
                        {copied ? <CheckCircle2 size={11} className="text-green-400" /> : <Copy size={11} className="text-neutral-500" />}
                </button>
        )
}

function TicketRow({ reg, onRefresh }: { reg: Registration; onRefresh: () => void }) {
        const [isPending, startTransition] = useTransition()
        const txUrl = getTxUrl(reg.txHash)
        const isVip = reg.ticketType === "vip"

        const toggle = () => {
                startTransition(async () => {
                        const action = reg.verified ? unverifyTicketAction : verifyTicketAction
                        const result = await action(reg.id)
                        if (result.ok) {
                                toast.success(reg.verified ? "Ticket unverified." : "Ticket verified! ✓")
                                onRefresh()
                        } else {
                                toast.error("message" in result ? result.message : "Action failed.")
                        }
                })
        }

        return (
                <div className={`rounded-2xl border p-5 transition-all ${reg.verified
                                ? "border-green-500/20 bg-green-500/3"
                                : isVip
                                        ? "border-amber-500/15 bg-amber-500/2 hover:border-amber-500/30"
                                        : "border-white/8 bg-white/2 hover:border-white/15"
                        }`}>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                {/* Left: identity */}
                                <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                <span className="font-black text-white text-sm truncate">{reg.fullName}</span>

                                                {/* Ticket type badge */}
                                                {isVip ? (
                                                        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-2 py-0.5 shrink-0">
                                                                <Crown size={8} /> VIP
                                                        </span>
                                                ) : (
                                                        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-2 py-0.5 shrink-0">
                                                                <Zap size={8} /> Standard
                                                        </span>
                                                )}

                                                {/* Verification status */}
                                                {reg.verified ? (
                                                        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5 shrink-0">
                                                                <CheckCircle2 size={8} /> Verified
                                                        </span>
                                                ) : isVip ? (
                                                        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-2 py-0.5 shrink-0">
                                                                <Clock size={8} /> Pending
                                                        </span>
                                                ) : null}
                                        </div>

                                        <p className="text-neutral-500 text-xs mb-3">{reg.email} · {reg.phone}</p>
                                        <p className="text-neutral-700 text-xs mb-3">{reg.university} · {reg.department} · Year {reg.year}</p>

                                        {/* TX Hash — only for VIP */}
                                        {isVip && (
                                                reg.txHash ? (
                                                        <div className="flex items-center gap-1 bg-black/40 rounded-lg px-2 py-1.5 w-full">
                                                                <code className="text-[11px] text-neutral-400 font-mono truncate flex-1">{reg.txHash}</code>
                                                                <CopyBtn text={reg.txHash} />
                                                                {txUrl && (
                                                                        <a href={txUrl} target="_blank" rel="noopener noreferrer"
                                                                                className="p-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-all ml-0.5 shrink-0">
                                                                                <ExternalLink size={11} className="text-neutral-500" />
                                                                        </a>
                                                                )}
                                                        </div>
                                                ) : (
                                                        <span className="text-xs text-red-500/60 italic">⚠ No TX hash submitted</span>
                                                )
                                        )}
                                </div>

                                {/* Right: verify action (VIP only) */}
                                {isVip && (
                                        <div className="flex items-center shrink-0">
                                                <button
                                                        onClick={toggle}
                                                        disabled={isPending}
                                                        className={`flex items-center gap-1.5 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-all disabled:opacity-50 ${reg.verified
                                                                        ? "bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20"
                                                                        : "bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20"
                                                                }`}
                                                >
                                                        {isPending ? (
                                                                <RefreshCw size={11} className="animate-spin" />
                                                        ) : reg.verified ? (
                                                                <><XCircle size={11} /> Unverify</>
                                                        ) : (
                                                                <><CheckCircle2 size={11} /> Verify</>
                                                        )}
                                                </button>
                                        </div>
                                )}
                        </div>
                </div>
        )
}

export default function AdminTicketsPage() {
        const [allRegs, setAllRegs] = useState<Registration[]>([])
        const [loading, setLoading] = useState(true)
        const [ticketFilter, setTicketFilter] = useState<"all" | "standard" | "vip">("all")
        const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "verified">("all")

        const load = async () => {
                setLoading(true)
                try {
                        const data = await getAllRegistrations()
                        setAllRegs(data)
                } catch {
                        toast.error("Failed to load registrations.")
                } finally {
                        setLoading(false)
                }
        }

        useEffect(() => { load() }, [])

        const filtered = allRegs.filter((r) => {
                const matchTicket =
                        ticketFilter === "all" ||
                        (ticketFilter === "vip" && r.ticketType === "vip") ||
                        (ticketFilter === "standard" && r.ticketType !== "vip")
                const matchStatus =
                        statusFilter === "all" ||
                        (statusFilter === "verified" && r.verified) ||
                        (statusFilter === "pending" && !r.verified && r.ticketType === "vip")
                return matchTicket && matchStatus
        })

        const stats = {
                total: allRegs.length,
                vip: allRegs.filter((r) => r.ticketType === "vip").length,
                standard: allRegs.filter((r) => r.ticketType !== "vip").length,
                pendingVip: allRegs.filter((r) => r.ticketType === "vip" && !r.verified).length,
                verified: allRegs.filter((r) => r.verified).length,
        }

        return (
                <div className="min-h-screen bg-neutral-950 text-white px-4 py-12 sm:px-8">
                        <div className="max-w-4xl mx-auto">

                                {/* Header */}
                                <div className="flex items-center justify-between mb-10">
                                        <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                                        <Crown size={20} className="text-amber-400" />
                                                </div>
                                                <div>
                                                        <h1 className="text-2xl font-black text-white tracking-tighter">Ticket Admin</h1>
                                                        <p className="text-neutral-500 text-sm">BAD Ethiopia · All Registrations</p>
                                                </div>
                                        </div>
                                        <button
                                                onClick={load}
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-bold text-neutral-400"
                                        >
                                                <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                                                Refresh
                                        </button>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
                                        {[
                                                { label: "Total", value: stats.total, icon: <Users size={14} />, color: "text-white border-white/10" },
                                                { label: "Standard", value: stats.standard, icon: <Zap size={14} />, color: "text-purple-400 border-purple-500/20" },
                                                { label: "VIP", value: stats.vip, icon: <Crown size={14} />, color: "text-amber-400 border-amber-500/20" },
                                                { label: "Verified", value: stats.verified, icon: <CheckCircle2 size={14} />, color: "text-green-400 border-green-500/20" },
                                                { label: "VIP Pending", value: stats.pendingVip, icon: <Clock size={14} />, color: "text-orange-400 border-orange-500/20" },
                                        ].map((s) => (
                                                <div key={s.label} className={`bg-neutral-900 border rounded-2xl p-4 text-center ${s.color}`}>
                                                        <div className="flex justify-center mb-1 opacity-60">{s.icon}</div>
                                                        <p className="text-2xl font-black mb-0.5">{s.value}</p>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-50">{s.label}</p>
                                                </div>
                                        ))}
                                </div>

                                {/* Filters */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                        <div className="flex gap-1.5">
                                                {(["all", "standard", "vip"] as const).map((f) => (
                                                        <button key={f}
                                                                onClick={() => setTicketFilter(f)}
                                                                className={`px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${ticketFilter === f
                                                                                ? "bg-amber-500/15 border border-amber-500/30 text-amber-400"
                                                                                : "bg-white/3 border border-white/8 text-neutral-600 hover:text-neutral-400"
                                                                        }`}
                                                        >{f}</button>
                                                ))}
                                        </div>
                                        <div className="flex gap-1.5">
                                                {(["all", "pending", "verified"] as const).map((f) => (
                                                        <button key={f}
                                                                onClick={() => setStatusFilter(f)}
                                                                className={`px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${statusFilter === f
                                                                                ? "bg-green-500/15 border border-green-500/30 text-green-400"
                                                                                : "bg-white/3 border border-white/8 text-neutral-600 hover:text-neutral-400"
                                                                        }`}
                                                        >{f}</button>
                                                ))}
                                        </div>
                                </div>

                                {/* List */}
                                {loading ? (
                                        <div className="text-center py-20">
                                                <RefreshCw size={24} className="animate-spin text-neutral-700 mx-auto mb-4" />
                                                <p className="text-neutral-700 text-sm">Loading registrations...</p>
                                        </div>
                                ) : filtered.length === 0 ? (
                                        <div className="text-center py-20 border border-white/5 rounded-2xl">
                                                <Users size={32} className="text-neutral-800 mx-auto mb-4" />
                                                <p className="text-neutral-600 text-sm">No registrations match this filter.</p>
                                        </div>
                                ) : (
                                        <div className="space-y-3">
                                                {filtered.map((reg) => (
                                                        <TicketRow key={reg.id} reg={reg} onRefresh={load} />
                                                ))}
                                        </div>
                                )}
                        </div>
                </div>
        )
}
