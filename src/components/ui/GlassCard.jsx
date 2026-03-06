import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const GlassCard = ({ children, className, hover = true, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5, scale: 1.02, transition: { duration: 0.2 } } : {}}
            className={cn(
                "glass-card rounded-3xl p-6 relative overflow-hidden group border border-white/20 dark:border-white/10",
                "bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-2xl",
                className
            )}
            {...props}
        >
            {/* Decorative Glow Effect */}
            <div className="absolute -inset-x-20 -inset-y-20 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    )
}

export default GlassCard
