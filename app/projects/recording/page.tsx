'use client'

import { useEffect, useState } from 'react'
import { VideoCameraIcon, XCircleIcon } from '@heroicons/react/24/outline'

export default function Recording() {
  const [recording, setRecording] = useState(false)
  const [videoEnabled, setVideoEnabled] = useState(false)
  const [stream, setStream] = useState<MediaStream | undefined>()

  useEffect(() => {
    if (!videoEnabled) return
    const resizeOutput = () => {
      const inputEl = document.getElementById('input') as HTMLElement | null
      const output = document.getElementById('output') as HTMLVideoElement | null
      if (inputEl && output) {
        output.style.width = `${inputEl.offsetWidth}px`
        output.style.height = `${inputEl.offsetHeight}px`
      }
    }
    window.addEventListener('resize', resizeOutput, true)
    return () => window.removeEventListener('resize', resizeOutput, true)
  }, [videoEnabled])

  const closeVideo = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
    }
    setVideoEnabled(false)
  }

  const recordStream = async () => {
    const constraintsVideo = {
      audio: false,
      video: {
        facingMode: 'user',
        width: { min: 320, ideal: 1280, max: 1920 },
        height: { min: 240, ideal: 720, max: 1080 },
      },
    }
    const videoStream = await navigator.mediaDevices.getUserMedia(constraintsVideo)
    const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const combinedStream = new MediaStream([...videoStream.getVideoTracks(), ...audioStream.getAudioTracks()])
    setStream(combinedStream)

    const video = document.querySelector('video')
    if (video) {
      video.srcObject = combinedStream
      video.muted = true
      video.onloadedmetadata = () => video.play()
    }

    const start = document.getElementById('btnStart')
    const stop = document.getElementById('btnStop')
    const vidSave = document.getElementById('output') as HTMLVideoElement
    const mediaRecorder = new MediaRecorder(combinedStream)
    let chunks: Blob[] = []

    start?.addEventListener('click', () => {
      mediaRecorder.start()
      setRecording(true)
    })
    stop?.addEventListener('click', () => {
      mediaRecorder.stop()
      setRecording(false)
    })
    mediaRecorder.ondataavailable = (ev) => { if (ev.data.size) chunks.push(ev.data) }
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' })
      chunks = []
      if (vidSave) vidSave.src = URL.createObjectURL(blob)
    }
  }

  const openVideo = () => {
    setVideoEnabled(true)
    recordStream()
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="header">Native Video Recording</h1>
      <p>Using MediaCapture, MediaRecorder and Streams API</p>
      {videoEnabled ? (
        <>
          <div className="flex gap-4 justify-center items-center w-full mt-8">
            <button id="btnStart" className={`button-sm ${recording ? 'hidden' : ''}`} disabled={recording}>Start Recording</button>
            <button id="btnStop" className={`button-sm ${!recording ? 'hidden' : ''}`} disabled={!recording}>Stop Recording</button>
            <button onClick={closeVideo} className='absolute right-2 md:right-8 hover:text-cta' title="Close Video" aria-label="Close Video">
              <XCircleIcon className="w-6" />
            </button>
          </div>
          <VideoCameraIcon className={`w-12 my-4 ${recording ? 'animate-pulse text-red-700' : 'text-gray dark:text-gray-dark'}`} />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <div className="md:w-1/2">
              <video id='input' className="md:ml-auto border-4 border-gray dark:border-gray-dark shadow-lg" />
            </div>
            <div className="md:w-1/2 w-full h-full">
              <video id="output" className="border-4 border-gray dark:border-gray-dark shadow-lg" controls />
            </div>
          </div>
          <button disabled className='link mt-8'>Upload (Coming soon)</button>
          <button onClick={closeVideo} className='link mt-2'>Close Video</button>
        </>
      ) : (
        <button onClick={openVideo} className='button-sm mt-8'>Open Video</button>
      )}
    </div>
  )
}
