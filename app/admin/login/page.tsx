"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Lock, Eye, EyeOff, Loader2, Crown } from "lucide-react"
import { adminLoginAction } from "@/app/actions/admin-auth"

export default function AdminLoginPage() {
        const [password, setPassword] = useState("")
        const [showPw, setShowPw] = useState(false)
        const [error, setError] = useState("")
        const [isPending, startTransition] = useTransition()
        const router = useRouter()

        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault()
                setError("")
                startTransition(async () => {
                        const result = await adminLoginAction(password)
                        if (result.error) {
                                setError(result.error)
                        } else {
                                router.push("/admin/tickets")
                                router.refresh()
                        }
                })
        }

        return (
                <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
                        {/* Background glow */}
                        <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/4 rounded-full blur-[120px]" />
                        </div>

                        <div className="relative w-full max-w-sm">
                                {/* Logo */}
                                <div className="text-center mb-10">
                                        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-5">
                                                <Crown size={22} className="text-amber-400" />
                                        </div>
                                        <h1 className="text-2xl font-black text-white tracking-tighter">Admin Access</h1>
                                        <p className="text-neutral-600 text-sm mt-1">BAD Ethiopia · Restricted</p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="bg-neutral-900 border border-white/8 rounded-3xl p-8 space-y-5">
                                        <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                                                        <Lock size={10} /> Password
                                                </label>
                                                <div className="relative">
                                                        <input
                                                                type={showPw ? "text" : "password"}
                                                                value={password}
                                                                onChange={(e) => { setPassword(e.target.value); setError("") }}
                                                                placeholder="Enter admin password"
                                                                autoFocus
                                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all font-mono"
                                                        />
                                                        <button
                                                                type="button"
                                                                onClick={() => setShowPw((v) => !v)}
                                                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-600 hover:text-neutral-400 transition-colors"
                                                        >
                                                                {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                                                        </button>
                                                </div>
                                                {error && (
                                                        <p className="text-xs text-red-400 font-bold flex items-center gap-1.5">
                                                                <span className="w-1 h-1 rounded-full bg-red-400 inline-block" />
                                                                {error}
                                                        </p>
                                                )}
                                        </div>

                                        <button
                                                type="submit"
                                                disabled={isPending || !password}
                                                className="w-full h-12 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-black font-black rounded-xl text-sm uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
                                        >
                                                {isPending ? (
                                                        <><Loader2 size={14} className="animate-spin" /> Verifying...</>
                                                ) : (
                                                        "Enter"
                                                )}
                                        </button>
                                </form>

                                <p className="text-center text-xs text-neutral-800 mt-6">
                                        Unauthorized access is prohibited.
                                </p>
                        </div>
                </div>
        )
}
