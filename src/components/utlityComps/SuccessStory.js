import React from 'react'
import smiles from '../../assets/smiles.png'

export default function SuccessStory() {
  return (
    <div className='my-10 bg-orange-400 h-[430px] w-full grid md:grid-cols-2 
     bg-gradient-to-tr from-zinc-800 to-zinc-800 relative text-white'>
          <img src={smiles} className="w-full h-[430px] object-cover absolute mix-blend-overlay" />
        <div>
            <img src={smiles} className="w-[560px] px-10 py-14 absolute" />
        </div>
        <div className='px-10 py-[60px]'>
            <h1 className='text-2xl py-3'>Success Stories</h1>
            <h1 className='text-3xl py-3'>Water Is Life. We Successfuly Provide Clean Water in South East Asia</h1>
            <p>
            Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className='rounded-2xl absolute hover:bg-white hover:text-green-500 bg-green-500 text-white h-12 w-60 mt-10'>
                Read Full Story
            </button>
        </div>
    </div>
  )
}
