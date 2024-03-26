import React from 'react';
import Image from 'next/image';
import Bg1 from '../../public/aboutus/booknow.png';
import Bg2 from '../../public/aboutus/booknow.png';
import Bg3 from '../../public/aboutus/booknow.png';
import Bg4 from '../../public/aboutus/booknow.png';
import Bg5 from '../../public/aboutus/booknow.png';

const CarouselSlider = () => {
  return (
    <div id="animation-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 bg-gray-300">
        {/* Item 1 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          {/* Specify the width and height for the image */}
          <Image src={Bg1} width={500} height={500} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> 
        </div>
        {/* Item 2 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <Image src={Bg2} width={500} height={500} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item="active">
          <Image src={Bg3} width={500} height={500} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <Image src={Bg4} width={500} height={500} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <Image src={Bg5} width={500} height={500} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      </div>
      {/* Slider controls */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <svg className="w-4 h-4 text-dark-yellow dark:text-dark-yellow rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
    </svg>
    <span className="sr-only">Previous</span>
  </span>
</button>
<button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <svg className="w-4 h-4 text-dark-yellow dark:text-dark-yellow rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
    </svg>
    <span className="sr-only">Next</span>
  </span>
</button>

    </div>
  );
};

export default CarouselSlider;
