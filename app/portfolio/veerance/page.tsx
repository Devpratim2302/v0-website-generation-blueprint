import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function VeerancePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="Veerance - E-Commerce Platform"
                description="Modern online clothing store with seamless checkout and comprehensive catalog."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio", href: "/#portfolio" },
                    { label: "Veerance", href: "/portfolio/veerance" },
                ]}
            />
            <ContentSection title="About This Project">
                <p className="mb-4">
                    Veerance is a modern e-commerce platform designed for fashion retail. We built a complete online store featuring
                    an intuitive product catalog, advanced filtering, secure checkout process, and mobile-responsive design.
                </p>
                <p>
                    The platform integrates with inventory management systems and provides real-time stock updates, ensuring customers
                    always see accurate product availability.
                </p>
            </ContentSection>
            <ContentSection title="Why This Solution Works" className="bg-background">
                <ul className="space-y-3 text-muted-foreground">
                    <li>✓ <strong>Seamless Shopping Experience:</strong> Intuitive navigation and quick checkout process</li>
                    <li>✓ <strong>Mobile-First Design:</strong> Optimized for shopping on any device</li>
                    <li>✓ <strong>Secure Payments:</strong> Multiple payment gateways with SSL encryption</li>
                    <li>✓ <strong>Inventory Integration:</strong> Real-time stock management and updates</li>
                </ul>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Build Your E-Commerce Store?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Start Your Project</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
