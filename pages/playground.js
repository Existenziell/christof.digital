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

const Playground = () => {
  return (
    <>
      <Head >
        <title>React Playground | christof.digital</title>
        <meta name='description' content="React Playground | christof.digital" />
      </Head>

      <div>
        <h1 className='text-4xl md:text-6xl mb-2'>Playground</h1>
        <p className='text-sm italic mb-8'>Algorithmic fun with React</p>
        <div className="flex flex-col gap-8 w-full">
          <DownloadTime />
          <Fibonacci />
          <TimeToType />
          <CaesarCipher />
          <EuclideanDistance />
          <RotateArray />
          <InvertStringSpecial />
          <RansomNote />
          <PrimeNumbers />
          <IsPrime />
          <PrimeFactors />
          <Factorial />
          <FizzBuzz />
        </div>
      </div>
    </>
  )
}

export default Playground
