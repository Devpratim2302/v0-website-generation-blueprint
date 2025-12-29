import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MousePointerClick, Target, DollarSign, BarChart } from "lucide-react"

export default function PPCPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="PPC (Pay Per Click) Advertising"
                description="Drive immediate, targeted traffic to your website with strategic PPC campaigns that deliver measurable results."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#process" },
                    { label: "PPC", href: "/services/ppc" },
                ]}
            />

            <ContentSection title="What is PPC Advertising?">
                <p className="mb-4">
                    Pay-Per-Click (PPC) advertising is a digital marketing model where advertisers pay a fee each time their ad is clicked.
                    It's a way of buying visits to your site rather than earning them organically, with platforms like Google Ads and social media offering powerful targeting options.
                </p>
                <p>
                    Our PPC campaigns are meticulously crafted to reach your ideal customers at the right time, maximizing your advertising budget and delivering strong ROI.
                </p>
            </ContentSection>

            <ContentSection title="Why Use PPC Advertising?" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <MousePointerClick className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Immediate Results</h3>
                            <p className="text-muted-foreground">
                                Unlike SEO, PPC delivers instant visibility and traffic as soon as your campaigns go live.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Precise Targeting</h3>
                            <p className="text-muted-foreground">
                                Reach specific demographics, locations, interests, and search intent to connect with your ideal customers.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Budget Control</h3>
                            <p className="text-muted-foreground">
                                Set daily budgets and maximum bids to maintain complete control over your advertising spend.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Measurable ROI</h3>
                            <p className="text-muted-foreground">
                                Track every click, conversion, and dollar spent with detailed analytics and performance metrics.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Drive Targeted Traffic?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's create PPC campaigns that deliver qualified leads and maximize your advertising ROI.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/#contact">Launch Your Campaign</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
