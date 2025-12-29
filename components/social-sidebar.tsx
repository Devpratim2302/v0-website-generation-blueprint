"use client"

import { Facebook, Instagram, X, Linkedin } from "lucide-react"

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
    bgColor: "bg-[#3B5998]",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
    bgColor: "bg-gradient-to-b from-[#FD5949] to-[#D6249F]",
  },
  {
    icon: X,
    href: "https://x.com",
    label: "X (Twitter)",
    bgColor: "bg-black",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    bgColor: "bg-[#0077B5]",
  },
]

export function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-16 h-16 ${social.bgColor} flex items-center justify-center transition-all duration-300 hover:scale-105`}
          aria-label={social.label}
          title={social.label}
        >
          <social.icon className="w-8 h-8 text-white" />
        </a>
      ))}
    </div>
  )
}

