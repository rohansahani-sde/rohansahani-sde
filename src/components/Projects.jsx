import React from 'react'
import project1 from '/images/project.jpg'
import project from '/images/project1.png'
import { FaGithubAlt } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa6'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <>
    <main id='Projects' className=' min-h-screen pt-20'>
            {/* Heading  */}
        <div className='xl:w-3/4 lg:w-[65%] md:w-[65%] flex flex-col justify-center items-center'>
            <div className='flex items-center gap-6'>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl text-lg text-[#ccd6f6] font-calibri font-semibold'>
                    <span className='xl:text-xl lg:text-lg md:text-lg text-base text-[#64ffda]'>04.  </span>  
                    Projects i've Built
                </h1>
            <div className='xl:w-72 lg:w-64 md:w-60 sm:w-52 w-32 h-px bg-slate-500' />
            </div>

        </div>


        {/*All  Project Deatils */}
        
        <motion.div className='flex items-center justify-center mt-20 group '
                initial={{ scale: 0.9, opacity: 0,}}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
        >
            <div className='xl:w-3/5 lg:w-[70%] md:w-[80%] w-[95%] relative  '>

            {/* Project Image */}
            <div className=''>
                <img src={project} alt="" className='xl:w-3/5 lg:w-[65%] md:w-[70%] sm:w-[75%] rounded-md  grayscale group-hover:grayscale-0 transition duration-300' />
            </div>


            {/* Details */}
            <div className='h-full bg-[#1D4753]/60 sm:bg-transparent  group-hover:bg-transparent  absolute flex flex-col sm:items-end top-0 md:gap-y-2 lg:gap-y-4 xl:gap-y-2'>
            
                    {/* Featured Project */}
                    <div className='lg:text-base text-sm text-[#64ffda] font-mono'>

                        
                        <h1>Featured Project</h1>
                    </div>

                    {/* Project Name */}
                    <a href="https://github.com/rohansahani-sde" target='_blank'>
                    <div className='lg:text-2xl text-xl text-sky-200 group-hover:text-[#64ffda] cursor-pointer font-semibold '>
                        <h1>Halcyon Theme</h1>
                    </div>
                    </a>

                    {/* project Description */}
                    <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[85%] sm:bg-[#112240] text-[#E6F1FF] sm:text-[#A8B2D1] sm:p-1 xl:p-2  text-sm sm:text-base rounded-md sm:group-hover:flex group-hover:hidden'>
                        <h1>
                            Solution for leveraging causal inference tools and technologies for analyzing and optimizing retail operations, such as pricing and inventory. Using Causica, DoWhy, and treatment effect analysis, retailers, business analysts, and decision-makers can quickly and effectively improve profitability and operational efficiency.
                        </h1>
                    </div>

                    {/* Project Tools */}
                    <div className='flex xl:gap-5 lg:gap-4 sm:gap-2 gap-4 text-[#E6F1FF] sm:text-[#A8B2D1] text-xs sm:text-sm  sm:font-bold font-semibold font-mono sm:group-hover:flex group-hover:hidden'>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                    </div>

                    {/* Project Links */}
                    <div className='text-[#A8B2D1] text-xl sm:text-2xl flex gap-4 sm:group-hover:flex group-hover:hidden'>
                        <h1><FaGithubAlt/></h1>
                        <h1><FaLink/></h1>
                    </div>

            </div>

            </div>

        </motion.div>

        <motion.div className='flex items-center justify-center mt-20 group '
                initial={{ scale: 0.9, opacity: 0,}}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
        >
            <div className='xl:w-3/5 lg:w-[70%] md:w-[80%] w-[95%] relative  '>

            {/* Project Image */}
            <div className=''>
                <img src={project1} alt="" className='xl:w-3/5 lg:w-[65%] md:w-[70%] sm:w-[75%] rounded-md  grayscale group-hover:grayscale-0 transition duration-300' />
            </div>


            {/* Details */}
            <div className='h-full bg-[#1D4753]/60 sm:bg-transparent  group-hover:bg-transparent  absolute flex flex-col sm:items-end top-0 md:gap-y-2 lg:gap-y-4 xl:gap-y-2'>
            
                    {/* Featured Project */}
                    <div className='lg:text-base text-sm text-[#64ffda] font-mono'>

                        
                        <h1>Featured Project</h1>
                    </div>

                    {/* Project Name */}
                    <a href="https://github.com/rohansahani-sde" target='_blank'>
                    <div className='lg:text-2xl text-xl text-sky-200 group-hover:text-[#64ffda] cursor-pointer font-semibold '>
                        <h1>Halcyon Theme</h1>
                    </div>
                    </a>

                    {/* project Description */}
                    <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[85%] sm:bg-[#112240] text-[#E6F1FF] sm:text-[#A8B2D1] sm:p-1 xl:p-2  text-sm sm:text-base rounded-md sm:group-hover:flex group-hover:hidden'>
                        <h1>
                            Solution for leveraging causal inference tools and technologies for analyzing and optimizing retail operations, such as pricing and inventory. Using Causica, DoWhy, and treatment effect analysis, retailers, business analysts, and decision-makers can quickly and effectively improve profitability and operational efficiency.
                        </h1>
                    </div>

                    {/* Project Tools */}
                    <div className='flex xl:gap-5 lg:gap-4 sm:gap-2 gap-4 text-[#E6F1FF] sm:text-[#A8B2D1] text-xs sm:text-sm  sm:font-bold font-semibold font-mono sm:group-hover:flex group-hover:hidden'>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                    </div>

                    {/* Project Links */}
                    <div className='text-[#A8B2D1] text-xl sm:text-2xl flex gap-4 sm:group-hover:flex group-hover:hidden'>
                        <h1><FaGithubAlt/></h1>
                        <h1><FaLink/></h1>
                    </div>

            </div>

            </div>

        </motion.div>

        <motion.div className='flex items-center justify-center mt-20 group '
                initial={{ scale: 0.9, opacity: 0,}}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
        >
            <div className='xl:w-3/5 lg:w-[70%] md:w-[80%] w-[95%] relative  '>

            {/* Project Image */}
            <div className=''>
                <img src={project} alt="" className='xl:w-3/5 lg:w-[65%] md:w-[70%] sm:w-[75%] rounded-md  grayscale group-hover:grayscale-0 transition duration-300' />
            </div>


            {/* Details */}
            <div className='h-full bg-[#1D4753]/60 sm:bg-transparent  group-hover:bg-transparent  absolute flex flex-col sm:items-end top-0 md:gap-y-2 lg:gap-y-4 xl:gap-y-2'>
            
                    {/* Featured Project */}
                    <div className='lg:text-base text-sm text-[#64ffda] font-mono'>

                        
                        <h1>Featured Project</h1>
                    </div>

                    {/* Project Name */}
                    <a href="https://github.com/rohansahani-sde" target='_blank'>
                    <div className='lg:text-2xl text-xl text-sky-200 group-hover:text-[#64ffda] cursor-pointer font-semibold '>
                        <h1>Halcyon Theme</h1>
                    </div>
                    </a>

                    {/* project Description */}
                    <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[85%] sm:bg-[#112240] text-[#E6F1FF] sm:text-[#A8B2D1] sm:p-1 xl:p-2  text-sm sm:text-base rounded-md sm:group-hover:flex group-hover:hidden'>
                        <h1>
                            Solution for leveraging causal inference tools and technologies for analyzing and optimizing retail operations, such as pricing and inventory. Using Causica, DoWhy, and treatment effect analysis, retailers, business analysts, and decision-makers can quickly and effectively improve profitability and operational efficiency.
                        </h1>
                    </div>

                    {/* Project Tools */}
                    <div className='flex xl:gap-5 lg:gap-4 sm:gap-2 gap-4 text-[#E6F1FF] sm:text-[#A8B2D1] text-xs sm:text-sm  sm:font-bold font-semibold font-mono sm:group-hover:flex group-hover:hidden'>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                    </div>

                    {/* Project Links */}
                    <div className='text-[#A8B2D1] text-xl sm:text-2xl flex gap-4 sm:group-hover:flex group-hover:hidden'>
                        <h1><FaGithubAlt/></h1>
                        <h1><FaLink/></h1>
                    </div>

            </div>

            </div>

        </motion.div>

        <motion.div className='flex items-center justify-center mt-20 group '
                initial={{ scale: 0.9, opacity: 0,}}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
        >
            <div className='xl:w-3/5 lg:w-[70%] md:w-[80%] w-[95%] relative  '>

            {/* Project Image */}
            <div className=''>
                <img src={project1} alt="" className='xl:w-3/5 lg:w-[65%] md:w-[70%] sm:w-[75%] rounded-md  grayscale group-hover:grayscale-0 transition duration-300' />
            </div>


            {/* Details */}
            <div className='h-full bg-[#1D4753]/60 sm:bg-transparent  group-hover:bg-transparent  absolute flex flex-col sm:items-end top-0 md:gap-y-2 lg:gap-y-4 xl:gap-y-2'>
            
                    {/* Featured Project */}
                    <div className='lg:text-base text-sm text-[#64ffda] font-mono'>

                        
                        <h1>Featured Project</h1>
                    </div>

                    {/* Project Name */}
                    <a href="https://github.com/rohansahani-sde" target='_blank'>
                    <div className='lg:text-2xl text-xl text-sky-200 group-hover:text-[#64ffda] cursor-pointer font-semibold '>
                        <h1>Halcyon Theme</h1>
                    </div>
                    </a>

                    {/* project Description */}
                    <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[85%] sm:bg-[#112240] text-[#E6F1FF] sm:text-[#A8B2D1] sm:p-1 xl:p-2  text-sm sm:text-base rounded-md sm:group-hover:flex group-hover:hidden'>
                        <h1>
                            Solution for leveraging causal inference tools and technologies for analyzing and optimizing retail operations, such as pricing and inventory. Using Causica, DoWhy, and treatment effect analysis, retailers, business analysts, and decision-makers can quickly and effectively improve profitability and operational efficiency.
                        </h1>
                    </div>

                    {/* Project Tools */}
                    <div className='flex xl:gap-5 lg:gap-4 sm:gap-2 gap-4 text-[#E6F1FF] sm:text-[#A8B2D1] text-xs sm:text-sm  sm:font-bold font-semibold font-mono sm:group-hover:flex group-hover:hidden'>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                    </div>

                    {/* Project Links */}
                    <div className='text-[#A8B2D1] text-xl sm:text-2xl flex gap-4 sm:group-hover:flex group-hover:hidden'>
                        <h1><FaGithubAlt/></h1>
                        <h1><FaLink/></h1>
                    </div>

            </div>

            </div>

        </motion.div>

        <motion.div className='flex items-center justify-center mt-20 group '
                initial={{ scale: 0.9, opacity: 0,}}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
        >
            <div className='xl:w-3/5 lg:w-[70%] md:w-[80%] w-[95%] relative  '>

            {/* Project Image */}
            <div className=''>
                <img src={project} alt="" className='xl:w-3/5 lg:w-[65%] md:w-[70%] sm:w-[75%] rounded-md  grayscale group-hover:grayscale-0 transition duration-300' />
            </div>


            {/* Details */}
            <div className='h-full bg-[#1D4753]/60 sm:bg-transparent  group-hover:bg-transparent  absolute flex flex-col sm:items-end top-0 md:gap-y-2 lg:gap-y-4 xl:gap-y-2'>
            
                    {/* Featured Project */}
                    <div className='lg:text-base text-sm text-[#64ffda] font-mono'>

                        
                        <h1>Featured Project</h1>
                    </div>

                    {/* Project Name */}
                    <a href="https://github.com/rohansahani-sde" target='_blank'>
                    <div className='lg:text-2xl text-xl text-sky-200 group-hover:text-[#64ffda] cursor-pointer font-semibold '>
                        <h1>Halcyon Theme</h1>
                    </div>
                    </a>

                    {/* project Description */}
                    <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[85%] sm:bg-[#112240] text-[#E6F1FF] sm:text-[#A8B2D1] sm:p-1 xl:p-2  text-sm sm:text-base rounded-md sm:group-hover:flex group-hover:hidden'>
                        <h1>
                            Solution for leveraging causal inference tools and technologies for analyzing and optimizing retail operations, such as pricing and inventory. Using Causica, DoWhy, and treatment effect analysis, retailers, business analysts, and decision-makers can quickly and effectively improve profitability and operational efficiency.
                        </h1>
                    </div>

                    {/* Project Tools */}
                    <div className='flex xl:gap-5 lg:gap-4 sm:gap-2 gap-4 text-[#E6F1FF] sm:text-[#A8B2D1] text-xs sm:text-sm  sm:font-bold font-semibold font-mono sm:group-hover:flex group-hover:hidden'>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                        <h1>VsCode</h1>
                    </div>

                    {/* Project Links */}
                    <div className='text-[#A8B2D1] text-xl sm:text-2xl flex gap-4 sm:group-hover:flex group-hover:hidden'>
                        <h1><FaGithubAlt/></h1>
                        <h1><FaLink/></h1>
                    </div>

            </div>

            </div>

        </motion.div>
        


        
    </main>
    </>
  )
}

export default Projects





// Project Mockup (Not responsive) :
{/* <motion.div className='flex items-center justify-center mt-20 group'
initial={{ scale: 0.9, opacity: 0,}}
whileInView={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.5, ease: "easeIn" }}
>
<div className='w-3/5 relative '>

<div className=''>
<img src={project1} alt="" className='w-3/5 rounded-md  grayscale group-hover:grayscale-0 transition duration-300' />
</div>


<div className=' absolute flex flex-col gap-y-2 items-end top-0'>

    <div className='text-[#64ffda] font-mono'>
        <h1>Featured Project</h1>
    </div>

    <div className='text-2xl text-sky-200 hover:text-[#64ffda] cursor-pointer font-semibold'>
        <h1>Halcyon Theme</h1>
    </div>

    <div className=' w-1/2 bg-[#112240] text-[#A8B2D1] p-2 rounded-md'>
        <h1>
            Solution for leveraging causal inference tools and technologies for analyzing and optimizing retail operations, such as pricing and inventory. Using Causica, DoWhy, and treatment effect analysis, retailers, business analysts, and decision-makers can quickly and effectively improve profitability and operational efficiency.
        </h1>
    </div>

    <div className='flex gap-4 text-[#A8B2D1]'>
        <h1>Vs Code</h1>
        <h1>Vs Code</h1>
        <h1>Vs Code</h1>
        <h1>Vs Code</h1>
    </div>

    <div className='text-[#A8B2D1] text-xl flex gap-4'>
        <h1><FaGithubAlt/></h1>
        <h1><FaLink/></h1>
    </div>

</div>

</div>

</motion.div> */}

// Project Mockup (Not responsive) :

{/* <motion.div className='flex items-center justify-center mt-20 group ' */}
// initial={{ scale: 0.9, opacity: 0,}}
// whileInView={{ scale: 1, opacity: 1 }}
// transition={{ duration: 0.5, ease: "easeIn" }}
// >
{/* <div className='xl:w-3/5 lg:w-[70%] md:w-[80%] w-[95%] relative  '> */}

{/* Project Image */}
{/* <div className=''>
<img src={project} alt="" className='xl:w-3/5 lg:w-[65%] md:w-[70%] sm:w-[75%] rounded-md  grayscale group-hover:grayscale-0 transition duration-300' />
</div> */}


{/* Details */}
{/* <div className='h-full bg-[#1D4753]/60 sm:bg-transparent  group-hover:bg-transparent  absolute flex flex-col sm:items-end top-0 md:gap-y-2 lg:gap-y-4 xl:gap-y-2'> */}

    {/* Featured Project */}
    {/* <div className='lg:text-base text-sm text-[#64ffda] font-mono'>

        
        <h1>Featured Project</h1>
    </div> */}

    {/* Project Name */}
    {/* <a href="https://github.com/rohansahani-sde" target='_blank'>
    <div className='lg:text-2xl text-xl text-sky-200 group-hover:text-[#64ffda] cursor-pointer font-semibold '>
        <h1>Halcyon Theme</h1>
    </div>
    </a> */}

    {/* project Description */}
    {/* <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[85%] sm:bg-[#112240] text-[#E6F1FF] sm:text-[#A8B2D1] sm:p-1 xl:p-2  text-sm sm:text-base rounded-md sm:group-hover:flex group-hover:hidden'>
        <h1>
            Solution for leveraging causal inference tools and technologies for analyzing and optimizing retail operations, such as pricing and inventory. Using Causica, DoWhy, and treatment effect analysis, retailers, business analysts, and decision-makers can quickly and effectively improve profitability and operational efficiency.
        </h1>
    </div> */}

    {/* Project Tools */}
    {/* <div className='flex xl:gap-5 lg:gap-4 sm:gap-2 gap-4 text-[#E6F1FF] sm:text-[#A8B2D1] text-xs sm:text-sm  sm:font-bold font-semibold font-mono sm:group-hover:flex group-hover:hidden'>
        <h1>VsCode</h1>
        <h1>VsCode</h1>
        <h1>VsCode</h1>
    </div> */}

    {/* Project Links */}
    {/* <div className='text-[#A8B2D1] text-xl sm:text-2xl flex gap-4 sm:group-hover:flex group-hover:hidden'>
        <h1><FaGithubAlt/></h1>
        <h1><FaLink/></h1>
    </div> */}

{/* </div>

</div>

</motion.div> */}