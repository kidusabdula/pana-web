// components/home/AboutSection.tsx
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Pana Promotion
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            Founded in 2016 GC, we&apos;ve been providing quality printing and branding solutions for over 9 years
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To provide high-quality printing and branding solutions that help our clients achieve their business goals and make a lasting impression.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading printing and branding company in Ethiopia, known for our quality, innovation, and customer satisfaction.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Quality</Badge>
                  <span className="text-muted-foreground">We never compromise on quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Innovation</Badge>
                  <span className="text-muted-foreground">We embrace new technologies and methods</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Customer Focus</Badge>
                  <span className="text-muted-foreground">Our clients&apos; success is our success</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Integrity</Badge>
                  <span className="text-muted-foreground">We conduct business with honesty and transparency</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}