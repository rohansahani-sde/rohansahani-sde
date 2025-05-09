import React from 'react'
import Home1 from './Home1'

const Navbar = () => {
  return (
    <>
    <nav className="shadow-md sticky top-0 z-50 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="flex justify-between items-center h-20">
      
      {/* <!-- Logo / Name --> */}
      <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
        Rohan Sahani
      </div>

      {/* <!-- Navigation Links --> */}
      <div className="hidden md:flex space-x-6 h-16 border-2 border-gray-300 rounded-full justify-between w-1/2 items-center">
        
        <a href="#home" className="text-gray-700 transition">
        <div className='hover:border rounded-full p-4 px-6 group'>
            <h1 className='group-hover:text-indigo-600 group-hover:font-semibold transition'>
                Home
            </h1>
        </div>
        </a>
        <a href="#about" className="text-gray-700 transition">
        <div className='hover:border rounded-full p-4 px-6 group'>
            <h1 className='group-hover:text-indigo-600 group-hover:font-semibold transition'>
            About
            </h1>
        </div>
        </a>
        <a href="#contact" className="text-gray-700 transition">
        <div className='hover:border rounded-full p-4 px-6 group'>
            <h1 className='group-hover:text-indigo-600 group-hover:font-semibold transition'>
            Contact
            </h1>
        </div>
        </a>
        <a href="#skills" className="text-gray-700 transition">
        <div className='hover:border rounded-full p-4 px-6 group'>
            <h1 className='group-hover:text-indigo-600 group-hover:font-semibold transition'>
            Skills
            </h1>
        </div>
        </a>
        <a href="#projects" className="text-gray-700 transition">
        <div className='hover:border rounded-full p-4 px-6 group'>
            <h1 className='group-hover:text-indigo-600 group-hover:font-semibold transition'>
            Projects
            </h1>
        </div>
        </a>

      </div>

    </div>

  </div>
</nav>

    </>
  )
}

export default Navbar