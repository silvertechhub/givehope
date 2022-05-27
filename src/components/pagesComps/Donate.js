import React from 'react'
import Navbar from '../utlityComps/Navbar';
import donate from '../../assets/donate.png'
import GoFundMe from '../../assets/GoFundMe.png'
import { CreditCardIcon } from '@heroicons/react/solid'
import TopDonors from '../utlityComps/TopDonors';
import Footer from '../utlityComps/Footer';

export default function Donate() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen flex items-center justify-center 
        bg-gradient-to-tr from-zinc-500 to-zinc-500 relative'>
            <img src={donate} className='w-full h-screen object-cover absolute mix-blend-overlay' />
            <h1 className='text-6xl text-center font-bold'>
               <span className='text-blue-900'> Give Hope to the Dis</span>
               <span className='text-customYellow'>placed Children <br/> in Ukraine</span>
            </h1>
        </div>
        <section>
          <div className='px-10 my-10 '>
            <h1 className='text-customYellow text-4xl '>Kindly Choose a Method of Donation</h1>
            <div className='grid md:grid-cols-2'>
              <div className='my-10 grid md:grid-cols-2'>
                <div className='w-auto h-72 bg-blue-200  p-6 mx-4'>
                  <div className='h-[70px] w-[70px] rounded-full bg-white'>
                    <img src={GoFundMe} className=' w-16'/>
                  </div>
                  <p className='text-3xl pt-20 underline underline-offset-1'>Go Fund Me</p>
                </div>
                <div className='w-auto h-72 bg-blue-200 my-10 p-6'>
                <div className='h-[70px] w-[70px] rounded-full bg-white'>
                <CreditCardIcon />
                  </div>
                  <p className='text-3xl pt-20 underline underline-offset-1'>Bank </p>
                </div>
               
              </div>
              <div className='bg-customBlue px-6 my-10 mx-6'>
                <h3 className='text-3xl py-5 text-white'>Purpose and Use of Funds</h3>
                <div className='my-10'>
                  <span className='text-5xl text-customYellow'>40,000</span><br/>
                  <span className='text-2xl '>Refugees to be fed </span>
                </div>
                <div className='my-10'>
                  <span className='text-5xl text-customYellow'>27,000</span><br/>
                  <span className='text-2xl '>Children out of school </span>
                </div>
                <div className='my-10'>
                  <span className='text-5xl text-customYellow'>40 </span><br/>
                  <span className='text-2xl '>Cites to be rebuilt </span>
                </div>
              </div>

            </div>
          </div>
        </section>
      <TopDonors />
      <Footer />
    </div>
  )
}
