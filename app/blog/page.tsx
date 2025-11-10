import { useLanguage } from '@/contexts/LanguageContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function BlogPage() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      title: 'Innovative Printing Trends in 2025',
      excerpt: 'Discover the latest trends in digital printing and how they can benefit your business.',
      date: 'November 5, 2025'
    },
    {
      title: 'Effective Signage for Business Growth',
      excerpt: 'Learn how strategic signage can significantly impact your brand visibility and customer engagement.',
      date: 'October 28, 2025'
    },
    {
      title: 'Event Planning Essentials',
      excerpt: 'Key considerations for planning successful corporate events with branded materials.',
      date: 'October 15, 2025'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">{t('header.blog')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}