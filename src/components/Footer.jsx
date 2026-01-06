import { motion } from 'framer-motion'
import { getViewportSettings } from '@/lib/performance'
import { Github, Linkedin, Instagram, Twitter, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabrath31/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rishabrath31', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/_rishab_rath_/?hl=en', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/RishabRath', label: 'Twitter' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-muted/20 to-background border-t border-white/10">
      <div className="container-responsive py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={getViewportSettings()}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  <span className="gradient-text">RISHAB</span>
                  <span className="text-foreground">RATH</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                  A passionate software developer dedicated to creating innovative solutions 
                  and making a positive impact through technology.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 sm:p-3 rounded-full glass border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get in Touch</h4>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                <p>rishab@example.com</p>
                <p>+91-8917401586</p>
                <p>India</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
          >
            <div className="flex items-center space-x-2 text-sm sm:text-base text-muted-foreground">
              <span>© {currentYear} Rishab Rath. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-current" />
              </motion.div>
              <span>and React</span>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full glass border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4 text-foreground group-hover:text-primary transition-colors" />
              </motion.button>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
