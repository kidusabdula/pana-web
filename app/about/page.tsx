// app/about/page.tsx
import AboutHero from '@/components/about/AboutHero'
import AboutServices from '@/components/about/AboutServices'
import AboutPortfolio from '@/components/about/AboutPortfolio'
import AboutTeam from '@/components/about/AboutTeam'
import AboutFaq from '@/components/about/AboutFaq'


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutServices />
      <AboutPortfolio />
      <AboutTeam />
      <AboutFaq />
    </div>
  )
}