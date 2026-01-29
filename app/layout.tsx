import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Blockfest Ethiopia 2026",
  description: "University Blockchain Week · Hackathon · Conference · Ecosystem Festival in Addis Ababa, Ethiopia.",
  icons: {
    icon: "/bad-ethiopia.jpg",
    apple: "/bad-ethiopia.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakarta.variable} ${syne.variable} font-sans antialiased text-white bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
