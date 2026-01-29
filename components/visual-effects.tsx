"use client"

import React, { useEffect, useRef } from "react"
import { motion, useScroll, useSpring } from "motion/react"

export const InteractiveCanvas = () => {
        const canvasRef = useRef<HTMLCanvasElement>(null)

        useEffect(() => {
                const canvas = canvasRef.current
                if (!canvas) return

                const ctx = canvas.getContext("2d")
                if (!ctx) return

                let animationFrameId: number
                let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
                const particleCount = 40

                const resize = () => {
                        canvas.width = window.innerWidth
                        canvas.height = window.innerHeight
                        initParticles()
                }

                const initParticles = () => {
                        particles = []
                        for (let i = 0; i < 25; i++) {
                                particles.push({
                                        x: Math.random() * canvas.width,
                                        y: Math.random() * canvas.height,
                                        vx: (Math.random() - 0.5) * 0.3,
                                        vy: (Math.random() - 0.5) * 0.3,
                                        size: Math.random() * 1.5 + 0.5
                                })
                        }
                }

                const draw = () => {
                        if (!ctx) return
                        ctx.clearRect(0, 0, canvas.width, canvas.height)

                        // Draw Grid is now handled by CSS background for performance

                        ctx.fillStyle = "rgba(168, 85, 247, 0.1)" // Purple tint
                        ctx.strokeStyle = "rgba(168, 85, 247, 0.03)"

                        particles.forEach((p, i) => {
                                p.x += p.vx
                                p.y += p.vy

                                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                                ctx.beginPath()
                                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                                ctx.fill()

                                for (let j = i + 1; j < particles.length; j++) {
                                        const p2 = particles[j]
                                        const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
                                        if (dist < 250) {
                                                ctx.lineWidth = 0.5 - (dist / 500)
                                                ctx.beginPath()
                                                ctx.moveTo(p.x, p.y)
                                                ctx.lineTo(p2.x, p2.y)
                                                ctx.stroke()
                                        }
                                }
                        })

                        animationFrameId = requestAnimationFrame(draw)
                }

                window.addEventListener("resize", resize)
                resize()
                draw()

                return () => {
                        window.removeEventListener("resize", resize)
                        cancelAnimationFrame(animationFrameId)
                }
        }, [])

        return (
                <canvas
                        ref={canvasRef}
                        className="fixed inset-0 pointer-events-none z-0 opacity-50 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)]"
                        style={{
                                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
                                backgroundSize: '120px 120px'
                        } as React.CSSProperties}
                />
        )
}

export const ScrollProgress = () => {
        const { scrollYProgress } = useScroll()
        const scaleX = useSpring(scrollYProgress, {
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
        })

        return (
                <motion.div
                        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 via-cyan-400 to-pink-500 origin-left z-50"
                        style={{ scaleX }}
                />
        )
}

export const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
        return (
                <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for "Apple-like" feel
                                delay: 0.1
                        }}
                >
                        {children}
                </motion.div>
        )
}
