import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skillbar = ({ skill, percentage }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.2,     // 10% visible
  });
// const { ref, inView } = useInView({ triggerOnce: true }); 

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1 text-cyan-100 font-mono">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 h-2 rounded">
        <div
          className="bg-teal-300 h-2 rounded transition-all duration-[1500ms]"
          style={{
            width: inView ? `${percentage}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skillbar;
