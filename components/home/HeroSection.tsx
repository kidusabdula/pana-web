// components/home/HeroSection.tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <Card className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardContent className="pt-0">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Pana Promotion PLC
              </h1>
              <p className="text-xl text-muted-foreground max-w-[700px]">
                Devoted to Quality - Your trusted partner for printing and branding solutions in Ethiopia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8">
                  Our Services
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Contact Us
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}