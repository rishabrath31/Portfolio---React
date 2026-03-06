import { motion } from 'framer-motion'
import { Award, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react'
import { professionalData } from '@/data/professionalData'
import { Card, CardContent } from '@/components/ui/card'
import { getViewportSettings } from '@/lib/performance'

const Certifications = () => {
    const { certifications } = professionalData

    return (
        <section id="certifications" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container-responsive relative z-10 px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={getViewportSettings()}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Licenses & <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Professional credentials and continuous learning achievements
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={getViewportSettings()}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="h-full bg-slate-50/50 dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 hover:border-primary/50 transition-all duration-300">
                                <CardContent className="p-6 flex items-start space-x-4">
                                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-foreground leading-tight mb-2">
                                            {cert}
                                        </h3>
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <Sparkles className="h-3 w-3 mr-1 text-yellow-500" />
                                            <span>Verified Certification</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
