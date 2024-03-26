import React from "react";
import { url } from "inspector";
// import bg from "../../public/TourPackage/heroimg.png";
import bg from "../../public/home/bg.png"
import Image from "next/image";

const ContactusHero = ()=>{
    return(
        <div className="w-full h-[50vh]  " >
            <div className=" w-full  h-[90%]  relative">

                
         
            <div className="absolute inset-0 z-0">
                <Image src={bg} alt="background image" layout="fill"  />
            </div>
            <div className="absolute flex justify-center items-center z-10 flex-col w-full h-full">
            <p className="text-4xl font-bold text-white text-center ">Contact Us</p>
                <p className="text-white text-lg"> <span className='text-blue-500'> Home</span> &gt; Contact Us</p>
            </div>
           
            </div>
            

        </div>
    )
}
export default ContactusHero;