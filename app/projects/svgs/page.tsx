'use client'

import { useState } from 'react'
import Arrow from '@/components/SVG/Arrow'
import Grid from '@/components/SVG/Grid'
import Phone from '@/components/SVG/Phone'

export default function SVG() {
  const [drawing, setDrawing] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="header">Fun with SVGs</h1>
      <p className='mb-8'>Animating SVGs with CSS</p>
      {!drawing ? (
        <div className='flex flex-col items-center justify-center'>
          <Arrow setDrawing={setDrawing} />
          <Phone />
        </div>
      ) : (
        <div className='mt-8'>
          <Grid setDrawing={setDrawing} />
        </div>
      )}
    </div>
  )
}
