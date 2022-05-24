import React from 'react'
import img3 from '../../assets/img3.webp'
import img2 from '../../assets/img2.webp'
import img4 from '../../assets/img4.webp'
import anonymous from '../../assets/anonymous.jpg'

export default function TopDonors() {
  return (
    <div className='my-10 px-10 '>
        <div className='px-40 py-10 items-center'>
        <h1 className='text-center text-2xl '>Top Donors</h1>
        <p className='text-center text-xl text-zinc-700 pt-10'>
            We appreciate every one who has contributed to this program so far, and wish to use this medium 
            to thank you all. List of all our donors can be found below.
        </p>
        <div className='text-center'><a href='#' className='text-customYellow my-0 mx-2'>See All Donors</a></div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4'>
            <div>
                <img className='w-[200px] h-[200px] imgSpace' src={img3} />
                <h1 className='py-4 px-10 text-lg'>Jordan Salvator</h1> 
                <p className='px-10 text-zinc-600'>Donated <span className='text-green-400'>$3400</span></p>
            </div>
            <div>
                <img src={img2} className='w-[200px] h-[200px] imgSpace' />
                <h1 className='py-4 px-10 text-lg'>Lisa Gilbert</h1> 
                <p className='px-10 text-zinc-600'>Donated <span className='text-green-400'>$1500</span></p>
            </div>
            <div>
                <img src={anonymous} className='w-[200px] h-[200px] imgSpace' />
                <h1 className='py-4 px-10 text-lg'>Anonymous</h1> 
                <p className='px-10 text-zinc-600'>Donated <span className='text-green-400'>$1350</span></p>
            </div>
            <div>
                <img src={img4} className='w-[200px] h-[200px] imgSpace' />
                <h1 className='py-4 px-10 text-lg'>Ted Newberry</h1> 
                <p className='px-10 text-zinc-600'>Donated <span className='text-green-400'>$900</span></p>
            </div>
        </div>

    </div>
  )
}
