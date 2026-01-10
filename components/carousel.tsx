"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  items: React.ReactNode[]
  itemsPerView?: number
}

export function Carousel({ items, itemsPerView = 1 }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + itemsPerView >= items.length ? 0 : prev + itemsPerView))
  }

  const prev = () => {
    setCurrent((prev) => (prev - itemsPerView < 0 ? Math.max(0, items.length - itemsPerView) : prev - itemsPerView))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${(current / itemsPerView) * 100}%)`,
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} className={`w-full flex-shrink-0 px-2`}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:hidden z-10 p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="text-primary" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:hidden z-10 p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="text-primary" />
      </button>

      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {Array.from({ length: Math.ceil(items.length / itemsPerView) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx * itemsPerView)}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(current / itemsPerView) === idx ? "bg-primary" : "bg-primary/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
