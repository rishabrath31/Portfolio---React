import { motion } from 'framer-motion'
import { useState, memo } from 'react'
import { Download, Award, Users, Code2, Lightbulb, Target, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LazyImage from '@/components/LazyImage'
import { getViewportSettings } from '@/lib/performance'

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const stats = [
    { icon: Code2, value: '6+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, value: '3+', label: 'Years Experience', color: 'from-purple-500 to-pink-500' },
    { icon: Award, value: '8.54', label: 'CGPA', color: 'from-orange-500 to-red-500' },
    { icon: Target, value: '100%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' },
  ]

  const skills = [
    'Python', 'JavaScript', 'React.js', 'Node.js',
    'Express.js', 'MongoDB', 'HTML & CSS', 'Bootstrap',
    'Frappe Framework', 'Frappe ERP', 'Git & GitHub', 'VS Code'
  ]

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 dark:from-background dark:via-muted/10 dark:to-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGE4YWQiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="container-responsive relative z-10 px-4 sm:px-6">
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
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
            >
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                About
              </span>{' '}
              <span className="text-foreground">Me</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with passion and precision
            </p>
          </motion.div>

          {/* Main Content - Centered Layout */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {/* Profile Image - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative max-w-md w-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-3xl opacity-75 blur-2xl"
                />
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 border-4 border-background shadow-2xl">
                  <LazyImage
                    src="/images/mypic2.jpeg"
                    alt="Rishab Rath"
                    className="w-full h-full object-cover"
                    placeholderClassName="rounded-3xl"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={getViewportSettings()}
                  transition={{ duration: 0.3, delay: 0.2, type: "spring" }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center space-x-2"
                >
                  <Code2 className="h-5 w-5" />
                  <span className="font-bold text-sm sm:text-base">Developer</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Bar - Horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={getViewportSettings()}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <Card className="bg-gradient-to-br from-white/90 to-white/80 dark:from-white/10 dark:to-white/5 backdrop-blur-sm border-2 border-slate-300 dark:border-white/20 hover:border-primary/50 transition-all duration-300 overflow-hidden relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <CardContent className="p-6 text-center relative">
                        <div className="flex flex-col items-center space-y-3">
                          <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                            <stat.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="space-y-1">
                            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                              {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Story Section - Split Layout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {/* Left Column - Icon & Title */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={getViewportSettings()}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-1"
                >
                  <Card className="bg-gradient-to-br from-blue-100/80 to-indigo-100/60 dark:from-primary/10 dark:to-purple-500/10 border border-primary/20 h-full flex items-center justify-center p-8">
                    <div className="text-center lg:text-left">
                      <div className="inline-flex p-4 rounded-2xl bg-primary/20 mb-4">
                        <Lightbulb className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                        My Story
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Journey of passion and growth
                      </p>
                    </div>
                  </Card>
                </motion.div>

                {/* Right Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={getViewportSettings()}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardContent className="p-6 sm:p-8 lg:p-10">
                      <div className="space-y-6">
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                          I am <span className="text-foreground font-semibold">Rishab Rath</span>, a dedicated Full Stack Developer 
                          and Consultant based in Chandrasekharpur, Bhubaneswar, Odisha. I graduated in April 2023 with a 
                          Bachelor of Technology in Computer Science and Engineering from Trident Academy of Technology, 
                          achieving a CGPA of 8.54. My passion for technology and its potential to solve real-world 
                          problems drives me to continuously learn and grow in this ever-evolving field.
                        </p>
                        
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                          >
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                              Currently working as a Developer cum Consultant at Clapgrow Technologies, I specialize in 
                              building comprehensive Frappe ERP solutions and custom applications. With experience at 
                              Maison Technology and Tech Mahindra, I've developed expertise in full-stack web development 
                              using React.js, Node.js, Express.js, and MongoDB. I've worked on live client projects 
                              including event management systems, e-commerce platforms, and ERP solutions.
                            </p>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                              My adaptability to different situations and strong problem-solving skills make me uniquely 
                              suited for dynamic and challenging environments. I thrive on turning complex business 
                              requirements into elegant technical solutions and believe in the power of clean, maintainable 
                              code. I'm always excited to take on new challenges and collaborate with like-minded individuals.
                            </p>
                          </motion.div>
                        )}
                        
                        <Button
                          variant="outline"
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="group border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground"
                        >
                          {isExpanded ? (
                            <>
                              Read Less
                              <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                            </>
                          ) : (
                            <>
                              Read More
                              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Skills Section - Modern Tag Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-white/95 via-blue-50/50 to-indigo-50/30 dark:from-white/5 dark:via-primary/5 dark:to-purple-500/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10">
                <CardContent className="p-8 sm:p-10 lg:p-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center space-x-3 mb-4">
                      <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                        Key Technologies
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Tools and technologies I work with
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={getViewportSettings()}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="group"
                      >
                        <div className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-purple-500/30 transition-all duration-300 cursor-default">
                          <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About