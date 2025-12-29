import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, BarChart, Globe, Target } from "lucide-react"

export default function SEOPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="SEO (Search Engine Optimization)"
                description="Boost your online visibility and attract more qualified traffic through strategic SEO."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#process" },
                    { label: "SEO", href: "/services/seo" },
                ]}
            />

            <ContentSection title="What is SEO?">
                <p className="mb-4">
                    Search Engine Optimization (SEO) is the practice of optimizing your website to rank higher in search engine results pages (SERPs).
                    It involves technical improvements, content optimization, and building authority to increase organic visibility and drive qualified traffic to your site.
                </p>
                <p>
                    Our SEO strategies are data-driven and tailored to your business goals, ensuring sustainable growth in search rankings and online presence.
                </p>
            </ContentSection>

            <ContentSection title="Why is SEO Essential?" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Search className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Increased Visibility</h3>
                            <p className="text-muted-foreground">
                                Higher search rankings mean more people discover your business when searching for relevant products or services.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Qualified Traffic</h3>
                            <p className="text-muted-foreground">
                                SEO attracts users actively searching for what you offer, resulting in higher-quality leads and better conversion rates.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Cost-Effective</h3>
                            <p className="text-muted-foreground">
                                Unlike paid advertising, organic search traffic is free and provides long-term value with sustained rankings.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Globe className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Brand Credibility</h3>
                            <p className="text-muted-foreground">
                                Top search rankings establish trust and authority, making your brand the go-to choice in your industry.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Dominate Search Results?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's optimize your website and drive organic growth for your business.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/#contact">Boost Your Rankings</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
