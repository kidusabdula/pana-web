// components/home/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Sparkles, Star, Award, Clock, Users, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="my-10 relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Image with Overlay */}
      <div className="absolute inset-0 z-0 py-6">
        <Image
          src="/hero-2.jpg"
          alt="Pana Promotion Premium Printing"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-background/95 via-background/80 to-primary/25" />
        <div className="absolute inset-0 bg-linear-to-t from-background/95 via-transparent to-background/90" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute top-20 right-10 hidden xl:block"
      >
        <Card className="bg-background/90 backdrop-blur-md border-primary/20 shadow-2xl">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-orange-400 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold">Premium Quality</p>
              <p className="text-xs text-muted-foreground">Award Winning</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-20 left-10 hidden xl:block"
      >
        <Card className="bg-background/90 backdrop-blur-md border-orange-400/20 shadow-2xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm font-semibold">500+ Happy Clients</p>
            <p className="text-xs text-muted-foreground">Across Ethiopia</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Content - Centered */}
      <div className="container relative z-10 mx-auto px-6 mt-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-6xl mx-auto">
          
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Badge className="px-6 py-3 rounded-full bg-primary/20 border-primary/30 text-primary font-medium backdrop-blur-sm text-base">
              <Sparkles className="w-4 h-4 mr-2" />
              Ethiopia&apos;s Premier Print Partner
            </Badge>
          </motion.div>

          {/* Main Title with Enhanced Typography */}
          <motion.div className="space-y-6 mb-8">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-linear-to-r from-primary via-primary to-orange-400 bg-clip-text text-transparent">
                Premium
              </span>
              <br />
              <span className="bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Print & Design
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Transforming visions into <span className="text-primary font-semibold">tangible excellence</span>. 
              Your trusted partner for luxury printing and branding solutions in Ethiopia.
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button size="lg" className="btn-pana px-10 py-7 text-lg rounded-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-primary to-orange-400 group-hover:from-orange-400 group-hover:to-primary transition-all duration-300" />
              <span className="relative z-10 flex items-center font-semibold text-lg">
                Explore Our Services
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 py-7 text-lg rounded-2xl border-2 bg-background/50 backdrop-blur-sm hover:bg-background/80 group border-primary/30"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch Showreel
            </Button>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Quality Guaranteed</p>
                <p className="text-muted-foreground text-sm">Premium materials & craftsmanship</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-orange-400/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Fast Turnaround</p>
                <p className="text-muted-foreground text-sm">Quick delivery without compromise</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Expert Team</p>
                <p className="text-muted-foreground text-sm">Professional designers & printers</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12 text-center"
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-orange-400">100+</div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-muted-foreground text-sm">Customer Support</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-0 top-210 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-12 border-2 border-primary/50 rounded-full flex justify-center backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}