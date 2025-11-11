'use client'

import Image from 'next/image'
import { motion, useAnimationFrame } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Award, Zap, Shield } from 'lucide-react'

// Hook for infinite smooth horizontal scroll
function useAutoScroll(ref: React.RefObject<HTMLDivElement>, speed = 0.3) {
  useAnimationFrame(() => {
    if (ref.current) {
      ref.current.scrollLeft += speed
      // reset when near end
      if (ref.current.scrollLeft >= ref.current.scrollWidth - ref.current.clientWidth - 1) {
        ref.current.scrollLeft = 0
      }
    }
  })
}

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null!)
  useAutoScroll(scrollRef, 0.5) // Adjust speed here

  const gallery = [
    { src: '/sample-1.jpg', height: 'h-64 md:h-80' },
    { src: '/sample-2.jpg', height: 'h-48 md:h-64' },
    { src: '/sample-3.jpeg', height: 'h-72 md:h-96' },
    { src: '/sample-4.png', height: 'h-56 md:h-72' },
    { src: '/sample-5.png', height: 'h-64 md:h-80' },
  ]

  // Duplicate gallery for smooth infinite illusion
  const doubledGallery = [...gallery, ...gallery]

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-background via-secondary/30 to-background py-20 md:py-28">
      <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-16">

        {/* ============ SECTION INTRO ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="text-sm font-medium tracking-wider text-primary/80 uppercase">
            Trusted by businesses across Ethiopia
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Design Works in Motion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our print gallery — a showcase of precision, creativity, and premium branding excellence.
          </p>
        </motion.div>

        {/* ============ AUTO SCROLLING GALLERY ============ */}
        <motion.div
          ref={scrollRef}
          className="relative w-full overflow-x-scroll scrollbar-hide"
        >
          <div className="flex gap-6 px-4 md:px-8">
            {doubledGallery.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className={`min-w-[380px] md:min-w-[560px] ${item.height} rounded-xl overflow-hidden shadow-lg bg-secondary/30 backdrop-blur-sm border border-border/40 relative`}
              >
                <Image
                  src={item.src}
                  alt={`Gallery ${i + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============ CASE STUDY HEADINGS ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {/* <p className="text-primary font-semibold tracking-wide uppercase">
            Our Case Study
          </p> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground bg-clip-text my-3 py-2">
            Create Stunning Print For Your Business
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help you bring your ideas to life with precision, creativity, and unmatched quality.
          </p>
        </motion.div>

        {/* ============ PREMIUM HIGHLIGHT CARDS ============ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
          {/* Card 1: Premium Quality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full overflow-hidden border-0 shadow-xl bg-linear-to-br from-orange-50 via-orange-100/30 to-white dark:from-orange-950/20 dark:via-orange-900/10 dark:to-background rounded-xl relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-80" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-orange-200/30 to-transparent rounded-bl-full" />
              <CardContent className="p-8 relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-orange-400 flex items-center justify-center mb-6 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  From concept to completion, we deliver design and print solutions that exceed expectations with unmatched attention to detail.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Fast Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full overflow-hidden border-0 shadow-xl bg-linear-to-br from-blue-50 via-blue-100/30 to-white dark:from-blue-950/20 dark:via-blue-900/10 dark:to-background rounded-xl relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-transparent opacity-80" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-200/30 to-transparent rounded-bl-full" />
              <CardContent className="p-8 relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-blue-400 flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Our efficient workflow and advanced equipment ensure timely delivery without compromising on quality, meeting your deadlines.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Trusted Service */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full overflow-hidden border-0 shadow-xl bg-linear-to-br from-green-50 via-green-100/30 to-white dark:from-green-950/20 dark:via-green-900/10 dark:to-background rounded-xl relative">
              <div className="absolute inset-0 bg-linear-to-br from-green-500/10 via-transparent to-transparent opacity-80" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-green-200/30 to-transparent rounded-bl-full" />
              <CardContent className="p-8 relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-green-500 to-green-400 flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Trusted Service</h3>
                <p className="text-muted-foreground">
                  With over 9 years of experience, we&apos;ve built a reputation as the trusted partner for businesses across Ethiopia and beyond.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ============ TESTIMONIAL SECTION ============ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-10 md:mt-16"
        >
          <Card className="card-pana bg-linear-to-br from-background/60 to-secondary/20 backdrop-blur-sm rounded-xl border border-border/40 shadow-xl">
            <CardContent className="p-8 md:p-10 flex flex-col items-center text-center space-y-6">
              <Quote className="text-primary/70 w-10 h-10" />
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                &quot;Pana Promotion transformed our brand presentation. The quality of their print and design work 
                is unmatched — professional, timely, and exceptional every time.&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground">Alemu Getachew</p>
                <p className="text-muted-foreground text-sm">Founder, Addis Branding Co.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* glowing radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.15),transparent_70%)]" />
    </section>
  )
}