import { motion } from 'framer-motion'
import { useMotionPreference } from '../../context/MotionContext'

/**
 * Scroll-into-view reveal. Subtle fade + rise, fired once.
 * Fully disabled when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
}) {
  const { enabled } = useMotionPreference()
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={enabled ? { opacity: 0, y, filter: 'blur(5px)' } : false}
      animate={!enabled ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-35px' }}
      transition={{ duration: enabled ? 0.8 : 0, delay: enabled ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
