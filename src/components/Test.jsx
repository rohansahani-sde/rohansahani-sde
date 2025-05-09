// import { useEffect } from 'react';
// import { gsap } from 'gsap';

// const test = () => {
//   useEffect(() => {
//     // Select all the letters
//     const letters = document.querySelectorAll('.rain-text span');

//     // GSAP animation for each letter
//     gsap.fromTo(
//       letters,
//       {
//         y: -100, // Start from above the screen
//         opacity: 0,
//       },
//       {
//         y: '100vh', // Animate to the bottom of the screen
//         opacity: 1,
//         duration: 3, // Duration of the fall
//         stagger: 0.1, // Stagger animation timing
//         ease: 'power1.in', // Ease for smoother effect
//         delay: (i) => Math.random() * 3, // Random delay for each letter
//       }
//     );
//   }, []);

//   return (
//     <div className="text-center">
//       <h1 className="rain-text text-4xl font-bold">
//         {Array.from("RAIN EFFECT").map((letter, index) => (
//           <span key={index} className="inline-block">
//             {letter}
//           </span>
//         ))}
//       </h1>
//     </div>
//   );
// };

// export default test;



import React from "react";
import { motion, useInView } from "framer-motion";

const Test = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation when in view

  return (
    <motion.ul
      ref={ref}
      animate={{ rotate: isInView ? 360 : 0 }} // Rotate when in view
      transition={{ duration: 1 }} // Set the duration of the animation
    >
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </motion.ul>
  );
};

export default Test;

















// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Test = () => {
//   useEffect(() => {
//     // GSAP animation: tween
//     let tween = gsap.to(".class", { x: 1000, y:350, delay:0.5 });

//     // ScrollTrigger: Trigger the animation based on scroll position
//     let st = ScrollTrigger.create({
//       trigger: ".trigger",  // Element that triggers the animation
//       start: "top center",  // When the top of the trigger element hits the center of the viewport
//       end: "+=500",         // End the animation after scrolling 500px
//       animation: tween,     // The animation to be triggered
      
//     });

//     // Optionally, log the animation for debugging purposes
//     console.log(st.animation); // This will log the tween animation

//     // Clean up ScrollTrigger when the component is unmounted
//     return () => {
//       st.kill();
//     };
//   }, []);

//   return (
//     <div>
//       {/* Trigger element for ScrollTrigger */}
//       <div className="trigger h-screen bg-blue-500">
//         Scroll down to trigger animation
//       </div>

//       {/* Element that will be animated */}
//       <div className="class w-10 bg-red-500">
//         I will move when you scroll!
//       </div>
//     </div>
//   );
// };

// export default Test;




// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Test = () => {
//   const containerRef = useRef(null);
//   const dropRefs = useRef([]);

//   dropRefs.current = [];

//   const addDrop = (el) => {
//     if (el && !dropRefs.current.includes(el)) {
//       dropRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     dropRefs.current.forEach((drop, index) => {
//       const delay = Math.random() * 2;

//       gsap.to(drop, {
//         y: window.innerHeight + 50,
//         duration: 1.5 + Math.random(),
//         repeat: -1,
//         delay: delay,
//         ease: "none",
//         yoyo: false,
//       });
//     });
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-screen overflow-hidden bg-black"
//     >
//       {[...Array(100)].map((_, i) => (
//         <div
//           key={i}
//           ref={addDrop}
//           className="absolute top-0 w-2 h-2 text-green-600 font-extrabold rounded-full opacity-50"
//           style={{
//             left: `${Math.random() * 100}vw`,
//             animationDelay: `${Math.random() * 2}s`,
//           }}
//         >0</div>
//       ))}
//       {[...Array()].map((_, i) => (
//         <div
//           key={i}
//           ref={addDrop}
//           className="absolute top-0 w-2 h-2 text-green-600 font-extrabold rounded-full opacity-50"
//           style={{
//             left: `${Math.random() * 100}vw`,
//             animationDelay: `${Math.random() * 2}s`,
//           }}
//         >1</div>
//       ))}
//     </div>
//   );
// };

// export default Test;
