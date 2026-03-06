import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  Code2,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import { professionalData } from '@/data/professionalData'

const ExperienceItem = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12 md:pl-24 pb-20 last:pb-0"
    >
      {/* Timeline Connector Dot */}
      <div className="absolute left-3.5 md:left-7.5 top-0 w-4 h-4 rounded-full bg-background border-4 border-primary z-20 shadow-[0_0_15px_rgba(var(--primary),0.6)]" />

      <GlassCard className="p-0 overflow-hidden border-white/20 dark:border-white/10 hover:border-primary/40 transition-all duration-500">
        <div className="p-8 md:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tighter mb-1">{exp.role}</h3>
                <p className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2">
                  {exp.company} <Sparkles className="w-3 h-3" />
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:items-end gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" /> {exp.period}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" /> {exp.location}
              </div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-10 max-w-4xl">
            {exp.description}
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {exp.achievements && exp.achievements.length > 0 && (
              <div>
                <h4 className="flex items-center gap-3 font-black mb-6 text-xs uppercase tracking-[0.3em] text-foreground/80">
                  <Award className="w-4 h-4 text-primary" /> Key Results
                </h4>
                <ul className="space-y-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm font-medium text-muted-foreground group/li">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover/li:bg-primary/20 transition-colors">
                        <ChevronRight className="w-3 h-3 text-primary" />
                      </div>
                      <span className="group-hover/li:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exp.technologies && exp.technologies.length > 0 && (
              <div>
                <h4 className="flex items-center gap-3 font-black mb-6 text-xs uppercase tracking-[0.3em] text-foreground/80">
                  <Code2 className="w-4 h-4 text-primary" /> Tech Integrated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 glass-surface rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

const Experience = () => {
  const { experience } = professionalData
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="experience" className="py-32 relative overflow-hidden" ref={containerRef}>
      <div className="container-responsive px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Professional <span className="gradient-text">Trajectory</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl">
            A chronological record of technical leadership and problem-solving excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line with Glow */}
          <div className="absolute left-5 md:left-9 top-0 bottom-0 w-[1px] bg-border transition-colors group-hover:bg-primary/20" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-5 md:left-9 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-purple-500 to-transparent origin-top shadow-[0_0_10px_rgba(var(--primary),0.5)]"
          />

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
