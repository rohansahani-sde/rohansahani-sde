import React, { useState } from 'react'
import { BsArrowClockwise, BsArrowDownCircle, BsCheckLg } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'
import pdfFile from '../assets/Rohan_Sahani.pdf'
import {  FaHackerrank, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { SiCodechef, SiLeetcode } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'
import rohan from '/images/rohan.png'
import {motion} from 'framer-motion'
import About from './About'
import Navbar1 from './Navbar1'
// import { a, div } from 'framer-motion/client'

const Home1 = () => {

    const icons = [
        {
            icon: <FaLinkedinIn/>,
            link: "https://www.linkedin.com/in/rohan-sahani-09-/",
            user:"rohan-sahani-09" 
        },
        {
            icon: <FiGithub/>, 
            link: "https://github.com/rohansahani-sde",
            user:"rohansahani-sde",
        },
        {
            icon: <SiLeetcode/>, 
            link: "https://leetcode.com/u/sahanirohan313/",
            user:"sahanirohan313",
        },
        {
            icon: <FaHackerrank/>, 
            link: "https://www.hackerrank.com/profile/sahanirohan313",
            user:"sahanirohan313",
        },
        {
            icon: <SiCodechef/>, 
            link: "https://www.codechef.com/users/sahanirohan313",
            user:"sahanirohan313",
        },
        {
            icon: <FaXTwitter/>, 
            link: "https://x.com/9793_rohan",
            user:"9793_rohan",
        },

    ]

    const [alert, setAlert] = useState(false)
    
        const [downloadStatus, setDownloadStatus]= useState('normal')
        const handleDownload = (e) =>{
            e.preventDefault()
            setDownloadStatus('loading')
    
            setTimeout(() => {
                setDownloadStatus('downloaded')
                // setAlert(true)
                const link = document.createElement('a')
                link.href = pdfFile
                link.download = "Rohan_Sahani_Resume.pdf"
                link.click()
                // alert when download is complete
                // if(downloadStatus === 'downloaded'){
                    setAlert(true)
                    setTimeout(() => {
                        setAlert(false)
                    }, 2000);
                // }
                
            }, 2000);
    
        }
    
    
    
  return (
    <>
    {/* Download alert  */}
    {alert &&  (
    <div className='flex justify-center z-50 '>
                     <div role="alert" className="bg-[#118180] fixed top-10 w-1/2 sm:w-1/2 sm:flex sm:py-4 sm:justify-center z-50 rounded-full">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-6 w-6 shrink-0 stroke-current text-slate-200 "
                       fill="none"
                       viewBox="0 0 24 24">
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     <span className='font-mono text-slate-200'>Resume download successful!</span>
                   </div>
     </div>
              )}
    
    <main className='bg-[#0a192f] h-screen  relative '>
        
        <motion.div className='bg-[rgb(10,25,47)] pt-36 lg:pl-[250px] md:pl-[160px] sm:pl-[120px] pl-[40px]'
        initial={{ scale: 0.9, opacity: 0,}}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        >
            
            {/* my name is */}
            <div className=' font-mono text-[#64ffda]'>
                <h1>Hi, my name is</h1>
            </div>

            {/* Name  */}
            <div className="text-slate-200 lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] font-bold font-sans">
                <h1>Rohan Sahani.</h1>
            </div>

            {/* typerwriter */}
            <div>
                <h2 className='text-slate-400 lg:text-[30px] md:text-[28px] sm:text-[25px] text-[22px] font-mono'>
                                    <TypeAnimation      
                                    sequence={[         
                                        "MERN Stack Developer",
                                        3000, 
                                        "Software Developer",
                                        3000,
                                        "Web Developer",
                                        3000,
                                        "Web Design",
                                        3000
                                        ]}
                                        wrapper="span"
                                        speed={15}
                                        repeat={Infinity}
                                        />
                                </h2>
            </div>

            {/* description */}
            <div>
            <p className="text-slate-400 text-[16px] lg:max-w-xl md:max-w-lg sm:max-w-md max-w-xs">
            Full-stack web developer skilled in building responsive, scalable applications using ReactJS, Tailwind CSS, Node.js, and MongoDB.
            </p>
            </div>

            {/* resume */}
            <div className='flex lg:gap-x-4 md:gap-x-3 gap-x-2 lg:mt-6 md:mt-5 mt-4 mr-4'>

            <a href="#Projects">
            <button className="text-[#64ffda] md:text-base text-sm border border-[#64ffda] sm:px-6 md:px-5 px-3  lg:py-3 md:py-2 py-1 rounded-md font-mono hover:bg-[#118180] transition duration-300">
            Check Out My Projects!
            </button>
            </a>
            <div className='flex hover:scale-100 justify-center md:justify-normal '>
                            <button className='flex items-center font-mono md:text-base text-sm text-[#64ffda] border border-[#64ffda] hover:bg-[#118180] transition duration-300 sm:px-6 md:px-5 px-3  lg:py-3 md:py-2 py-1 rounded-lg'
                            onClick={handleDownload}>
                                Resume 
                                <span className='mt-1 ml-2 flex justify-center '>
                                {downloadStatus === 'normal'&& (
                                    <BsArrowDownCircle  className='md:text-2xl sm:text-xl text-lg animate-bounce'/>
                                )}
                                {downloadStatus === 'loading' && (
                                    <BsArrowClockwise className='animate-spin text-2xl' />
                                    // <span className="loading loading-spinner text-success"></span>
                                )}
                                {downloadStatus === 'downloaded' && (
                                    <BsCheckLg className='text-2xl animate-bounce text-teal-200 font-bold' />
                                )}
                                </span>
                            </button>
            </div>
            
            </div>

            
        
        </motion.div>
        



{/* fixed icons */}
           {/* <motion.div className='flex items-center rotate-90 fixed bottom-32 -right-36 text-[#64ffda]'
           initial={{ y: 300, opacity: 0 }}   // Starts 300px lower, invisible
           animate={{ y: 0, opacity: 1 }}     // Animates to final position, visible
           transition={{
             duration: 1,
             ease: 'easeOut'
           }}
           
           >
            <a href="mailto:sahanirohan313@gmail.com">sahanirohan313@gmail.com</a>
            <span className=''>
                <div className='ml-6 h-0.5 w-32 bg-slate-200'></div>
            </span>
           </motion.div> */}

           {/* fixed email */}
           <motion.div
           className="hidden md:flex flex-col justify-between items-center fixed bottom-0 right-6  z-50"
           initial={{ y: 200, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
            delay:0.2,
          }}
          >
            <a
            href="mailto:sahanirohan313@gmail.com"
            // className="text-sm tracking-wider font-mono" 
            className="tracking-wider font-mono [writing-mode:vertical-rl] [text-orientation:mixed] hover:text-[#64ffda]  text-slate-400 transition duration-300"
            >
                sahanirohan313@gmail.com
            </a>

            {/* Vertical Line */}
            <div className="h-20 w-0.5 bg-slate-400 mt-2"></div>
            </motion.div>

            {/* fixed icon & animation */}
           <motion.div
           className="hidden md:flex flex-col justify-between items-center fixed bottom-0 left-10 z-50"
           initial={{ y: 200, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
            delay:0.2,
          }}
          >
            <div className='flex flex-col text-slate-400 hover:tex-[#64ffda] space-y-6'>
                {/* icons map */}
            {icons.map((icon, i) => (
                <a key={i} href={icon.link} target='_blank'> 
                {/* correct */}
                {/* <div key={i} className=' hover:text-[#64ffda] hover:scale-125 transition duration-300 text-xl group'>
                 {icon.icon} 
                </div> */}
                {/* text */}
                <div key={i} className=' hover:text-[#64ffda] hover:scale-125 transition duration-300 text-xl group'>
                    <h1 className='flex items-center'>
                        {icon.icon} <span className=' absolute text-xs opacity-0 -left-5 w-24 group-hover:opacity-100 origin-center group-hover:translate-x-11 transition-all duration-300'>{icon.user}</span>
                    </h1>
                </div>
                </a>
            ))}
            </div>
            

            {/* Vertical Line */}
            <div className="h-20 w-0.5 bg-slate-400 mt-2"></div>
            </motion.div>

    </main>
    {/* <About /> */}
    </>
  )
}

export default Home1