import { useLanguage } from '@/contexts/LanguageContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">{t('header.about')}</h1>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t('home.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Founded in 2016 GC, Pana Promotion PLC has been at the forefront of printing and branding solutions in Ethiopia. 
                With over 9 years of experience, we've established ourselves as a trusted partner for businesses and organizations 
                seeking quality promotional materials.
              </CardDescription>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To provide exceptional printing and branding services that exceed our clients' expectations 
                  and help them achieve their marketing goals.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To be the leading printing and branding company in Ethiopia, known for innovation, 
                  quality, and customer satisfaction.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quality, Integrity, Innovation, Customer Focus, and Excellence in everything we do.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}