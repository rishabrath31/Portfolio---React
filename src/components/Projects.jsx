import { motion } from 'framer-motion'
import { getViewportSettings } from '@/lib/performance'
import { useState } from 'react'
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Star, 
  Eye,
  Filter,
  Zap,
  Globe,
  Smartphone,
  Database,
  Code2
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = [
    { id: 'all', name: 'All Projects', icon: Code2 },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'fullstack', name: 'Full Stack', icon: Database },
    { id: 'ai', name: 'AI/ML', icon: Zap },
  ]

  const projects = [
    {
      id: 1,
      title: 'Event Management System',
      description: 'Full-stack event management system with JWT authentication, event discovery, and ticketing features.',
      longDescription: 'Developed a comprehensive event management system with JWT authentication for secure user access. Features include event discovery, ticketing system, and attendee engagement tools. Designed a dashboard for organizers to track registrations and ticket sales in real-time. Built with Node.js, Express.js, and MongoDB for scalable backend architecture.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'JWT'],
      github: 'https://github.com/rishabrath31',
      live: '#',
      status: 'completed',
      featured: true,
      stats: { stars: 0, forks: 0, views: '0' },
      timeline: '2 months',
      team: 'Solo Project',
      highlights: [
        'JWT authentication system',
        'Event discovery and ticketing',
        'Organizer dashboard',
        'Real-time registration tracking'
      ]
    },
    {
      id: 2,
      title: 'ShoppyGlobe E-commerce Platform',
      description: 'Scalable e-commerce platform with React frontend and Node.js backend with RESTful APIs.',
      longDescription: 'Developed a scalable backend with RESTful APIs for authentication using JWT, product management, and cart functionality. Built a responsive frontend with React, Redux, and React Router for smooth navigation and secure checkout process. Implemented comprehensive product catalog, shopping cart, and user authentication features.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      tags: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Redux', 'React Router', 'JWT'],
      github: 'https://github.com/rishabrath31',
      live: '#',
      status: 'completed',
      featured: true,
      stats: { stars: 0, forks: 0, views: '0' },
      timeline: '1.5 months',
      team: 'Solo Project',
      highlights: [
        'RESTful API architecture',
        'React with Redux state management',
        'Secure checkout process',
        'Responsive design'
      ]
    },
    {
      id: 3,
      title: 'Weather Application System',
      description: 'Dynamic weather app with 5-day forecast using OpenWeatherMap API.',
      longDescription: 'Built a dynamic weather application using OpenWeatherMap API with responsive 5-day forecast display. Features include weather icons, optimized UI, and real-time weather data updates. Implemented clean and intuitive user interface for seamless user experience.',
      image: '/api/placeholder/600/400',
      category: 'web',
      tags: ['JavaScript', 'OpenWeatherMap API', 'HTML', 'CSS'],
      github: 'https://github.com/rishabrath31',
      live: '#',
      status: 'completed',
      featured: false,
      stats: { stars: 0, forks: 0, views: '0' },
      timeline: '1 month',
      team: 'Solo Project',
      highlights: [
        '5-day weather forecast',
        'Real-time weather data',
        'Responsive design',
        'Optimized UI'
      ]
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive portfolio with intuitive design, optimized navigation, and smooth animations.',
      longDescription: 'Engineered a responsive portfolio website with intuitive design and optimized navigation. Features include smooth animations for seamless user interaction, modern UI/UX design, and fully responsive layout for all devices.',
      image: '/api/placeholder/600/400',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/rishabrath31',
      live: '#',
      status: 'completed',
      featured: false,
      stats: { stars: 0, forks: 0, views: '0' },
      timeline: '3 weeks',
      team: 'Solo Project',
      highlights: [
        'Responsive design',
        'Smooth animations',
        'Optimized navigation',
        'Modern UI/UX'
      ]
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-500 bg-green-500/10'
      case 'in-progress': return 'text-yellow-500 bg-yellow-500/10'
      default: return 'text-gray-500 bg-gray-500/10'
    }
  }

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/20 dark:from-background dark:to-muted/20 relative">
      <div className="container-responsive px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={getViewportSettings()}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mobile-text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my best work, demonstrating technical skills and creative problem-solving
            </p>
          </motion.div>

          {/* Featured Projects Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={getViewportSettings()}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                        <Code2 className="h-16 w-16 text-primary/50" />
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </Button>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center space-x-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{project.stats.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{project.timeline}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filter.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{filter.name}</span>
                <span className="sm:hidden">{filter.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={getViewportSettings()}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <Code2 className="h-12 w-12 text-primary/50" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm text-xs px-3 py-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm text-xs px-3 py-1"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="mb-3">
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{project.stats.views}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center mt-12 sm:mt-16 md:mt-20 px-2 sm:px-0"
          >
            <Card className="bg-gradient-to-br from-blue-100/80 to-indigo-100/60 dark:from-primary/10 dark:to-purple-500/10 border border-primary/20">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Want to see more projects?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Check out my GitHub profile for more open-source projects and contributions
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="group font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/rishabrath31', '_blank')}
                >
                  <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View GitHub Profile
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects




