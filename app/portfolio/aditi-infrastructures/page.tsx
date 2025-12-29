import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AditiInfrastructuresPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="Aditi Infrastructures"
                description="Real estate developer website specializing in residential and commercial properties."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio", href: "/#portfolio" },
                    { label: "Aditi Infrastructures", href: "/portfolio/aditi-infrastructures" },
                ]}
            />
            <ContentSection title="About This Project">
                <p>Aditi Infrastructures is a comprehensive real estate website showcasing residential and commercial properties with virtual tours, project timelines, and inquiry management.</p>
            </ContentSection>
            <ContentSection title="Why This Solution Works" className="bg-background">
                <ul className="space-y-3 text-muted-foreground">
                    <li>✓ Interactive property showcases with virtual tours</li>
                    <li>✓ Project timeline and progress tracking</li>
                    <li>✓ Lead capture and inquiry management</li>
                    <li>✓ Mobile-responsive property browsing</li>
                </ul>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Need a Real Estate Website?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Start Your Project</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
