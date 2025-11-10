// components/Footer.tsx
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-4">
            <CardContent className="pt-0">
              <h3 className="text-lg font-bold text-primary mb-2">Pana Promotion PLC</h3>
              <p>Devoted to Quality</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent className="pt-0">
              <h3 className="text-lg font-bold mb-2">Services</h3>
              <ul className="space-y-1 text-sm">
                <li>Digital Printing</li>
                <li>Signage Solutions</li>
                <li>Event Planning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent className="pt-0">
              <h3 className="text-lg font-bold mb-2">Contact</h3>
              <p>Hayahulet Rd. Infront of Worku Bld, Wakero Bld. Addis Ababa, Ethiopia</p>
              <p className="mt-2">Email: panapromotionplc@gmail.com</p>
              <p>Phone: +251 116 68 69 40 | +251 911 00 52 55</p>
            </CardContent>
          </Card>
        </div>
        <Separator className="my-4" />
        <div className="text-center text-sm text-muted-foreground">
          © 2025 Pana Promotion PLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}