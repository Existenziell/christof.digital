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

const Playground = () => {
  return (
    <>
      <Head >
        <title>React Playground | christof.digital</title>
        <meta name='description' content="React Playground | christof.digital" />
      </Head>

      <div>
        <h1 className='text-4xl md:text-6xl mb-1'>React Playground</h1>
        <p className='text-sm italic mb-8'>&bdquo;Algorithmic fun...&rdquo;</p>
        <div className="flex flex-col gap-8 w-full">
          <RotateArray />
          <InvertStringSpecial />
          <DownloadTime />
          <Fibonacci />
          <TimeToType />
          <CaesarCipher />
          <RansomNote />
          <PrimeNumbers />
          <FizzBuzz />
        </div>
      </div>
    </>
  )
}

export default Playground
