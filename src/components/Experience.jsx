import { motion } from 'framer-motion'
import { getViewportSettings } from '@/lib/performance'
import { useState } from 'react'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Award,
  TrendingUp,
  Users,
  Code2,
  ChevronDown,
  Star,
  Building,
  Clock
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience')
  const [expandedExperience, setExpandedExperience] = useState(null)

  const experiences = [
    {
      id: 1,
      company: 'Clapgrow Technologies',
      position: 'Developer cum Consultant',
      location: 'Remote',
      duration: 'Aug 2025 – Present',
      type: 'Full-time',
      logo: '🚀',
      description: 'Building comprehensive Frappe ERP software and custom applications for clients',
      achievements: [
        'Built comprehensive Frappe ERP software for RK Honda, developing customized doctypes, fields, and scripts',
        'Streamlined business operations from purchase orders to invoices and damage assessment',
        'Developed custom application to track Frames received from Honda with end-to-end workflow management',
        'Conducted client calls and meetings to gather requirements and translate them into technical specifications',
        'Created and customized print formats, client scripts, and automated workflows'
      ],
      technologies: ['Frappe Framework', 'Frappe ERP', 'Python', 'JavaScript', 'Custom Development'],
      highlights: [
        'Built comprehensive ERP solution for RK Honda',
        'End-to-end workflow management implementation',
        'Client requirement analysis and technical translation'
      ]
    },
    {
      id: 2,
      company: 'Maison Technology Pvt Ltd',
      position: 'Web Development Apprenticeship',
      location: 'Bhubaneswar, Odisha',
      duration: 'Oct 2024 – Aug 2025',
      type: 'Full-time',
      logo: '💻',
      description: 'Built responsive and dynamic web pages for live client projects',
      achievements: [
        'Built responsive and dynamic web pages using HTML, CSS, JavaScript, and Bootstrap',
        'Ensured cross-browser compatibility and optimized front-end performance',
        'Led implementation of user-friendly designs and collaborated with development team',
        'Worked on live client projects including New Beginnings, JP Construction, and Green Growth'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Frontend Development'],
      highlights: [
        'Worked on multiple live client projects',
        'Cross-browser compatibility expertise',
        'User-friendly design implementation'
      ]
    },
    {
      id: 3,
      company: 'Tech Mahindra',
      position: 'Technical Desk Support',
      location: 'Bhubaneswar, Odisha',
      duration: 'Jul 2023 – Apr 2024',
      type: 'Full-time',
      logo: '💼',
      description: 'Handled customer queries and resolved issues efficiently',
      achievements: [
        'Handled customer queries and resolved issues related to orders, payments, and returns efficiently',
        'Made soft calls to customers to understand complex issues and guide them to correct departments',
        'Maintained accurate records of interactions and collaborated with cross-functional teams',
        'Addressed escalations and improved service processes'
      ],
      technologies: ['Customer Support', 'Problem Solving', 'Communication', 'Process Optimization'],
      highlights: [
        'Efficient issue resolution',
        'Cross-functional team collaboration',
        'Process improvement initiatives'
      ]
    },
  ]

  const companies = [
    {
      name: 'Clapgrow Technologies',
      role: 'Developer & Consultant',
      duration: '2025-Present',
      logo: '🚀',
      description: 'Frappe ERP development and custom applications',
      impact: 'ERP solutions built',
      link: '#'
    },
    {
      name: 'Maison Technology',
      role: 'Web Development Apprentice',
      duration: '2024-2025',
      logo: '💻',
      description: 'Frontend development for live client projects',
      impact: 'Multiple live projects',
      link: '#'
    },
    {
      name: 'Tech Mahindra',
      role: 'Technical Support',
      duration: '2023-2024',
      logo: '💼',
      description: 'Customer support and issue resolution',
      impact: 'Efficient problem solving',
      link: 'https://www.techmahindra.com'
    }
  ]

  const skills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 90 },
    { name: 'Data Analysis', level: 88 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Technical Support', level: 92 },
    { name: 'Process Optimization', level: 87 }
  ]

  const toggleExpanded = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id)
  }

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-blue-50/30 via-white to-slate-50/50 dark:from-muted/20 dark:to-background relative">
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
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="mobile-text-lg text-muted-foreground max-w-3xl mx-auto">
              My journey through the tech industry, building impactful solutions and growing as a developer
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings()}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex justify-center mb-8 sm:mb-12 px-2 sm:px-0"
          >
            <div className="flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Briefcase className="h-4 w-4 mr-2 inline" />
                Work Experience
              </button>
              <button
                onClick={() => setActiveTab('companies')}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-300 ${
                  activeTab === 'companies'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Building className="h-4 w-4 mr-2 inline" />
                Companies & Collaborations
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            whileInView="visible"
            viewport={getViewportSettings()}
          >
            {activeTab === 'experience' && (
              <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
                {/* Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
                  
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      variants={itemVariants}
                      className="relative ml-8 sm:ml-16 mb-8 sm:mb-12"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-6 sm:-left-10 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                      
                      <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                        <CardHeader className="pb-3 sm:pb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              <div className="text-2xl sm:text-3xl">{exp.logo}</div>
                              <div>
                                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                                  {exp.position}
                                </h3>
                                <p className="text-base sm:text-lg font-semibold text-primary">
                                  {exp.company}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col sm:text-right space-y-1">
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span>{exp.location}</span>
                              </div>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full w-fit">
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          {/* Key Achievements */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center">
                              <Award className="h-4 w-4 mr-2 text-primary" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {(expandedExperience === exp.id ? exp.achievements : exp.achievements.slice(0, 2)).map((achievement, i) => (
                                <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                  <Star className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                            {exp.achievements.length > 2 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleExpanded(exp.id)}
                                className="mt-2 p-0 h-auto font-medium text-primary hover:text-primary/80"
                              >
                                {expandedExperience === exp.id ? 'Show Less' : `Show ${exp.achievements.length - 2} More`}
                                <ChevronDown className={`h-3 w-3 ml-1 transition-transform ${expandedExperience === exp.id ? 'rotate-180' : ''}`} />
                              </Button>
                            )}
                          </div>
                          
                          {/* Technologies */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center">
                              <Code2 className="h-4 w-4 mr-2 text-primary" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Highlights */}
                          {expandedExperience === exp.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10"
                            >
                              <h4 className="font-semibold text-foreground mb-2 flex items-center">
                                <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                                Career Highlights
                              </h4>
                              <ul className="space-y-1">
                                {exp.highlights.map((highlight, i) => (
                                  <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                    <Award className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Professional Skills */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8 sm:mt-12 md:mt-16"
                >
                  <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
                    <CardContent className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center">
                        <Users className="h-5 w-5 mr-3 text-primary" />
                        Professional Skills
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {skills.map((skill, index) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-foreground">{skill.name}</span>
                              <span className="text-sm text-primary font-bold">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={getViewportSettings()}
                                transition={{ duration: 1.5, delay: index * 0.1 }}
                                className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )}

            {activeTab === 'companies' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
                {companies.map((company, index) => (
                  <motion.div key={company.name} variants={itemVariants}>
                    <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center h-full">
                      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                        <div className="text-3xl sm:text-4xl mb-3">{company.logo}</div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{company.name}</h3>
                        <p className="text-sm font-semibold text-primary mb-2">{company.role}</p>
                        <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground mb-3">
                          <Clock className="h-3 w-3" />
                          <span>{company.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-grow">
                          {company.description}
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-center space-x-2 text-xs text-primary font-medium">
                            <TrendingUp className="h-3 w-3" />
                            <span>{company.impact}</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs"
                            onClick={() => window.open(company.link, '_blank')}
                          >
                            <ExternalLink className="h-3 w-3 mr-2" />
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience




