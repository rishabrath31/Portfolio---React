import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const GlassButton = ({ children, className, variant = 'primary', ...props }) => {
    const variants = {
        primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
        outline: "glass-card border-white/20 dark:border-white/10 hover:bg-white/10 text-foreground",
        ghost: "hover:bg-primary/10 text-primary"
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-8 h-14 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    )
}

export default GlassButton
