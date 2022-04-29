import { useState,  React } from 'react';
import { Link } from 'react-router-dom';
import {MenuAlt2Icon, XIcon } from '@heroicons/react/solid'

export default function Navbar() {
      const [nav, setNav] = useState(false);
      const handletoggle = () => setNav(!nav)

  return (
    <div className=' w-screen h-[80px z-10 fixed bg-transparent]'>
        <div className=' px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 text-red'>GIVEHOPE </h1>
                <div className=' text-right'>
                    <ul className='hidden md:flex pr-6 text-white'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='howitworks'>How it works</Link></li>
                        <li><Link to='donate'>Donate</Link></li>
                        <li><Link to='about'>About</Link></li>
                        <li><Link to='contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div onClick={handletoggle} className="md:hidden">
              {!nav ? <MenuAlt2Icon  className='w-5'/> : <XIcon className='w-5'/> }
           </div>
        </div>
       <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'><Link className='' to='/'>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link to='howitworks'>How it works</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link to='donate'>Donate</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link to='about'>About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link to='contact'>Contact</Link></li>
       </ul>
    </div>
  )
}
