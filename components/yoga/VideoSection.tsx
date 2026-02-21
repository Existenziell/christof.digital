'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const play = () => {
    videoRef.current?.play()
    setPlaying(true)
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
        />
        {!playing && (
          <button
            type="button"
            onClick={play}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-16 w-16 cursor-pointer"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
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
