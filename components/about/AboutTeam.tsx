// components/about/AboutTeam.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

type CustomEasing = [number, number, number, number]
const easeOutCubic: CustomEasing = [0.215, 0.61, 0.355, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({ 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutCubic,
      delay,
    },
  }),
}

const teamMembers = [
  {
    id: 1,
    name: "Arron Rodri",
    position: "Designer",
    image: "/team-1.jpg",
    bgColor: "bg-yellow-400",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "Stifen Simons",
    position: "Operator",
    image: "/team-2.jpg",
    bgColor: "bg-orange-400",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "Josephine Ava",
    position: "Senior Designer",
    image: "/team-3.jpg",
    bgColor: "bg-pink-400",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 4,
    name: "William Mark",
    position: "Designer",
    image: "/team-4.jpg",
    bgColor: "bg-gray-400",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  }
]

export default function AboutTeam() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Moving background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(var(--primary)/0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,oklch(var(--primary)/0.08),transparent_60%)] opacity-60"
      />

      <div className="container relative z-10 px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-6 mb-16"
        >
          <Badge variant="secondary" className="px-4 py-2 rounded-full text-sm font-medium">
            Our Team
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Meet Our Team Member
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The creative minds behind Pana Promotion PLC, dedicated to bringing your vision to life 
            with expertise and passion.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-black/70 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black/90 transition-colors"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-black/70 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black/90 transition-colors"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => {
              const offset = index - currentIndex
              const isVisible = Math.abs(offset) <= 1 // Show current and adjacent cards
              
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isVisible ? 1 : 0.3,
                    scale: isVisible ? 1 : 0.9,
                    x: offset * 20, // Subtle horizontal offset for 3D effect
                    zIndex: isVisible ? 10 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`${!isVisible ? 'hidden md:block' : ''}`}
                >
                  <Card className={`border-0 shadow-xl overflow-hidden transition-all duration-300 ${
                    index === currentIndex 
                      ? 'ring-2 ring-primary scale-105' 
                      : 'hover:scale-105'
                  }`}>
                    <CardContent className="p-0">
                      {/* Team Member Image */}
                      <div className="relative">
                        <div className={`aspect-square ${member.bgColor} relative`}>
                          <Image
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            width={300}
                            height={300}
                          />
                        </div>
                        
                        {/* Social Links Overlay */}
                        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                          index === currentIndex ? 'opacity-100' : ''
                        }`}>
                          <div className="flex space-x-3">
                            <a
                              href={member.socialLinks.linkedin}
                              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                              aria-label={`${member.name} LinkedIn`}
                            >
                              <Linkedin className="w-5 h-5 text-white" />
                            </a>
                            <a
                              href={member.socialLinks.twitter}
                              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                              aria-label={`${member.name} Twitter`}
                            >
                              <Twitter className="w-5 h-5 text-white" />
                            </a>
                            <a
                              href={member.socialLinks.facebook}
                              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                              aria-label={`${member.name} Facebook`}
                            >
                              <Facebook className="w-5 h-5 text-white" />
                            </a>
                            <a
                              href={member.socialLinks.instagram}
                              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                              aria-label={`${member.name} Instagram`}
                            >
                              <Instagram className="w-5 h-5 text-white" />
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Team Member Info */}
                      <div className="p-6 text-center bg-white dark:bg-card">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-muted-foreground">{member.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Team Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0.7}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our diverse team brings together expertise in design, printing, branding, and project management 
            to deliver exceptional results for every client.
          </p>
          <Button size="lg" className="btn-pana px-10 rounded-full">
            Join Our Team
          </Button>
        </motion.div>
      </div>

      {/* Subtle glowing backdrop */}
      <div className="absolute inset-0 -z-10 bg-pana-gradient opacity-20 blur-3xl" />
    </section>
  )
}