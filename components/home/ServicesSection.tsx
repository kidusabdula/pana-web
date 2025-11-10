// components/home/ServicesSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const services = [
  {
    title: "Digital Paper Print",
    description: "High-quality digital printing for all your paper needs",
    icon: "📄"
  },
  {
    title: "Signage Solutions",
    description: "Professional signage for businesses and events",
    icon: "🪧"
  },
  {
    title: "Flex Banners",
    description: "Durable and vibrant flex banners for outdoor advertising",
    icon: "🎨"
  },
  {
    title: "Event Planning",
    description: "Complete event planning and management services",
    icon: "📅"
  },
  {
    title: "Branding Materials",
    description: "Comprehensive branding solutions for your business",
    icon: "🏷️"
  },
  {
    title: "Large Format Printing",
    description: "Large format printing for posters, banners, and more",
    icon: "🖼️"
  }
]

export default function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            We offer a comprehensive range of printing and branding services
          </p>
          <Badge variant="secondary" className="text-sm">
            9+ Years of Excellence
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="text-2xl">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}