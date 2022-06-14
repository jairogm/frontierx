import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {BsSearch} from 'react-icons/bs';

function Navbar() {
  return (

    <div className='container flex justify-between items-center bg-black h-24 px-6 mx-auto'>
      {/* Logo */}
      <Image
        src="/static/frontierx_logo.svg"
        alt="Frontier X"
        width={195}
        height={24}
      />
     
      {/* Menu */}
      <div className='flex gap-10 items-center w-auto' >
         {/* Search Bar */}
      <label className='w-full flex gap-2 items-center bg-gray-800 shadow-lg sm:rounded-md bg-opacity-60 style="backdrop-filter: blur(20px) focus-within:text-gray-400 px-2 py-1 text-gray-400'>
        <BsSearch size={20} className='pointer-events-none'/>
        <input type="text" name="Search" id="searchbar"  className='w-96 focus:outline-none bg-transparent sm:rounded-md bg-opacity-60  style="backdrop-filter: blur(20px) placeholder:text-gray-400' placeholder='Lorem ipsum'/>
      </label>
        <ul className='container flex text-gray-200 gap-6 font-medium'>
          <li><Link href="!#"><a>Lorem</a></Link></li>
          <li><Link href="!#"><a>Lorem</a></Link></li>
          <li><Link href="!#"><a>Lorem</a></Link></li>
        </ul>
      </div>

    </div>

  )
}

export default Navbar