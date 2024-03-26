import React from 'react';
import Image from 'next/image';
import InstagramIcon from '../../public/aboutus/insta.png'; // assuming this is your Instagram icon

const InstaCard = ({ src }:any) => {
  return (
    <div className="relative w-[14rem] lg:w-[10rem] xl:w-[12rem] h-[14rem] hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-sm hover:rounded-sm shadow-md">
      <div className="w-full h-full relative">
        <Image src={src} className="w-full h-full object-cover" alt="Image here" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 flex justify-center items-center">
          <Image src={InstagramIcon} alt="Instagram Icon" />
        </div>
      </div>
    </div>
  );
};

export default InstaCard;
