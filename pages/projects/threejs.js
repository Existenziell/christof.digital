import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as THREE from 'three'
import CANNON from 'cannon'

const ThreeJS = () => {
  const router = useRouter()
  const [score, setScore] = useState(0)

  useEffect(() => {
    let camera, scene, renderer // ThreeJS globals
    let world // CannonJs world
    let lastTime // Last timestamp of animation
    let stack // Parts that stay solid on top of each other
    let overhangs // Overhanging parts that fall down
    const boxHeight = 1 // Height of each layer
    const originalBoxSize = 3 // Original width and height of a box
    let sound // Global Sound object
    let autopilot
    let gameEnded
    let robotPrecision // Determines how precise the game is on autopilot

    window.focus() // Capture keys right away (by default focus is on editor)

    const anchor = document.getElementById('anchor')
    const instructionsElement = document.getElementById("instructions")
    const resultsElement = document.getElementById("results")

    init()

    // Determines how precise the game is on autopilot
    function setRobotPrecision() {
      robotPrecision = Math.random() * 1 - 0.5
    }

    function init() {
      autopilot = true
      gameEnded = false
      lastTime = 0
      stack = []
      overhangs = []
      setRobotPrecision()

      // Initialize CannonJS
      world = new CANNON.World()
      world.gravity.set(0, -10, 0) // Gravity pulls things down
      world.broadphase = new CANNON.NaiveBroadphase()
      world.solver.iterations = 40

      // Initialize ThreeJs
      const aspect = window.innerWidth / window.innerHeight
      const width = 10
      const height = width / aspect

      camera = new THREE.OrthographicCamera(
        width / -2, // left
        width / 2, // right
        height / 2, // top
        height / -2, // bottom
        0, // near plane
        100 // far plane
      )

      /*
      // If you want to use perspective camera instead, uncomment these lines
      camera = new THREE.PerspectiveCamera(
        45, // field of view
        aspect, // aspect ratio
        1, // near plane
        100 // far plane
      )
      */

      camera.position.set(4, 4, 4)
      camera.lookAt(0, 0, 0)

      scene = new THREE.Scene()

      // Foundation
      addLayer(0, 0, originalBoxSize, originalBoxSize)

      // First layer
      addLayer(-10, 0, originalBoxSize, originalBoxSize, "x")

      // Set up lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(ambientLight)

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
      dirLight.position.set(10, 20, 0)
      scene.add(dirLight)

      // Set up renderer
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(window.innerWidth - 100, window.innerHeight)
      renderer.setAnimationLoop(animation)
      anchor.appendChild(renderer.domElement)
    }

    function startGame() {
      setScore(0)
      playSound('start.mp3')

      autopilot = false
      gameEnded = false
      lastTime = 0
      stack = []
      overhangs = []

      if (instructionsElement) instructionsElement.style.display = "none"
      if (resultsElement) resultsElement.style.display = "none"

      if (world) {
        // Remove every object from world
        while (world.bodies.length > 0) {
          world.remove(world.bodies[0])
        }
      }

      if (scene) {
        // Remove every Mesh from the scene
        while (scene.children.find((c) => c.type === "Mesh")) {
          const mesh = scene.children.find((c) => c.type === "Mesh")
          scene.remove(mesh)
        }

        // Foundation
        addLayer(0, 0, originalBoxSize, originalBoxSize)

        // First layer
        addLayer(-10, 0, originalBoxSize, originalBoxSize, "x")
      }

      if (camera) {
        // Reset camera positions
        camera.position.set(4, 4, 4)
        camera.lookAt(0, 0, 0)
      }
    }

    function addLayer(x, z, width, depth, direction) {
      const y = boxHeight * stack.length // Add the new box one layer higher
      const layer = generateBox(x, y, z, width, depth, false)
      layer.direction = direction
      stack.push(layer)
    }

    function addOverhang(x, z, width, depth) {
      const y = boxHeight * (stack.length - 1) // Add the new box one the same layer
      const overhang = generateBox(x, y, z, width, depth, true)
      overhangs.push(overhang)
    }

    function generateBox(x, y, z, width, depth, falls) {
      // ThreeJS
      const geometry = new THREE.BoxGeometry(width, boxHeight, depth)
      const color = new THREE.Color(`hsl(${60 + stack.length * 4}, 100%, 50%)`)
      const material = new THREE.MeshLambertMaterial({ color })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(x, y, z)
      scene.add(mesh)

      // CannonJS
      const shape = new CANNON.Box(
        new CANNON.Vec3(width / 2, boxHeight / 2, depth / 2)
      )
      let mass = falls ? 5 : 0 // If it shouldn't fall then setting the mass to zero will keep it stationary
      mass *= width / originalBoxSize // Reduce mass proportionately by size
      mass *= depth / originalBoxSize // Reduce mass proportionately by size
      const body = new CANNON.Body({ mass, shape })
      body.position.set(x, y, z)
      world.addBody(body)

      return {
        threejs: mesh,
        cannonjs: body,
        width,
        depth
      }
    }

    function cutBox(topLayer, overlap, size, delta) {
      const direction = topLayer.direction
      const newWidth = direction === "x" ? overlap : topLayer.width
      const newDepth = direction === "z" ? overlap : topLayer.depth

      // Update metadata
      topLayer.width = newWidth
      topLayer.depth = newDepth

      // Update ThreeJS model
      topLayer.threejs.scale[direction] = overlap / size
      topLayer.threejs.position[direction] -= delta / 2

      // Update CannonJS model
      topLayer.cannonjs.position[direction] -= delta / 2

      // Replace shape to a smaller one (in CannonJS you can't simply just scale a shape)
      const shape = new CANNON.Box(
        new CANNON.Vec3(newWidth / 2, boxHeight / 2, newDepth / 2)
      )
      topLayer.cannonjs.shapes = []
      topLayer.cannonjs.addShape(shape)
    }

    anchor.addEventListener("mousedown", eventHandler)
    anchor.addEventListener("touchstart", eventHandler)
    window.addEventListener("keydown", function (event) {
      if (event.key === " ") {
        event.preventDefault()
        eventHandler()
        return
      }
      if (event.key === "R" || event.key === "r") {
        event.preventDefault()
        startGame()
      }
    })

    function playSound(file, volume = 0.5) {
      if (sound) sound.isPlaying = false
      enableAudio()
      // load a sound and set it as the Audio object's buffer
      const audioLoader = new THREE.AudioLoader()
      audioLoader.load(`/audio/${file}`, function (buffer) {
        sound.setBuffer(buffer)
        sound.setVolume(volume)
        sound.play()
      })
    }

    function enableAudio() {
      // Set up sound
      const listener = new THREE.AudioListener()
      camera.add(listener)
      // create a global audio source
      sound = new THREE.Audio(listener)
    }

    function eventHandler() {
      if (autopilot) startGame()
      else splitBlockAndAddNextOneIfOverlaps()
    }

    function splitBlockAndAddNextOneIfOverlaps() {
      if (gameEnded) return

      const topLayer = stack[stack.length - 1]
      const previousLayer = stack[stack.length - 2]

      const direction = topLayer.direction

      const size = direction === "x" ? topLayer.width : topLayer.depth
      const delta =
        topLayer.threejs.position[direction] -
        previousLayer.threejs.position[direction]
      const overhangSize = Math.abs(delta)
      const overlap = size - overhangSize

      if (overlap > 0) {
        cutBox(topLayer, overlap, size, delta)

        // Overhang
        const overhangShift = (overlap / 2 + overhangSize / 2) * Math.sign(delta)
        const overhangX =
          direction === "x"
            ? topLayer.threejs.position.x + overhangShift
            : topLayer.threejs.position.x
        const overhangZ =
          direction === "z"
            ? topLayer.threejs.position.z + overhangShift
            : topLayer.threejs.position.z
        const overhangWidth = direction === "x" ? overhangSize : topLayer.width
        const overhangDepth = direction === "z" ? overhangSize : topLayer.depth

        addOverhang(overhangX, overhangZ, overhangWidth, overhangDepth)

        // Next layer
        const nextX = direction === "x" ? topLayer.threejs.position.x : -10
        const nextZ = direction === "z" ? topLayer.threejs.position.z : -10
        const newWidth = topLayer.width // New layer has the same size as the cut top layer
        const newDepth = topLayer.depth // New layer has the same size as the cut top layer
        const nextDirection = direction === "x" ? "z" : "x"

        if (!autopilot) {
          const score = stack.length - 1
          setScore(score)
          // Play sounds according to current score
          if (score === 5) playSound("firstblood.mp3")
          if (score === 10) playSound("ultrakill.mp3")
          if (score === 15) playSound("dominating.mp3")
          if (score === 20) playSound("killingspree.mp3")
          if (score === 25) playSound("monsterkill.mp3")
          if (score === 30) playSound("unstoppable.mp3")
          if (score === 35) playSound("godlike.mp3")
          if (score % 5 !== 0) playSound('scratch.mp3', 0.1)
        }

        addLayer(nextX, nextZ, newWidth, newDepth, nextDirection)
      } else {
        missedTheSpot()
      }
    }

    function missedTheSpot() {
      playSound('cv2.mp3')
      const topLayer = stack[stack.length - 1]

      // Turn to top layer into an overhang and let it fall down
      addOverhang(
        topLayer.threejs.position.x,
        topLayer.threejs.position.z,
        topLayer.width,
        topLayer.depth
      )
      world.remove(topLayer.cannonjs)
      scene.remove(topLayer.threejs)

      gameEnded = true
      if (resultsElement && !autopilot) resultsElement.style.display = "flex"
    }

    function animation(time) {
      if (lastTime) {
        const timePassed = time - lastTime
        const speed = 0.008

        const topLayer = stack[stack.length - 1]
        const previousLayer = stack[stack.length - 2]

        // The top level box should move if the game has not ended AND
        // it's either NOT in autopilot or it is in autopilot and the box did not yet reach the robot position
        const boxShouldMove =
          !gameEnded &&
          (!autopilot ||
            (autopilot &&
              topLayer.threejs.position[topLayer.direction] <
              previousLayer.threejs.position[topLayer.direction] +
              robotPrecision))

        if (boxShouldMove) {
          // Keep the position visible on UI and the position in the model in sync
          topLayer.threejs.position[topLayer.direction] += speed * timePassed
          topLayer.cannonjs.position[topLayer.direction] += speed * timePassed

          // If the box went beyond the stack then show up the fail screen
          if (topLayer.threejs.position[topLayer.direction] > 10) {
            missedTheSpot()
          }
        } else {
          // If it shouldn't move then is it because the autopilot reached the correct position?
          // Because if so then next level is coming
          if (autopilot) {
            splitBlockAndAddNextOneIfOverlaps()
            setRobotPrecision()
          }
        }

        // 4 is the initial camera height
        if (camera.position.y < boxHeight * (stack.length - 2) + 4) {
          camera.position.y += speed * timePassed
        }

        updatePhysics(timePassed)
        renderer.render(scene, camera)
      }
      lastTime = time
    }

    function updatePhysics(timePassed) {
      world.step(timePassed / 1000) // Step the physics world

      // Copy coordinates from Cannon.js to Three.js
      overhangs.forEach((element) => {
        element.threejs.position.copy(element.cannonjs.position)
        element.threejs.quaternion.copy(element.cannonjs.quaternion)
      })
    }

    window.addEventListener("resize", () => {
      // Adjust camera
      const aspect = window.innerWidth / window.innerHeight
      const width = 10
      const height = width / aspect

      camera.top = height / 2
      camera.bottom = height / -2

      // Reset renderer
      renderer.setSize(window.innerWidth - 100, window.innerHeight)
      renderer.render(scene, camera)
    })
  }, [])
  /* eslint-disable no-undef */
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="h1">ThreeJS</h1>
      <div className='w-full md:w-2/3 mb-8'>
        <p className='mb-4'>
          Stack game with Three.js and Cannon.js.
          ThreeJS renders the material world whereas CannonJS is responsible for
          calculating the physics for each object on every tick.
        </p>
        <p className='mb-4'>Goal is to stack the blocks on top of each other. Click, tap or press Space when a block is above the stack.</p>
        <p>Can you reach the blue colored blocks?</p>
      </div>
      {/* <p className='font-bold mb-12'>Click, tap or press Space to start game</p> */}
      <div id='anchor' className='shadow-2xl rounded relative'>
        <div id="instructions" className='absolute  flex items-center justify-center h-full w-full'>
          <div className="content">
            <button className='button '>Start Game</button>
          </div>
        </div>
        <div id="results" className='hidden absolute items-center justify-center w-full h-full bg-black/75 text-white'>
          <div className="content">
            <p>Game Over</p>
            <p className='mb-4'>You scored {score} {score === 1 ? `point` : `points`}</p>
            <p className='text-2xl text-cta'>
              {score === 0 && `Better luck next time`}
              {(score > 0 && score < 5) && `Not bad, but you can do better!`}
              {(score > 5 && score < 10) && `UltraKill!`}
              {(score >= 10 && score < 15) && `Dominating!`}
              {(score >= 15 && score < 20) && `Killing Spree!`}
              {(score >= 20 && score < 25) && `MonsterKill!`}
              {(score >= 25 && score < 30) && `Unstoppable!`}
              {(score >= 30 && score < 35) && `Godlike!`}
              {(score >= 35) && `You are unbelievable!`}
            </p>
            <p className='hidden sm:block text-sm mt-4'>To restart the game press R</p>
            <button className='button-margin-off sm:hidden mt-4' onClick={() => router.reload()}>Play again</button>
          </div>
        </div>
        <div id="score" className='absolute top-8 right-8 text-6xl text-white'>{score}</div>
      </div>
    </div>
  )
}

export default ThreeJS
