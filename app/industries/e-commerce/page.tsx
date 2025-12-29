import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ECommerceIndustryPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="E-Commerce Industry"
                description="Complete e-commerce solutions for online retailers and marketplace businesses."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Industries", href: "/#industries" },
                    { label: "E-Commerce", href: "/industries/e-commerce" },
                ]}
            />
            <ContentSection title="What We Offer E-Commerce Businesses">
                <p>Custom online stores, marketplace platforms, inventory management, payment gateway integration, and multi-channel selling solutions.</p>
            </ContentSection>
            <ContentSection title="Why E-Commerce Businesses Need Our Solutions" className="bg-background">
                <p>Scale your online business, increase conversions, manage inventory efficiently, provide seamless checkout experiences, and expand to new markets.</p>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Scale Your Online Store?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Get Started</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
