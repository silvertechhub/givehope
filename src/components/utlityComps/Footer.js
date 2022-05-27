import React from 'react'
import { LocationMarkerIcon, PhoneIcon, MailIcon } from '@heroicons/react/solid'

export default function Footer() {
  return (
    <div className='bg-zinc-700 w-full  grid grid-cols-2 text-white'>
        <div className='py-20 px-8 md:px-20'>
            <h1 className='text-3xl'>About us</h1>
            <p className='leading-10'>
            Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, 
            a large language ocean.
            </p>
            <a href='#' className='text-customYellow'> Learn more</a>
        </div>
        <div className='py-20 md:px-20'>
            <h1 className='text-3xl'>Connect with us</h1>
            <div className='py-6'>
                <LocationMarkerIcon className='w-6 text-customYellow' />
                ELLEN GIANOLI 8123 DESCHUTES ROAD, PALO CERRO, CALIFORNIA
            </div>
            <div className='py-6'>
                <PhoneIcon  className='w-6 text-customYellow'/>
                +1 780 456 7345
            </div>
            <div className='py-6'>
                <MailIcon  className='w-6 text-customYellow'/>
                support@givehope.org
            </div>
        </div>
    </div>
  )
}
