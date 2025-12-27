"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

const businessTypes = ["Startup", "Small Business", "Enterprise", "E-commerce", "Non-profit", "Other"]

const serviceOptions = [
  "Web Design",
  "Web Development",
  "E-Commerce",
  "SEO",
  "PPC Advertising",
  "Social Media Marketing",
  "Lead Generation",
  "Full Digital Strategy",
]

const budgetRanges = ["₹5,00,000 - ₹10,00,000", "₹10,00,000 - ₹25,00,000", "₹25,00,000 - ₹50,00,000", "₹50,00,000 - ₹1,00,00,000", "₹1,00,00,000+"]

const timelines = ["ASAP", "Within 1 month", "1-3 months", "3-6 months", "Just exploring"]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-2xl mx-auto bg-card border-border">
            <CardContent className="p-8 lg:p-12 text-center">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Thank You!</h3>
              <p className="text-muted-foreground">
                We've received your message and will get back to you within 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your project? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-card border-border">
          <CardContent className="p-6 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Client Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 9xxxx xxxxx" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="client@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL</Label>
                  <Input id="website" type="url" placeholder="https://example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="services">Services Needed</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((budget) => (
                        <SelectItem key={budget} value={budget.toLowerCase().replace(/\s+/g, "-")}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 5 */}
              <div className="space-y-2">
                <Label htmlFor="timeline">When do you want to start?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline} value={timeline.toLowerCase().replace(/\s+/g, "-")}>
                        {timeline}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
