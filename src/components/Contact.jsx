import { motion } from 'framer-motion'
import { getViewportSettings } from '@/lib/performance'
import { useState } from 'react'
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Instagram,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('idle') // idle, loading, success, error
  const [errors, setErrors] = useState({})

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Send me an email',
      value: 'irishabrath319@gmail.com',
      href: 'mailto:irishabrath319@gmail.com',
      color: 'from-blue-500 to-blue-600',
      available: 'Usually responds within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      subtitle: 'Call or WhatsApp',
      value: '+91-8917401586',
      href: 'tel:+918917401586',
      color: 'from-green-500 to-green-600',
      available: 'Available 9 AM - 6 PM IST'
    },
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Based in',
      value: 'Chandrasekharpur, Bhubaneswar',
      href: 'https://maps.google.com/?q=Bhubaneswar,Odisha,751024',
      color: 'from-purple-500 to-purple-600',
      available: 'Open to remote work'
    },
    {
      icon: MessageSquare,
      title: 'Let\'s Chat',
      subtitle: 'Schedule a call',
      value: 'Book a meeting',
      href: '#',
      color: 'from-orange-500 to-orange-600',
      available: 'Free 30-min consultation'
    }
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabrath31/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: 'https://github.com/rishabrath31', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Twitter, href: 'https://x.com/RishabRath', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/_rishab_rath_/?hl=en', label: 'Instagram', color: 'hover:text-pink-600' },
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setFormStatus('loading')
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real app, you would send the form data to your backend
      console.log('Form submitted:', formData)
      
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const getStatusIcon = () => {
    switch (formStatus) {
      case 'loading': return <Loader2 className="h-4 w-4 animate-spin" />
      case 'success': return <CheckCircle className="h-4 w-4" />
      case 'error': return <AlertCircle className="h-4 w-4" />
      default: return <Send className="h-4 w-4" />
    }
  }

  const getStatusText = () => {
    switch (formStatus) {
      case 'loading': return 'Sending...'
      case 'success': return 'Message Sent!'
      case 'error': return 'Failed to Send'
      default: return 'Send Message'
    }
  }

  const getStatusColor = () => {
    switch (formStatus) {
      case 'success': return 'bg-green-600 hover:bg-green-700'
      case 'error': return 'bg-red-600 hover:bg-red-700'
      default: return 'bg-primary hover:bg-primary/90'
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-background dark:to-muted/20 relative">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="mobile-text-lg text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Whether you have a question about my work, want to discuss a potential project, 
                  or just want to say hello, I'm always happy to connect with fellow developers, 
                  designers, and entrepreneurs.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={getViewportSettings()}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.open(method.href, '_blank')}>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${method.color}`}>
                            <method.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground text-base sm:text-lg">
                              {method.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-1">
                              {method.subtitle}
                            </p>
                            <p className="text-sm font-medium text-primary">
                              {method.value}
                            </p>
                            <div className="flex items-center mt-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {method.available}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={getViewportSettings()}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4 sm:pt-6"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me On
                </h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-slate-300 dark:border-white/20 text-muted-foreground hover:bg-white/20 hover:scale-110 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={getViewportSettings()}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={getViewportSettings()}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-2 border-slate-200 dark:border-white/10">
                <CardHeader className="pb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Send Me a Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`input-mobile ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                          disabled={formStatus === 'loading'}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input-mobile ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                          disabled={formStatus === 'loading'}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`input-mobile ${errors.subject ? 'border-red-500 focus:border-red-500' : ''}`}
                        disabled={formStatus === 'loading'}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`input-mobile resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                        disabled={formStatus === 'loading'}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className={`w-full font-semibold transition-all duration-300 ${getStatusColor()}`}
                      disabled={formStatus === 'loading'}
                    >
                      {getStatusIcon()}
                      <span className="ml-2">{getStatusText()}</span>
                    </Button>

                    {/* Status Messages */}
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto mb-2" />
                        <p className="text-green-500 font-medium">
                          Thank you for your message! I'll get back to you soon.
                        </p>
                      </motion.div>
                    )}
                    
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center"
                      >
                        <AlertCircle className="h-5 w-5 text-red-500 mx-auto mb-2" />
                        <p className="text-red-500 font-medium">
                          Something went wrong. Please try again or contact me directly.
                        </p>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional CTA */}
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
                  Ready to Build Something Great?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Let's discuss how we can bring your ideas to life!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    <MessageSquare className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Start a Conversation
                  </Button>
                  <Button
                    size="lg"
                    className="group font-semibold bg-primary hover:bg-primary/90"
                    onClick={() => window.open('https://calendly.com/rishabrath', '_blank')}
                  >
                    <Clock className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Schedule a Call
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

export default Contact




