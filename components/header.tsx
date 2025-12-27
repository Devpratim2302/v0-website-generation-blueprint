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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFooterMenuOpen, setIsFooterMenuOpen] = useState(false)
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false)

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
            <div className="relative">
              <button
                onClick={() => setIsFooterMenuOpen(!isFooterMenuOpen)}
                className="p-2 hover:bg-secondary rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                <ChevronDown className="w-5 h-5 text-foreground" />
              </button>
              {isFooterMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-40">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setIsFooterMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Button asChild>
              <Link href="#contact">Book a call</Link>
            </Button>
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
    </header>
  )
}
