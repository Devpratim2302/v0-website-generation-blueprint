import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ARKIndustriesPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="ARK Industries"
                description="Manufacturing company website with fastening products and solutions."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio", href: "/#portfolio" },
                    { label: "ARK Industries", href: "/portfolio/ark-industries" },
                ]}
            />
            <ContentSection title="About This Project">
                <p>ARK Industries is a B2B manufacturing website featuring product catalogs, technical specifications, distributor networks, and quote request systems.</p>
            </ContentSection>
            <ContentSection title="Why This Solution Works" className="bg-background">
                <ul className="space-y-3 text-muted-foreground">
                    <li>✓ Comprehensive product catalog with technical specs</li>
                    <li>✓ Distributor locator and network management</li>
                    <li>✓ Quote request and inquiry system</li>
                    <li>✓ B2B-focused design and functionality</li>
                </ul>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Need a B2B Website?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Start Your Project</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
