import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='w-full h-52 relative'>
      <Image
        src="/static/slider.svg"
        alt="slider"
        layout="fill"
      />

    

    </div>
  )
}
