// components/home/ContactSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Mail, Phone, Send, Clock, Calendar, Coffee, Users, Sparkles } from 'lucide-react'

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

export default function ContactSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.755234278766!2d38.76385997569948!3d9.022299988123697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e2f8b0a7a5%3A0x6e2bce2e57b4d8c8!2sHayahulet%20Rd%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"

  const businessHours = [
    { day: "Monday - Friday", hours: "8:30 AM - 6:00 PM", icon: Clock, status: "open", description: "Full services available" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM", icon: Calendar, status: "limited", description: "Weekend services" },
    { day: "Sunday", hours: "Closed", icon: Coffee, status: "closed", description: "Day off" }
  ]

  const contactStats = [
    { number: "24-48h", label: "Response Time", icon: Sparkles },
    { number: "100+", label: "Projects Completed", icon: Users },
  ]

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Enhanced moving background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(var(--primary)/0.18),transparent_60%),radial-gradient(ellipse_at_70%_80%,oklch(var(--orange-400)/0.12),transparent_50%)] opacity-70"
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
          <Badge variant="secondary" className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Let&apos;s Create Together
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your brand? Reach out to our team for a consultation and let&apos;s bring your vision to life with premium print solutions.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={0.1}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Stats */}
            <div className="grid grid-cols-2 gap-4">
              {contactStats.map((stat, index) => (
                <Card key={index} className="border-0 bg-background/60 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="shadow-2xl bg-background/80 backdrop-blur-md overflow-hidden border border-primary/10">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-linear-to-br from-primary to-orange-400 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Send us a message</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <Button size="lg" className="btn-pana px-8 rounded-xl w-full group relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-primary to-orange-400 group-hover:from-orange-400 group-hover:to-primary transition-all duration-300" />
                    <span className="relative z-10 flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Info & Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={0.2}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Google Maps Integration */}
            <Card className="shadow-2xl overflow-hidden bg-background/80 backdrop-blur-md border border-primary/10">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 bg-linear-to-r from-primary/5 to-orange-400/5">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">Visit Our Studio</h4>
                      <p className="text-sm text-muted-foreground">
                        Hayahulet Rd. Infront of Worku Bld, Wakero Bld.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Contact Info Cards */}
            <div className="space-y-6">
              {/* Address Card */}
              <Card className="shadow-lg bg-linear-to-br from-background via-background to-primary/10 backdrop-blur-sm border border-primary/5 group hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Our Location</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Hayahulet Rd. Infront of Worku Bld, Wakero Bld.<br />
                      Addis Ababa, Ethiopia
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary mt-2 font-medium">
                      Get Directions →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="shadow-lg bg-linear-to-br from-background via-background to-primary/10 backdrop-blur-sm border border-primary/5 group hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email Us</h4>
                    <p className="text-muted-foreground">
                      panapromotionplc@gmail.com
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary mt-2 font-medium">
                      Send Email →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="shadow-lg bg-linear-to-br from-background via-background to-primary/10 backdrop-blur-sm border border-primary/5 group hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Call Us</h4>
                    <p className="text-muted-foreground">
                      Office: +251 116 68 69 40<br />
                      Mobile: +251 911 00 52 55
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary mt-2 font-medium">
                      Call Now →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Business Hours */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="shadow-2xl bg-linear-to-br from-background/80 via-background/60 to-primary/10 backdrop-blur-md border border-primary/10 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  Business Hours
                </h3>
                <p className="text-muted-foreground mt-2">Visit us or get in touch during our working hours</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {businessHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`shadow-lg backdrop-blur-sm h-full transition-all duration-300 hover:scale-105 ${
                      schedule.status === 'open' 
                        ? 'bg-linear-to-br from-green-500/10 to-primary/10 border-green-500/20' 
                        : schedule.status === 'limited'
                        ? 'bg-linear-to-br from-amber-500/10 to-orange-400/10 border-amber-500/20'
                        : 'bg-linear-to-br from-gray-500/10 to-gray-400/10 border-gray-500/20'
                    }`}>
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                          schedule.status === 'open' 
                            ? 'bg-green-500/20 text-green-600' 
                            : schedule.status === 'limited'
                            ? 'bg-amber-500/20 text-amber-600'
                            : 'bg-gray-500/20 text-gray-600'
                        }`}>
                          <schedule.icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">{schedule.day}</h4>
                        <p className={`text-lg font-semibold mb-2 ${
                          schedule.status === 'open' 
                            ? 'text-green-600' 
                            : schedule.status === 'limited'
                            ? 'text-amber-600'
                            : 'text-gray-600'
                        }`}>
                          {schedule.hours}
                        </p>
                        <p className="text-sm text-muted-foreground">{schedule.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10"
              >
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">Pro Tip:</span> For urgent projects outside business hours, 
                  call our mobile number for special arrangements.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Enhanced glowing backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-orange-400/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>
    </section>
  )
}