import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SchoolsPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="Schools & Education"
                description="Educational technology solutions for schools, colleges, and learning institutions."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Industries", href: "/#industries" },
                    { label: "Schools", href: "/industries/schools" },
                ]}
            />
            <ContentSection title="What We Offer Schools">
                <p>Learning management systems, student portals, admission management, online classrooms, and parent communication platforms.</p>
            </ContentSection>
            <ContentSection title="Why Schools Need Digital Solutions" className="bg-background">
                <p>Enhance learning experiences, streamline administration, improve parent-teacher communication, and prepare students for the digital age.</p>
            </ContentSection>
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Digitize Your Institution?</h2>
                    <Button size="lg" asChild><Link href="/#contact">Get Started</Link></Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}
