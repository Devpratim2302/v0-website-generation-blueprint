"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Govira transformed our online presence. Our website traffic increased by 300% within three months of launching.",
    name: "Sarah Johnson",
    company: "TechFlow Inc.",
    role: "CEO",
  },
  {
    quote: "The team's expertise in both design and development is unmatched. They delivered beyond our expectations.",
    name: "Michael Chen",
    company: "DataSync Solutions",
    role: "Marketing Director",
  },
  {
    quote:
      "Working with Govira was a game-changer. Their strategic approach to digital marketing doubled our leads.",
    name: "Emily Rodriguez",
    company: "CloudNine Systems",
    role: "Founder",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="border-none shadow-xl bg-card">
              <CardContent className="p-8 lg:p-12">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <blockquote className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"
                      }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
