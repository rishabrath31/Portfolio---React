import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/use-theme'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  
  // Detect mobile/tablet screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280) // xl breakpoint is 1280px
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ], [])

  // Debounced scroll handler for better performance
  useEffect(() => {
    let ticking = false
    let rafId = null

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          
          // Update active section - only check every 100ms
          const sections = navItems.map(item => item.href.substring(1))
          const currentSection = sections.find(section => {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              return rect.top <= 100 && rect.bottom > 100
            }
            return false
          })
          
          if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection)
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [navItems, activeSection])

  const scrollToSection = useCallback((href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }, [])

  const toggleTheme = useCallback(() => {
    // Only toggle between light and dark (2 clicks, no system mode)
    // Use resolvedTheme to get the actual current theme
    const currentTheme = resolvedTheme || 'light'
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }, [resolvedTheme, setTheme])

  const getThemeIcon = useCallback(() => {
    // Show icon based on resolved theme (actual theme being used)
    const currentTheme = resolvedTheme || 'light'
    return currentTheme === 'dark' ? Moon : Sun
  }, [resolvedTheme])

  const ThemeIcon = getThemeIcon()

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 overflow-x-hidden ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' 
            : 'bg-transparent'
        }`}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="w-full max-w-7xl mx-auto pl-4 pr-2 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
          <div className="flex items-center justify-between h-16 sm:h-20 w-full gap-2 min-w-0">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer flex-shrink-0 min-w-0"
              onClick={() => scrollToSection('#home')}
            >
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-base sm:text-lg">
                  R
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-lg font-bold">
                  <span className="gradient-text">RISHAB</span>
                  <span className="text-foreground ml-1">RATH</span>
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation - Completely hidden on mobile/tablet, only visible on desktop (xl and above) */}
            {!isMobile && (
              <nav className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>
            )}
            
            {/* Spacer for mobile/tablet to push buttons to the right edge */}
            {isMobile && <div className="flex-1 min-w-0" aria-hidden="true" />}

            {/* Right Side - Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Theme Toggle - Always visible on all screens */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                aria-label="Toggle theme"
                title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <ThemeIcon className="h-5 w-5 sm:h-4 sm:w-4 text-foreground" />
              </Button>

              {/* Mobile Menu Button - Hamburger (Visible on mobile and tablet, hidden on desktop) */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden w-10 h-10 sm:w-9 sm:h-9 rounded-lg hover:bg-muted flex-shrink-0"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu - Collapsible (Visible on mobile and tablet) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 xl:hidden bg-background/95 backdrop-blur-sm border-b border-border shadow-lg overflow-hidden"
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="space-y-2">
                {/* Navigation Items - Only visible inside mobile menu */}
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                {/* Theme Toggle in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="pt-2 border-t border-border mt-2"
                >
                  <button
                    onClick={() => {
                      toggleTheme()
                      setIsOpen(false)
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                  >
                    <span className="flex items-center gap-2">
                      <ThemeIcon className="h-5 w-5" />
                      <span>Switch to {resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                    </span>
                  </button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-20" />
    </>
  )
}

export default Header