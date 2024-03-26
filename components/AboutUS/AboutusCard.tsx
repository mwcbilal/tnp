"use client"
import React, { useState } from 'react';
import defaultIcon from '../../public/aboutus/Clip path group.png';
import hoverIcon from '../../public/aboutus/whiteicon.png';
import Image from 'next/image';

const AboutUsCard = ({ heading, text }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[17rem] rounded overflow-hidden shadow-lg hover:bg-primary hover:text-white hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-5 py-2">
        <div className="flex justify-start mb-4">
          <Image
            className="w-14 h-14"
            src={isHovered ? hoverIcon : defaultIcon}
            alt="Logo"
          />
        </div>
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-base">{text}</p>
        <button
          className={`${
            isHovered ? 'hover:bg-primary hover:text-white' : 'text-primary'
          } font-bold py-5 rounded`}
        >
          Book Now <span className="ml-2">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default AboutUsCard;
