// app/home/page.tsx
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import AboutSection from '@/components/home/AboutSection'
import ContactSection from '@/components/home/ContactSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import BlogSection from '@/components/home/BlogSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
    </div>
  )
}