// app/about/page.tsx
import AboutHero from '@/components/about/AboutHero'
import AboutMission from '@/components/about/AboutMission'
import AboutTeam from '@/components/about/AboutTeam'
import AboutClients from '@/components/about/AboutClients'
import AboutStats from '@/components/about/AboutStats'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
      <AboutClients />
    </div>
  )
}