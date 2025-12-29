import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Share2, Heart, MessageCircle, TrendingUp } from "lucide-react"

export default function SocialMediaMarketingPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="Social Media Marketing"
                description="Build your brand, engage your audience, and drive growth through strategic social media campaigns."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#process" },
                    { label: "Social Media Marketing", href: "/services/social-media-marketing" },
                ]}
            />

            <ContentSection title="What is Social Media Marketing?">
                <p className="mb-4">
                    Social Media Marketing involves creating and sharing content on social media platforms to achieve marketing and branding goals.
                    It includes posting text, images, videos, and engaging with followers to build a community around your brand.
                </p>
                <p>
                    Our social media strategies are designed to increase brand awareness, drive website traffic, and generate leads through authentic engagement and compelling content.
                </p>
            </ContentSection>

            <ContentSection title="Why Invest in Social Media Marketing?" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Share2 className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Brand Awareness</h3>
                            <p className="text-muted-foreground">
                                Reach millions of potential customers and increase visibility across multiple social platforms.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Customer Engagement</h3>
                            <p className="text-muted-foreground">
                                Build meaningful relationships with your audience through direct interaction and community building.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Heart className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Brand Loyalty</h3>
                            <p className="text-muted-foreground">
                                Consistent, valuable content creates loyal followers who become brand advocates and repeat customers.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Cost-Effective</h3>
                            <p className="text-muted-foreground">
                                Reach a large audience at a fraction of traditional advertising costs with targeted social campaigns.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Amplify Your Social Presence?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's create a social media strategy that connects with your audience and drives results.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/#contact">Start Growing</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
