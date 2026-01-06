import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Instagram, Twitter, ArrowRight, Sparkles, Code2, Zap, Star, Rocket, TrendingUp, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import LazyImage from '@/components/LazyImage'

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabrath31/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: 'https://github.com/rishabrath31', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Instagram, href: 'https://www.instagram.com/_rishab_rath_/?hl=en', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Twitter, href: 'https://x.com/RishabRath', label: 'Twitter', color: 'hover:text-blue-400' },
  ]

  const highlights = [
    { icon: Code2, text: 'Full Stack Developer', delay: 0 },
    { icon: Rocket, text: 'ML Enthusiast', delay: 0.1 },
    { icon: Star, text: 'Problem Solver', delay: 0.2 },
  ]

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGE4YWQiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      {/* Gradient Blobs - Optimized for performance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-3xl opacity-30 hidden lg:block" style={{ willChange: 'transform' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-30 hidden lg:block" style={{ willChange: 'transform' }} />

      <div className="container-responsive relative z-10 min-h-screen flex items-center py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 sm:space-y-10 md:space-y-12"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <Sparkles className="h-4 w-4" />
                <span className="text-sm sm:text-base">Available for opportunities</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                >
                  <span className="block text-foreground">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Rishab Rath
                  </span>
                  <span className="block text-foreground mt-2">Building Digital</span>
                  <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </motion.h1>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex flex-wrap gap-3 sm:gap-4 pt-2"
                >
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + item.delay }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-sm border-2 border-slate-300 dark:border-white/20 hover:border-primary/50 transition-all duration-300 group"
                    >
                      <item.icon className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform" />
                      <span className="text-sm sm:text-base font-medium text-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                I craft exceptional digital experiences through innovative web development and 
                cutting-edge technology solutions. Passionate about creating impactful software 
                that makes a difference.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/files/Rishab_Rath.pdf'
                    link.download = 'Rishab_Rath_Resume.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 group font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/50 dark:bg-white/5"
                  onClick={() => {
                    const projectsSection = document.getElementById('projects')
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View Projects
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center space-x-4 pt-4"
              >
                <span className="text-sm text-muted-foreground font-medium">Follow me:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border-2 border-slate-300 dark:border-white/20 hover:border-primary/50 text-muted-foreground hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300 ${link.color}`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    >
                      <link.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 sm:mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Decorative Elements - Static for performance */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100/80 to-indigo-100/60 dark:from-primary/10 dark:to-purple-500/10 rounded-full blur-xl hidden lg:block" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl hidden lg:block" />

                {/* Main Image Card */}
                <Card className="bg-white/95 dark:bg-white/10 backdrop-blur-sm border-2 border-slate-200 dark:border-white/20 shadow-2xl overflow-hidden relative group hover:shadow-3xl transition-all duration-500">
                  {/* Gradient Border - Static for performance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <CardContent className="p-0 relative">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <LazyImage
                        src="/images/mypic.jpeg"
                        alt="Rishab Rath"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        placeholderClassName="rounded-lg"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Floating Info Cards */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="absolute -bottom-4 -left-4 right-4 flex justify-between"
                    >
                      {/* Experience Badge */}
                      <Card className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-3 shadow-xl backdrop-blur-sm border-0">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4" />
                          <div>
                            <div className="text-xs font-medium opacity-90">Experience</div>
                            <div className="text-lg font-bold">3+ Years</div>
                          </div>
                        </div>
                      </Card>

                      {/* Projects Badge */}
                      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 shadow-xl backdrop-blur-sm border-0">
                        <div className="flex items-center space-x-2">
                          <Code2 className="h-4 w-4" />
                          <div>
                            <div className="text-xs font-medium opacity-90">Projects</div>
                            <div className="text-lg font-bold">50+</div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CardContent>
                </Card>

                {/* Floating Elements - Static for performance */}
                <div className="absolute -top-8 right-8 hidden lg:block">
                  <Card className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/50 shadow-xl px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm font-semibold text-foreground">Open to Work</span>
                    </div>
                  </Card>
                </div>

                <div className="absolute -bottom-8 left-8 hidden lg:block">
                  <Card className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/50 shadow-xl px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">Full Stack</span>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Simplified */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => {
          const aboutSection = document.getElementById('about')
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowRight className="h-5 w-5 rotate-90" />
        </div>
      </div>
    </section>
  )
}

export default Hero