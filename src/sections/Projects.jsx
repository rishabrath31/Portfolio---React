import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import {
  ExternalLink,
  Github,
  Globe,
  Code2,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Play,
  Users,
  BookOpen,
  ListTodo
} from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import { professionalData } from '@/data/professionalData'

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Dynamically resolve icon if it's a string
  const IconComponent = typeof project.icon === 'string' ? LucideIcons[project.icon] : project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group perspective-1000"
    >
      <GlassCard className="h-full p-0 overflow-hidden flex flex-col border-white/20 dark:border-white/10 group-hover:border-primary/50 transition-colors duration-500">
        <div className="relative h-64 bg-gradient-to-br from-primary/10 via-background to-purple-500/5 flex items-center justify-center overflow-hidden">
          {/* Animated Background Mesh for Card */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 mesh-gradient" />

          <motion.div
            style={{ transform: "translateZ(50px)" }}
            className="p-8 rounded-[2.5rem] bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-2xl relative z-10"
          >
            {IconComponent && <IconComponent className={`w-16 h-16 text-${project.color}-500`} />}
          </motion.div>

          {/* Quick Actions Overlay */}
          <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
            <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={project.live || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="p-10 flex-grow flex flex-col" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center justify-between mb-4">
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] text-${project.color}-500 bg-${project.color}-500/10 px-3 py-1 rounded-full`}>
              {project.category}
            </span>
          </div>
          <h3 className="text-3xl font-black tracking-tighter mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-lg font-medium mb-8 line-clamp-3">
            {project.description}
          </p>

          <div className="mt-auto pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 glass-surface rounded-xl text-[10px] font-black uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <button className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-xs group/btn">
              Exploration <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

const Projects = () => {
  const { projects } = professionalData

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container-responsive px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Featured <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl">
            A gallery of digital experiences built with precision and intent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects




