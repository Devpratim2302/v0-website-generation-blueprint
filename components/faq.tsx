import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Govira offer?",
    answer:
      "We offer a comprehensive range of digital services including web design, web development, e-commerce solutions, SEO, PPC advertising, social media marketing, and lead generation. Our team tailors solutions to meet your specific business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A basic website typically takes 4-6 weeks, while larger e-commerce or custom web applications may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We offer various support and maintenance packages to keep your website secure, updated, and performing optimally. This includes regular updates, security monitoring, backups, and technical support.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the scope, features, and timeline. We offer flexible packages to accommodate different budgets. Contact us for a free consultation and custom quote.",
  },
  {
    question: "Can you help with existing website improvements?",
    answer:
      "Whether you need a complete redesign or specific improvements to your existing site, we can help. We'll analyze your current setup and recommend the best path forward to achieve your goals.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Got questions? We've got answers. If you don't see what you're looking for, feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
