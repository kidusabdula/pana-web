// components/home/ContactSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            Ready to start your next project? Contact us today for a consultation
          </p>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Hayahulet Rd. Infront of Worku Bld, Wakero Bld.<br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact Details</h3>
                <p className="text-muted-foreground">
                  Email: panapromotionplc@gmail.com<br />
                  Phone: +251 116 68 69 40
                </p>
              </div>
            </div>
            <div className="text-center pt-4">
              <Button size="lg" className="px-8">
                Send us a message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}