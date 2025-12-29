import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, Users, Star, TrendingUp } from "lucide-react"

export default function HotelsPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="Hotels & Hospitality"
                description="Transform your hotel's digital presence with solutions designed for the hospitality industry."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Industries", href: "/#industries" },
                    { label: "Hotels", href: "/industries/hotels" },
                ]}
            />

            <ContentSection title="What We Offer Hotels">
                <p className="mb-4">
                    Our hotel-specific digital solutions include booking systems, property management integrations, virtual tours,
                    guest review management, and mobile-responsive websites that showcase your property's unique features and amenities.
                </p>
                <p>
                    We understand the hospitality industry's unique needs—from seasonal booking patterns to guest experience management—and
                    create solutions that drive direct bookings and enhance guest satisfaction.
                </p>
            </ContentSection>

            <ContentSection title="Why Hotels Need Digital Solutions" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Direct Bookings</h3>
                            <p className="text-muted-foreground">
                                Reduce OTA commissions by driving bookings through your own website with integrated booking engines.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Guest Experience</h3>
                            <p className="text-muted-foreground">
                                Provide seamless online experiences from discovery to booking to post-stay engagement.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Star className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Reputation Management</h3>
                            <p className="text-muted-foreground">
                                Showcase reviews, manage online reputation, and build trust with potential guests.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Revenue Growth</h3>
                            <p className="text-muted-foreground">
                                Increase occupancy rates and revenue per available room with data-driven marketing.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Elevate Your Hotel's Digital Presence?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's create a digital solution that drives bookings and delights your guests.
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
