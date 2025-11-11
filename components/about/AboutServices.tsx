// components/about/AboutServices.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Signpost, 
  Palette, 
  Scissors, 
  Shirt, 
  Gift,
  Brush,
  Calendar
} from 'lucide-react'

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

const services = [
  {
    icon: FileText,
    title: "Digital Paper Print Solutions",
    description: "High-quality printing for business and corporate needs including brochures, booklets, flyers, business cards, and more with sharp detail and vibrant colors.",
    features: ["Business Cards", "Brochures", "Flyers", "Reports", "Calendars"]
  },
  {
    icon: Signpost,
    title: "Signage Solutions",
    description: "From indoor office signs to large outdoor billboards, we design, produce, and install signage that captures attention and strengthens brand identity.",
    features: ["Illuminated Signs", "Directional Signage", "Shopfront Branding", "Custom Displays"]
  },
  {
    icon: Palette,
    title: "Flex Banner Solutions",
    description: "High-quality flex banners that are durable, vibrant, and effective for a wide range of promotional and branding needs, both indoor and outdoor.",
    features: ["Large Format", "Weather Resistant", "Vibrant Colors", "Quick Turnaround"]
  },
  {
    icon: Scissors,
    title: "Vinyl Printing & Cutout",
    description: "Custom vinyl printing and precision cutouts for vehicle wraps, wall graphics, window branding, and promotional spaces with lasting impact.",
    features: ["Vehicle Wraps", "Wall Graphics", "Window Branding", "Custom Cutouts"]
  },
  {
    icon: Shirt,
    title: "Fabric Printing",
    description: "Fabric printing services covering flags, promotional tents, event backdrops, tablecloths, and branded textiles with vibrant color reproduction.",
    features: ["Flags", "Promotional Tents", "Event Backdrops", "Branded Textiles"]
  },
  {
    icon: Gift,
    title: "Promotional Items",
    description: "A wide range of branded merchandise from t-shirts, caps, and bags to mugs, pens, and corporate gifts designed to increase brand recall.",
    features: ["T-Shirts", "Caps", "Bags", "Mugs", "Corporate Gifts"]
  },
  {
    icon: Brush,
    title: "Graphic Design",
    description: "Creative design team producing impactful graphics tailored to each client's needs, from logos and brand identities to marketing materials.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Event Visuals"]
  },
  {
    icon: Calendar,
    title: "Event Planning & Promotion",
    description: "End-to-end event planning services including concept development, design, promotion, logistics, and on-ground execution for maximum brand exposure.",
    features: ["Concept Development", "Event Design", "Promotion", "Logistics", "Execution"]
  }
]

export default function AboutServices() {
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
            Our Services
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Complete Printing & Branding Solutions
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Pana Promotion PLC, we offer a full range of creative, printing, branding, and event solutions 
            designed to help businesses communicate effectively and enhance their visibility.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={index * 0.1}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg bg-linear-to-br from-background to-primary/5 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-xs text-primary font-medium">
                        +{service.features.length - 3} more
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Workshop Capabilities Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0.6}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-0 shadow-xl bg-linear-to-br from-primary/10 to-secondary/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    State-of-the-Art Production Facilities
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Equipped with more than 30 state-of-the-art printing and related machines, 
                    we have the capability to handle projects of any scale, from small promotional runs 
                    to nationwide branding campaigns.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-xl">30+</p>
                        <p className="text-sm text-muted-foreground">Printing Machines</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Brush className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-xl">24/7</p>
                        <p className="text-sm text-muted-foreground">Production</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button size="lg" className="btn-pana rounded-full">
                    Tour Our Workshop
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Card className="border border-border/50 bg-background/80 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <FileText className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">Digital Print Studio</h4>
                        <p className="text-sm text-muted-foreground">High-quality production</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border/50 bg-background/80 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <Signpost className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">Signage Workshop</h4>
                        <p className="text-sm text-muted-foreground">UV & Laser cutting</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <Card className="border border-border/50 bg-background/80 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <Palette className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">Flex Banner</h4>
                        <p className="text-sm text-muted-foreground">Large format printing</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border/50 bg-background/80 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <Shirt className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">Fabric Printing</h4>
                        <p className="text-sm text-muted-foreground">Textile branding</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
            Get a Quote
          </Button>
        </motion.div>
      </div>

      {/* Subtle glowing backdrop */}
      <div className="absolute inset-0 -z-10 bg-pana-gradient opacity-20 blur-3xl" />
    </section>
  )
}