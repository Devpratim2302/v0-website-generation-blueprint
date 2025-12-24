"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#clients" },
  { label: "Our Projects", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
]

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#clients" },
  { label: "Our Projects", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
]

const industries = [
  { label: "Hotels", href: "#industries" },
  { label: "Restaurants", href: "#industries" },
  { label: "Schools", href: "#industries" },
  { label: "Hospitals", href: "#industries" },
  { label: "E-Commerce", href: "#industries" },
  { label: "Corporate", href: "#industries" },
]

const services = ["Web Design", "E-Commerce", "SEO", "Lead Generation", "Social Media", "PPC Advertising"]

const socialLinks = [
  { icon: "f", href: "#", label: "Facebook" },
  { icon: "t", href: "#", label: "Twitter" },
  { icon: "in", href: "#", label: "LinkedIn" },
  { icon: "ig", href: "#", label: "Instagram" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFooterMenuOpen, setIsFooterMenuOpen] = useState(false)
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false)
  const [isFooterModalOpen, setIsFooterModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="https://image2url.com/images/1765796822907-5d6e2d7e-9bfa-4ba7-ab5a-254ac83fb419.png" alt="Govira Logo" className="w-8 h-8" />
            <span className="font-semibold text-xl text-foreground">Govira</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.label === "Industries") {
                return (
                  <div key={item.label} className="relative group">
                    <button
                      onClick={() => setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isIndustriesDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-40">
                        {industries.map((industry) => (
                          <Link
                            key={industry.label}
                            href={industry.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => setIsIndustriesDropdownOpen(false)}
                          >
                            {industry.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button and Footer Menu */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsFooterModalOpen(true)}
              className="p-2 hover:bg-secondary rounded-md transition-colors"
              aria-label="Toggle footer menu"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book a call
              </Link>
            </Button>
          </nav>
        </div>
      )}

      {/* Footer Modal */}
      {isFooterModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end lg:items-center justify-center"
          onClick={() => setIsFooterModalOpen(false)}
        >
          <div
            className="bg-foreground text-background w-full lg:w-[95%] lg:max-w-6xl rounded-t-lg lg:rounded-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Footer Content */}
            <div className="p-6 lg:p-12">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsFooterModalOpen(false)}
                  className="p-2 hover:bg-background/10 rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                {/* Company Info */}
                <div className="space-y-4">
                  <Link href="/" className="flex items-center gap-2">
                    <img src="https://image2url.com/images/1765796822907-5d6e2d7e-9bfa-4ba7-ab5a-254ac83fb419.png" alt="Govira Logo" className="w-8 h-8" />
                    <span className="font-semibold text-xl">Govira</span>
                  </Link>
                  <p className="text-background/70 leading-relaxed">
                    Empowering businesses with innovative digital solutions that drive growth and success.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.label}
                      >
                        <span className="text-sm font-bold">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-background/70 hover:text-primary transition-colors"
                          onClick={() => setIsFooterModalOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Services</h4>
                  <ul className="space-y-3">
                    {services.map((service) => (
                      <li key={service}>
                        <span className="text-background/70">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                  <ul className="space-y-3 text-background/70">
                    <li>123 Digital Street</li>
                    <li>Tech City, TC 12345</li>
                    <li>hello@govira.com</li>
                    <li>+1 (555) 123-4567</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-background/60 text-sm">© {new Date().getFullYear()} Govira. All rights reserved.</p>
                <div className="flex gap-6 text-sm">
                  <Link href="#" className="text-background/60 hover:text-background transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="text-background/60 hover:text-background transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
