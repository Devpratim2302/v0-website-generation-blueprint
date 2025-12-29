import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HabitTrackerAppPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <PageHero
                title="Habit Tracker App"
                description="Comprehensive health and fitness tracking app for iOS and Android."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio", href: "/#portfolio" },
                    { label: "Habit Tracker App", href: "/portfolio/habit-tracker-app" },
                ]}
            />
            <ContentSection title="About This Project">
                <p>A comprehensive habit tracking mobile application for iOS and Android, featuring daily goal setting, progress tracking, streak monitoring, and motivational insights.</p>
            </ContentSection>
            <ContentSection title="Why This Solution Works" className="bg-background">
                <ul className="space-y-3 text-muted-foreground">
                    <li>✓ Daily habit tracking and goal setting</li>
                    <li>✓ Streak monitoring and achievements</li>
                    <li>✓ Progress analytics and insights</li>
                    <li>✓ Cross-platform sync (iOS & Android)</li>
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
