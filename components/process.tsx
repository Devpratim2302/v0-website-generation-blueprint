import { Lightbulb, Code, Palette, BarChart3, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Ideate",
    description: "We brainstorm and strategize to understand your vision and goals.",
  },
  {
    icon: Code,
    title: "Develop",
    description: "Our team builds robust, scalable solutions using cutting-edge tech.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "We craft beautiful, intuitive interfaces that delight users.",
  },
  {
    icon: BarChart3,
    title: "Results",
    description: "Launch, measure, and optimize for continuous growth and success.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A proven methodology that delivers exceptional results every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-10 -right-4 text-muted-foreground/30">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
