import React, { useState } from 'react'
import Navbar from './Navbar'
import logo from '/images/logo.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import pdfFile from '../assets/Rohan_Sahani.pdf'
import { motion } from 'framer-motion';
import { BsArrowClockwise, BsArrowDownCircle, BsCheckLg  } from 'react-icons/bs'
import ProfileCard from '../ProfileCard'




const Home = () => {


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
    <Navbar/>
    {alert &&  (
    <div className='flex justify-center z-50 '>
                     <div role="alert" className="bg-green-600 fixed top-10 w-1/2 sm:w-1/2 sm:flex sm:py-4 sm:justify-center z-50 rounded-full">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-6 w-6 shrink-0 stroke-current text-white "
                       fill="none"
                       viewBox="0 0 24 24">
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     <span className=' text-white'>Resume download successful!</span>
                   </div>
     </div>
              )}
              
        <div id='#home' className='min-h-screen bg-black text-white flex items-center justify-center
        bg-gradient-to-b from-black via-zinc-800 to-black overflow-hidden px-6 relative '>
            <div className='w-full max-w-6xl mx-auto flex flex-col-reverse items-center justify-between md:flex-row '>
                {/* image section */}
            <div className='flex items-center justify-center mt-8 md:mt-0 md:w-1/4 md:order-last'>
                <div className="avatar">
                    <motion.div className=" lg:w-96 md:w-56 sm:w-40 w-44 rounded-badge "
                     initial={{ opacity: 0, x:300, skewX: 60 }}
                     whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                     transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <img src={logo} />
                    </motion.div>
                </div>
            </div>
            
            <div className='text-center md:text-left lg:w-1/2 animate-fadeInY'>
                <motion.h1 className='text-4xl md:text-5xl font-bold'
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                >Hi, I am 
                    <span className='text-red-600'> Rohan Sahani</span>,
                </motion.h1>
                <h2 className='text-red-600 text-1xl md:text-2xl font-bold'>
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
                <p className='mt-4 text-lg md:text-xl inline-block '> Currently pursuing B.Tech degree in Computer Science and Engineering, at Parul University, I specialize in many programming languages such as C, Java, Python, javascript... and</p>

                <div className='mt-6 flex hover:scale-100 justify-center md:justify-normal'>
                <button className='flex font-bold bg-red-500 hover:bg-red-600 transition duration-300 px-6 py-2 rounded-full'
                onClick={handleDownload}>
                    Resume 
                    <span className='mt-1 ml-2'>
                    {downloadStatus === 'normal'&& (
                        <BsArrowDownCircle  className='text-2xl animate-bounce'/>
                    )}
                    {downloadStatus === 'loading' && (
                        <BsArrowClockwise className='animate-spin text-2xl' />
                        // <span className="loading loading-spinner text-success"></span>
                    )}
                    {downloadStatus === 'downloaded' && (
                        <BsCheckLg className='text-2xl animate-bounce text-green-500 font-bold' />
                    )}
                    </span>
                </button>
                </div>
                
                <div className='flex space-x-4 mt-6 justify-center md:justify-normal'>
                    <a href="twitter">
                    <FaTwitter className='text-4xl hover:text-red-600 transform hover:scale-110 transition '/>
                    </a>
                    <a href="Linkedin">
                    <FaLinkedin className='text-4xl hover:text-red-600 transform hover:scale-110 transition '/>
                    </a>
                    <a href="github">
                    <FaGithub className='text-4xl hover:text-red-600 transform hover:scale-110 transition ' />
                    </a>
                </div>
            </div>
            
            </div>

            <div>
                <img loading='lazy' src="https://leetcard.jacoblin.cool/sahanirohan313?ext=heatmap&theme=chartreuse" alt="" />
                <img src="https://github-readme-stats.vercel.app/api?username=0001sahani&show_icons=true&theme=wtf" />
                <img src="https://gh-readme-profile.vercel.app/api?username=rohansahani-sde&theme=github_dark&show=reviews&border_width=0&border_radius=2&hide_border=true" />
            </div>
            <div>
            <ProfileCard
  platform="HackerRank"
  name="Rohan Sahani"
  username="sahanirohan313"
  profileImg="https://your-image-link.com/rohan.jpg"
  flag="🇮🇳"
  url="https://www.hackerrank.com/sahanirohan313"
  badges={["Problem Solving ★★", "React ★"]}
/>

<ProfileCard
  platform="GitHub"
  name="Rohan Sahani"
  username="rohan-sahani"
  profileImg="https://avatars.githubusercontent.com/u/rohan-sahani"
  flag="🇮🇳"
  url="https://github.com/rohan-sahani"
  badges={["100+ Repositories", "Open Source Contributor"]}
/>
{/* <ProfileCard /> */}
            </div>

        </div>
    {/* <div className=' relative flex justify-center items-center'>
        <img src={logo} alt="" />
        <h1 className=' absolute top-0'> rohan sahani</h1>
    </div> */}
    </>
  )
}

export default Home