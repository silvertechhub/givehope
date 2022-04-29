import React from 'react'
import volunteer from '../../assets/volunteer.jpg'

export default function Volunteer() {
  return (
    <div className='bg-yellow-400 w-full h-[430px] grid md:grid-cols-2'>
        <div>
            <img className=' h-[340px] px-10 pt-8 rounded-2xl' src={volunteer} />
        </div>
        <div className='py-10 px-8'>
            <h2 className='text-3xl text-white'>Become a Volunteer</h2>
            <form>
                <div className='my-8'>
                <input type='text' placeholder="Enter your Name" className='w-80 bg-transparent border-2 border-white py-2 pl-2' />
                </div>
                <div className='my-8'>
                <input type='email' placeholder="Enter your email" className='w-80 bg-transparent border-2 border-white py-2 pl-2' />
                </div>
                <div className='my-8'>
                <input type='text' placeholder="Enter your message" className='w-80 border-2 border-white bg-transparent py-2 pl-2' />
                </div>
                <input type='submit' className='bg-white w-40 rounded-xl' value='Submit' />
            </form>
        </div>
    </div>
  )
}
