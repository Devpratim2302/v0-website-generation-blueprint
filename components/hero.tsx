"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "5+", label: "Projects Delivered", isText: true, suffix: "" },
  { value: "Growth-Focused", label: "Strategy", isText: true, suffix: "" },
  { value: "Senior Team", label: "Only", isText: true, suffix: "" },
]

type StatItemProps = {
  value: number | string
  label: string
  suffix?: string
  show: boolean
  isText?: boolean
}

function StatItem({ value, label, suffix = "", show, isText = false }: StatItemProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (show && !isText && typeof value === 'number') {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [show, value, isText])

  return (
    <div className="text-center px-3 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
      <div className="text-lg lg:text-xl font-bold text-white mb-0">
        {isText ? value : count}
        {suffix}
      </div>
      <div className="text-white/80 text-[10px] font-medium">{label}</div>
    </div>
  )
}

export function Hero() {
  const [showStats, setShowStats] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStats(true)
    }, 4000) // 4 second delay
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-32 lg:pb-40 overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Full-width video background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ aspectRatio: '16/13' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full">
        <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
          {/* Left side - Main content */}
          <div className="max-w-3xl text-center lg:text-left space-y-6 lg:space-y-8 animate-slide-in-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance text-white">
              Empowering your <span className="text-primary">Digital Growth</span> with Expert Solutions
            </h1>

            <p className="text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Govira blends smart marketing with powerful web development to help your brand grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="group">
                <Link href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Stats with delay animation */}
          <div
            className={`hidden lg:flex flex-col gap-2 transition-all duration-1000 ${showStats ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                show={showStats}
                isText={stat.isText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
