'use client'

import { useEffect, useState } from 'react'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

export default function ThreeJS() {
  const [score, setScore] = useState(0)

  useEffect(() => {
    let camera: THREE.OrthographicCamera
    let scene: THREE.Scene
    let renderer: THREE.WebGLRenderer
    let world: CANNON.World
    let lastTime = 0
    let stack: Array<{
      threejs: THREE.Mesh
      cannonjs: CANNON.Body
      width: number
      depth: number
      direction?: string
    }> = []
    let overhangs: Array<{ threejs: THREE.Mesh; cannonjs: CANNON.Body }> = []
    const boxHeight = 1
    const originalBoxSize = 3
    let sound: THREE.Audio | null = null
    let autopilot: boolean
    let gameEnded: boolean
    let robotPrecision: number

    const setRobotPrecision = () => {
      robotPrecision = Math.random() * 1 - 0.5
    }

    const anchor = document.getElementById('anchor')
    const instructionsElement = document.getElementById('instructions')
    const resultsElement = document.getElementById('results')

    if (!anchor) return () => {}

    window.focus()

    function init() {
      autopilot = true
      gameEnded = false
      lastTime = 0
      stack = []
      overhangs = []
      setRobotPrecision()

      world = new CANNON.World()
      world.gravity.set(0, -10, 0)
      world.broadphase = new CANNON.NaiveBroadphase()
      ;(world.solver as unknown as { iterations: number }).iterations = 40

      const aspect = window.innerWidth / window.innerHeight
      const width = 10
      const height = width / aspect

      camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 0, 100)
      camera.position.set(4, 4, 4)
      camera.lookAt(0, 0, 0)

      scene = new THREE.Scene()

      function addLayer(x: number, z: number, width: number, depth: number, direction?: string) {
        const y = boxHeight * stack.length
        const layer = generateBox(x, y, z, width, depth, false)
        ;(layer as { direction?: string }).direction = direction
        stack.push(layer)
      }

      function addOverhang(x: number, z: number, width: number, depth: number) {
        const y = boxHeight * (stack.length - 1)
        const overhang = generateBox(x, y, z, width, depth, true)
        overhangs.push(overhang)
      }

      function generateBox(x: number, y: number, z: number, width: number, depth: number, falls: boolean) {
        const geometry = new THREE.BoxGeometry(width, boxHeight, depth)
        const color = new THREE.Color(`hsl(${60 + stack.length * 4}, 100%, 50%)`)
        const material = new THREE.MeshLambertMaterial({ color })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        scene.add(mesh)

        const shape = new CANNON.Box(new CANNON.Vec3(width / 2, boxHeight / 2, depth / 2))
        let mass = falls ? 5 : 0
        mass *= width / originalBoxSize
        mass *= depth / originalBoxSize
        const body = new CANNON.Body({ mass, shape })
        body.position.set(x, y, z)
        world.addBody(body)

        return { threejs: mesh, cannonjs: body, width, depth }
      }

      addLayer(0, 0, originalBoxSize, originalBoxSize)
      addLayer(-10, 0, originalBoxSize, originalBoxSize, 'x')

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(ambientLight)
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
      dirLight.position.set(10, 20, 0)
      scene.add(dirLight)

      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(window.innerWidth - 100, window.innerHeight)
      anchor!.appendChild(renderer.domElement)

      function cutBox(topLayer: (typeof stack)[0], overlap: number, size: number, delta: number) {
        const direction = topLayer.direction as 'x' | 'z'
        const newWidth = direction === 'x' ? overlap : topLayer.width
        const newDepth = direction === 'z' ? overlap : topLayer.depth
        topLayer.width = newWidth
        topLayer.depth = newDepth
        topLayer.threejs.scale[direction] = overlap / size
        ;(topLayer.threejs.position as THREE.Vector3)[direction] -= delta / 2
        ;(topLayer.cannonjs.position as CANNON.Vec3)[direction] -= delta / 2
        const newShape = new CANNON.Box(new CANNON.Vec3(newWidth / 2, boxHeight / 2, newDepth / 2))
        topLayer.cannonjs.shapes = []
        topLayer.cannonjs.addShape(newShape)
      }

      function playSound(file: string, volume = 0.5) {
        if (sound) (sound as { isPlaying: boolean }).isPlaying = false
        const listener = new THREE.AudioListener()
        camera.add(listener)
        sound = new THREE.Audio(listener)
        const audioLoader = new THREE.AudioLoader()
        audioLoader.load(`/audio/${file}`, (buffer) => {
          if (sound) {
            sound.setBuffer(buffer)
            sound.setVolume(volume)
            sound.play()
          }
        })
      }

      function missedTheSpot() {
        if (!autopilot) playSound('cv2.mp3')
        const topLayer = stack[stack.length - 1]
        addOverhang(topLayer.threejs.position.x, topLayer.threejs.position.z, topLayer.width, topLayer.depth)
        world.removeBody(topLayer.cannonjs)
        scene.remove(topLayer.threejs)
        gameEnded = true
        if (resultsElement && !autopilot) resultsElement.style.display = 'flex'
      }

      function splitBlockAndAddNextOneIfOverlaps() {
        if (gameEnded) return
        const topLayer = stack[stack.length - 1]
        const previousLayer = stack[stack.length - 2]
        const direction = topLayer.direction as 'x' | 'z'
        const size = direction === 'x' ? topLayer.width : topLayer.depth
        const delta = (topLayer.threejs.position as THREE.Vector3)[direction] - (previousLayer.threejs.position as THREE.Vector3)[direction]
        const overhangSize = Math.abs(delta)
        const overlap = size - overhangSize

        if (overlap > 0) {
          cutBox(topLayer, overlap, size, delta)
          const overhangShift = (overlap / 2 + overhangSize / 2) * Math.sign(delta)
          const overhangX = direction === 'x' ? topLayer.threejs.position.x + overhangShift : topLayer.threejs.position.x
          const overhangZ = direction === 'z' ? topLayer.threejs.position.z + overhangShift : topLayer.threejs.position.z
          const overhangWidth = direction === 'x' ? overhangSize : topLayer.width
          const overhangDepth = direction === 'z' ? overhangSize : topLayer.depth
          addOverhang(overhangX, overhangZ, overhangWidth, overhangDepth)

          const nextX = direction === 'x' ? topLayer.threejs.position.x : -10
          const nextZ = direction === 'z' ? topLayer.threejs.position.z : -10
          const nextDirection = direction === 'x' ? 'z' : 'x'
          if (!autopilot) {
            const newScore = stack.length - 1
            setScore(newScore)
            if (newScore === 5) playSound('firstblood.mp3')
            if (newScore === 10) playSound('ultrakill.mp3')
            if (newScore === 15) playSound('dominating.mp3')
            if (newScore === 20) playSound('killingspree.mp3')
            if (newScore === 25) playSound('monsterkill.mp3')
            if (newScore === 30) playSound('unstoppable.mp3')
            if (newScore === 35) playSound('godlike.mp3')
            if (newScore % 5 !== 0) playSound('scratch.mp3', 0.1)
          }
          addLayer(nextX, nextZ, topLayer.width, topLayer.depth, nextDirection)
        } else {
          missedTheSpot()
        }
      }

      function eventHandler() {
        if (autopilot) startGame()
        else splitBlockAndAddNextOneIfOverlaps()
      }

      function startGame() {
        setScore(0)
        playSound('start.mp3')
        autopilot = false
        gameEnded = false
        lastTime = 0
        stack = []
        overhangs = []
        setRobotPrecision()
        if (instructionsElement) instructionsElement.style.display = 'none'
        if (resultsElement) resultsElement.style.display = 'none'
        while (world.bodies.length > 0) world.removeBody(world.bodies[0])
        while (scene.children.find((c) => c.type === 'Mesh')) {
          const mesh = scene.children.find((c) => c.type === 'Mesh')
          if (mesh) scene.remove(mesh)
        }
        addLayer(0, 0, originalBoxSize, originalBoxSize)
        addLayer(-10, 0, originalBoxSize, originalBoxSize, 'x')
        camera.position.set(4, 4, 4)
        camera.lookAt(0, 0, 0)
      }

      function animation(time: number) {
        if (lastTime) {
          const timePassed = time - lastTime
          const speed = 0.008
          const topLayer = stack[stack.length - 1]
          const previousLayer = stack[stack.length - 2]
          const boxShouldMove =
            !gameEnded &&
            (!autopilot ||
              (autopilot &&
                (topLayer.threejs.position as THREE.Vector3)[topLayer.direction as 'x' | 'z'] <
                  (previousLayer.threejs.position as THREE.Vector3)[topLayer.direction as 'x' | 'z'] + robotPrecision))

          if (boxShouldMove) {
            const dir = topLayer.direction as 'x' | 'z'
            ;(topLayer.threejs.position as THREE.Vector3)[dir] += speed * timePassed
            ;(topLayer.cannonjs.position as CANNON.Vec3)[dir] += speed * timePassed
            if ((topLayer.threejs.position as THREE.Vector3)[dir] > 10) missedTheSpot()
          } else {
            if (autopilot) {
              splitBlockAndAddNextOneIfOverlaps()
              setRobotPrecision()
            }
          }
          if (camera.position.y < boxHeight * (stack.length - 2) + 4) {
            camera.position.y += speed * timePassed
          }
          world.step(timePassed / 1000)
          overhangs.forEach((el) => {
            el.threejs.position.copy(el.cannonjs.position as unknown as THREE.Vector3)
            el.threejs.quaternion.copy(el.cannonjs.quaternion as unknown as THREE.Quaternion)
          })
          renderer.render(scene, camera)
        }
        lastTime = time
      }

      renderer.setAnimationLoop(animation)

      anchor!.addEventListener('mousedown', eventHandler)
      anchor!.addEventListener('touchstart', eventHandler)
      const keyHandler = (event: KeyboardEvent) => {
        if (event.key === ' ') {
          event.preventDefault()
          eventHandler()
        }
        if (event.key === 'R' || event.key === 'r') {
          event.preventDefault()
          startGame()
        }
      }
      window.addEventListener('keydown', keyHandler)

      const resizeHandler = () => {
        const aspect = window.innerWidth / window.innerHeight
        const w = 10
        const h = w / aspect
        camera.top = h / 2
        camera.bottom = h / -2
        renderer.setSize(window.innerWidth - 100, window.innerHeight)
        renderer.render(scene, camera)
      }
      window.addEventListener('resize', resizeHandler)

      return () => {
        anchor!.removeEventListener('mousedown', eventHandler)
        anchor!.removeEventListener('touchstart', eventHandler)
        window.removeEventListener('keydown', keyHandler)
        window.removeEventListener('resize', resizeHandler)
        renderer.setAnimationLoop(null)
        if (anchor!.contains(renderer.domElement)) anchor!.removeChild(renderer.domElement)
      }
    }

    const cleanup = init()
    return () => { cleanup?.() }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="header">ThreeJS</h1>
      <div className='w-full md:w-2/3 mb-8'>
        <p className='mb-4'>
          Stack game with Three.js and Cannon.js.
          ThreeJS renders the material world whereas CannonJS is responsible for calculating the physics for each object on every tick.
        </p>
        <p className='mb-4'>Goal is to stack the blocks on top of each other. Click, tap or press Space when a block is above the stack.</p>
        <p>Can you reach the blue colored blocks?</p>
      </div>
      <div id='anchor' className='shadow-2xl rounded relative'>
        <div id="instructions" className='absolute flex items-center justify-center h-full w-full'>
          <div className="content">
            <button className='button' type="button">Start Game</button>
          </div>
        </div>
        <div id="results" className='hidden absolute items-center justify-center w-full h-full bg-black/75 text-white'>
          <div className="content">
            <p>Game Over</p>
            <p className='mb-4'>You scored {score} {score === 1 ? 'point' : 'points'}</p>
            <p className='text-2xl text-cta'>
              {score === 0 && 'Better luck next time'}
              {score > 0 && score < 5 && 'Not bad, but you can do better!'}
              {score >= 5 && score < 10 && 'UltraKill!'}
              {score >= 10 && score < 15 && 'Dominating!'}
              {score >= 15 && score < 20 && 'Killing Spree!'}
              {score >= 20 && score < 25 && 'MonsterKill!'}
              {score >= 25 && score < 30 && 'Unstoppable!'}
              {score >= 30 && score < 35 && 'Godlike!'}
              {score >= 35 && 'You are unbelievable!'}
            </p>
            <p className='hidden sm:block text-sm mt-4'>To restart the game press R</p>
            <button className='button-margin-off sm:hidden mt-4' type="button" onClick={() => window.location.reload()}>Play again</button>
          </div>
        </div>
        <div className='absolute top-8 right-8 text-6xl text-white'>{score}</div>
      </div>
    </div>
  )
}
