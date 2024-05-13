import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import DLeft from "../../public/home/dleft.png";
import DDown from "../../public/home/Frame.png";
import Quotation from "../../public/home/quotation.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { getTestimonials } from "@/app/actions/testimonials";
import TestimonialBackground from "../../public/home/termonials_bg.png";
import PlanePNG from "../../public/home/plane.png";
import { Spin } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "black",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
};

const TestimonialCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    // console.log("currentSlide", currentSlide);
  };
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false); 

  const fetchData = async () => {
    setLoading(true);
    let res = await getTestimonials();
    setTestimonials(res.data.data);
    // console.log("ye hay testimonials", res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("testimonials here", testimonials);

  const visibleTestimonials = showAll ? testimonials:testimonials.slice(0, 2); 

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (

<div className={`flex md:block lg:flex bg-gray-100 flex-col  mt-32  justify- flex-wrap items-center w-full relative ${showAll? "md:h-[57rem]": "md:h-[40rem]"} `}>
        <Image
          src={TestimonialBackground}
          alt="bg"
          className="w-full absolute top-0 left-0 md:h-[57rem]"
        />
        <div className="w-full z-20 ">
          <Image
            src={PlanePNG}
            alt="bg"
            className=" w-20 h-20 md:w-24 md:h-24 z-0 absolute bottom-[14%] left-[10%] md:bottom-[20%] md:left-[10%] "
          />
          <div className="flex flex-col gap-6 my-10 bgopacity-50 py-6 z-30 justify-center items-center">
            <h1 className="text-3xl text-black  text-center md:text-[2.7reml] md:leading-[2.4rem] font-bold">
              Testimonials
            </h1>
            <div className="w-full my-10  px-2 ">
            {testimonials.length>0 ? (  <div className="flex flex-wrap justify-center items-center">
      {visibleTestimonials.map((testimonial, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-[35%] px-4 py-4 sm:h-full">
          <div className="relative w-full h-[17rem] bg-white border rounded-md">
            <Image
              src={DLeft}
              className="absolute left-0 top-20 h-[8rem]"
              alt="dleft"
            />
            <Image
              src={Quotation}
              className="absolute right-10 top-10"
              alt="quotation"
            />
            <Image
              src={DDown}
              className="absolute bottom-0 right-10"
              alt="ddown"
            />

            <div className="px-10 py-10">
              <div className="flex items-center my-3">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="ml-3 text-black text-lg font-bold">
                  {testimonial.testimonial_user_name}
                </div>
              </div>
              <div className="text-black overflow-hidden text-base">
                {testimonial.testimonial_description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>):( <div className="w-full flex justify-center mt-4 h-12 pt-2">
                <Spin size="large" />
              </div>)}
          
    {!showAll ? (
  <div className="flex justify-center">
    <button
      className="mt-5 px-8 relative z-10 rounded py-3 shadow-2xl bg-primary text-white text-sm"
      onClick={handleShowAll}
    >
      VIEW MORE
    </button>
  </div>
) : (
  <div className="flex justify-center">
    <button
      className="mt-5 px-8 relative z-10 rounded py-3 shadow-2xl bg-primary text-white text-sm"
      onClick={() => setShowAll(false)}
    >
      VIEW LESS
    </button>
  </div>
)}
            </div>
          </div>
        </div>
      </div>
     
  );
};

export default TestimonialCarousel;
