import React from 'react';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import { div } from 'framer-motion/client';

const SkillBar = ({ label, percentage }) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <div id='' ref={ref} className="mb-4">
      <div className="flex justify-between mb-1 text-teal-300 font-mono">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
        <motion.div
          className="h-2 bg-teal-300 rounded"
          initial={{ width: '0%' }}
          animate={{ width: inView ? `${percentage}%` : '0%' }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 12,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { label: 'C/C++', percentage: 90 },
    { label: 'JavaScript', percentage: 85 },
    { label: 'TypeScript', percentage: 85 },
    { label: 'Python', percentage: 90 },
    { label: 'R', percentage: 80 },
  ];

  return ( 
    <div id='Skills' className='pt-20 flex justify-center min-h-screen'>

    <div className="text-white p-4 md:w-1/2 w-3/4 items-center ">
      <h2 className="md:text-xl text-lg font-semibold font-mono mb-4">Core Technical Skills</h2>
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} />
      ))}
    </div>
    </div>
  );
};

export default Skills;
