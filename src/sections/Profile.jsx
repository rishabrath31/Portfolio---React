import { motion } from 'framer-motion'
import {
    Code2,
    MapPin,
    Briefcase,
    GraduationCap,
    Sparkles,
    ChevronRight,
    TrendingUp,
    Cpu,
    Globe,
    Award
} from 'lucide-react'
import { professionalData } from '@/data/professionalData'
import LazyImage from '@/components/ui/LazyImage'
import GlassCard from '@/components/ui/GlassCard'

const Profile = () => {
    const { personal, skills, education, certifications } = professionalData

    return (
        <section id="profile" className="py-32 relative overflow-hidden mesh-gradient">
            <div className="container-responsive px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 max-w-2xl"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                        Professional <span className="gradient-text">Identity</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        A fusion of technical precision and creative problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {/* Main Bio Card */}
                    <GlassCard
                        className="md:col-span-2 md:row-span-2 flex flex-col justify-between"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-inner">
                                    <LazyImage src="/images/mypic2.jpeg" alt={personal.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black tracking-tight">{personal.name}</h3>
                                    <p className="text-primary font-bold text-sm uppercase tracking-widest">{personal.firstName} • {personal.lastName}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg font-medium italic mb-6">
                                "{personal.summary.split('.')[0]}."
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm font-bold">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    {personal.location}
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                                        <Briefcase className="w-4 h-4" />
                                    </div>
                                    {personal.experience_years} Years Experience
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden flex items-center justify-center text-[10px] font-bold">
                                        {["TS", "PY", "JS", "FR"][i - 1]}
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Tech Stack Core</p>
                        </div>
                    </GlassCard>

                    {/* Technical Arsenal */}
                    <GlassCard
                        className="md:col-span-2 md:row-span-1"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <Cpu className="w-6 h-6 text-primary" />
                                <h3 className="font-black text-xl tracking-tight">Technical Arsenal</h3>
                            </div>
                            <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {[...skills.frontend, ...skills.backend].map((skill) => (
                                <span key={skill} className="px-4 py-2 glass-surface rounded-xl text-[11px] font-black uppercase tracking-wider hover:bg-primary/20 hover:text-primary transition-all cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Experience Counter */}
                    <GlassCard
                        className="md:col-span-1 flex flex-col items-center justify-center text-center group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <TrendingUp className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                        <div className="text-5xl font-black tracking-tighter mb-1">{personal.experience_years}</div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Years Professional</p>
                    </GlassCard>

                    {/* Location / Status */}
                    <GlassCard
                        className="md:col-span-1 flex flex-col items-center justify-center text-center group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Globe className="w-10 h-10 text-blue-500 mb-4 group-hover:rotate-12 transition-transform" />
                        <div className="text-2xl font-black tracking-tight">{personal.location.split(',')[0]}</div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Working Remote</p>
                    </GlassCard>

                    {/* Education Mini */}
                    <GlassCard
                        className="md:col-span-2 flex items-center justify-between group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                                <GraduationCap className="w-8 h-8 text-purple-500" />
                            </div>
                            <div>
                                <h4 className="font-black text-lg leading-tight">{education[0].degree}</h4>
                                <p className="text-sm text-muted-foreground font-medium">{education[0].institution}</p>
                            </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-2 transition-transform" />
                    </GlassCard>

                    {/* Recent Certification */}
                    <GlassCard
                        className="md:col-span-2 flex items-center justify-between group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                                <Award className="w-8 h-8 text-yellow-500" />
                            </div>
                            <div>
                                <h4 className="font-black text-lg leading-tight truncate max-w-[200px] sm:max-w-none">{certifications[0]}</h4>
                                <p className="text-sm text-muted-foreground font-medium">Professional Verified</p>
                            </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-2 transition-transform" />
                    </GlassCard>
                </div>
            </div>
        </section>
    )
}

export default Profile
