import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../utlityComps/Navbar'
import displacedChildren from '../../assets/displacedChildren.jpg'
import { LightBulbIcon, CashIcon, UserGroupIcon } from '@heroicons/react/solid'
import TopDonors from '../utlityComps/TopDonors'
import SuccessStory from '../utlityComps/SuccessStory'
import news1 from '../../assets/news1.jpg'
import news2 from '../../assets/news2.webp'
import news3 from '../../assets/news3.jpg'
import Volunteer from '../utlityComps/Volunteer'
import Footer from '../utlityComps/Footer'

export default function Home() {
  return (
    <div>
        <Navbar  className='fixed'/>
        <div className='w-full h-screen flex items-center justify-center 
        bg-gradient-to-tr from-zinc-500 to-zinc-500 relative'>
            <img src={displacedChildren} className='w-full h-screen object-cover absolute mix-blend-overlay' />
            <h1 className='text-6xl text-center font-bold'>
               <span className='text-customBlue'> Give Hope to the Dis</span>
               <span className='text-customYellow'>placed Children <br/> in Ukraine</span>
            </h1>
        </div>
        <section className='mt-20'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div>
                    <div className='bg-customYellow mx-10 py-20 px-10 w-auto md:w-[460px]'>
                        <p className='text-2xl'>
                        Served Over<br/> <span className='text-4xl font-bold'> 1,321,901</span><br/>
                        Children in 150 Countries
                        </p>
                        <button className='w-60 h-10 bg-customBlue text-white mt-10
                         hover:bg-white hover:text-customBlue rounded-2xl'>
                             View our Program</button>
                    </div>
                </div>
                <div className='px-10'>
                    <h2 className='text-bold text-6xl px-8'>Who Are We?</h2>
                    <p className='px-8 py-5 leading-10 text-lg'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                     there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
                     the Semantics, a large language ocean. A small river named Duden flows by 
                     their place and supplies it with the necessary regelialia
                    </p>
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
        <TopDonors />
        <SuccessStory />
        <section className='my-10 px-8'>
            <h3 className='text-2xl pl-20'>Latest News</h3>
            <div className='grid md:grid-cols-3 p-20'>
                <div className='px-10'>
                <img src={news1} />
                <p className='text-lg'>Make Donations</p>
                    <p className='text-base text-zinc-500'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <a href='#' className='text-customYellow '>Read more</a>
                </div>
                <div className='px-10'>
                    <img src={news2} />
                    <p className='text-lg'>Make Donations</p>
                    <p className='text-base text-zinc-500'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <a href='#' className='text-customYellow '>Read more</a>
                </div>
                <div className='px-10'>
                    <img src={news3} />
                    <p className='text-lg'>We need Volunteers</p>
                    <p className='text-base text-zinc-500'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <a href='#' className='text-customYellow '>Read more</a>
                </div>
            </div>
        </section>
        <Volunteer />
        <Footer />
    </div>
  )
}
