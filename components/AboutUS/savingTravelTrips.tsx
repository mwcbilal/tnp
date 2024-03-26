// components/ResponsiveLayout.js

import React from 'react';
import Image from 'next/image';
import Bg from '../../public/aboutus/img2.png';
import icon1 from '../../public/aboutus/plane 2.png';
import icon2 from '../../public/aboutus/travel-and-tourism 1.png';
import icon3 from '../../public/aboutus/location 1.png';
import { Yesteryear } from "next/font/google";
const inter = Yesteryear({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal']
})

const SavingTravelTrips = () => {
    return (
        <div className="container  mx-auto flex flex-col lg:flex-row lg:items-center justify-center  my-16 w-[90%]">
            <div className="lg:w-1/2 flex justify-center w-full  mb-4 lg:mb-0 bg-yellow-400">
                <Image src={Bg} alt="Image" className="lg:w-full  " />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
                <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">Best money - saving <br></br> <span className={`text-primary text-4xl ${inter.className}`}> Travel</span>  Trips</h2>
                <p className="mb-4 text-center lg:text-left">See how I helped real readers plan, save and go on the trip of lifetime. And get <span className=''> actionable steps you can use to travel anywhere</span>  no matter your income or where you’re from!</p>



                <div className='flex justify-center lg:justify-normal items-center'>

                    <button className="bg-primary text-white py-2 px-5 rounded">DOWNLOAD </button>
                </div>
            </div>
        </div>
    );
};

export default SavingTravelTrips;
