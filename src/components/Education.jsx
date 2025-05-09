import parul from '/images/pu.png'
import { FaGraduationCap } from 'react-icons/fa';


const Education = () => {

  return (
    <section id="Education" className="pt-20 min-h-screen">
      <div className='text-gray-200 font-mono text-3xl my-10 flex items-center gap-x-4 justify-center w-[60%]'>
        <h1><span className='text-[#64ffda] text-lg '>03.</span> Education</h1>
        <div className='h-px w-[40%] bg-gray-200'></div>
      </div>
      {/* <h2 className="text-3xl font-bold mb-6 text-gray-200  text-center"><span className='text-[#64ffda] font-mono text-xl'>03.</span>Certificates</h2> */}
      <div class="relative flex flex-col items-center ">

        {/* <!-- Vertical line in center --> */}
        <div class="absolute left-1/2 top-0 h-full w-1 z-0 bg-[#3E7FF6]"></div>
  
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

export default Education;

// export default Education