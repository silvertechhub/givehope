import React from 'react'
import Navbar from '../utlityComps/Navbar'
import TopDonors from '../utlityComps/TopDonors'
import page2 from '../../assets/page2.jpg'
import moneyInHand from '../../assets/moneyInHand.webp'
import fandf from '../../assets/fandf.png'
import Volunteer from '../utlityComps/Volunteer'
import Footer from '../utlityComps/Footer'

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
        <section>
          <div className='grid md:grid-cols-2 px-10 my-20'>
            <div className='md:px-10'>
              <h1 className='text-3xl text-left'>Create Your Fundraising Campagin</h1>
              <p className='text-left text-zinc-600 pt-8 leading-10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                 Semantics, a large language ocean.</p>
            </div>
            <div>
              <img className='' src={moneyInHand}/>
            </div>
          </div>
          <div className='grid md:grid-cols-2 px-10 my-20'>
          <div>
              <img className='' src={fandf}/>
            </div>
            <div className='px-10'>
              <h1 className='text-3xl text-left'>Share with Friends and family</h1>
              <p className='text-left text-zinc-600 pt-8 leading-10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                 Semantics, a large language ocean.</p>
            </div>
            
          </div>
        </section>
        <TopDonors />
        <Volunteer />
        <Footer />
    </div>
  )
}
