import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { RiApps2Line } from 'react-icons/ri'
export default function Accordion({ children, title, icon }) {
  return (
    <div className='box-border w-full relative mb-4 text-gray-200 max-w-xl'>
      <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
      <div className='w-full bg-frontier-bg-400 bg-opacity-50 h-12 px-7 flex items-center gap-1 rounded-tr rounded-tl'>
        <RiApps2Line size={18} />
        <h1 className='text-base font-semibold'>{title}</h1>
        {icon && icon}
      </div>
      {/* Icon */}
      <div className='absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
        <MdKeyboardArrowUp size={24} />
      </div>

      {/* content */}
      <div className='w-full bg-frontier-bg-400 bg-opacity-50 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96 peer-checked:pb-6 px-6 rounded-br rounded-bl'>
        {children}
      </div>
    </div>
  )
}
