import React from 'react'
import Navbar from '../utlityComps/Navbar'
import helpingHand from '../../assets/helpingHand.png'
import Footer from '../utlityComps/Footer'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen flex items-center justify-center 
        bg-gradient-to-tr from-zinc-500 to-zinc-500 relative'>
      <img src={helpingHand} className="w-full h-screen object-cover absolute mix-blend-overlay" />
      <h1 className='text-6xl'>Get In Touch</h1>
      </div>
      <section className='py-20 px-10'>
        <div className='grid md:grid-cols-2'>
          <div>
          <form>
                <div className='my-8'>
                <input type='text' placeholder="Enter your Name" className='focus:bg-zinc-200 w-80 bg-transparent border border-zinc-400 py-2 pl-2' />
                </div>
                <div className='my-8'>
                <input type='email' placeholder="Enter your email" className='focus:bg-zinc-200 w-80 bg-white border border-zinc-400 py-2 pl-2' />
                </div>
                <div className='my-8'>
                <input type='text' placeholder="Enter your message" className='focus:bg-zinc-200 h-40 w-80 border border-zinc-400 bg-transparent py-2 pl-2' />
                </div>
                <input type='submit' className='bg-customYellow h-10 text-white w-40 rounded-xl hover:bg-zinc-200' value='Submit' />
            </form>
          </div>
          <div className=''>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10938209.494752772!2d22.208320093863712!3d47.98547154770034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2sUkraine!5e0!3m2!1sen!2sng!4v1651234784552!5m2!1sen!2sng" width="600" 
          height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
