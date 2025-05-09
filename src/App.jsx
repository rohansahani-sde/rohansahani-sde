import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'
// import Test from './components/Test'
import Navbar1 from './components/Navbar1'
import Home1 from './components/Home1'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Headroom from 'react-headroom'
import Profiles from './components/Profiles'

import pdfFile from './assets/Rohan_Sahani.pdf'
import Arrow from './components/Arrow'
import Contact from './components/Contact'
import Certificate from './components/Certificate'
import Education from './components/Education'


const App = () => {


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
    {/* <Navbar/> */}
    <div className='bg-[#0a192f]'>
    <Headroom>
    <Navbar1 handleDownload={handleDownload}/>
    </Headroom>
    <Home1 />
    <About/>
    <Skills />
    <Education />
    <Projects />
    <Contact />
    <Arrow />
    
    {/* <Certificate />         */}
    {/* <Profiles /> */}
    </div>
    {/* <Home/> */}
    {/* <Test/> */}
    </>
  )
}

export default App