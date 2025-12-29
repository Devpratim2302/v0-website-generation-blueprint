import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#clients" },
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#home" },
  { label: "FAQs", href: "#faq" },
]

const websiteServices = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Logo & Brand Book", href: "#services" },
  { label: "E-Commerce Website", href: "/services/e-commerce" },
  { label: "CRM System", href: "/services/crm-solutions" },
  { label: "Lead Management", href: "/services/lead-management" },
]

const industriesServe = [
  { label: "Real Estate", href: "#industries" },
  { label: "Banking & Financial", href: "#industries" },
  { label: "Education & Healthcare", href: "#industries" },
  { label: "Retail & Manufacturing", href: "#industries" },
  { label: "Travel & Hospitality", href: "#industries" },
  { label: "Transportation & Logistics", href: "#industries" },
]

const websiteServicesWithIndustries: Array<{ label: string; href?: string; hasDropdown?: boolean }> = [
  ...websiteServices,
  { label: "Industries We Serve", hasDropdown: true },
]

const digitalMarketing = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "Lead Generation", href: "/services/lead-management" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "PPC Services", href: "/services/ppc" },
  { label: "Content Marketing", href: "#services" },
  { label: "Email Marketing", href: "#services" },
  { label: "Conversion Rate Optimization", href: "/services/conversion-optimization" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="https://image2url.com/images/1765796822907-5d6e2d7e-9bfa-4ba7-ab5a-254ac83fb419.png" alt="Govira Logo" className="w-8 h-8" />
              <span className="font-semibold text-xl text-foreground">Govira</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Empowering your digital growth with expert solutions.
            </p>
            <div className="space-y-2">
              <h5 className="font-semibold text-foreground">Follow Us</h5>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Website Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Website Services</h4>
            <ul className="space-y-3">
              {websiteServicesWithIndustries.map((item) => (
                <li key={item.label}>
                  {item.hasDropdown ? (
                    <div className="group relative">
                      <button className="font-semibold text-foreground hover:text-primary transition-colors text-left">
                        {item.label}
                      </button>
                      <ul className="mt-2 space-y-2 hidden group-hover:block">
                        {industriesServe.map((industry) => (
                          <li key={industry.label}>
                            <Link href={industry.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                              {industry.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link href={item.href || "#"} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Digital Marketing</h4>
            <ul className="space-y-3">
              {digitalMarketing.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach out to us */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Reach out to us anytime</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="mailto:info@govira.com" className="hover:text-primary transition-colors">info@govira.com</a></li>
              <li>INDIA +91 8899888088</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-foreground text-sm">© {new Date().getFullYear()} Govira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
