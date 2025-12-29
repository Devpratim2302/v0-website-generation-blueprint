import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Palette, Smartphone, Zap, Users } from "lucide-react"

export default function WebDesignPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="Web Design"
                description="Create stunning, user-friendly websites that captivate your audience and drive conversions."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#process" },
                    { label: "Web Design", href: "/services/web-design" },
                ]}
            />

            <ContentSection title="What is Web Design?">
                <p className="mb-4">
                    Web design is the process of creating visually appealing, functional, and user-friendly websites.
                    It encompasses everything from layout and color schemes to typography and interactive elements,
                    ensuring your online presence reflects your brand identity and engages your target audience.
                </p>
                <p>
                    At Govira, we combine aesthetic excellence with technical expertise to build websites that not
                    only look great but also perform exceptionally well across all devices and platforms.
                </p>
            </ContentSection>

            <ContentSection title="Why Choose Professional Web Design?" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Palette className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Brand Identity</h3>
                            <p className="text-muted-foreground">
                                A professionally designed website establishes credibility and communicates your brand values effectively.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Smartphone className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Mobile Responsive</h3>
                            <p className="text-muted-foreground">
                                With over 60% of web traffic from mobile devices, responsive design ensures optimal viewing on all screens.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Better Performance</h3>
                            <p className="text-muted-foreground">
                                Fast-loading, optimized websites improve user experience and search engine rankings.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Increased Conversions</h3>
                            <p className="text-muted-foreground">
                                Strategic design elements guide visitors toward desired actions, boosting conversion rates.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Transform Your Online Presence?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's create a website that not only looks amazing but drives real business results.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/#contact">Get Started Today</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
