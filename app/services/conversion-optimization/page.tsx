import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Target, BarChart, Repeat } from "lucide-react"

export default function ConversionOptimizationPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="Conversion & Optimization"
                description="Turn more visitors into customers with data-driven conversion rate optimization strategies."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#process" },
                    { label: "Conversion & Optimization", href: "/services/conversion-optimization" },
                ]}
            />

            <ContentSection title="What is Conversion Optimization?">
                <p className="mb-4">
                    Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of website visitors who take desired actions—whether that's making a purchase, signing up for a newsletter, or filling out a contact form.
                </p>
                <p>
                    Through A/B testing, user behavior analysis, and strategic improvements, we optimize every element of your digital presence to maximize conversions and ROI.
                </p>
            </ContentSection>

            <ContentSection title="Why Focus on Conversion Optimization?" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Maximize ROI</h3>
                            <p className="text-muted-foreground">
                                Get more value from existing traffic without increasing ad spend—improving conversions directly boosts revenue.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Better User Experience</h3>
                            <p className="text-muted-foreground">
                                Optimization improves usability and removes friction, creating a smoother journey for your visitors.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <BarChart className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Data-Driven Decisions</h3>
                            <p className="text-muted-foreground">
                                Make informed changes based on real user behavior and testing, eliminating guesswork from your strategy.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Repeat className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Continuous Improvement</h3>
                            <p className="text-muted-foreground">
                                Ongoing optimization ensures your site stays competitive and continues to improve over time.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Boost Your Conversion Rates?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's optimize your website to turn more visitors into customers.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/#contact">Start Optimizing</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
