import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RakshaSafetyAppPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="Raksha Safety App"
                description="iOS and Android app for personal safety with real-time location tracking."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio", href: "/#portfolio" },
                    { label: "Raksha Safety App", href: "/portfolio/raksha-safety-app" },
                ]}
            />
            <ContentSection title="About This Project">
                <p>Raksha is a personal safety mobile application available on both iOS and Android, featuring real-time GPS tracking, emergency alerts, and trusted contact notifications.</p>
            </ContentSection>
            <ContentSection title="Why This Solution Works" className="bg-background">
                <ul className="space-y-3 text-muted-foreground">
                    <li>✓ Real-time GPS location tracking</li>
                    <li>✓ One-tap emergency SOS alerts</li>
                    <li>✓ Trusted contact network</li>
                    <li>✓ Cross-platform compatibility (iOS & Android)</li>
                </ul>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Need a Mobile App?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Start Your Project</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
