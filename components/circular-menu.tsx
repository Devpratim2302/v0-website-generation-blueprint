"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  { label: "Services", href: "#services", icon: "🎯", color: "bg-blue-500" },
  { label: "Portfolio", href: "#clients", icon: "📁", color: "bg-purple-500" },
  { label: "Our Projects", href: "#process", icon: "🚀", color: "bg-pink-500" },
  { label: "Testimonials", href: "#testimonials", icon: "⭐", color: "bg-yellow-500" },
  { label: "Careers", href: "#careers", icon: "💼", color: "bg-green-500" },
  { label: "Contact", href: "#contact", icon: "📧", color: "bg-red-500" },
]

export function CircularMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const getTransform = (index: number) => {
    if (!isOpen) return "translate(0, 0) scale(0)"
    
    const angleSlice = (360 / menuItems.length) * (Math.PI / 180)
    const angle = angleSlice * index
    const radius = 100
    
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    
    return `translate(${x}px, ${y}px) scale(1)`
  }

  return (
    <div className="relative w-16 h-16">
      <style>{`
        @keyframes menuItemAppear {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }
          100% {
            opacity: 1;
            transform: translate(var(--tx), var(--ty)) scale(1);
          }
        }

        .menu-item-animated {
          animation: menuItemAppear 0.3s ease-out forwards;
        }
      `}</style>

      {/* Central button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "absolute top-0 left-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-50",
          "bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl",
          isOpen && "bg-primary/90"
        )}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Menu items */}
      {isOpen && (
        <div className="absolute top-8 left-8 w-0 h-0">
          {menuItems.map((item, index) => {
            const angleSlice = (360 / menuItems.length) * (Math.PI / 180)
            const angle = angleSlice * index
            const radius = 100
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "absolute w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 menu-item-animated",
                  item.color
                )}
                style={{
                  "--tx": `${x}px`,
                  "--ty": `${y}px`,
                } as React.CSSProperties}
                title={item.label}
              >
                {item.icon}
              </Link>
            )
          })}
        </div>
      )}

      {/* Overlay to close menu */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40"
          aria-label="Close menu"
        />
      )}
    </div>
  )
}
