import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Twitter, Heart, ArrowUp, Sparkles } from 'lucide-react'
import { professionalData } from '@/data/professionalData'
import GlassButton from '@/components/ui/GlassButton'

const Footer = () => {
  const { personal } = professionalData
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabrath31/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rishabrath31', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/_rishab_rath_/?hl=en', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/RishabRath', label: 'Twitter' },
  ]

  const quickLinks = [
    { name: 'Introduction', href: '#hero' },
    { name: 'Profile', href: '#profile' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-24 overflow-hidden border-t border-white/10 bg-black/20 backdrop-blur-3xl">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container-responsive px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black tracking-tighter mb-6 flex items-center gap-3">
                <span className="gradient-text">RISHAB</span> RATH
                <Sparkles className="w-5 h-5 text-primary" />
              </h3>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-md mb-10">
                Architecting high-performance digital ecosystems with a focus on visual precision and technical excellence.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl glass-surface flex items-center justify-center text-muted-foreground hover:text-primary transition-colors border-white/10 hover:border-primary/40"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/80 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary font-bold transition-colors tracking-tight text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Vector */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/80 mb-8">Connect Vector</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Direct Link</p>
                <a href={`mailto:${personal.contact.email}`} className="text-xl font-black tracking-tight hover:text-primary transition-colors">
                  {personal.contact.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Teleport</p>
                <p className="text-xl font-black tracking-tight">{personal.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
            <span>© {currentYear}</span>
            <div className="h-4 w-px bg-white/10" />
            <span className="flex items-center gap-2">
              Engineered with <Heart className="w-4 h-4 text-primary fill-primary" /> by Rishab
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group glass-surface p-4 rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:border-primary/40 transition-all"
          >
            Return to Peak <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
