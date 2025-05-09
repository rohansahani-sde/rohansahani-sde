import React from 'react'
import { FaLinkedinIn, FaPhone, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import gmail from '../assets/gmail.svg'
import { GiMailbox } from 'react-icons/gi'

const Contact = () => {
  return (
    <>
    <main id='Contact'>
      {/* <div className=' min-h-screen text-white'>
        <div className='container bg-green-500 flex gap-x-8 items-center'>
          <h1 className=''>
           <span>06.</span>Get in Touch
          </h1>
          <div className='w-[75%] h-0.5 bg-slate-400'></div>
        </div>
        <div>
          <p>"I'm always open to new opportunities, collaborations, or just a good tech conversation!"</p>
        </div>
      </div> */}
      <section id="contact" className="w-full py-20 px-4 bg-[#0a192f] text-center">
  <h2 className="text-3xl sm:text-4xl font-bold text-[#64ffda] mb-4">
    Get in Touch
  </h2>

  <p className="text-base sm:text-lg text-[#8892b0] max-w-xl mx-auto mb-8">
    I'm always open to new opportunities, collaborations, or just a good tech conversation. 
    Feel free to reach out and I'll get back to you as soon as I can!
  </p>

  <a href="mailto:sahanirohan313@gmail.com?subject=Regarding%20Your%20Portfolio&body=Hi%20Rohan%2C%0AI%20just%20visited%20your%20portfolio%20and...">
    <button className=" hover:-translate-x-1 hover:-translate-y-1 text-[#64ffda] border border-[#64ffda] px-6 py-3 rounded-md hover:bg-[#64ffda1a] transition duration-300">
      Say Hello
    </button>

  </a>
      </section>


    <div className="flex gap-x-8 sm:gap-x-10 md:gap-x-14 lg:gap-x-20 items-center justify-center">
    
{/*  Phone Number */}
  <a href="tel:9793091350" target="_blank" rel="noreferrer" className="btn">
  <div className='flex flex-col items-center gap-y-1 group'>
  <h1 className='text-2xl text-[#64ffda] group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-2 transition-transform duration-300'>
   <FaPhoneAlt /> </h1>
  <h1 className='text-gray-200 font-light text-sm group-hover:text-[#64ffda]'>Phone</h1>
  </div>
  </a>
{/*  Linkedin  */}
  <a href="https://www.linkedin.com/in/rohan-sahani-09-/" target="_blank" rel="noreferrer" className="btn">
  <div className='flex flex-col items-center gap-y-1 group'>
  <h1 className='text-3xl text-[#64ffda] group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-2 transition-transform duration-300'>
   <FaLinkedinIn /> </h1>
  <h1 className='text-gray-200 font-light text-sm group-hover:text-[#64ffda]'>LinkedIn</h1>
  </div>
  </a>
{/*  Whatsapp */}
  <a href="https://wa.me/919793091350" target="_blank" rel="noreferrer" className="btn">
  <div className='flex flex-col items-center gap-y-1 group'>
  <h1 className='text-3xl text-[#64ffda] group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-2 transition-transform duration-300'>
    <FaWhatsapp /> 
  </h1>
  <h1 className='text-gray-200 font-light text-sm group-hover:text-[#64ffda]'>WhatsApp</h1>
  </div>
  </a>

    </div>

    </main>
    </>
  )
}

export default Contact