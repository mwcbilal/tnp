import React from 'react';
import Image from 'next/image'; 
import Bg from '../../public/home/bg.png';

const HeroAboutUs = () => {
  return (
    <div className="heroAboutUs relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={Bg} layout="fill" objectFit="cover" alt='Background Image' />
      </div>
      {/* Gray overlay */}
      <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Centered content */}
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold mb-6">ABOUT US</h1>
          <p className="text-white text-lg"> <span className='text-blue-500'> Home</span> &gt; About Us</p>
        </div>
      </div>
    </div>
  );
};

export default HeroAboutUs;
