"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#process", hasDropdown: true },
  { label: "Industries", href: "#industries", hasDropdown: true },
  { label: "Portfolio", href: "#portfolio", hasDropdown: true },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const quickLinks = [
  { label: "Services", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const services: { label: string; href: string }[] = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "E-Commerce", href: "/services/e-commerce" },
  { label: "SEO", href: "/services/seo" },
  { label: "Lead Management", href: "/services/lead-management" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Conversion & Optimization", href: "/services/conversion-optimization" },
  { label: "PPC (Pay Per Click)", href: "/services/ppc" },
  { label: "CRM Solutions", href: "/services/crm-solutions" },
  { label: "Data Analytics", href: "/services/data-analytics" },
]

const industries = [
  { label: "Hotels", href: "/industries/hotels" },
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Schools", href: "/industries/schools" },
  { label: "Hospitals", href: "/industries/hospitals" },
  { label: "E-Commerce", href: "/industries/e-commerce" },
  { label: "Corporate", href: "/industries/corporate" },
]

const portfolioItems: { label: string; href: string }[] = [
  { label: "Veerance", href: "/portfolio/veerance" },
  { label: "Anchor Space", href: "/portfolio/anchor-space" },
  { label: "Raksha Safety App", href: "/portfolio/raksha-safety-app" },
  { label: "Aditi Infrastructures", href: "/portfolio/aditi-infrastructures" },
  { label: "ARK Industries", href: "/portfolio/ark-industries" },
  { label: "Habit Tracker App", href: "/portfolio/habit-tracker-app" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFooterMenuOpen, setIsFooterMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false)
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false)

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
        isScrolled ? "bg-background/98 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-md shadow-sm",
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
              if (item.hasDropdown) {
                // Determine which dropdown data and state to use
                let dropdownItems: typeof services = []
                let isOpen = false
                let setIsOpen: (value: boolean) => void = () => { }

                if (item.label === "Services") {
                  dropdownItems = services
                  isOpen = isServicesDropdownOpen
                  setIsOpen = setIsServicesDropdownOpen
                } else if (item.label === "Industries") {
                  dropdownItems = industries
                  isOpen = isIndustriesDropdownOpen
                  setIsOpen = setIsIndustriesDropdownOpen
                } else if (item.label === "Portfolio") {
                  dropdownItems = portfolioItems
                  isOpen = isPortfolioDropdownOpen
                  setIsOpen = setIsPortfolioDropdownOpen
                }

                return (
                  <div key={item.label} className="relative group">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-muted-foreground hover:text-primary transition-all text-sm font-medium flex items-center gap-1 px-4 py-2 rounded-lg hover:border hover:border-primary/50 hover:bg-primary/15"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isOpen && dropdownItems.length > 0 && (
                      <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-40">
                        {dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.label}
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
                  className="text-muted-foreground hover:text-primary transition-all text-sm font-medium px-4 py-2 rounded-lg hover:border hover:border-primary/50 hover:bg-primary/15"
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button and Hamburger Menu */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild>
              <Link href="#contact">Book a call</Link>
            </Button>
            <div className="relative">
              <button
                onClick={() => setIsFooterMenuOpen(!isFooterMenuOpen)}
                className="p-2 hover:bg-secondary rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5 text-foreground" />
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