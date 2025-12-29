"use client"

import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Veerance",
    image: "/veerance.png",
    href: "/portfolio/veerance",
  },
  {
    id: 2,
    title: "Anchor Space",
    image: "/anchor-space.png",
    href: "/portfolio/anchor-space",
  },
  {
    id: 3,
    title: "Raksha Safety App",
    image: "/raksha-safety-app.jpg",
    href: "/portfolio/raksha-safety-app",
  },
  {
    id: 4,
    title: "Aditi Infrastructures",
    image: "/aditi-infrastructures.jpg",
    href: "/portfolio/aditi-infrastructures",
  },
  {
    id: 5,
    title: "ARK Industries",
    image: "/ark-industries.png",
    href: "/portfolio/ark-industries",
  },
  {
    id: 6,
    title: "Habit Tracker App",
    image: "/habit-tracker.png",
    href: "/portfolio/habit-tracker-app",
  },
]

const companies = [
  "Veerance",
  "Anchor Space",
  "Raksha",
  "Aditi Infrastructures",
  "ARK Industries",
  "Habit Tracker",
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing our best work across websites, apps, branding, and digital campaigns
          </p>
        </div>

        {/* Line 1: Small Grid Images + Horizontal Scrolling Text */}
        <div className="flex items-center gap-8 mb-16">
          {/* Small Grid of Images */}
          <div className="grid grid-cols-2 gap-3 flex-shrink-0 w-64">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group relative aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </Link>
            ))}
          </div>

          {/* Horizontal Scrolling Text */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-scroll-horizontal whitespace-nowrap">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="inline-block">
                  {projects.map((project) => (
                    <span
                      key={`${i}-${project.id}`}
                      className="text-4xl lg:text-6xl font-bold text-foreground/10 mx-8"
                    >
                      {project.title}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Line 2: Company Symbols with Horizontal Scrolling */}
        <div className="overflow-hidden border-t border-b border-border py-8">
          <div className="animate-scroll-horizontal-slow whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="inline-block">
                {companies.map((company, idx) => (
                  <span
                    key={`${i}-${idx}`}
                    className="inline-flex items-center mx-12"
                  >
                    <span className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {company}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-horizontal-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }

        .animate-scroll-horizontal-slow {
          animation: scroll-horizontal-slow 40s linear infinite;
        }

        .animate-scroll-horizontal:hover,
        .animate-scroll-horizontal-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}