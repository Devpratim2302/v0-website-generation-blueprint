import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Industries } from "@/components/Industries"
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
      <Services />
      <Industries />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
