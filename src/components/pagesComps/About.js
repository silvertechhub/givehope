import React from 'react'
import Navbar from '../utlityComps/Navbar'
import displacedChildren from '../../assets/displacedChildren.jpg'
import img3 from '../../assets/img3.webp'
import img2 from '../../assets/img2.webp'
import { LightBulbIcon, CashIcon, UserGroupIcon } from '@heroicons/react/solid'
import {Link} from 'react-router-dom'
import img4 from '../../assets/img4.webp'
import anonymous from '../../assets/anonymous.jpg'
import Footer from '../utlityComps/Footer'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen flex items-center justify-center 
        bg-gradient-to-tr from-zinc-500 to-zinc-500 relative'>
            <img src={displacedChildren} className='w-full h-screen object-cover absolute mix-blend-overlay' />
            <h1 className='text-6xl text-center font-bold'>
               <span className='text-blue-900'> Give Hope to the Dis</span>
               <span className='text-customYellow'>placed Children <br/> in Ukraine</span>
            </h1>
        </div>

        <section>
          <div className='px-10 my-10'>
            <h1 className='text-5xl '>Our History</h1>
            <div className='grid md:grid-cols-2'>
              <div className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam 
              vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.<br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam 
              vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.
              </div>
              <div className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam 
              vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.<br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam 
              vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.
              </div>
            </div>

          </div>
        </section>
        <section>
        <div className='px-20 md:px-10 my-10'>
          <h2 className='text-5xl'>Leadership</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 py-10'>
            <div>
                <img className='w-[200px] h-[200px] imgSpace' src={img3} />
                <h1 className='py-4 px-10 text-lg'>Jordan Salvator</h1> 
                <p className='px-10 text-zinc-600'>CEO & Founder</p>
            </div>
            <div>
                <img src={img2} className='w-[200px] h-[200px] imgSpace' />
                <h1 className='py-4 px-10 text-lg'>Lisa Gilbert</h1> 
                <p className='px-10 text-zinc-600'>CFO & Co-founder </p>
            </div>
            <div>
                <img src={anonymous} className='w-[200px] h-[200px] imgSpace' />
                <h1 className='py-4 px-10 text-lg'>Anonymous</h1> 
                <p className='px-10 text-zinc-600'>PRO </p>
            </div>
            <div>
                <img src={img4} className='w-[200px] h-[200px] imgSpace' />
                <h1 className='py-4 px-10 text-lg'>Ted Newberry</h1> 
                <p className='px-10 text-zinc-600'>Legal-Team Head </p>
            </div>
        </div>
        </div>
        </section>
        <section className='mt-10'>
            <div className='border-b-2 border-zinc-200 w-full'></div>
            <div className='grid md:grid-cols-3 p-20'>
                <div className='px-10'>
                <LightBulbIcon className='w-10 text-customYellow' />
                    <p className='text-lg'>Our Mission</p>
                    <p className='text-base text-zinc-500'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <a href='#' className='text-customYellow '>Learn more</a>
                </div>
                <div className='px-10'>
                    <CashIcon className='w-10 text-customYellow' />
                    <p className='text-lg'>Make Donations</p>
                    <p className='text-base text-zinc-500'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <Link to="donate" className='text-customYellow '>Learn more</Link>
                </div>
                <div className='px-10'>
                    <UserGroupIcon className='w-10 text-customYellow' />
                    <p className='text-lg'>We need Volunteers</p>
                    <p className='text-base text-zinc-500'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <a href='#' className='text-customYellow '>Learn more</a>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}
