import React from 'react'
import rohan from '/images/rohan.png'



const About = () => {
  return (
    <>
    <main id='about' className='min-h-screen pt-20 bg-[#0a192f] text-slate-400'>

      <div className='md:flex  w-3/4 justify-center md:gap-x-6  lg:mx-20 md:mx-16 mx-10'>

        {/* About */}
        <div className='md:w-1/2 md:ml-28 md:space-y-10 space-y-6'>
          {/* About Me */}
          <div className='flex items-center lg:gap-6 gap-2'>
            <h1 className='lg:text-3xl md:text-2xl text-xl text-[#ccd6f6] font-calibri font-semibold'>
              <span className='lg:text-xl text-lg  text-[#64ffda]'>01.  </span>  
              About Me
            </h1>
            <div className='lg:w-72 md:w-64 w-36 h-px bg-slate-500' />
          </div>

          {/* Description */}
          <div className='md:mr-4'>
            <h1>
            Hi, I’m Rohan Sahani, a passionate Full Stack Web Developer and aspiring tech enthusiast. I began my journey in web development during my early years at college and quickly developed a strong interest in creating interactive and responsive web applications. Currently, I’m focused on improving my skills with technologies like React, Tailwind CSS, and JavaScript.
            Previously, I contributed to the Sunbird ED project, where I worked on solving real-world problems to make a positive impact. I’m always eager to explore new technologies and push the boundaries of what’s possible, with the goal of creating solutions that make a meaningful difference.
            </h1>
            <div className='grid grid-cols-2 mt-6 font-mono '>

              <h1 className="pl-4 mb-6 text-slate-400">
                <span className="text-teal-400">▹</span> AI Agents  
              </h1>
              <h1 className="pl-4 mb-6 text-slate-400">
                <span className="text-teal-400">▹</span> NLP  
              </h1>
              <h1 className="pl-4 mb-6 text-slate-400">
                <span className="text-teal-400">▹</span> Deep Learning
              </h1>
              <h1 className="pl-4 mb-6 text-slate-400">
                <span className="text-teal-400">▹</span> LLM
              </h1>


            </div>
          </div>

        </div>
        {/* Image */}
        <div className='mt-10'>
        <div className="group relative w-[320px] h-[440px]">
          {/* Teal Background that moves inward and becomes transparent border */}
          <div className="absolute top-0 left-0 h-[420px] w-[300px] bg-teal-300 border-0 group-hover:top-[20px] group-hover:left-[20px] group-hover:border-2 border-teal-300 transition-all duration-300 z-0"></div>
          
          {/* Border frame that expands on hover */}
          <div className="absolute top-[20px] left-[20px] h-[420px] w-[300px] border-2 border-teal-300 group-hover:top-0 group-hover:left-0 transition-all duration-300 z-0"></div>
          {/* Main Image stays on top */}
          <div className="relative z-0 top-[10px] left-[10px]">
            <img
            src={rohan} loading='lazy'
            alt="Rohan Sahani"
            className="h-[420px] w-[300px] object-cover shadow-lg grayscale hover:grayscale-0"
            />
          </div>

        </div>
      </div>
    </div>







      
    </main>
    </>
    // <div id='about'>01.About</div>
  )
}

export default About