import { motion } from 'framer-motion'
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
  ArrowRight,
  Sparkles
} from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import GlassButton from '@/components/ui/GlassButton'
import { professionalData } from '@/data/professionalData'

const Contact = () => {
  const { personal } = professionalData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: personal.contact.email,
      href: `mailto:${personal.contact.email}`,
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: personal.contact.phone,
      href: `tel:${personal.contact.phone}`,
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personal.location,
      href: '#',
      color: 'text-purple-500'
    }
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container-responsive px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
            Let's Build <br className="hidden md:block" /> Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Ready to transform your ideas into high-performance digital reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="block group"
              >
                <GlassCard className="p-6 border-white/10 group-hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl glass-surface flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <method.icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-1">{method.title}</p>
                      <h4 className="text-lg font-black tracking-tight">{method.value}</h4>
                    </div>
                  </div>
                </GlassCard>
              </motion.a>
            ))}

            <GlassCard className="p-8 border-primary/20 bg-primary/5 mt-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Sparkles className="w-20 h-20 text-primary" />
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-4">Availability Status</h3>
              <div className="flex items-center gap-3 text-green-500 font-black uppercase tracking-widest text-xs mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                Currently accepting new projects
              </div>
              <p className="text-muted-foreground font-medium mb-8">
                Available for full-time roles, freelance collaborations, and technical consulting.
              </p>
              <GlassButton
                onClick={() => window.open('https://calendly.com/rishabrath', '_blank')}
                className="w-full"
              >
                Schedule Initial Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </GlassButton>
            </GlassCard>
          </div>

          {/* Right: Modern Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-10 md:p-14 border-white/20">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-14 glass-surface px-6 rounded-2xl font-medium focus:ring-2 focus:ring-primary/40 outline-none transition-all border-white/10"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground">Email Address</label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full h-14 glass-surface px-6 rounded-2xl font-medium focus:ring-2 focus:ring-primary/40 outline-none transition-all border-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground">Your Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full glass-surface p-6 rounded-[2rem] font-medium focus:ring-2 focus:ring-primary/40 outline-none transition-all border-white/10 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <GlassButton type="submit" className="w-full h-16 text-lg tracking-[0.1em]">
                    Dispatch Message <Send className="ml-2 w-5 h-5" />
                  </GlassButton>
                </div>
              </form>

              <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground text-center md:text-left">
                  Social Connectivity Matrix
                </p>
                <div className="flex gap-6">
                  {[
                    { Icon: Linkedin, href: personal.contact.linkedin },
                    { Icon: Github, href: personal.contact.github },
                    { Icon: Twitter, href: personal.contact.twitter },
                    { Icon: Instagram, href: personal.contact.instagram }
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl glass-surface flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:border-primary/40"
                    >
                      <item.Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact




