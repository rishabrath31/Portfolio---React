import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import {
  Linkedin,
  Github,
  Twitter,
  Download,
  ArrowRight,
  Sparkles,
  Code2,
  Terminal
} from 'lucide-react'
import GlassButton from '@/components/ui/GlassButton'
import GlassCard from '@/components/ui/GlassCard'
import LazyImage from '@/components/ui/LazyImage'
import { professionalData } from '@/data/professionalData'
import { useRef } from 'react'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    mouseX.set((clientX - left) / width)
    mouseY.set((clientY - top) / height)
  }

  const { personal } = professionalData

  const socialLinks = [
    { icon: Linkedin, href: personal.contact.linkedin, color: 'hover:text-blue-500' },
    { icon: Github, href: personal.contact.github, color: 'hover:text-gray-800 dark:hover:text-white' },
    { icon: Twitter, href: personal.contact.twitter, color: 'hover:text-blue-400' },
  ]

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[105vh] flex items-center justify-center pt-20 overflow-hidden mesh-gradient pb-20"
    >
      {/* Dynamic Glass Artifacts (Parallax) */}
      <motion.div
        style={{
          x: useTransform(mouseXSpring, [0, 1], [-20, 20]),
          y: useTransform(mouseYSpring, [0, 1], [-20, 20])
        }}
        className="absolute top-[15%] right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{
          x: useTransform(mouseXSpring, [0, 1], [30, -30]),
          y: useTransform(mouseYSpring, [0, 1], [30, -30])
        }}
        className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-purple-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container-responsive px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface text-[12px] font-bold tracking-[0.2em] uppercase text-primary mb-8"
            >
              <div className="relative flex h-2 w-2">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></div>
              </div>
              Available for new opportunities
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
              Hi, I'm <br />
              <span className="gradient-text">{personal.name.split(' ')[0]}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-medium">
              Architecting <span className="text-foreground font-bold underline decoration-primary/30 decoration-4 underline-offset-4">high-performance</span> ERP solutions
              and enterprise-grade web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <GlassButton
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto"
              >
                View Work <ArrowRight className="w-5 h-5 ml-2" />
              </GlassButton>

              <GlassButton
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => window.open('/files/Profile.pdf', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" /> Resume
              </GlassButton>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex gap-6">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`text-muted-foreground/60 transition-colors ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-border to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-end relative"
          >
            <div className="relative w-[520px] aspect-square">
              {/* Floating Tech Badges */}
              <GlassCard
                className="absolute -top-6 -left-6 p-4 rounded-2xl z-20 border-white/40"
              >
                <Code2 className="w-8 h-8 text-primary" />
              </GlassCard>

              <GlassCard
                className="absolute top-1/2 -right-12 p-5 rounded-2xl z-20 border-white/40"
              >
                <Terminal className="w-8 h-8 text-purple-500" />
              </GlassCard>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 left-1/4 z-20"
              >
                <GlassCard className="px-8 py-5 rounded-3xl border-white/40 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Experience</p>
                    <p className="text-xl font-black tracking-tight">{personal.experience_years}</p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Main Image Mask */}
              <div className="absolute inset-0 rounded-[4rem] overflow-hidden border-[1px] border-white/20 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-1000">
                <LazyImage
                  src="/images/mypic.jpeg"
                  alt="Rishab Rath"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Ambient Glow */}
              <div className="absolute -inset-10 bg-primary/20 rounded-[5rem] -z-10 blur-[80px] animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero