import { useEffect, useState } from 'react'

const Video = () => {
  let video
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    video = document.getElementById("video");
  }, [])

  const play = () => {
    video.play()
    setPlaying(true)
  }

  return (
    <>
      <p className='mt-32 mb-4'>Ah, one more thing:</p>
      <div className='relative w-full'>
        <video src="/video/ashtanga.mp4" controls preload="metadata" poster='/video/ashtanga.jpg' id='video' className='w-full mx-auto md:w-2/3 shadow-2xl' />
        {!playing &&
          <svg onClick={play} xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer z-10 h-16 w-16" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        }
      </div>
    </>
  )
}

export default Video
