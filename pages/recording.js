import { useEffect, useState } from "react"
import { VideoCameraIcon } from '@heroicons/react/24/outline'

const Recording = () => {
  const [recording, setRecording] = useState(false)
  const [videoEnabled, setVideoEnabled] = useState(false)

  const openVideo = () => {
    setVideoEnabled(true)
    recordStream()
  }

  const closeVideo = () => {
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
      // console.log(mediaRecorder.state)
      mediaRecorder.start()
      setRecording(true)
    })
    stop.addEventListener("click", (ev) => {
      // console.log(mediaRecorder.state)
      mediaRecorder.stop()
      setRecording(false)
    })
    mediaRecorder.ondataavailable = function (ev) {
      chunks.push(ev.data)
    }
    mediaRecorder.onstop = (ev) => {
      const blob = new Blob(chunks, { type: "video/mp4" })
      chunks = []
      const videoURL = window.URL.createObjectURL(blob)
      vidSave.src = videoURL
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl">MediaCapture, MediaRecorder and Streams API</h1>

      {videoEnabled ?
        <>
          <div className="flex gap-4 justify-center items-center w-full mt-8">
            <button id="btnStart" className={`button-sm ${recording && `hidden`}`} disabled={recording}>Start Recording</button>
            <button id="btnStop" className={`button-sm ${!recording && `hidden`}`} disabled={!recording}>Stop Recording</button>
          </div>
          <VideoCameraIcon className={`w-8 my-4 ${recording ? `animate-pulse text-red-700` : `text-gray dark:text-gray-dark`}`} />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <div className="md:w-1/2">
              <video className="h-72 rounded md:ml-auto"></video>
            </div>
            <div className="md:w-1/2">
              <video id="output" className="h-72 rounded" controls></video>
            </div>
          </div>
          <button disabled className='link mt-8'>Upload (Coming soon)</button>
          <button onClick={closeVideo} className='link mt-8'>Close Video</button>
        </>
        :
        <button onClick={openVideo} className='button-sm mt-8'>Open Video</button>
      }
    </div>
  )
}

export default Recording
