import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, TrendingUp, Target, Lightbulb } from "lucide-react"

export default function DataAnalyticsPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="Data Analytics"
                description="Transform raw data into actionable insights that drive smarter business decisions and growth."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#process" },
                    { label: "Data Analytics", href: "/services/data-analytics" },
                ]}
            />

            <ContentSection title="What is Data Analytics?">
                <p className="mb-4">
                    Data Analytics is the science of analyzing raw data to extract meaningful insights and patterns.
                    It involves collecting, processing, and interpreting data from various sources to understand customer behavior, market trends, and business performance.
                </p>
                <p>
                    Our analytics solutions turn complex data into clear, actionable insights that help you make informed decisions, optimize operations, and stay ahead of the competition.
                </p>
            </ContentSection>

            <ContentSection title="Why Leverage Data Analytics?" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Lightbulb className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Informed Decisions</h3>
                            <p className="text-muted-foreground">
                                Make strategic decisions based on data-driven insights rather than gut feelings or assumptions.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Customer Understanding</h3>
                            <p className="text-muted-foreground">
                                Gain deep insights into customer behavior, preferences, and pain points to better serve their needs.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Performance Optimization</h3>
                            <p className="text-muted-foreground">
                                Identify bottlenecks, inefficiencies, and opportunities to optimize your business processes and ROI.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Predictive Insights</h3>
                            <p className="text-muted-foreground">
                                Forecast trends and anticipate market changes to stay proactive rather than reactive in your strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Unlock Your Data's Potential?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's turn your data into a competitive advantage with powerful analytics solutions.
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
