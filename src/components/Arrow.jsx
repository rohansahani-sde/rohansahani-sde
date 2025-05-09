import React, { useEffect, useState } from 'react';
import { HiBarsArrowUp } from 'react-icons/hi2';
import { TbHomeUp } from 'react-icons/tb';

const Arrow = () => {
  const [showArrow, setShowArrow] = useState(true);
  let lastScrollY = window.scrollY;
  let timeoutId;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowArrow(false);
      } else {
        // Scrolling up
        setShowArrow(true);
      }

      lastScrollY = currentScrollY;

      // Show when scrolling stops
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setShowArrow(true);
      }, 150); // Adjust timing as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
  className={`md:hidden block fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-opacity duration-300 ${
    showArrow ? 'block' : 'hidden'
  }`}
>
  <a href="#" aria-label="Scroll to top">
    <div className="bg-[#64ffda] p-3 md:p-4 rounded-full shadow-lg text-slate-600 font-bold hover:scale-110 transition-transform">
      <TbHomeUp size={22} />
    </div>
  </a>
</div>

  );
};

export default Arrow;
