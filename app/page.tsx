import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Industries } from "@/components/Industries"
import { Clients } from "@/components/clients"
import { Process } from "@/components/process"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SocialSidebar />
      <Header />
      <Hero />
      <Stats />
      <Industries />
      <Clients />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
