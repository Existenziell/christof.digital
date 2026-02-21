'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { PlayCircleIcon } from '@/components/Icons'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const play = () => {
    videoRef.current?.play()
  }

  return (
    <>
      <p className="mt-12 mb-4">Ah, one more thing:</p>
      <div className="relative w-full">
        <video
          ref={videoRef}
          src="/video/ashtanga.mp4"
          controls
          preload="metadata"
          poster="/video/ashtanga.jpg"
          className="w-full mx-auto md:w-2/3 shadow-2xl"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            type="button"
            onClick={play}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-16 w-16 cursor-pointer"
            aria-label="Play video"
          >
            <PlayCircleIcon className="h-16 w-16 text-white" />
          </button>
        )}
      </div>
      <p className="mt-4">
        Inspired by{' '}
        <Link
          href="https://tylandrum.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="link"
        >
          Ty Landrum
        </Link>
        .
      </p>
    </>
  )
}
