import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AnchorSpacePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="Anchor Space - Co-Working Platform"
                description="Complete booking platform with functional website for co-working spaces."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio", href: "/#portfolio" },
                    { label: "Anchor Space", href: "/portfolio/anchor-space" },
                ]}
            />
            <ContentSection title="About This Project">
                <p>Anchor Space is a comprehensive co-working space management platform featuring online booking, membership management, and facility scheduling.</p>
            </ContentSection>
            <ContentSection title="Why This Solution Works" className="bg-background">
                <ul className="space-y-3 text-muted-foreground">
                    <li>✓ Real-time availability and instant booking</li>
                    <li>✓ Membership tier management</li>
                    <li>✓ Integrated payment processing</li>
                    <li>✓ Facility and resource scheduling</li>
                </ul>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Need a Booking Platform?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Start Your Project</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
