// components/about/AboutHero.tsx
'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Calendar, Award, Users, Target } from 'lucide-react'

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

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-background to-secondary/40 py-16 md:py-24 lg:py-32">
      {/* Moving background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(var(--primary)/0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,oklch(var(--primary)/0.08),transparent_60%)] opacity-60"
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg" />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} custom={0.1}>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Home</span>
                <span>/</span>
                <span className="text-primary font-medium">About Us</span>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div variants={fadeUp} custom={0.2}>
              <Badge variant="secondary" className="px-4 py-2 rounded-full text-sm font-medium">
                Since 2016
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeUp} 
              custom={0.3}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              <span className="bg-linear-to-r from-primary via-orange-400 to-primary/70 bg-clip-text text-transparent">
                About Pana
              </span>
              <br />
              <span className="text-foreground">Promotion PLC</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeUp} 
              custom={0.4}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Founded in 2016 G.C, Pana Promotion PLC has been providing premium printing and branding solutions for over 9 years. We are devoted to quality and committed to transforming ideas into impactful visuals.
            </motion.p>

            {/* Key Features */}
            <motion.div 
              variants={fadeUp} 
              custom={0.5}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">9+ Years</p>
                  <p className="text-sm text-muted-foreground">of Excellence</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">20+ Professionals</p>
                  <p className="text-sm text-muted-foreground">Expert Team</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">1000+ Projects</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">24/7 Support</p>
                  <p className="text-sm text-muted-foreground">Available</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeUp} 
              custom={0.6}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="btn-pana px-8 rounded-full">
                Our Services
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 hover:bg-primary/10">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/sample-1.jpg"
                  alt="Pana Promotion PLC Team"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-white dark:bg-card rounded-2xl p-4 shadow-xl border border-border/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">9+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-card rounded-2xl p-4 shadow-xl border border-border/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">20+</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-linear-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-xl opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Subtle glowing backdrop */}
      <div className="absolute inset-0 -z-10 bg-pana-gradient opacity-20 blur-3xl" />
    </section>
  )
}