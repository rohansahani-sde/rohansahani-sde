import React, { useState } from 'react'
import logo from '/images/logo1.png'
import {delay, motion} from 'framer-motion'

import Home1 from './Home1';
import { IoIosMenu, IoMdClose } from 'react-icons/io';

const Navbar1 = ({handleDownload}) => {


  const [isOpen , setIsOpen] = useState(false)


    const listVariants = {
        visible: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
          },
        },
        hidden: {},
      };
      
      const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1},
      };

      const menuVariants = {
        hidden: { x: 40, y: -30, opacity: 0 },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 50,
            damping: 18,
            delay:0.5,
            // duration: 2,
            // ease: "easeOut"
          },
        },
      };

      const divVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 60,
            damping: 18,
          },
        },
      };
      
      



      

    const navItems = [

        { id: "01.", label: "About", link:"#about" },
        { id: "02.", label: "Skills", link:"#Skills" },
        { id: "03.", label: "Education", link:"#Education" },
        // { id: "03.", label: "Certificates", link:"#Certificates" },
        { id: "04.", label: "Projects", link:"#Projects" },
        { id: "05.", label: "Profiles", link:"#Profiles" },
        { id: "06.", label: "Contact",link:"#Contact" },
      ];
    
    
  return (
    <>

    <nav className='bg-[rgba(10,25,47,0.6)] backdrop-blur-lg shadow-2xl shadow-[#0a192f] z-50 top-0'>
        <div className='flex justify-between items-center md:h-20'>
            {/* logo */}
                <img src={logo} alt="" loading='lazy'
                className='md:h-24 sm:h-16 h-16' />
            {/* <div className='bg-red-200'>
            </div> */}


            {/*Nvabar links */}

            <div className="py-4 md:flex items-center hidden">
                <motion.ul className="flex justify-center lg:gap-x-8 md:gap-x-4 md:text-sm lg:text-base  font-mono text-gray-300"
                initial="hidden"
                animate="visible"
                delay="1"
                variants={listVariants}

                >
                    {navItems.map((item, index) => (
                        <motion.a key={index} href={item.link} variants={listVariants} >
                        <motion.li  className="flex gap-x-0.5 hover:text-teal-300"
                        variants={itemVariants}
                        >
                            <span className="text-teal-400">{item.id}</span>
                            <span>{item.label}</span>
                        </motion.li>
                        </motion.a>
                    ))}
                </motion.ul>
                {/* <button>Resume</button> */}
            {/* <div className='font-mono hover:border-b-4 hover:border-r-4 text-teal-400 border border-teal-400 p-2 px-4 rounded-lg'>
                <button> Resume</button>
            </div> */}
            



            </div>

            {/* Hidden for large Menue Button  */}
           
            <div className='md:hidden text-3xl flex items-center justify-end cursor-pointer transition duration-300 z-50'>
              <button className='text-[#64ffda] ' 
              onClick={()=>{setIsOpen(!isOpen)}}
              >{isOpen ?  <IoMdClose />: <IoIosMenu />}
              </button>
            </div>
            
            {/* Links of menu icon for mobile */}
            <div className={ ` absolute md:hidden top-0 z-0 backdrop-blur-sm w-full flex items-end justify-end  
            ${isOpen ? 'opacity-100 block ' : 'opacity-0 hidden '} `}>

              <div className=" bg-[#112240] relative  w-3/4 min-h-screen flex justify-center ">
                <motion.ul className="mt-20 "
                initial="hidden"
                animate="visible"
                // variants={menuVariants}
                >
                  {navItems.map((item, index) => (
                    <motion.a href={item.link} 
                    variants={divVariants} 
                    onClick={() => setIsOpen(false)}
                    key={ item.id || index}
                    >
                      <motion.li className=" flex items-baseline space-y-8 font-mono text-[#CCD6F6] hover:text-teal-300"
                      // initial={{ opacity: 0, y: -10,  } }
                      // animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, x: 20 }}
                      // variants={divVariants}
                      initial={{ scale: 0.8, opacity: 0,}}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeIn" }}
                      >
                        <span className="text-teal-400">{item.id}</span>
                        <span>{item.label}</span>
                      </motion.li>
                    </motion.a>
                  ))}

                  <motion.div className=' absolute top-3/4 text-[#64ffda] border-2 p-2 rounded-md cursor-pointer'
                  initial={{ scale: 0.8, opacity: 0,}}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeIn" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    handleDownload(e);
                  }} >
                    <h1>rohan sahani</h1>
                  </motion.div>
                  
                </motion.ul>
              </div>


              {/* <ul className='flex flex-col items-center space-y-2 py-6 '>
                {navItems.map((item ,index) => (
                <motion.li
                key={index}
                initial={{ opacity: 0, y: -10,  } }
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center hover:text-orange-600 hover:border-b px-2 hover:border-red-600 rounded-lg duration-200 transition-all"
                >
                  <span className="text-teal-400">{item.id}</span>
                  <span>{item.label}</span>
                </motion.li>
                ))}
              </ul> */}

            </div>
            
            {/* resume */}
        </div>
    </nav>
    {/* <Home1/> */}
    </>

  )
}

export default Navbar1