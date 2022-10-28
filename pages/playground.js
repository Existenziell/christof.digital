import Head from "next/head"
import InvertStringSpecial from '../components/playground/InvertStringSpecial'
import RotateArray from '../components/playground/RotateArray'
import DownloadTime from '../components/playground/DownloadTime'
import TimeToType from '../components/playground/TimeToType'
import Fibonacci from '../components/playground/Fibonacci'
import FizzBuzz from '../components/playground/FizzBuzz'
import CaesarCipher from '../components/playground/CaesarCipher'
import RansomNote from '../components/playground/RansomNote'
import PrimeNumbers from '../components/playground/PrimeNumbers'
import Factorial from "../components/playground/Factorial"
import IsPrime from "../components/playground/IsPrime"
import PrimeFactors from "../components/playground/PrimeFactors"
import EuclideanDistance from "../components/playground/EuclideanDistance"
import Banana from "../components/playground/Banana"
import AppLauncher from "../components/AppLauncher"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"

const Playground = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray('.panel').forEach((p) => {
      gsap.fromTo(
        p,
        { y: 200, opacity: 0, },
        {
          scrollTrigger: {
            trigger: p,
            toggleActions: "play none none reverse",
            start: '50px 80%',
          },
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'power4.out',
        }
      )
    })
  }, [])

  return (
    <>
      <Head >
        <title>JavaScript Playground | christof.digital</title>
        <meta name='description' content="JavaScript Playground | christof.digital" />
      </Head>

      <div>
        <h1 className='h1'>Playground</h1>
        <p className='mb-8'>Algorithmic fun with JavaScript</p>
        <div className="flex flex-col gap-8 w-full">
          <RansomNote />
          <PrimeNumbers />
          <Fibonacci />
          <TimeToType />
          <CaesarCipher />
          <EuclideanDistance />
          <DownloadTime />
          <RotateArray />
          <InvertStringSpecial />
          <IsPrime />
          <PrimeFactors />
          <Factorial />
          <FizzBuzz />
          <Banana />
        </div>
      </div>
      <AppLauncher />
    </>
  )
}

export default Playground
