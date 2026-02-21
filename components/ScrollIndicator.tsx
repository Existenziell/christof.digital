'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  SCROLL_INDICATOR_CIRCLE_D,
  SCROLL_INDICATOR_CHECK_D,
  ScrollIndicatorSvg,
} from '@/components/Icons'

export function ScrollIndicator() {
  const [isComplete, setIsComplete] = useState(false)
  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(() => {
    const unsub = yRange.on('change', (v) => setIsComplete(v >= 1))
    return () => unsub()
  }, [yRange])

  return (
    <ScrollIndicatorSvg className="fixed bottom-1 right-1 md:bottom-2 md:right-2 text-primary z-10">
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="var(--color-cta)"
        strokeDasharray="0 1"
        d={SCROLL_INDICATOR_CIRCLE_D}
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1,
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="2"
        stroke="var(--color-cta)"
        d={SCROLL_INDICATOR_CHECK_D}
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </ScrollIndicatorSvg>
  )
}
