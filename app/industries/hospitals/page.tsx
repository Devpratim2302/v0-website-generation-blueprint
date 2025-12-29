import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HospitalsPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="Hospitals & Healthcare"
                description="Healthcare technology solutions for hospitals, clinics, and medical practices."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Industries", href: "/#industries" },
                    { label: "Hospitals", href: "/industries/hospitals" },
                ]}
            />
            <ContentSection title="What We Offer Hospitals">
                <p>Patient management systems, appointment booking, telemedicine platforms, electronic health records integration, and patient portals.</p>
            </ContentSection>
            <ContentSection title="Why Hospitals Need Digital Solutions" className="bg-background">
                <p>Improve patient care, streamline operations, reduce wait times, enhance communication, and ensure HIPAA-compliant data management.</p>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Modernize Healthcare Delivery?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Get Started</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
