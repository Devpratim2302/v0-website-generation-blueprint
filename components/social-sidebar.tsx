"use client"

import { Facebook, Instagram, Mail, Linkedin } from "lucide-react"

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
    bgColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
    bgColor: "bg-pink-500 hover:bg-pink-600",
  },
  {
    icon: Mail,
    href: "https://x.com",
    label: "X (Twitter)",
    bgColor: "bg-black hover:bg-gray-900",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    bgColor: "bg-blue-700 hover:bg-blue-800",
  },
]

export function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 p-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-lg ${social.bgColor} flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110`}
          aria-label={social.label}
          title={social.label}
        >
          <social.icon className="w-6 h-6 text-white" />
        </a>
      ))}
    </div>
  )
}
