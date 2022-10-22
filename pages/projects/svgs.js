import { useState } from 'react'
import Arrow from '../../components/SVG/Arrow'
import Grid from '../../components/SVG/Grid'
import Phone from '../../components/SVG/Phone'

const SVG = () => {
  const [drawing, setDrawing] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl md:text-6xl mb-4">Fun with SVGs</h1>
      <p className='mb-8'>Animating SVGs with CSS</p>
      {!drawing ?
        <div className='flex flex-col items-center justify-center'>
          <Arrow setDrawing={setDrawing} />
          <Phone />
        </div>
        :
        <div className='mt-8'>
          <Grid setDrawing={setDrawing} />
        </div>
      }
    </div>
  )
}

export default SVG
