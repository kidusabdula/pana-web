'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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

export default function AboutSection() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Moving background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(var(--primary)/0.2),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,oklch(var(--primary)/0.1),transparent_60%)] opacity-60"
      />

      <div className="container relative z-10 px-6 mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-primary/70 dark:from-primary/90 dark:to-orange-400 bg-clip-text text-transparent">
            About Pana Promotion
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded in 2016 G.C, Pana Promotion PLC has been providing premium printing and branding solutions for over 9 years.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Mission */}
            <motion.div variants={fadeUp} custom={0.1}>
              <Card className="shadow-xl bg-background/80 backdrop-blur-md">
                <CardContent className="p-8 space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To deliver top-tier printing and branding services that empower businesses to communicate effectively through creativity and innovation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeUp} custom={0.2}>
              <Card className="shadow-xl bg-background/80 backdrop-blur-md">
                <CardContent className="p-8 space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To become Ethiopia’s most trusted printing & branding partner, transforming ideas into impactful visuals and lasting impressions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/about-1.jpg"
                alt="Pana Promotion office"
                width={800}
                height={400}
                className="object-fill rounded-3xl transform transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />

              {/* Motion Overlay Layers */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-linear-to-tr from-primary/40 via-transparent to-secondary/40 mix-blend-overlay"
              />
              <motion.div
                animate={{
                  x: ['0%', '20%', '0%'],
                  y: ['0%', '-10%', '0%'],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.15),transparent_70%)]"
              />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md border border-primary/20 px-8 py-4 rounded-full shadow-lg"
            >
              <span className="text-3xl font-bold text-primary">9+</span>
              <span className="ml-2 text-muted-foreground">Years of Experience</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ once: true }}
          className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            ['9+', 'Years of Experience'],
            ['30+', 'Printing Machines'],
            ['20+', 'Professionals'],
            ['100%', 'Client Satisfaction'],
          ].map(([value, label], i) => (
            <motion.div key={i} variants={fadeUp} custom={i * 0.1}>
              <div className="text-4xl font-bold text-primary mb-2">{value}</div>
              <p className="text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <Button size="lg" className="btn-pana px-10 rounded-full">
            Learn More About Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
