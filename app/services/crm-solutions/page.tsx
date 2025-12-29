import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Database, Users, TrendingUp, Workflow } from "lucide-react"

export default function CRMSolutionsPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="CRM Solutions"
                description="Streamline customer relationships and boost sales with powerful CRM systems tailored to your business."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#process" },
                    { label: "CRM Solutions", href: "/services/crm-solutions" },
                ]}
            />

            <ContentSection title="What are CRM Solutions?">
                <p className="mb-4">
                    Customer Relationship Management (CRM) solutions are software systems that help businesses manage interactions with current and potential customers.
                    They centralize customer data, automate sales processes, track communications, and provide insights to improve customer relationships and drive growth.
                </p>
                <p>
                    Our CRM implementations are customized to your workflow, ensuring seamless adoption and maximum value for your sales and customer service teams.
                </p>
            </ContentSection>

            <ContentSection title="Why Implement a CRM System?" className="bg-background">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Database className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Centralized Data</h3>
                            <p className="text-muted-foreground">
                                Store all customer information, interactions, and history in one accessible location for your entire team.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Workflow className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Automated Workflows</h3>
                            <p className="text-muted-foreground">
                                Automate repetitive tasks, follow-ups, and processes to save time and ensure nothing falls through the cracks.
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
                            <h3 className="text-xl font-semibold text-foreground mb-2">Increased Sales</h3>
                            <p className="text-muted-foreground">
                                Better organization and insights lead to more closed deals and higher revenue per customer.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Better Customer Service</h3>
                            <p className="text-muted-foreground">
                                Access complete customer history instantly to provide personalized, efficient support every time.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Ready to Transform Customer Relationships?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's implement a CRM system that empowers your team and delights your customers.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/#contact">Get Your CRM</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
