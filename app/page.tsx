'use client';

import { Button, Modal } from 'antd';
import ArrowLeft from '../public/home/arrLeft (1).png'
import PlanePath1 from '../public/home/arrLeft (2).png'
import PlanePath2 from '../public/home/arrLeft (3).png'
import PlanePNG from '../public/home/plane.png'
import PlanePNG2 from '../public/home/Plane2.png'
import Image from "next/image";
import { useState } from "react";
import TestimonialBackground from "../public/home/termonials_bg.png";
import Hike from "../public/home/Hike.png";
import Feedback from "../public/home/feedback 1.png";
import Path from "../public/home/path.png";
import MountainImage from "../public/home/mountain 1.png";
import Rect1 from "../public/home/Rectangle 19378.png";
import Rect2 from "../public/home/Rectangle 19437.png";
import Rect3 from "../public/home/Rectangle 19438.png";
import Rect4 from "../public/home/Rectangle 19439.png";
import Rect5 from "../public/home/Rectangle 19440.png";
import Rect6 from "../public/home/Rectangle 19441.png";
import FlagMan from "../public/home/Group.png";
import LocationBook from "../public/home/loc.png";
import VideoImage from "../public/home/image.png";
import { Yesteryear } from "next/font/google";
import { FaMapPin, FaRegComments } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { IoIosArrowDown, IoMdTime, IoMdTimer } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoFilterCircleOutline, IoLocation } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import BlueBanner from "../public/home/banner.png";

import img1 from "../public/TourPackage/FeaturedListing/6dayshunzaandnaltar.png";
import img2 from "../public/TourPackage/FeaturedListing/6dayshunzaandskardu.png";
import img3 from "../public/TourPackage/FeaturedListing/6dayssakrduandbasho.png";
import img4 from "../public/TourPackage/FeaturedListing/allgirlstriptokashmir.png";
import img5 from "../public/TourPackage/FeaturedListing/Rectangle 19370 (1).png";
import img6 from "../public/TourPackage/FeaturedListing/Rectangle 19370 (2).png";
import img7 from "../public/TourPackage/FeaturedListing/Rectangle 19370 (3).png";
import img8 from "../public/TourPackage/FeaturedListing/Rectangle 19370.png";

import packbg from "../public/home/package bg.png";
import TourCardPagination from "@/components/Home/TourCardPagination";
import TestimonialCarousel from "@/components/Home/TestimonialCarousel";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
};

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const inter = Yesteryear({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal"],
});

const featuredata = [
    {
        img: img1,
        location: "Pakistan-North",
        title: "6 Days Hunza and Naltar",
        duration: "6days",
        people: 12,
        price: 34000,
        discountedPrice: 31950,
        reviewCount: 1,
        imageCount: 5,
        videoCount: 2
    },
    {
        img: img2,
        location: "Pakistan-North",
        title: "8 days Hunza and Skardu",
        duration: "8days",
        people: 12,
        price: 45000,
        discountedPrice: 42950,
        reviewCount: 1,
        imageCount: 5,
        videoCount: 2
    },
    {
        img: img3,
        location: "Pakistan-North",
        title: "6 days Skardu and Bashu Valley",
        duration: "6days",
        people: 12,
        price: 37000,
        discountedPrice: 34950,
        reviewCount: 1,
        imageCount: 5,
        videoCount: 2
    },
    {
        img: img4,
        location: "Pakistan-North",
        title: "All Girls Trip to Kashmir",
        duration: "7days",
        people: 12,
        price: 32000,
        discountedPrice: 29500,
        reviewCount: 1,
        imageCount: 5,
        videoCount: 2
    },
    {
        img: img5,
        location: "Pakistan-North",
        title: "7 days Hunza and Skardu",
        duration: "7days",
        people: 12,
        price: 37500,
        discountedPrice: 35450,
        reviewCount: 1,
        imageCount: 5,
        videoCount: 2
    },
    {
        img: img6,
        location: "Pakistan-North",
        title: "6 Days Hunza and Naltar",
        duration: "6days",
        people: 12,
        price: 37500,
        discountedPrice: 37500,
        reviewCount: 1,
          imageCount: 5,
        videoCount: 2
    },
    {
        img: img7,
        location: "Pakistan-North",
        title: "8 days Skardu and Bashu",
        duration: "8days",
        people: 12,
        price: 32000,
        discountedPrice: 20987,
        reviewCount: 1,
        imageCount: 5,
        videoCount: 2
    },
    {
        img: img8,
        location: "Pakistan-North",
        title: "7 Days Hunza and Fairy Meadows",
        duration: "7days",
        people: 12,
        price: 37500,
        discountedPrice: 35450,
        reviewCount: 1,
        imageCount: 5,
        videoCount: 2
    },
];

const testimonialData = [
    {
        name: "williamson",
        desc: " The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking",
    },
    {
        name: "williamson",
        desc: " The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking",
    },
    {
        name: "williamson",
        desc: " The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking",
    },
    {
        name: "williamson",
        desc: " The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking",
    },
];

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const cardsPerPage = 3;

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + cardsPerPage, featuredata.length - 1)
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
    };
    return (
        <div className="w-full bg-white min-w-mi">
            <Modal title="Video" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className="">
                <div className="flex h-96 justify-center items-center">
                    <video className='w-full' controls>
                        <source src="mov_bbb.mp4" type="video/mp4" />
                            <source src="mov_bbb.ogg" type="video/ogg" />
                                Your browser does not support HTML video.
                            </video>
                        </div>
                    </Modal>
                    <div className="lg:h-[43rem] md:h-[30rem]   bg-gradient-to-r from-[rgba(0,0,0,0.8)] hero-bg to-[rgba(0,0,0,0.3)] w-full z-2 h-96">
                        <div className="w-full h-full md:py-0 py-10 flex items-center justify-center   bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)]">
                            <div className="flex items-center relative  flex-col">
                                <Image
                                    src={PlanePath2}
                                    alt='plane'
                                    className='absolute top-[-2rem] w-40 h-32 left-0'
                                />
                                <p className={`text-primary text-lg ${inter.className}`}>
                                    Explore the world
                                </p>
                                <div className="my-2 flex flex-col items-center">
                                    <h1 className="text-3xl font-bold text-white">
                                        Tour{" "}
                                        <span className={`text-primary ${inter.className}`}>
                                            {" "}
                                            Travel{" "}
                                        </span>{" "}
                                        and
                                    </h1>
                                    <h1 className="text-3xl font-bold text-white">
                                        Adventure <span className=""> Camping </span>
                                    </h1>
                                </div>
                                <div className="flex my-3 flex-col md:flex-row md:mx-5 bg-white text-black flex-wrap  rounded px-4 py-4">
                                    <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <FaMapPin className="text-[#FBAD17] text-xl" />
                                            </div>
                                            <div>
                                                <p>Destination</p>
                                                <p className="text-xs text-gray-500">
                                                    Melbourne, Australia
                                                </p>
                                            </div>
                                        </div>
                                        <IoIosArrowDown className="ms-8" />
                                    </div>
                                    <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

                                    <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <GiMountainClimbing className="text-[#FBAD17] text-xl" />
                                            </div>
                                            <div>
                                                <p>Type</p>
                                                <p className="text-xs text-gray-500">Booking type</p>
                                            </div>
                                        </div>
                                        <IoIosArrowDown className="ms-8" />
                                    </div>

                                    <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

                                    <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <IoMdTimer className="text-[#FBAD17] text-xl" />
                                            </div>
                                            <div>
                                                <p>Duration</p>
                                                <p className="text-xs text-gray-500">2-4 days tour</p>
                                            </div>
                                        </div>
                                        <IoIosArrowDown className="ms-8" />
                                    </div>

                                    <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

                                    <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <RxAvatar className="text-[#FBAD17] text-xl" />
                                            </div>
                                            <div>
                                                <p>Guests</p>
                                                <p className="text-xs text-gray-500">0</p>
                                            </div>
                                        </div>
                                        <IoIosArrowDown className="ms-8" />
                                    </div>

                                    <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>
                                    <div className="flex mx-2 justify-between items-center">
                                        <div className="me-2">
                                            <IoFilterCircleOutline className="text-[#FBAD17] text-3xl" />
                                        </div>
                                        <div className="bg-[#FBAD17] md:w-auto -full text-center cursor-pointer text-white rounded-full px-3 py-1">
                                            Search
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center flex-wrap md:flex-nowrap my-5 items-start ">
                                    <div className="flex md:mx-5 md:w-full w-[320px] items-center">
                                        <FaCircleCheck className="mx-2 text-primary" />
                                        <p className="text-sm text-white">
                                            Easy & Fast - Book a Car in 120 minutes
                                        </p>
                                    </div>
                                    <div className="flex md:mx-5  md:w-full text-white w-[320px] items-center">
                                        <FaCircleCheck className="mx-2 text-primary" />
                                        <p className="text-sm">Best Price with Quality Service</p>
                                    </div>
                                    <div className="flex md:mx-5  md:w-full w-[320px] text-white items-center">
                                        <FaCircleCheck className="mx-2 text-primary" />
                                        <p className="text-sm">Choose from a Wide Variety of Cars</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex px-10 my-32 justify-center flex-wrap w-full bg-white">
                        <div className=" md:w-1/2  w-full my-5 flex justify-center items-center" >
                            <Image src={VideoImage} onClick={showModal} className="w-3/5 cursor-pointer" alt="Video Image" />
                        </div>
                        <div className=" md:w-2/5 w-full flex my-5 justify-center ">
                            <div>
                                <p className="text-black my-3">Explore the world</p>
                                <h1 className="text-black text-3xl my-1 font-bold">
                                    Great Opportunity For
                                </h1>
                                <h1 className="text-black text-3xl my-1 font-bold">
                                    <span className={`${inter.className} text-primary text-[3rem]`}>
                                        {" "}
                                        adventure{" "}
                                    </span>
                                    & Travels
                                </h1>

                                <p className="text-gray-400 my-7">
                                    Welcome to our Print 128 website! We are a professional and
                                    reliable printing company that offers a wide range of printing
                                    services to
                                </p>

                                <div className="w-4/5 flex-col md:flex-row flex justify-between">
                                    <div>
                                        <div className="h-14">
                                            <Image src={FlagMan} alt="..." />
                                        </div>
                                        <p className="text-black font-bold">Trusted travel guide</p>
                                        <p className="text-gray-500 text-xs">
                                            Welcome to our Print 128 wesit! company that offers a wide
                                            range
                                        </p>
                                    </div>
                                    <div className="mx- my-5 md:my-0">
                                        <div className="h-14">
                                            <Image src={LocationBook} alt="..." />
                                        </div>
                                        <p className="text-black font-bold">Personalized Trips</p>
                                        <p className="text-gray-500 text-xs">
                                            Welcome to our Print 128 wesit! company that offers a wide
                                            range
                                        </p>
                                    </div>
                                </div>

                                <div className="md:w-4/5 flex justify-between flex-col md:flex-row my-5">
                                    <div className="md:w-1/2">
                                        <button className="bg-primary text-white px-4 py-2 shadow -full text-sm">
                                            More About us
                                        </button>
                                    </div>
                                    <div className="mx- md:w-1/2 my-5 md:my-0">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 rounded-full bg-gray-400 border-2"></div>
                                            <div className="mx-2">
                                                <p className="text-black text-sm">Mehedii. H</p>
                                                <p className="text-xs text-primary">Ceo & Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <IoLocation className="text-primary" />
                                    <p className="ms-2 text-primary text-sm">
                                        Checkout Beautiful Places Arround the World.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center flex-wrap flex-col  w-full bg-white lg:mb-40">
                        <div className="w-full flex flex-col items-center">
                            <h1 className="text-black font-bold text-center text-3xl">
                                Amazing Featured Tour
                            </h1>
                            <h2
                                className={`font-bold text-gray-400 text-center my-2 text-3xl ${inter.className}`}
                            >
                                Package
                            </h2>
                        </div>

                        <div className="flex flex-wrap justify-center">
                            <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl border text-center mx-2 text-black">
                                New York
                            </div>
                            <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl  border text-center mx-2 text-black">
                                London
                            </div>
                            <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl border text-center mx-2 text-black">
                                Tokyo
                            </div>
                            <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl border text-center mx-2 text-black">
                                Los Angelas
                            </div>
                            <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl  border text-center mx-2 text-black">
                                Manila
                            </div>
                        </div>
                        <div className="relative w-full  mt-8 z-0 ">
                            <div className="absolute z-10 md:block hidden w-full top-40 flex justify-center">
                                <Image src={packbg} alt="bg image here" className=' w-full' />
                            </div>
                            <div className="relative z-20 w-full flex flex-col items-center gap-8 justify-center">
                                <div className="w-full px-2">
                                    <TourCardPagination
                                        featuredata={featuredata}
                                        direction="row"
                                        cardsPerPage={4}
                                    />
                                </div>

                                <div className="md:w-1/2 flex justify-center">
                                    <button className="bg-primary text-white px-4 py-2 shadow -full text-sm">
                                        View All Tour
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex px-10 mt-10 mb-32 2xl:mt-[25rem] justify-center flex-wrap flex-col items-center w-full bg-white">
                        <div className='mb-10 relative'>
                            <h2
                                className={`font-bold text-primary text-center my-2 text-3xl ${inter.className}`}
                            >
                                Package
                            </h2>
                            <h1 className="text-black  text-center font-bold text-3xl">
                                Popular destinations
                            </h1>
                            <Image
                                src={PlanePath1}
                                alt='plane'
                                className='absolute top-[-0rem] w-40 h-32 left-[-10rem]'
                            />

                        </div>

                        <div className="flex flex-col flex-w w-full relative">
                            <Image
                                src={PlanePNG2}
                                className="absolute z-[200 top-[-15%] hidden md:block w-32 h-20  right-[8%] "
                                alt="rect1"
                            />
                            <div className="flex relative flex-wrap justify-center">
                                <div className="mx-4 relative md:w-96 w-full h-60 my-2">
                                    <Image
                                        src={Rect1}
                                        className="  w-full md:w-96 absolute  top-0 left-0 h-60"
                                        alt="rect1"
                                    />
                                    <div className="w-full md:w-96 absolute  top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]"></div>
                                    <div className="absolute text-white bg-[#F7921E] right-3 top-3 text-xs px-3 py-1 rounded">
                                        3 Tours
                                    </div>
                                    <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                        <p className={`${inter.className} text-white`}>Travel to</p>
                                        <p className={` text-white`}>Switzerland</p>
                                    </div>
                                </div>
                                <div className="mx-4 relative md:w-72 w-full my-2 h-60">
                                    <Image
                                        src={Rect2}
                                        className=" w-full md:w-72  absolute h-60 top-0 left-0"
                                        alt="rect1"
                                    />
                                    <div className="absolute w-full md:w-72  top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]"></div>
                                    <div className="absolute bg-[#F7921E] text-white right-3 top-3 text-xs px-3 py-1 rounded">
                                        3 Tours
                                    </div>
                                    <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                        <p className={`${inter.className} text-white`}>Travel to</p>
                                        <p className={` text-white`}>Australia</p>
                                    </div>
                                </div>
                                <div className="mx-4 my-2 relative md:w-48 w-full  h-60">
                                    <Image
                                        src={Rect3}
                                        className=" md:w-48 w-full  absolute h-60 top-0 left-0"
                                        alt="rect1"
                                    />
                                    <div className=" absolute  md:w-48 w-full top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]"></div>
                                    <div className="absolute bg-[#F7921E] right-3 text-white top-3 text-xs px-3 py-1 rounded">
                                        3 Tours
                                    </div>
                                    <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                        <p className={`${inter.className} text-white`}>Travel to</p>
                                        <p className={` text-white`}>London</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 justify-center">
                                <div className="mx-4  relative w-full md:w-48  h-60">
                                    <Image
                                        src={Rect4}
                                        className=" w-full md:w-48 absolute h-60 top-0 left-0"
                                        alt="rect1"
                                    />
                                    <div className=" absolute w-full md:w-48 top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]"></div>
                                    <div className="absolute bg-[#F7921E] right-3 top-3 text-xs text-white px-3 py-1 rounded">
                                        3 Tours
                                    </div>
                                    <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                        <p className={`${inter.className} text-white`}>Travel to</p>
                                        <p className={` text-white`}>Thailand</p>
                                    </div>
                                </div>
                                <div className="mx-4 relative w-full md:w-96 my-2 h-60">
                                    <Image
                                        src={Rect5}
                                        className="md:w-96 w-full absolute h-60 top-0 left-0"
                                        alt="rect1"
                                    />
                                    <div className="w-full md:w-96 absolute  top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]"></div>
                                    <div className="absolute bg-[#F7921E] right-3 top-3 text-xs px-3 text-white py-1 rounded">
                                        3 Tours
                                    </div>
                                    <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                        <p className={`${inter.className} text-white`}>Travel to</p>
                                        <p className={` text-white`}>Morocco</p>
                                    </div>
                                </div>
                                <div className="mx-4 relative md:w-72 my-2 w-full  h-60">
                                    <Image
                                        src={Rect6}
                                        className="md:w-72 w-full absolute h-60 top-0 left-0"
                                        alt="rect1"
                                    />
                                    <div className="md:w-72 w-full absolute  top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]"></div>
                                    <div className="absolute bg-[#F7921E] right-3 top-3 text-xs px-3 text-white py-1 rounded">
                                        3 Tours
                                    </div>
                                    <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                        <p className={`${inter.className} text-white`}>Travel to</p>
                                        <p className={` text-white`}>Singapore</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex px-10 my-32 flex-col md:flex-row justify-start  flex-wrap  items-start w-full bg-white">
                        <div className="md:w-3/12 my-10 bgblue-400">
                            <h1 className="text-black font-bold text-3xl">Tour Packages</h1>
                            <div className="flex mt-3">
                                <div className="w-20 px-8 md:px-0 flex bg-white flex-col items-center justify-center h-20 shadow-2xl border">
                                    <p className="text-primary text-2xl font-bold">25%</p>

                                    <p className="text-primary text-xs">Off</p>
                                </div>
                                <div className="md:w-1/2 g-blue-500 w- mx-5 text-xs text-black">
                                    Discover Great <span className="text-primary"> Discount </span>{" "}
                                    Deals Around the World
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row mt-3">
                                <div className="w-20 text-black text-base font-bold">Hurry Up!</div>
                                <div className="md:w-1/2 md:mx-5 my-5 md:my-0 text-xs text-black">
                                    <div className="flex md:w-full justify-between">
                                        <div className="flex flex-col h-12 px- justify-between ">
                                            <p className="text-primary text-center">845</p>
                                            <p>Days</p>
                                        </div>
                                        <div className="flex flex-col h-12 px-3 justify-between ">
                                            <p className="text-primary text-center">213</p>
                                            <p>Houres</p>
                                        </div>
                                        <div className="flex flex-col h-12 px-3 justify-between ">
                                            <p className="text-primary text-center">347</p>
                                            <p>Minute</p>
                                        </div>
                                        <div className="flex flex-col h-12 px-3 justify-between ">
                                            <p className="text-primary text-center">59</p>
                                            <p>Second</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center md:block">
                                <button className="bg-primary text-white px-5 py-2 mt-12 text-base shadow-2xl rounded">
                                    Explore More
                                </button>
                            </div>
                        </div>

                        <div className="md:w-9/12 w-full relative">

                            <Image
                                className="absolute top-[-5rem] hidden md:block left-0 z-0"
                                src={ArrowLeft}
                                alt="bluebanner"
                            />
                            <TourCardPagination featuredata={featuredata} direction="col" />
                        </div>
                    </div>

                    <div className="flex relative lg:px-60 bg- px-5 my-20 justify-start w-full flex-wrap items-start">
                        <Image
                            className="absolute top-[-3rem] left-0 w-full z-0 min-h-[18rem]"
                            src={BlueBanner}
                            alt="bluebanner"
                        />

                        <div className="flex relative z-10 bg- items-center w-full flex-col md:flex-row my-10 justify-between">
                            <div className="flex  bg-primary items-center md:text-3xl">
                                <Image src={MountainImage} alt="mountain" />
                                <h1 className="mx-5 text-white font-bold text-3xl">
                                    Ready to adventure and enjoy natural
                                </h1>
                            </div>
                            <button className="bg-white text-sm md:my-0 mt-5 md:px-5 px-3 py-2 shadow text-primary">
                                Let&apos;s get started
                            </button>
                        </div>

                        <div className="flex relative z-10 md:justify-between flex-col md:flex-row  items-center flex-wrap  w-full">
                            <div className="flex items-center flex-col h-60 my-7 w-52 justify-around bg-white border px-15 rounded-2xl py-5">
                                <Image src={Hike} alt="hiking" />
                                <p className="text-primary text-xl text-center">5489</p>
                                <p className="text-black font-bold text-center">
                                    Happy <br /> Travelers
                                </p>
                            </div>

                            <div className="flex relative z-10 items-center flex-col h-60 my-7 w-52 bg-white justify-around border px-15 rounded-2xl py-5">
                                <Image src={Feedback} alt="hiking" />
                                <p className="text-primary text-xl text-center">99.9%</p>
                                <p className="text-black font-bold text-center">
                                    Total Positive <br /> Reviews
                                </p>
                            </div>
                            <div className="flex items-center relative z-10 flex-col h-60 w-52 bg-white my-7 justify-around border px-15 rounded-2xl py-5">
                                <Image src={Path} alt="hiking" />
                                <p className="text-primary text-xl text-center">190+</p>
                                <p className="text-black text-center font-bold">
                                    Tour <br /> Completed
                                </p>
                            </div>

                            <div className="flex items-center flex-col h-60 relative z-10 bg-white w-52 my-7 justify-around border px-15 rounded-2xl py-5">
                                <Image src={Hike} alt="hiking" />
                                <p className="text-primary text-xl text-center">472</p>
                                <p className="text-black text-center font-bold">
                                    Travel <br /> Destinations
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex md:block lg:flex bg-gray-100 flex-col  mt-32  justify- flex-wrap   items-center w-full relative md:h-[40rem]">
                        <Image
                            src={TestimonialBackground}
                            alt="bg"
                            className="w-full absolute top-0 left-0 md:h-[40rem]"
                        />
                        <div className="w-full z-20 ">
                            <Image
                                src={PlanePNG}
                                alt="bg"
                                className=" w-20 h-20 z-0 absolute bottom-[14%] left-[10%] md:bottom-[20%] md:left-[10%] "
                            />
                            <div className="flex flex-col gap-6 my-10 bgopacity-50 py-6 z-30 justify-center items-center">
                                <h1 className="text-3xl text-black  text-center font-bold">
                                    Testimonials
                                </h1>
                                <div className="w-full my-10  px-2 ">
                                    <TestimonialCarousel />
                                </div>
                                <button className="px-8 relative z-10 py-3 shadow-2xl bg-primary text-white text-sm ">
                                    VIEW MORE
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex md:block lg:flex flex-col md:px-10 mt-20  justify- flex-wrap  items-center w-full relative md:h-[40rem]">
                        <p className="text-[#FBAD17] text-sm text-center">Explore the world</p>
                        <h1 className="text-black sm:text-center text-center text-3xl font-bold my-2">
                            Latest News & Articles
                        </h1>
                        <h1 className="text-black text-3xl font-bold text-center">
                            <span className={`${inter.className} text-primary}`}>from</span>
                            The Blog
                        </h1>

                        <div className="flex justify-center mt-10 flex-wrap w-full">
                            <div className="h-[22rem] w-[17rem] m-5 bg-gray-100 shadow-2xl">
                                <div className="w-full relative h-1/2 ">
                                    <Image src={Rect1} alt="card" className="w-full h-full" />
                                    <div className="absolute px-3 py-1 bottom-0 left-0 text-xs bg-[#FBAD17]">
                                        Travelling
                                    </div>
                                </div>

                                <div className="p-3">
                                    <div className="flex">
                                        <div className="flex text-black text-xs items-center">
                                            <CiCalendar className="text-[#FBAD17] me-1" />
                                            02 Apr 2021
                                        </div>
                                        -
                                        <div className="flex text-black text-xs items-center">
                                            <FaRegComments className="text-[#FBAD17] me-1" />
                                            Comments (03)
                                        </div>
                                    </div>

                                    <h3 className="text-lg text-black font-bold ">
                                        The 8 best things about Touristy
                                    </h3>
                                    <p className="text-gray-400 my-1 text-xs">
                                        Business is the activity of making on cing or buying and selling
                                        pro
                                    </p>
                                    <p className="text-black my-2 text-xs">Read More</p>
                                </div>
                            </div>

                            <div className="h-[22rem] w-[17rem] m-5 bg-gray-100 shadow-2xl">
                                <div className="w-full relative h-1/2 ">
                                    <Image src={Rect1} alt="card" className="w-full h-full" />
                                    <div className="absolute px-3 py-1 bottom-0 left-0 text-xs bg-[#FBAD17]">
                                        Travelling
                                    </div>
                                </div>

                                <div className="p-3">
                                    <div className="flex">
                                        <div className="flex text-black text-xs items-center">
                                            <CiCalendar className="text-[#FBAD17] me-1" />
                                            02 Apr 2021
                                        </div>
                                        -
                                        <div className="flex text-black text-xs items-center">
                                            <FaRegComments className="text-[#FBAD17] me-1" />
                                            Comments (03)
                                        </div>
                                    </div>

                                    <h3 className="text-lg text-black font-bold ">
                                        The 8 best things about Touristy
                                    </h3>
                                    <p className="text-gray-400 my-1 text-xs">
                                        Business is the activity of making on cing or buying and selling
                                        pro
                                    </p>
                                    <p className="text-black my-2 text-xs">Read More</p>
                                </div>
                            </div>

                            <div className="h-[22rem] m-5 w-[17rem] bg-gray-100 shadow-2xl">
                                <div className="w-full relative h-1/2 ">
                                    <Image src={Rect1} alt="card" className="w-full h-full" />
                                    <div className="absolute px-3 py-1 bottom-0 left-0 text-xs bg-[#FBAD17]">
                                        Travelling
                                    </div>
                                </div>

                                <div className="p-3">
                                    <div className="flex">
                                        <div className="flex text-black text-xs items-center">
                                            <CiCalendar className="text-[#FBAD17] me-1" />
                                            02 Apr 2021
                                        </div>
                                        -
                                        <div className="flex text-black text-xs items-center">
                                            <FaRegComments className="text-[#FBAD17] me-1" />
                                            Comments (03)
                                        </div>
                                    </div>

                                    <h3 className="text-lg text-black font-bold ">
                                        The 8 best things about Touristy
                                    </h3>
                                    <p className="text-gray-400 my-1 text-xs">
                                        Business is the activity of making on cing or buying and selling
                                        pro
                                    </p>
                                    <p className="text-black my-2 text-xs">Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
}
