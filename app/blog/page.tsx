
'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock, Flame, GraduationCap, Mic, Sparkles, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const featuredArticle = {
  title: 'Print Intelligence 2025: How premium tactile media multiplies ROI',
  excerpt:
    'Discover why modern CMOs are rebalancing their media mix with tangible, high-retention print ecosystems that pair data-backed personalization with luxe craftsmanship.',
  author: 'Helina Abate • Chief Brand Strategist',
  stats: ['+38% campaign recall', '4.2x event conversion', 'NPS 72'],
}

const blogPosts = [
  {
    title: 'Designing omnichannel launch kits that spark boardroom-level attention',
    category: 'Go-to-Market',
    readingTime: '6 min read',
    summary:
      'A positioning-led approach to merchandising, unboxing, and sales enablement assets that turn hand-offs into high-impact theatre.',
  },
  {
    title: 'Events as a media channel: why curated print moments outperform static booths',
    category: 'Experiential',
    readingTime: '8 min read',
    summary:
      'Maximize sponsorship ROI with sightline planning, sensorial layering, and modular brand architecture built for relentless reuse.',
  },
  {
    title: 'Precision targeting for B2B growth teams using micro-runs with variable data',
    category: 'Revenue Ops',
    readingTime: '5 min read',
    summary:
      'How to translate Salesforce segments into premium leave-behinds that advance complex enterprise deals without bloating spend.',
  },
  {
    title: 'Sustainability signals clients actually trust in premium print ecosystems',
    category: 'Brand Trust',
    readingTime: '7 min read',
    summary:
      'Shift conversations from cost to stewardship with transparent sourcing, recycled textiles, and circular fabrication proof points.',
  },
  {
    title: 'Luxury point-of-sale narratives that make retail launches binge-worthy',
    category: 'Retail Experience',
    readingTime: '9 min read',
    summary:
      'Blueprint for immersive pop-ups, scent-loaded signage, and data capture loops that turn casual browsers into evangelists.',
  },
  {
    title: 'Building a flagship promo stack for product-led tech scale-ups',
    category: 'Product Marketing',
    readingTime: '6 min read',
    summary:
      'From founder mailers to investor touch kits, here is the modern promo arsenal built to outperform swag fatigue.',
  },
]

const events = [
  {
    title: 'CMO Studio: Designing multi-sensory investor day experiences',
    date: 'Dec 12, 2025',
    format: 'Private salon • Addis Ababa',
    takeaway: 'Live prototyping of tactile storytelling zones across foyer, stage, and breakout moments.',
  },
  {
    title: 'Print x Digital Growth Lab',
    date: 'Jan 15, 2026',
    format: 'Virtual workshop',
    takeaway: 'Framework for syncing CRM data with premium micro-batch kits and QR-enabled feedback loops.',
  },
  {
    title: 'Experiential Ops Breakfast',
    date: 'Feb 4, 2026',
    format: 'Invite-only roundtable',
    takeaway: 'Benchmarking event ROI with sensory KPIs, sustainability dashboards, and hybrid staffing models.',
  },
]

const marketingSignals = [
  {
    label: 'Thought starters',
    copy: 'Daily swipe files of luxury-grade print storytelling and experiential hooks ready to remix.',
  },
  {
    label: 'Revenue plays',
    copy: 'Pipeline-ready nurture motions that fuse dimensional mail, pop-up lounges, and data capture.',
  },
  {
    label: 'Event blueprints',
    copy: 'Layer-by-layer breakdowns of award-winning launches that scale from 50 VIPs to 5,000 attendees.',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border/60 bg-linear-to-br from-background via-background/60 to-primary/5">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(var(--primary)/0.08),transparent_55%)]" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-primary/10 to-transparent blur-3xl" />
        </div>

        <div className="container relative mx-auto flex flex-col gap-10 px-6 py-20">
          <div className="flex flex-wrap items-center gap-4">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-sm">
              <Sparkles className="size-3.5" />
              Expert Insights
            </Badge>
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Strategy • Print Innovation • Experiential
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl leading-tight font-semibold md:text-6xl">
              Intelligent storytelling systems for bold African brands.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              The Pana Expert Blog breaks down how high-performing CMOs pair couture-level production with data-backed
              journeys. Think tactile media stacks, event economies, and marketing plays engineered to move boardrooms.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="rounded-2xl border border-primary/25 bg-background/90 px-6 py-4 shadow-md backdrop-blur-xl dark:bg-background/40">
              <p className="text-3xl font-semibold text-primary">72%</p>
              <p className="text-muted-foreground">Average uplift in perceived brand exclusivity</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/90 px-6 py-4 shadow-md backdrop-blur-xl dark:bg-background/40">
              <p className="text-3xl font-semibold text-foreground">19</p>
              <p className="text-muted-foreground">Proprietary launch playbooks tested in-market</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/90 px-6 py-4 shadow-md backdrop-blur-xl dark:bg-background/40">
              <p className="text-3xl font-semibold text-foreground">4 continents</p>
              <p className="text-muted-foreground">Brand activations fueled by Pana production</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="btn-pana px-8 py-6 text-base">
              Subscribe to the Briefing
              <ArrowUpRight className="size-4" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-base">
              Book a Thought Session
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <Card className="relative overflow-hidden border border-primary/25 bg-background/95 shadow-2xl backdrop-blur-xl dark:bg-background/40">
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-orange-300 to-primary" />
            <CardHeader className="pb-2">
              <Badge className="w-fit bg-primary/10 text-primary border border-primary/30 px-3 py-1" variant="secondary">
                Featured Play
              </Badge>
              <CardTitle className="text-3xl font-semibold leading-tight text-foreground">{featuredArticle.title}</CardTitle>
              <CardDescription className="text-base text-muted-foreground">{featuredArticle.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span>{featuredArticle.author}</span>
                <span className="h-4 w-px bg-border" />
                <span>Bespoke Research Capsule</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {featuredArticle.stats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-xl border border-primary/15 bg-background/80 px-4 py-3 text-sm text-foreground shadow-inner dark:bg-background/30"
                  >
                    <p className="font-semibold text-primary">{stat.split(' ')[0]}</p>
                    <p className="text-muted-foreground">{stat.replace(stat.split(' ')[0], '').trim()}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between pt-0">
              <Button variant="ghost" className="text-primary hover:text-primary">
                Read the playbook
                <ArrowUpRight className="size-4" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4" />
                11 min read
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="border border-border/70 bg-background/90 shadow-xl backdrop-blur-xl dark:bg-background/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                <TrendingUp className="size-5 text-primary" />
                What you get
              </CardTitle>
              <CardDescription>
                Zero fluff editorial built for marketing, sales, and experience teams that need premium proof, fast.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {marketingSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-dashed border-primary/30 bg-background/80 p-4 shadow-sm dark:bg-background/30"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">{signal.label}</p>
                  <p className="mt-2 text-base text-muted-foreground">{signal.copy}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="secondary" className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90">
                Get the weekly signal
                <Flame className="size-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-col gap-4 pb-8">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-secondary/60 text-foreground">
              Intelligence Library
            </Badge>
            <span className="text-sm text-muted-foreground">Updated weekly</span>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold md:text-4xl">Momentum-focused articles</h2>
            <Button variant="ghost" className="text-primary">
              View all categories
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, rotateX: 2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="group border border-primary/25 bg-background/90 shadow-xl backdrop-blur-xl transition will-change-transform dark:bg-background/40">
                <CardHeader className="gap-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span className="flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-primary">
                      <NotebookIcon />
                      Insight
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-snug text-foreground transition-colors group-hover:text-primary">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.summary}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between border-t border-dashed border-border/60 pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    {post.readingTime}
                  </div>
                  <Button variant="link" className="text-primary">
                    Dive deeper
                    <ArrowUpRight className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="rounded-[32px] border border-primary/30 bg-linear-to-br from-primary/10 via-background to-secondary/30 p-8 shadow-lg">
          <div className="flex flex-col gap-4 pb-8 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge className="bg-white text-primary border border-primary/20 px-3 py-1">
                Elite Events
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">Briefings & live build sessions</h2>
              <p className="mt-2 max-w-2xl text-base text-muted-foreground">
                Attend intimate salons and digital labs where we workshop tactile experiences, media kits, and launch pads
                tailored to your growth agenda.
              </p>
            </div>
            <Button variant="outline" className="border-white/40 bg-white/80 text-foreground hover:bg-white">
              View calendar
              <Calendar className="size-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 hidden border-l border-dashed border-primary/40 md:block" />
            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.01, x: 6 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="border border-primary/20 bg-background/95 shadow-xl backdrop-blur-xl dark:bg-background/40">
                    <CardContent className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-1 flex-col gap-3">
                        <div className="flex items-center gap-3 text-sm text-primary">
                          <Calendar className="size-4" />
                          {event.date}
                          <span className="text-muted-foreground">•</span>
                          {event.format}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                        <p className="text-muted-foreground">{event.takeaway}</p>
                      </div>
                      <Button variant="ghost" className="justify-end text-primary">
                        Reserve seat
                        <ArrowUpRight className="size-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="overflow-hidden border border-primary/25 bg-background/95 shadow-2xl backdrop-blur-2xl dark:bg-background/40">
            <CardContent className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2 text-sm text-primary/80">
                <GraduationCap className="size-5" />
                Strategy partner program
              </div>
              <h3 className="text-3xl font-semibold text-foreground">
                Need a bespoke content sprint, event architecture, or investor kit?
              </h3>
              <p className="text-muted-foreground">
                Our studio plugs into your marketing leadership team to craft campaigns that feel inevitable—merging
                insight, production, and ops under one runway.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button className="btn-pana px-6 py-5 text-base">
                Request a workshop
                <Mic className="size-4" />
              </Button>
              <Button variant="ghost" className="text-primary">
                Download service catalog
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}

function NotebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current">
      <rect x="4" y="3" width="16" height="18" rx="2" ry="2" strokeWidth="1.5" />
      <line x1="8" y1="7" x2="16" y2="7" strokeWidth="1.5" />
      <line x1="8" y1="11" x2="16" y2="11" strokeWidth="1.5" />
      <line x1="8" y1="15" x2="13" y2="15" strokeWidth="1.5" />
    </svg>
  )
}