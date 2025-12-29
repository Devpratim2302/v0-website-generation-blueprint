import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CorporatePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="Corporate & Enterprise"
                description="Enterprise-grade digital solutions for corporations and large organizations."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Industries", href: "/#industries" },
                    { label: "Corporate", href: "/industries/corporate" },
                ]}
            />
            <ContentSection title="What We Offer Corporate Clients">
                <p>Enterprise websites, intranet portals, business intelligence dashboards, workflow automation, and custom enterprise applications.</p>
            </ContentSection>
            <ContentSection title="Why Corporations Need Our Solutions" className="bg-background">
                <p>Improve operational efficiency, enhance internal communication, automate processes, make data-driven decisions, and maintain competitive advantage.</p>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Transform Your Enterprise?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Get Started</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
