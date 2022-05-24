import { useState,  React } from 'react';
import { NavLink } from 'react-router-dom';
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
                        <li><NavLink activeClassName="active" to='/'>Home</NavLink></li>
                        <li><NavLink to='howitworks'>How it works</NavLink></li>
                        <li><NavLink to='donate'>Donate</NavLink></li>
                        <li><NavLink to='about'>About</NavLink></li>
                        <li><NavLink to='contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            <div onClick={handletoggle} className="md:hidden">
              {!nav ? <MenuAlt2Icon  className='w-5'/> : <XIcon className='w-5'/> }
           </div>
        </div>
       <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'><NavLink className='' to='/'>Home</NavLink></li>
            <li className='border-b-2 border-zinc-300 w-full'><NavLink to='howitworks'>How it works</NavLink></li>
            <li className='border-b-2 border-zinc-300 w-full'><NavLink to='donate'>Donate</NavLink></li>
            <li className='border-b-2 border-zinc-300 w-full'><NavLink to='about'>About</NavLink></li>
            <li className='border-b-2 border-zinc-300 w-full'><NavLink to='contact'>Contact</NavLink></li>
       </ul>
    </div>
  )
}
