import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export const ScrollIndicator = () => {
  const [isComplete, setIsComplete] = useState(false)
  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange])

  return (
    <svg className='fixed w-10 md:w-12 bottom-1 right-1 md:bottom-2 md:right-2 text-brand-dark dark:text-brand z-10' viewBox='0 0 60 60'>
      <motion.path
        fill='none'
        strokeWidth='5'
        stroke='var(--color-cta)'
        strokeDasharray='0 1'
        d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1, // Reverse direction of line animation
        }}
      />
      <motion.path
        fill='none'
        strokeWidth='2'
        stroke='var(--color-cta)'
        d='M14,26 L 22,33 L 35,16'
        initial={false}
        strokeDasharray='0 1'
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </svg>
  )
}
