"use client"

import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Veerance",
    category: "E-Commerce Platform",
    description: "Modern online store with seamless checkout and clothes catalog",
    image: "/veerance.png",
    href: "/portfolio/veerance",
  },
  {
    id: 2,
    title: "Anchor Space",
    category: "Website",
    description: "Complete business website with functional website for a co-working space",
    image: "/anchor-space.png",
    href: "/portfolio/anchor-space",
  },
  {
    id: 3,
    title: "Raksha Saftey App",
    category: "Mobile App",
    description: "iOS and Android app for personal safety with real-time location tracking",
    image: "/raksha-safety-app.jpg",
    href: "/portfolio/raksha-safety-app",
  },
  {
    id: 4,
    title: "Aditi Infrastructures",
    category: "Website",
    description: "Aditi Infrastructures is a leading real estate developer specializing in residential and commercial properties",
    image: "/aditi-infrastructures.jpg",
    href: "/portfolio/aditi-infrastructures",
  },
  {
    id: 5,
    title: "ARK Industries",
    category: "Website",
    description: "Manufacturing company website with fastening products and solutions",
    image: "/ark-industries.png",
    href: "/portfolio/ark-industries",
  },
  {
    id: 6,
    title: "Habit Tracker App",
    category: "Mobile App",
    description: "Comprehensive health and fitness tracking app for iOS and Android",
    image: "/habit-tracker.png",
    href: "/portfolio/habit-tracker-app",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing our best work across websites, apps, branding, and digital campaigns
          </p>
        </div>

        <div className="w-full">
          <div className="flex gap-4 lg:gap-6 justify-center">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group relative overflow-hidden rounded-xl bg-card hover:shadow-2xl transition-all duration-300 flex-1 max-w-[200px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4 text-white">
                  <p className="text-xs font-medium text-white mb-1">{project.category}</p>
                  <h3 className="text-sm lg:text-base font-bold mb-2">{project.title}</h3>
                  <p className="text-xs text-gray-300 line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Horizontal Scrolling Marquee - First Row (Right to Left) - Logos + Names */}
        <div className="mt-16 overflow-hidden border-t border-border py-10">
          <div className="animate-marquee-reverse whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-block">
                {projects.map((project, idx) => (
                  <span
                    key={`logo-name-${i}-${idx}`}
                    className="inline-flex items-center mx-12"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-24 h-24 rounded-lg object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <span className="ml-6 text-3xl font-bold text-foreground">
                      {project.title}
                    </span>
                    <span className="ml-12 text-2xl text-muted-foreground">•</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Horizontal Scrolling Marquee - Second Row (Left to Right) - Logos Only */}
        <div className="overflow-hidden border-t border-b border-border py-10">
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-block">
                {projects.map((project, idx) => (
                  <span
                    key={`logo-${i}-${idx}`}
                    className="inline-flex items-center mx-12"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-24 h-24 rounded-lg object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }

        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}