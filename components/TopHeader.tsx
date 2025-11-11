// components/TopHeader.tsx
'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function TopHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-linear-to-r from-primary/10 to-secondary/10 border-b border-border/30"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center py-3 text-sm">
          {/* Left Side - Contact Info */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-primary" />
              <span>+251 116 68 69 40</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-primary" />
              <span>panapromotionplc@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">Addis Ababa, Ethiopia</span>
            </div>
          </div>
          
          {/* Right Side - Business Hours */}
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>Mon-Fri: 8:30AM-5:30PM</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}