import Link from "next/link"
import { ChevronRight } from "lucide-react"

type PageHeroProps = {
    title: string
    description: string
    breadcrumbs: { label: string; href: string }[]
}

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
    return (
        <section className="relative pt-32 pb-16 lg:pb-20 bg-gradient-to-br from-primary/10 via-background to-background">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {index > 0 && <ChevronRight className="w-4 h-4" />}
                            {index === breadcrumbs.length - 1 ? (
                                <span className="text-foreground font-medium">{crumb.label}</span>
                            ) : (
                                <Link href={crumb.href} className="hover:text-primary transition-colors">
                                    {crumb.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Title and Description */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">{title}</h1>
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">{description}</p>
                </div>
            </div>
        </section>
    )
}
