import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, TrendingUp, Filter } from "lucide-react"

export default function LeadManagementPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="Lead Management"
                description="Capture, nurture, and convert leads into loyal customers with intelligent lead management systems."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#process" },
                    { label: "Lead Management", href: "/services/lead-management" },
                ]}
            />

            <ContentSection title="What is Lead Management?">
                <p className="mb-4">
                    Lead management is the process of capturing, tracking, and nurturing potential customers throughout their buying journey.
                    It involves organizing leads, scoring their quality, automating follow-ups, and analyzing data to optimize conversion rates.
                </p>
                <p>
                    Our lead management solutions help you streamline your sales process, never miss an opportunity, and turn more prospects into paying customers.
                </p>
            </ContentSection>

            <ContentSection title="Why Use Lead Management?" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Centralized Database</h3>
                            <p className="text-muted-foreground">
                                Keep all your leads organized in one place, accessible to your entire sales team for better collaboration.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Lead Scoring</h3>
                            <p className="text-muted-foreground">
                                Prioritize high-quality leads based on engagement and behavior, focusing efforts where they matter most.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Increased Conversions</h3>
                            <p className="text-muted-foreground">
                                Automated nurturing campaigns keep leads engaged, increasing the likelihood of conversion over time.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Filter className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Better Insights</h3>
                            <p className="text-muted-foreground">
                                Track lead sources, behavior patterns, and conversion metrics to optimize your marketing strategies.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Convert More Leads?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's implement a lead management system that drives real business growth.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/#contact">Get Started</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
