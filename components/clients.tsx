"use client"

import { useState } from "react"

const clients = [
  { name: "TechFlow", initials: "TF" },
  { name: "DataSync", initials: "DS" },
  { name: "CloudNine", initials: "C9" },
  { name: "NextGen", initials: "NG" },
  { name: "InnovateCo", initials: "IC" },
  { name: "FutureStack", initials: "FS" },
  { name: "ByteWise", initials: "BW" },
  { name: "CodeCraft", initials: "CC" },
]

export function Clients() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="clients" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Trusted by Industry Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We've partnered with amazing companies to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative aspect-[3/2] rounded-xl bg-card border border-border flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex items-center gap-2 transition-all duration-300 ${hoveredIndex === index ? "text-primary scale-110" : "text-muted-foreground grayscale"
                  }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-colors duration-300 ${hoveredIndex === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                >
                  {client.initials}
                </div>
                <span className="font-semibold">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
