// components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuContent, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Sun, Moon, Menu, X } from 'lucide-react'
import TopHeader from './TopHeader'
import Image from 'next/image'

const navigationItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
    submenu: [
      { title: 'Digital Paper Print', href: '/services/digital-print' },
      { title: 'Signage Solutions', href: '/services/signage' },
      { title: 'Flex Banner Printing', href: '/services/flex-banner' },
      { title: 'Vinyl Printing & Cutout', href: '/services/vinyl' },
      { title: 'Fabric Printing', href: '/services/fabric' },
      { title: 'Promotional Items', href: '/services/promotional' },
      { title: 'Graphic Design', href: '/services/design' },
      { title: 'Event Planning', href: '/services/events' },
    ]
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
]

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  if (!mounted) return null

  return (
    <>
      {/* Top Header */}
      <TopHeader />
      
      {/* Main Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50' 
            : 'bg-background/40 backdrop-blur-xl border-b border-border/10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="flex items-center space-x-6"
            >
              <Image 
                src="/pana-logo.png"
                alt="Pana Promotion PLC Logo"
                width={164}
                height={64}
                className="rounded-xl"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground rounded-lg px-4 py-2 text-sm font-medium transition-colors">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                          >
                            {item.submenu.map((subItem) => (
                              <NavigationMenuLink
                                key={subItem.title}
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              </NavigationMenuLink>
                            ))}
                          </motion.div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hidden sm:flex"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Make an Order Button */}
              <Button
                size="sm"
                className="btn-pana rounded-full px-6 hidden sm:flex"
              >
                Make An Order
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                  >
                    {theme === 'dark' ? (
                      <Sun className="h-4 w-4 mr-2" />
                    ) : (
                      <Moon className="h-4 w-4 mr-2" />
                    )}
                    Theme
                  </Button>
                  
                  <Button
                    size="sm"
                    className="btn-pana rounded-full px-6"
                  >
                    Make An Order
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  )
}