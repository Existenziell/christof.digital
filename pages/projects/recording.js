import { useEffect, useState } from "react"
import { VideoCameraIcon, XCircleIcon } from '@heroicons/react/24/outline'

const Recording = () => {
  const [recording, setRecording] = useState(false)
  const [videoEnabled, setVideoEnabled] = useState(false)
  const [stream, setStream] = useState()

  useEffect(() => {
    window.addEventListener('resize', function () {
      resizeOutput()
    }, true)
  }, [videoEnabled])

  const resizeOutput = () => {
    const width = document.getElementById('input')?.offsetWidth
    const height = document.getElementById('input')?.offsetHeight
    const output = document.getElementById('output')
    if (output) {
      output.style.width = `${width}px`
      output.style.height = `${height}px`
    }
  }

  const openVideo = () => {
    setVideoEnabled(true)
    recordStream()
  }

  const closeVideo = () => {
    const tracks = stream.getTracks()
    tracks.forEach((track) => {
      track.stop()
    })
    setVideoEnabled(false)
  }

  const recordStream = async () => {
    const constraintsVideo = {
      audio: false,
      video: {
        facingMode: "user",
        width: { min: 320, ideal: 1280, max: 1920 },
        height: { min: 240, ideal: 720, max: 1080 },
        // width: 1280, height: 720  -- preference only
        // facingMode: {exact: "user"}
        // facingMode: "environment"
      }
    }
    const constraintsAudio = { audio: true }
    // create audio and video streams separately
    const videoStream = await navigator.mediaDevices.getUserMedia(constraintsVideo)
    const audioStream = await navigator.mediaDevices.getUserMedia(constraintsAudio)
    // combine the streams
    const combinedStream = new MediaStream([...videoStream.getVideoTracks(), ...audioStream.getAudioTracks()])
    setStream(combinedStream)
    // const devices = await navigator.mediaDevices.enumerateDevices()
    // console.log(devices)

    // connect the media stream to the first video element
    const video = document.querySelector("video")
    video.srcObject = combinedStream
    video.muted = true

    video.onloadedmetadata = function (ev) {
      // show in the video element what is being captured by the webcam
      video.play()
    }

    // add listeners for saving video/audio
    const start = document.getElementById("btnStart")
    const stop = document.getElementById("btnStop")
    const vidSave = document.getElementById("output")
    const mediaRecorder = new MediaRecorder(combinedStream)
    let chunks = []

    start.addEventListener("click", (ev) => {
      mediaRecorder.start()
      setRecording(true)
    })
    stop.addEventListener("click", (ev) => {
      mediaRecorder.stop()
      setRecording(false)
    })
    mediaRecorder.ondataavailable = function (ev) {
      chunks.push(ev.data)
    }
    mediaRecorder.onstop = (ev) => {
      const blob = new Blob(chunks, { type: "video/webm" })
      chunks = []
      const videoURL = window.URL.createObjectURL(blob)
      vidSave.src = videoURL
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="h1">Native Video Recording</h1>
      <p>Using MediaCapture, MediaRecorder and Streams API</p>
      {videoEnabled ?
        <>
          <div className="flex gap-4 justify-center items-center w-full mt-8">
            <button id="btnStart" className={`button-sm ${recording && `hidden`}`} disabled={recording}>Start Recording</button>
            <button id="btnStop" className={`button-sm ${!recording && `hidden`}`} disabled={!recording}>Stop Recording</button>
            <button onClick={closeVideo} className='absolute right-2 md:right-8 hover:text-cta' title="Close Video" aria-label="Close Video">
              <XCircleIcon className="w-6" />
            </button>
          </div>
          <VideoCameraIcon className={`w-12 my-4 ${recording ? `animate-pulse text-red-700` : `text-gray dark:text-gray-dark`}`} />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <div className="md:w-1/2">
              <video id='input' className="md:ml-auto border-4 border-gray dark:border-gray-dark shadow-lg"></video>
            </div>
            <div className="md:w-1/2 w-full h-full">
              <video id="output" className="border-4 border-gray dark:border-gray-dark shadow-lg" controls></video>
            </div>
          </div>
          <button disabled className='link mt-8'>Upload (Coming soon)</button>
          <button onClick={closeVideo} className='link mt-2'>Close Video</button>
        </>
        :
        <button onClick={openVideo} className='button-sm mt-8'>Open Video</button>
      }
    </div>
  )
}

export default Recording
