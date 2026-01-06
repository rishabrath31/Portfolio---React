import { motion } from 'framer-motion'
import { getViewportSettings } from '@/lib/performance'
import { useState } from 'react'
import { 
  Code2, 
  Database, 
  GitBranch, 
  Brain,
  Server,
  Monitor,
  Star
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: Code2 },
    { id: 'frontend', name: 'Frontend', icon: Monitor },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'tools', name: 'Tools', icon: GitBranch },
  ]

  const skills = [
    // Languages
    { name: 'Python', level: 90, category: 'backend', color: 'from-blue-500 to-yellow-500', icon: '🐍' },
    { name: 'JavaScript', level: 92, category: 'frontend', color: 'from-yellow-400 to-yellow-600', icon: '📄' },
    { name: 'HTML', level: 95, category: 'frontend', color: 'from-orange-500 to-red-500', icon: '🎨' },
    { name: 'CSS', level: 93, category: 'frontend', color: 'from-blue-500 to-cyan-500', icon: '💅' },

    // Frontend
    { name: 'React.js', level: 88, category: 'frontend', color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { name: 'Bootstrap', level: 85, category: 'frontend', color: 'from-purple-500 to-pink-500', icon: '🎨' },

    // Backend/Framework
    { name: 'Node.js', level: 90, category: 'backend', color: 'from-green-500 to-green-600', icon: '🟢' },
    { name: 'Express.js', level: 88, category: 'backend', color: 'from-gray-600 to-gray-800', icon: '🚂' },
    { name: 'Frappe Framework', level: 85, category: 'backend', color: 'from-blue-600 to-indigo-600', icon: '🔧' },
    { name: 'Frappe ERP', level: 87, category: 'backend', color: 'from-indigo-500 to-purple-600', icon: '📊' },

    // Database
    { name: 'MongoDB', level: 88, category: 'database', color: 'from-green-500 to-green-700', icon: '🍃' },

    // Tools
    { name: 'VS Code', level: 95, category: 'tools', color: 'from-blue-500 to-blue-700', icon: '💻' },
    { name: 'Git', level: 92, category: 'tools', color: 'from-orange-500 to-red-600', icon: '📂' },
    { name: 'GitHub', level: 90, category: 'tools', color: 'from-gray-700 to-gray-900', icon: '🐙' },
    { name: 'Postman', level: 85, category: 'tools', color: 'from-orange-500 to-red-500', icon: '📮' },
    { name: 'Figma', level: 80, category: 'tools', color: 'from-purple-500 to-pink-500', icon: '🎨' },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-muted/20 dark:to-background relative">
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
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              <span className="gradient-text">Skills</span> & Expertise
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through years of passionate learning and hands-on experience
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12"
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={getViewportSettings()}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="group relative bg-white/95 dark:bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-blue-300 dark:hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                    {/* Hover Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-100/80 to-indigo-100/60 dark:from-primary/10 dark:to-purple-500/10 pointer-events-none z-0"
                    />
                    <CardContent className="p-4 sm:p-6 relative z-10">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{skill.icon}</div>
                          <div>
                            <h3 className="font-semibold text-sm sm:text-base text-foreground">
                              {skill.name}
                            </h3>
                            <div className="flex items-center space-x-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(skill.level / 20)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={getViewportSettings()}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            <motion.div
                              animate={{ x: [0, 10, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute inset-0 bg-white/30 rounded-full"
                              style={{ width: '20px', height: '100%' }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No skills found in this category.</p>
              </div>
            )}
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-12 sm:mt-16 md:mt-20"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Code2, value: '15+', label: 'Technologies' },
                { icon: GitBranch, value: '6+', label: 'Projects' },
                { icon: Brain, value: '3+', label: 'Years Experience' },
                { icon: Star, value: '8.54', label: 'CGPA' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={getViewportSettings()}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-3 rounded-full bg-primary/10">
                          <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills




