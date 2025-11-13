// components/about/AboutPortfolio.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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

const portfolioItems = [
  {
    id: 1,
    title: "Custom Notebooks",
    category: "Paper Products",
    image: "/sample-1.jpg",
    description: "Premium branded notebooks with custom designs for corporate clients."
  },
  {
    id: 2,
    title: "Promotional Bags",
    category: "Fabric Products",
    image: "/sample-2.jpg",
    description: "Eco-friendly shopping bags with vibrant brand colors and logos."
  },
  {
    id: 3,
    title: "Branded Water Bottles",
    category: "Promotional Items",
    image: "/sample-3.jpeg",
    description: "Custom designed water bottles with unique branding elements."
  },
  {
    id: 4,
    title: "Custom T-Shirts",
    category: "Fabric Products",
    image: "/sample-4.png",
    description: "High-quality printed t-shirts with creative designs for events."
  },
  {
    id: 5,
    title: "Seasonal Mugs",
    category: "Promotional Items",
    image: "/sample-5.png",
    description: "Themed mugs for special occasions and corporate gifting."
  }
]

export default function AboutPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false })

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, isInView])

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Pause auto-play when manually navigating
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
  }

  // Resume auto-play after inactivity
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 10000) // Resume after 10 seconds of inactivity

    return () => clearTimeout(timeout)
  }, [currentIndex])

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden" ref={containerRef}>
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
            Our Work
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Create Stunning Print For Your Business
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our case studies showcase the quality and creativity we bring to every project, 
            transforming ideas into impactful visuals that elevate brands.
          </p>
        </motion.div>

        {/* Portfolio Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-card">
              <div className="aspect-video md:aspect-16/10">
                <motion.div
                  key={currentIndex} // Key change to re-mount and animate
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: easeOutCubic }}
                  className="absolute inset-0"
                >
                  <Image
                    src={portfolioItems[currentIndex].image}
                    alt={portfolioItems[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Image Overlay with Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 md:p-8">
                <Badge className="mb-3 bg-primary/20 text-primary-foreground border-0">
                  {portfolioItems[currentIndex].category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {portfolioItems[currentIndex].title}
                </h3>
                <p className="text-white/80 max-w-2xl">
                  {portfolioItems[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-black/70 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black/90 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-black/70 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black/90 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {portfolioItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                aria-label={`Go to ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-primary' : 'bg-muted'}`} />
              <span className="text-sm text-muted-foreground">
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0.7}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button size="lg" className="btn-pana px-10 rounded-full">
            View All Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Subtle glowing backdrop */}
      <div className="absolute inset-0 -z-10 bg-pana-gradient opacity-20 blur-3xl" />
    </section>
  )
}