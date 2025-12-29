import { MapPin, Clock, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const jobs = [
  {
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
  },
  {
    title: "UX/UI Designer",
    type: "Full-time",
    location: "Hybrid",
    department: "Design",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Remote",
    department: "Marketing",
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "On-site",
    department: "Operations",
  },
]

export function Careers() {
  return (
    <section id="careers" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're always looking for talented individuals to join our growing team. Explore our open positions below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{job.title}</h3>
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.department}</span>
                  </div>
                </div>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
