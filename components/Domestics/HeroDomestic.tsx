import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Bg from '../../public/domestic/Domestics 1.png';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
  heading: string;
  paragraph: string;
  image?: string | StaticImport;
}

const HeroDomestic: NextPage<Props> = ({ heading, paragraph, image }) => {
  return <div className="heroAboutUs relative w-full h-[50vh]">

    <div className="absolute inset-0">
      <Image src={image || Bg} fill={true} objectFit='cover' alt='Background Image' />
    </div>

    <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-6">{heading}</h1>
        <p className="text-white text-lg">{paragraph}</p>
      </div>
    </div>
  </div>
}

export default HeroDomestic
