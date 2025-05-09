import { FaPadlet } from 'react-icons/fa6';
import project1 from '/images/project.jpg'
import project from '/images/project1.png'
import parul from '/images/pu.png'
import { FaGraduationCap, FaLinkedinIn } from 'react-icons/fa';


const Certificate = () => {
  const certificates = [
    {
      title: "Cyber Ops Program",
      issuer: "Parul Institute of Technology",
      date: "Aug 2024",
      img: project, // Place image in public/certificates/
      link: "https://example.com/certificate-link"
    },
    {
      title: "Vadodara Hackathon 5.0",
      issuer: "Vadodara Smart City",
      date: "Oct 2024",
      img: project1,
      link: "https://example.com/hackathon-certificate"
    },
    {
      title: "Cyber Ops Program",
      issuer: "Parul Institute of Technology",
      date: "Aug 2024",
      img: project, // Place image in public/certificates/
      link: "https://example.com/certificate-link"
    },
    {
      title: "Vadodara Hackathon 5.0",
      issuer: "Vadodara Smart City",
      date: "Oct 2024",
      img: project1,
      link: "https://example.com/hackathon-certificate"
    },
    {
      title: "Cyber Ops Program",
      issuer: "Parul Institute of Technology",
      date: "Aug 2024",
      img: project, // Place image in public/certificates/
      link: "https://example.com/certificate-link"
    },
    {
      title: "Vadodara Hackathon 5.0",
      issuer: "Vadodara Smart City",
      date: "Oct 2024",
      img: project1,
      link: "https://example.com/hackathon-certificate"
    },
    // Add more certificates as needed
  ];

  return (
    <section id="Certificates" className="pt-20 min-h-screen">
      {/* <h2 className="text-3xl font-bold mb-6 text-gray-200  text-center"><span className='text-[#64ffda] font-mono text-xl'>03.</span>Certificates</h2> */}
      <div class="relative flex flex-col items-center ">

        {/* <!-- Vertical line in center --> */}
        <div class="absolute left-1/2 top-0 min-h-screen w-1 z-0 bg-[#3E7FF6]"></div>
  
  {/* <!-- Timeline item --> */}

  <div className='flex w-3/4 gap-x-4 justify-between relative mt-3 '>
  {/* Icon */}
  <div className=' absolute flex left-[48%] text-gray-800 z-0 bottom-1/2 bg-[#64ffda] p-4 rounded-full text-2xl'>
    <FaGraduationCap/>
  </div>
  {/* Image */}
  <div className=' flex  w-[75%] justify-start'>
    <img src={parul} alt="" className='w-[80%] rounded-lg' />
  </div>

  
  <div className='  w-[70%] flex justify-end '>

    <div className='bg-[#2D375D] rounded-lg text-gray-200 flex flex-col  w-[85%] justify-between px-4 py-6 '>

  <div className='text-lg font-mono'>
    <h1>Central Public School</h1>
  </div>
  <div className='text-lg font-mono'>
    <h1>2020-2022</h1>
  </div>
  <div className=' text-lg font-mono'>
    <h1>Lorem ipsum dolor sit amet sit amet.</h1>
  </div>
  <div className='bg-cyan-400 w-1/2 ml-2 p-2 rounded-xl'>
    <h1>10th:77 12th:67</h1>
  </div>
    </div>

  </div>

  </div>
  
  <div className='flex w-3/4 gap-x-4 justify-between relative mt-3 '>
  {/* Icon */}
  <div className=' absolute flex left-[48%] z-0 bottom-1/2 bg-[#64ffda] p-4 rounded-full text-2xl'>
    <FaGraduationCap/>
  </div>

  <div className='  w-[70%] flex justify-start '>

    <div className='bg-[#2D375D] rounded-lg text-gray-200 flex flex-col  w-[85%] justify-between px-4 py-6 '>

  <div className='text-lg font-mono'>
    <h1>Central Public School</h1>
  </div>
  <div className='text-lg font-mono'>
    <h1>2020-2022</h1>
  </div>
  <div className=' text-lg font-mono'>
    <h1>Lorem ipsum dolor sit amet sit amet.</h1>
  </div>
  <div className='bg-cyan-400 w-1/2 ml-2 p-2 rounded-xl'>
    <h1>10th:77 12th:67</h1>
  </div>
    </div>

  </div>

  <div className=' flex  w-[75%] justify-end'>
    <img src={parul} alt="" className='w-[80%] rounded-lg' />
  </div>

  

  </div>

  



</div>



    </section>
  );
};

export default Certificate;
