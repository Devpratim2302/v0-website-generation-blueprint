import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, TrendingUp, Shield, Smartphone } from "lucide-react"

export default function ECommercePage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="E-Commerce Solutions"
                description="Build powerful online stores that drive sales and deliver exceptional shopping experiences."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#process" },
                    { label: "E-Commerce", href: "/services/e-commerce" },
                ]}
            />

            <ContentSection title="What is E-Commerce Development?">
                <p className="mb-4">
                    E-Commerce development involves creating online platforms where businesses can sell products or services directly to customers.
                    From product catalogs and shopping carts to secure payment gateways and order management systems, we build complete e-commerce solutions.
                </p>
                <p>
                    Our e-commerce platforms are designed to provide seamless shopping experiences while maximizing conversions and customer satisfaction.
                </p>
            </ContentSection>

            <ContentSection title="Why Invest in E-Commerce?" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <ShoppingCart className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Sales</h3>
                            <p className="text-muted-foreground">
                                Your online store never closes, allowing customers to shop anytime, anywhere, increasing revenue potential.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Scalable Growth</h3>
                            <p className="text-muted-foreground">
                                Easily expand your product range and reach new markets without the limitations of physical stores.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Secure Payments</h3>
                            <p className="text-muted-foreground">
                                Integrated payment gateways with SSL encryption ensure safe and secure transactions for your customers.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Mobile Commerce</h3>
                            <p className="text-muted-foreground">
                                Mobile-optimized stores capture the growing mobile shopping market and improve customer convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Launch Your Online Store?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's build an e-commerce platform that turns visitors into loyal customers.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/#contact">Start Selling Online</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
