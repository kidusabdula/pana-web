// components/about/AboutFaq.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ChevronDown, ChevronUp, MessageCircle, Clock, Shield, Zap, Star, Briefcase, Users, Handshake, TrendingUp, BarChart, Settings } from 'lucide-react'
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

const faqData = [
  {
    id: 1,
    question: "Appropriate For Your Specific Business",
    answer: "We offer tailored printing and branding solutions designed specifically for your industry and business needs. Our team works closely with you to understand your requirements and deliver customized solutions that align with your brand identity and business goals.",
    icon: Shield,
    isOpen: false
  },
  {
    id: 2,
    question: "Design & Development Troubleshooting",
    answer: "Our experienced design team provides comprehensive troubleshooting services for all your design and development challenges. From concept to execution, we ensure your projects run smoothly with expert guidance and technical support at every stage.",
    icon: Zap,
    isOpen: false
  },
  {
    id: 3,
    question: "Online Support & Action",
    answer: "We provide 24/7 online support to address your queries and take immediate action on your projects. Our dedicated support team is always available to assist you with any technical issues, project updates, or urgent requirements.",
    icon: MessageCircle,
    isOpen: false
  }
]

const clients = [
  {
    id: 1,
    name: "DINA FOOD PROCESSING",
    logo: "/client-dina.png",
    description: "Leading food processing company in Ethiopia",
    icon: Briefcase
  },
  {
    id: 2,
    name: "IKIR FOOD PROCESSING",
    logo: "/client-ikir.png",
    description: "Innovative food processing solutions",
    icon: TrendingUp
  },
  {
    id: 3,
    name: "PHEM PUBLIC HEALTH",
    logo: "/client-phem.png",
    description: "Public health emergency management",
    icon: Users
  },
  {
    id: 4,
    name: "PANDA",
    logo: "/client-panda.png",
    description: "Trusted partner of Our Company since 2016",
    icon: Handshake
  },
  {
    id: 5,
    name: "ETHIOPIAN ATHLETICS FEDERATION",
    logo: "/client-eaf.png",
    description: "Sports branding and promotion",
    icon: BarChart
  },
  {
    id: 6,
    name: "MINISTRY OF HEALTH",
    logo: "/client-moh.png",
    description: "Government health sector partner",
    icon: Settings
  }
]

export default function AboutFaq() {
  const [faqs, setFaqs] = useState(faqData)

  const toggleFaq = (id: number) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ))
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
        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* FAQ Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* FAQ Header */}
            <div className="mb-8">
              <Badge variant="secondary" className="px-4 py-2 rounded-full text-sm font-medium mb-4">
                Support
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-4">
                Have Any Question
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Frequently Ask Question
              </p>
            </div>

            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={fadeUp}
                custom={index * 0.1}
                viewport={{ once: true }}
              >
                <Card 
                  className={`border-0 shadow-lg transition-all duration-300 cursor-pointer ${
                    faq.isOpen 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-white dark:bg-card hover:shadow-xl'
                  }`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          faq.isOpen 
                            ? 'bg-primary-foreground/20 text-primary-foreground' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          <faq.icon className="w-6 h-6" />
                        </div>
                        <h3 className={`text-lg font-semibold ${
                          faq.isOpen ? 'text-primary-foreground' : 'text-foreground'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        faq.isOpen 
                          ? 'bg-primary-foreground/20 text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        {faq.isOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                    
                    {faq.isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-primary-foreground/20"
                      >
                        <p className={`text-sm leading-relaxed ${
                          faq.isOpen ? 'text-primary-foreground/90' : 'text-muted-foreground'
                        }`}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-4/5 md:aspect-square">
                <Image
                  src="/sample-1.jpg"
                  alt="Pana Promotion Workshop"
                  className="w-full h-full object-cover"
                  width={800}
                  height={400}
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 bg-white dark:bg-card rounded-2xl p-6 shadow-xl border border-border/50 backdrop-blur-sm"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <p className="text-sm text-muted-foreground">Support Available</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-linear-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-xl opacity-30 -z-10" />
          </motion.div>
        </div>

        {/* Clients Portfolio Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Clients Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Clients
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-4">
              Trusted By Leading Brands
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are proud to partner with prestigious organizations across various industries, 
              delivering exceptional printing and branding solutions.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                variants={fadeUp}
                custom={index * 0.1}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-lg bg-white dark:bg-card hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="aspect-square mb-4 flex items-center justify-center">
                      {/* <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      /> */}
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <client.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {client.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={0.7}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-500 fill-current" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
              <p className="text-sm text-muted-foreground">Client Rating</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <p className="text-sm text-muted-foreground">Quality Assured</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">9+ Years</div>
              <p className="text-sm text-muted-foreground">Industry Experience</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">500+</div>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0.8}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button size="lg" className="btn-pana px-10 rounded-full">
            Contact Support
          </Button>
        </motion.div>
      </div>

      {/* Subtle glowing backdrop */}
      <div className="absolute inset-0 -z-10 bg-pana-gradient opacity-20 blur-3xl" />
    </section>
  )
}