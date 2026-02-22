'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const defaultSizes = '(max-width: 768px) 100vw, min(400px, 40vw)'
const transition = { duration: 0.25 }

type FullscreenImageProps = {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  imageClassName?: string
}

export default function FullscreenImage({
  src,
  alt,
  priority = false,
  sizes = defaultSizes,
  imageClassName = 'object-contain',
}: FullscreenImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPortalMounted, setIsPortalMounted] = useState(false)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (isOpen) queueMicrotask(() => setIsPortalMounted(true))
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return () => {}
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  const handleExitComplete = useCallback(() => setIsPortalMounted(false), [])

  return (
    <>
      <div
        className="relative aspect-video rounded overflow-hidden mb-4 md:mb-0 cursor-pointer"
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="View image fullscreen"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={imageClassName}
          priority={priority}
        />
      </div>
      {typeof document !== 'undefined' &&
        isPortalMounted &&
        createPortal(
          <AnimatePresence onExitComplete={handleExitComplete}>
            {isOpen && (
              <motion.div
                key="lightbox"
                role="dialog"
                aria-modal="true"
                aria-label="Fullscreen image"
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
              >
                <motion.div
                  className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
                  onClick={close}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                />
                <motion.div
                  className="relative max-w-[90vw] xl:max-w-6xl max-h-[90vh] w-full h-full cursor-pointer rounded-lg overflow-hidden"
                  onClick={close}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={transition}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}
