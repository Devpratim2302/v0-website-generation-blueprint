import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RestaurantsPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="Restaurants & Food Service"
                description="Digital solutions tailored for restaurants to boost online orders and customer engagement."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Industries", href: "/#industries" },
                    { label: "Restaurants", href: "/industries/restaurants" },
                ]}
            />
            <ContentSection title="What We Offer Restaurants">
                <p>Online ordering systems, menu management, reservation platforms, and marketing solutions designed specifically for the food service industry.</p>
            </ContentSection>
            <ContentSection title="Why Restaurants Need Digital Solutions" className="bg-background">
                <p>Increase online orders, streamline operations, manage reservations efficiently, and build customer loyalty through digital engagement.</p>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Grow Your Restaurant?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Get Started</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
