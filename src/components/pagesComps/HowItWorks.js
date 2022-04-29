import React from 'react'
import Navbar from '../utlityComps/Navbar'
import page2 from '../../assets/page2.jpg'

export default function HowItWorks() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen flex items-center justify-center 
        bg-gradient-to-tr from-zinc-500 to-zinc-500 relative'>
          <img src={page2} className='w-full h-screen object-cover absolute mix-blend-overlay'/>
          <h1 className='text-6xl text-center font-bold'>
               <span className='text-customBlue'> Extend a Helping Hand</span>
               <span className='text-customYellow'>to the Children in Ukraine</span>
            </h1>
        </div>
    </div>
  )
}
