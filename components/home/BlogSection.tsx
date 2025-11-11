// components/home/BlogSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react'

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

const blogPosts = [
  {
    id: 1,
    title: "How Chatbots Can Help You Drive More Sales",
    excerpt: "Discover the power of AI-driven chatbots in boosting your sales and improving customer engagement with automated conversations.",
    image: "/sample-1.jpg",
    date: "12 Sep",
    author: "Admin",
    comments: 2,
    category: "Technology"
  },
  {
    id: 2,
    title: "The Future of Digital Printing in Ethiopia and The Region",
    excerpt: "Exploring emerging trends and technologies shaping the printing industry in Ethiopia and how businesses can leverage them.",
    image: "/sample-2.jpg",
    date: "08 Sep",
    author: "Admin",
    comments: 5,
    category: "Industry Insights"
  },
  {
    id: 3,
    title: "Brand Identity Design: Creating Memorable Visuals",
    excerpt: "Learn the essential principles of brand identity design and how to create visuals that resonate with your target audience.",
    image: "/sample-3.jpeg",
    date: "05 Sep",
    author: "Admin",
    comments: 3,
    category: "Design"
  }
]

export default function BlogSection() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Moving background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(var(--primary)/0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,oklch(var(--primary)/0.08),transparent_60%)] opacity-60"
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
            Blog Post
          </Badge>
          
          <h2 className="py-3 text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Read Latest News & Blog
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends in printing, design, and branding industry insights.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={index * 0.1}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full shadow-xl bg-background/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {post.date}
                    </Badge>
                  </div>
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <CardContent className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs font-medium">
                      {post.category}
                    </Badge>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments} Comments
                      </span>
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:bg-transparent">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-4"
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          
          <div className="flex space-x-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  page === 1 ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Button size="lg" className="btn-pana px-10 rounded-full">
            View All Articles
          </Button>
        </motion.div>
      </div>

      {/* Subtle glowing backdrop */}
      <div className="absolute inset-0 -z-10 bg-pana-gradient opacity-20 blur-3xl" />
    </section>
  )
}