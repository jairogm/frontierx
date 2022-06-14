import Image from 'next/image'
import React from 'react'
import Banner from '../banner/banner'
import {RiPriceTagLine, RiApps2Line, RiBarChart2Line} from 'react-icons/ri'
export default function Hero() {
  return (
    <>

      <div className='w-full mt-10 mb-24 relative'>
        <Banner />
        {/* avatar */}
        <div className='w-full flex justify-center'>
          <div className='w-36 h-36 absolute -bottom-16 m-auto'>
            <Image
              src="/static/avatar.svg"
              alt="avatar"
              layout="fill"
            />
          </div>
        </div>


      </div>
      {/* Title text */}
      <div className='text-center text-gray-200 mb-14'>
        <h1 className='text-4xl font-semibold'>Lorem Ipsum</h1>
        <p className='font-extralight'>Created by: <span className='text-base text-red-700'>Lorem Ipsum</span></p>
        <p className='font-extralight'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
      </div>

      <div className='w-full flex justify-center items-center'>
        <div className='w-auto flex justify-between items-center gap-4'>
          <button className='flex items-center gap-1 bg-frontier-bg-400 text-gray-200 py-3 px-5 box-border font-semibold rounded bg-opacity-50'><RiBarChart2Line/> Lorem Ipsum</button>
          <button className='flex items-center gap-1 bg-frontier-bg-400 text-gray-200 py-3 px-5 box-border font-semibold rounded'><RiApps2Line/>Lorem Ipsum</button>
          <button className='flex items-center gap-1 bg-frontier-bg-400 text-gray-200 py-3 px-5 box-border font-semibold rounded bg-opacity-50'><RiPriceTagLine/>Lorem Ipsum</button>
        </div>
      </div>
    </>
  )
}
