import {
  Building2,
  UtensilsCrossed,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    icon: Building2,
    title: "Hotels",
    description:
      "Digital solutions for hospitality management and guest experiences",
    href: "/industries/hotels",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Online ordering, reservations, and restaurant management systems",
    href: "/industries/restaurants",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    description:
      "Educational platforms and learning management solutions",
    href: "/industries/schools",
  },
  {
    icon: HeartPulse,
    title: "Hospitals",
    description:
      "Healthcare technology and patient management systems",
    href: "/industries/hospitals",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Complete online retail solutions and marketplace platforms",
    href: "/industries/e-commerce",
  },
  {
    icon: Briefcase,
    title: "Corporate",
    description:
      "Enterprise software and business management solutions",
    href: "/industries/corporate",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Specialized expertise across diverse sectors, delivering tailored
            solutions for your industry
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block transition-transform hover:scale-105"
            >
              <Card
                className="border border-border bg-card shadow-sm h-full cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
