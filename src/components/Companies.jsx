import { motion } from 'framer-motion'
import { getViewportSettings } from '@/lib/performance'
import { ExternalLink, Star, TrendingUp, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Companies = () => {
  const companies = [
    {
      name: 'Google',
      role: 'Open Source Contributor',
      period: '2023 - Present',
      logo: '🔍',
      description: 'Contributing to TensorFlow documentation and community projects',
      achievements: [
        'Contributed to 5+ open source projects',
        'Helped 500+ developers through documentation',
        'Fixed critical bugs in TensorFlow.js'
      ],
      technologies: ['TensorFlow', 'JavaScript', 'Python', 'Documentation'],
      link: 'https://github.com/tensorflow',
      impact: '500+ developers helped',
      featured: true
    },
    {
      name: 'Microsoft',
      role: 'Beta Tester & Community Member',
      period: '2022 - 2023',
      logo: '💻',
      description: 'Beta testing Azure services and VS Code extensions',
      achievements: [
        'Reported 15+ critical bugs in Azure DevOps',
        'Tested new VS Code features pre-release',
        'Provided feedback on developer tools'
      ],
      technologies: ['Azure', 'VS Code', 'TypeScript', 'DevOps'],
      link: 'https://azure.microsoft.com',
      impact: '15+ bugs reported',
      featured: false
    },
    {
      name: 'Vercel',
      role: 'Community Expert',
      period: '2021 - Present',
      logo: '▲',
      description: 'Active community member helping developers with Next.js',
      achievements: [
        'Answered 1000+ community questions',
        'Created popular Next.js tutorials',
        'Mentored developers in modern web development'
      ],
      technologies: ['Next.js', 'React', 'Vercel', 'Edge Functions'],
      link: 'https://vercel.com/community',
      impact: '1000+ forum responses',
      featured: true
    },
    {
      name: 'Netlify',
      role: 'JAMstack Advocate',
      period: '2021 - 2022',
      logo: '🌐',
      description: 'Promoting JAMstack architecture and modern web practices',
      achievements: [
        'Published articles on JAMstack best practices',
        'Spoke at developer meetups',
        'Built demo projects showcasing Netlify features'
      ],
      technologies: ['JAMstack', 'Netlify Functions', 'React', 'Gatsby'],
      link: 'https://netlify.com',
      impact: '10+ articles published',
      featured: false
    },
    {
      name: 'AWS',
      role: 'Certified Solutions Architect',
      period: '2022',
      logo: '☁️',
      description: 'AWS certified professional building cloud solutions',
      achievements: [
        'Achieved AWS Solutions Architect certification',
        'Built 20+ cloud-native applications',
        'Optimized infrastructure costs by 40%'
      ],
      technologies: ['AWS Lambda', 'S3', 'CloudFront', 'RDS', 'EC2'],
      link: 'https://aws.amazon.com/certification/',
      impact: '20+ cloud projects',
      featured: true
    },
    {
      name: 'Firebase',
      role: 'Community Builder',
      period: '2020 - 2022',
      logo: '🔥',
      description: 'Building real-time applications and helping developers',
      achievements: [
        'Built real-time chat applications',
        'Created Firebase tutorials and guides',
        'Helped developers with Firebase integration'
      ],
      technologies: ['Firebase', 'Firestore', 'Cloud Functions', 'Authentication'],
      link: 'https://firebase.google.com',
      impact: '25+ tutorials created',
      featured: false
    }
  ]

  const stats = [
    { value: '6+', label: 'Companies Collaborated', icon: '🏢' },
    { value: '1500+', label: 'Developers Helped', icon: '👥' },
    { value: '50+', label: 'Open Source Contributions', icon: '🔧' },
    { value: '4.9/5', label: 'Community Rating', icon: '⭐' }
  ]

  const featuredCompanies = companies.filter(company => company.featured)
  const otherCompanies = companies.filter(company => !company.featured)

  return (
    <section id="companies" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-slate-50/50 via-white to-indigo-50/30 dark:from-muted/20 dark:to-background relative">
      <div className="container-responsive">
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
            className="text-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Companies</span> & Collaborations
            </h2>
            <p className="mobile-text-lg text-muted-foreground max-w-3xl mx-auto">
              Proud to have contributed to and collaborated with leading technology companies 
              and open-source communities worldwide
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={getViewportSettings()}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Companies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
              Featured Collaborations
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={getViewportSettings()}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{company.logo}</div>
                          <div>
                            <h4 className="text-lg font-bold text-foreground">
                              {company.name}
                            </h4>
                            <p className="text-sm text-primary font-semibold">
                              {company.role}
                            </p>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {company.period}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {company.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4 flex-grow">
                        <h5 className="font-semibold text-foreground mb-2 flex items-center text-sm">
                          <Award className="h-3 w-3 mr-1 text-primary" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {company.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-xs text-muted-foreground">
                              <Star className="h-2 w-2 mt-1 text-primary flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {company.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {company.technologies.length > 3 && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                              +{company.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                        <div className="flex items-center text-xs text-primary font-medium">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {company.impact}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs p-2 h-auto hover:bg-white/20"
                          onClick={() => window.open(company.link, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Companies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="px-2 sm:px-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
              Additional Collaborations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {otherCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={getViewportSettings()}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-xl">{company.logo}</div>
                          <div>
                            <h4 className="text-base font-bold text-foreground">
                              {company.name}
                            </h4>
                            <p className="text-xs text-primary font-semibold">
                              {company.role}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs p-1 h-auto hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => window.open(company.link, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {company.description}
                      </p>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-primary font-medium">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {company.impact}
                        </div>
                        <span className="text-muted-foreground">
                          {company.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-3">
                        {company.technologies.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {company.technologies.length > 2 && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                            +{company.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                  Interested in Collaboration?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always open to new opportunities, partnerships, and collaborations with 
                  innovative companies and projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    <TrendingUp className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Let's Collaborate
                  </Button>
                  <Button
                    size="lg"
                    className="group font-semibold"
                    onClick={() => window.open('https://github.com/rishabrath31', '_blank')}
                  >
                    <ExternalLink className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    View Contributions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Companies




