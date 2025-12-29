"use client"

import Link from "next/link"
import { Palette, ShoppingCart, Search, Users, Share2, Zap, DollarSign, Database, BarChart3 } from "lucide-react"

const services = [
    {
        id: 1,
        name: "Web Design",
        description: "Beautiful, responsive websites that captivate your audience.",
        icon: Palette,
        href: "/services/web-design",
    },
    {
        id: 2,
        name: "E-Commerce",
        description: "Powerful online stores with seamless shopping experiences.",
        icon: ShoppingCart,
        href: "/services/e-commerce",
    },
    {
        id: 3,
        name: "SEO",
        description: "Boost visibility and rank higher in search results.",
        icon: Search,
        href: "/services/seo",
    },
    {
        id: 4,
        name: "Lead Management",
        description: "Capture, nurture, and convert leads efficiently.",
        icon: Users,
        href: "/services/lead-management",
    },
    {
        id: 5,
        name: "Social Media Marketing",
        description: "Build brand presence across all platforms.",
        icon: Share2,
        href: "/services/social-media-marketing",
    },
    {
        id: 6,
        name: "Conversion Optimization",
        description: "Turn more visitors into customers.",
        icon: Zap,
        href: "/services/conversion-optimization",
    },
    {
        id: 7,
        name: "PPC",
        description: "Targeted pay-per-click campaigns that deliver results.",
        icon: DollarSign,
        href: "/services/ppc",
    },
    {
        id: 8,
        name: "CRM Solutions",
        description: "Customized CRM systems for better relationships.",
        icon: Database,
        href: "/services/crm-solutions",
    },
    {
        id: 9,
        name: "Data Analytics",
        description: "Data-driven insights to fuel business growth.",
        icon: BarChart3,
        href: "/services/data-analytics",
    },
]

export function Services() {
    return (
        <section id="services" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side - Header (Fixed Width) */}
                    <div className="lg:w-80 flex-shrink-0">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
                        <p className="text-muted-foreground text-base">
                            From strategy to execution, we offer a full range of digital marketing and web development services tailored to help your brand thrive online.
                        </p>
                    </div>

                    {/* Right Side - Services Grid (Flexible Width) */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    className="group"
                                >
                                    <div className="h-full bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                                            <service.icon className="w-6 h-6 text-primary" />
                                        </div>

                                        {/* Service Name */}
                                        <h3 className="text-lg font-bold mb-2 text-foreground">
                                            {service.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
