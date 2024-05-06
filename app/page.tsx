"use client";

import Rings from "../public/home/rungs.png";
import BannerDesign from "../public/home/bgleft.png";
import UselessImage from "../public/home/useless.png";
import { Button, Modal, Select } from "antd";
import ArrowLeft from "../public/home/arrLeft (1).png";
import PlanePath1 from "../public/home/arrLeft (2).png";
import PlanePath2 from "../public/home/arrLeft (3).png";
import PlanePNG from "../public/home/plane.png";
import PlanePNG2 from "../public/home/Plane2.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import TestimonialBackground from "../public/home/termonials_bg.png";
import BadgeImage from "../public/home/_x33_8-Award_symbol.png";
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
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaMapPin,
  FaRegComments,
} from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import {
  IoIosArrowDown,
  IoMdSearch,
  IoMdTime,
  IoMdTimer,
} from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoFilterCircleOutline, IoLocation } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { CiCalendar, CiSearch } from "react-icons/ci";
import BlueBanner from "../public/home/banner.png";
import SydneyImage from "../public/home/sydney.png";
import GaunImage from "../public/home/gaun.png";
import JungleImage from "../public/home/jungle.png";

import NaltarImage from "../public/home/naltar.png";
import SkarduImage from "../public/home/skardu.png";
import BashaImage from "../public/home/basha.png";
import GalsImage from "../public/home/gals.png";

// import img1 from "../public/TourPackage/FeaturedListing/6dayshunzaandnaltar.png";
// import img2 from "../public/TourPackage/FeaturedListing/6dayshunzaandskardu.png";
// import img3 from "../public/TourPackage/FeaturedListing/6dayssakrduandbasho.png";
// import img4 from "../public/TourPackage/FeaturedListing/allgirlstriptokashmir.png";
import img5 from "../public/TourPackage/FeaturedListing/Rectangle 19370 (1).png";
import img6 from "../public/TourPackage/FeaturedListing/Rectangle 19370 (2).png";
import img7 from "../public/TourPackage/FeaturedListing/Rectangle 19370 (3).png";
import img8 from "../public/TourPackage/FeaturedListing/Rectangle 19370.png";

import packbg from "../public/home/package bg.png";
import TourCardPagination from "@/components/Home/TourCardPagination";
import TestimonialCarousel from "@/components/Home/TestimonialCarousel";
import NewCustomerOfferModel from "@/components/Home/NewCustomerOfferModel";
import Timer from "@/components/Home/Timer";
// import { useRouter } from "next/router";
import { fetchUserById } from "@/apiFunctions/authentication";
// import { getUser } from "./pages/api/utils";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/lib/store";
import { setUserData } from "@/lib/feature/user/userSlice";
import { getTourPackagesByCategory } from "./actions/tourpackages";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
// };

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

const inter = Yesteryear({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const featuredata2 = [
  {
    img: SydneyImage,
    location: "Sydney",
    title: "Modern Sydney",
    duration: "5days",
    people: 12,
    price: 16900,
    discountedPrice: 19900,
    reviewCount: 1,
  },
  {
    img: GaunImage,
    location: "Pakistan-North",
    title: "Country Name",
    duration: "5days",
    people: 12,
    price: 16900,
    discountedPrice: 19900,
    reviewCount: 1,
  },
  {
    img: JungleImage,
    location: "Country Name",
    title: "Country Name",
    duration: "7days",
    people: 12,
    price: 32000,
    discountedPrice: 20987,
    reviewCount: 1,
  },
];

const featuredata = [
  {
    img: NaltarImage,
    location: "Pakistan-North",
    title: "6 days Hunza & Naltar",
    duration: "6days",
    people: 12,
    price: 32000,
    discountedPrice: 20987,
    reviewCount: 1,
  },
  {
    img: SkarduImage,
    location: "Pakistan-North",
    title: "6 days Hunza & Skardu",
    duration: "7days",
    people: 12,
    price: 34000,
    discountedPrice: 31950,
    reviewCount: 1,
    imageCount: 5,
    videoCount: 2,
  },
  {
    img: BashaImage,
    location: "Pakistan-North",
    title: "6 days Skardu & Bashu",
    duration: "7days",
    people: 12,
    price: 45000,
    discountedPrice: 42950,
    reviewCount: 1,
    imageCount: 5,
    videoCount: 2,
  },
  {
    img: GalsImage,
    location: "Pakistan-North",
    title: "All girls trip to Kashmir",
    duration: "7days",
    people: 12,
    price: 32000,
    discountedPrice: 29500,
    reviewCount: 1,
    imageCount: 5,
    videoCount: 2,
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
    videoCount: 2,
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
    videoCount: 2,
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
    videoCount: 2,
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
    videoCount: 2,
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [bestSellerData, setBestSellerData] = useState([]);
  console.log("Best Seller Data", bestSellerData);

  const [currentIndex, setCurrentIndex] = useState(0);
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  async function getUserById(id: any) {
    const user = await fetchUserById(id);
    console.log(user);
    dispatch(setUserData(user?.data?.userData));
  }

  useEffect(() => {
    const getPackages = async () => {
      try {
        const response = await getTourPackagesByCategory(
          "/tourpackages/filter?limit=8&offset=0&bestseller=true&featured=true"
        );
        console.log("Home API Response:", response);
        if (response) {
          setBestSellerData(response.data);
        } else {
          console.error("Invalid API response:", response); // Log invalid response for debugging
        }
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors for debugging
      }
    };

    getPackages();
    setTimeout(() => {
      setIsOfferModalOpen(true);
    }, 5000);

    const id = searchParams.get("id");

    if (id) {
      getUserById(id);
    }
  }, []);

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
      <NewCustomerOfferModel />
      <Modal
        title="Video"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className=""
      >
        <div className="flex h-96 justify-center items-center">
          <video className="w-full" controls>
            <source src="mov_bbb.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </div>
      </Modal>
      <div className="lg:h-[43rem] md:h-[30rem]   bg-gradient-to-r from-[rgba(0,0,0,1)] hero-bg to-[rgba(0,0,0,0.3)] w-full z-2 h-96">
        <div className="w-full h-full md:py-0 py-10 flex items-center justify-center relative  bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)]">
          <Image
            src={BannerDesign}
            alt="banner"
            className="absolute z-[2] top-0 w-auto h-full left-0"
          />

          <div className="flex items-center z-[3] relative  flex-col">
            <Image
              src={PlanePath2}
              alt="plane"
              className="absolute top-[-2rem] w-40 h-32 left-0"
            />
            <p className={`text-primary text-2xl ${inter.className}`}>
              Explore the world
            </p>
            <div className="my-2 flex flex-col items-center">
              <h1 className="lg:text-[3.5rem] text-3xl lg:leading-[3rem] font-bold text-white">
                Tour{" "}
                <span className={`text-primary ${inter.className}`}>
                  {" "}
                  Travel{" "}
                </span>{" "}
                and
              </h1>
              <h1 className="lg:text-[3.5rem] lg:leading-[3rem] text-3xl font-bold text-white">
                Adventure <span className=""> Camping </span>
              </h1>
            </div>
            <div className="flex my-3 flex-col md:flex-row md:mx-5 bg-white text-black flex-wrap  rounded px-4 py-2">
              <div className="flex mx-2 w-[15rem] md:w-[10rem] md:w-uto items-center">
                <div className="flex items-center w-full">
                  <div className="me-2">
                    <FaMapPin className="text-[#FBAD17] text-xl" />
                  </div>
                  <div className="w-full">
                    <p>Destination</p>
                    <Select
                      defaultValue="lucy"
                      style={{ height: 20 }}
                      className="w-full g-red-300 border-0 hide-border p-0"
                      options={[{ value: "lucy", label: "New York" }]}
                    />
                  </div>
                </div>
              </div>
              <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[1px]"></div>

              <div className="flex mx-2 w-[15rem] md:w-[10rem] md:w-uto items-center">
                <div className="flex items-center w-full">
                  <div className="me-2">
                    <GiMountainClimbing className="text-[#FBAD17] text-xl" />
                  </div>
                  <div className="w-full">
                    <p>Type</p>
                    <Select
                      defaultValue="lucy"
                      style={{ height: 20 }}
                      className="w-full g-red-300 border-0 hide-border p-0"
                      options={[{ value: "lucy", label: "Booking type" }]}
                    />
                  </div>
                </div>
              </div>

              <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[1px]"></div>

              <div className="flex mx-2 w-[15rem] md:w-[10rem] md:w-uto items-center">
                <div className="flex items-center w-full">
                  <div className="me-2">
                    <IoMdTimer className="text-[#FBAD17] text-xl" />
                  </div>
                  <div className="w-full">
                    <p>Duration</p>
                    <Select
                      defaultValue="lucy"
                      style={{ height: 20 }}
                      className="w-full g-red-300 border-0 hide-border p-0"
                      options={[{ value: "lucy", label: "2-4 days" }]}
                    />
                  </div>
                </div>
              </div>

              <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[1px]"></div>

              <div className="flex mx-2 w-[15rem] md:w-[10rem] md:w-uto items-center">
                <div className="flex items-center w-full">
                  <div className="me-2">
                    <RxAvatar className="text-[#FBAD17] text-xl" />
                  </div>
                  <div className="w-full">
                    <p>Guests</p>
                    <Select
                      defaultValue="lucy"
                      style={{ height: 20 }}
                      className="w-full g-red-300 border-0 hide-border p-0"
                      options={[{ value: "lucy", label: "0" }]}
                    />
                  </div>
                </div>
              </div>

              <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[1px]"></div>
              <div className="flex mx-2 justify-between items-center">
                <div className="me-2">
                  <IoFilterCircleOutline className="text-[#FBAD17] text-3xl" />
                </div>
                <div className="bg-[#FBAD17] flex items-center justify-center md:w-auto -full text-center cursor-pointer text-xs text-white rounded-full px-5 py-2">
                  <IoMdSearch className="me-1 w-5 h-5" />
                  <p>Search</p>
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
        <div className=" md:w-1/2  w-full my-5 flex justify-center items-center">
          <Image
            src={VideoImage}
            onClick={showModal}
            className="w-3/5 cursor-pointer"
            alt="Video Image"
          />
        </div>
        <div className=" md:w-2/5 w-full flex my-5 justify-center ">
          <div>
            <p className="text-primary my-3">Explore the world</p>
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
                <button className="bg-primary text-white px-8 py-4 rounded shadow -full text-sm">
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
          <div className="absolute z-10 md:block w-full top-40 flex justify-center">
            <Image src={packbg} alt="bg image here" className=" w-full" />
          </div>
          <div className="relative z-20 w-full flex flex-col items-center gap-8 justify-center">
            <div className="w-full px-2">
              <TourCardPagination
                featuredata={bestSellerData}
                direction="row"
                cardsPerPage={4}
              />
            </div>

            <div className="md:w-1/2 flex justify-center">
              <button className="bg-primary text-white px-6 rounded py-4 items-center shadow flex -full text-sm">
                VIEW ALL TOURS
                <span className="text-primary bg-white ms-3 rounded-full h-[1rem] content-center w-[1rem] block">
                  &gt;
                </span>
              </button>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-3 mt-10 mb-32 2xl:mt-[25rem] justify-center flex-wrap flex-col items-center w-full bg-white">
        <div className="mb-10 relative">
          <h2
            className={`font-bold text-primary text-center my-2 text-3xl ${inter.className}`}
          >
            Explore the world
          </h2>
          <h1 className="text-black  text-center font-bold text-3xl lg:text-[2.7rem] lg:leading-[2.4rem] ">
            Popular destinations
          </h1>
          <Image
            src={PlanePath1}
            alt="plane"
            className="absolute top-[-0rem] w-40 h-32 left-[-10rem]"
          />
        </div>

        <div className="flex flex-col flex-w w-full relative">
          <Image
            src={Rings}
            className="absolute z-[200 top-[0]  md:block  right-0 "
            alt="rect1"
          />
          <Image
            src={PlanePNG2}
            className="absolute z-[200 top-[-16%] hidden md:block w-46 h-28 right-[8%]  xl:right-[18%] "
            alt="rect1"
          />
          <div className="flex relative flex-wrap justify-center">
            <div className="mx-2 relative md:w-[28rem] w-full h-80 my-1">
              <Image
                src={Rect1}
                className="  w-full md:w-[28rem] absolute  top-0 left-0 h-80"
                alt="rect1"
              />
              <div className="w-full md:w-[28rem] absolute  bottom-0 left-0 h-40 grad2 rounded"></div>
              <div className="absolute text-white bg-[#F7921E] right-3 top-3 text-xs px-3 py-1 rounded">
                3 Tours
              </div>
              <div className="absolute left-3 bottom-3  px-3 py-1 ">
                <p className={`${inter.className} text-white`}>Travel to</p>
                <p className={` text-white`}>Switzerland</p>
              </div>
            </div>
            <div className="mx-2 relative md:w-80 w-full my-1 h-80">
              <Image
                src={Rect2}
                className=" w-full md:w-80  absolute h-80 top-0 left-0"
                alt="rect1"
              />
              <div className="absolute w-full md:w-80  bottom-0 left-0 h-40 grad2 rounded"></div>
              <div className="absolute bg-[#F7921E] text-white right-3 top-3 text-xs px-3 py-1 rounded">
                3 Tours
              </div>
              <div className="absolute left-3 bottom-3  px-3 py-1 ">
                <p className={`${inter.className} text-white`}>Travel to</p>
                <p className={` text-white`}>Australia</p>
              </div>
            </div>
            <div className="mx-2 my-1 relative md:w-60 w-full  h-80">
              <Image
                src={Rect3}
                className=" md:w-60 w-full  absolute h-80 top-0 left-0"
                alt="rect1"
              />
              <div className=" absolute  md:w-60 w-full bottom-0 left-0 h-40 grad2 rounded"></div>
              <div className="absolute bg-[#F7921E] right-3 text-white top-3 text-xs px-3 py-1 rounded">
                3 Tours
              </div>
              <div className="absolute left-3 bottom-3  px-3 py-1 ">
                <p className={`${inter.className} text-white`}>Travel to</p>
                <p className={` text-white`}>London</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap my-1 justify-center">
            <div className="mx-2  relative w-full md:w-60 my-1 h-80">
              <Image
                src={Rect4}
                className=" w-full md:w-60 absolute h-80 top-0 left-0"
                alt="rect1"
              />
              <div className=" absolute w-full md:w-60 bottom-0 left-0 h-40 grad2 rounded"></div>
              <div className="absolute bg-[#F7921E] right-3 top-3 text-xs text-white px-3 py-1 rounded">
                3 Tours
              </div>
              <div className="absolute left-3 bottom-3  px-3 py-1 ">
                <p className={`${inter.className} text-white`}>Travel to</p>
                <p className={` text-white`}>Thailand</p>
              </div>
            </div>
            <div className="mx-2 relative w-full md:w-[28rem] my-1 h-80">
              <Image
                src={Rect5}
                className="md:w-[28rem] w-full absolute h-80 top-0 left-0"
                alt="rect1"
              />
              <div className="w-full md:w-[28rem] absolute  bottom-0 left-0 h-40 grad2 rounded"></div>
              <div className="absolute bg-[#F7921E] right-3 top-3 text-xs px-3 text-white py-1 rounded">
                3 Tours
              </div>
              <div className="absolute left-3 bottom-3  px-3 py-1 ">
                <p className={`${inter.className} text-white`}>Travel to</p>
                <p className={` text-white`}>Morocco</p>
              </div>
            </div>
            <div className="mx-2 relative md:w-80 my-1 w-full  h-80">
              <Image
                src={Rect6}
                className="md:w-80 w-full absolute h-80 top-0 left-0"
                alt="rect1"
              />
              <div className="md:w-80 w-full absolute  bottom-0 left-0 h-40  grad2 rounded"></div>
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

      <div className="flex md:px-10 px-3 my-32 flex-col md:flex-row justify-start  flex-wrap  items-start w-full bg-white">
        <div className="md:w-3/12 my-10 bgblue-400">
          <h1 className="text-black font-bold text-3xl lg:text-[2.7rem] lg:leading-[2.4rem]">
            Tour Packages
          </h1>
          <div className="flex mt-3">
            <div className="w-20 px-8 md:px-0 flex bg-white flex-col items-center justify-center h-20 shadow-2xl border">
              <p className="text-primary text-2xl font-bold">25%</p>

              <p className="text-primary text-xs">Off</p>
            </div>
            <div className="md:w-1/2 g-blue-500 w- mx-5 text-xs text-black font-bold font-italic ">
              Discover Great <span className="text-primary"> Discount </span>{" "}
              Deals Around the World
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-3">
            <div className="w-20 text-black text-base font-bold">Hurry Up!</div>
            <div className="md:w-1/2 md:mx-5 my-5 md:my-0 text-xs text-black font-bold ">
              <Timer />
              {/* <div className="flex md:w-full justify-between">
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
                            </div> */}
            </div>
          </div>

          <div className="flex justify-center md:block">
            <button className="bg-primary text-white px-6 py-4 mt-12 text-sm shadow-2xl rounded">
              EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="md:w-9/12 w-full relative">
          <Image
            className="absolute top-[-5rem] hidden md:block left-0 z-0"
            src={ArrowLeft}
            alt="bluebanner"
          />

          <TourCardPagination featuredata={bestSellerData} direction="col" />
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
            <h1 className="mx-5 text-white font-bold text-2xl md:text-3xl">
              Ready to adventure and enjoy natural
            </h1>
          </div>
          <button className="bg-white text-sm md:my-0 mt-5 md:px-5 px-3 py-2 shadow text-primary">
            Let&apos;s get started
          </button>
        </div>

        <div className="flex relative z-10 mt-10 md:justify-center flex-col md:flex-row  items-center flex-wrap  w-full">
          <div className="bg-white rounded-2xl border mx-2 my-2 flex justify-center items-center h-72 w-64">
            <div className="flex items-center flex-col mx-2 my-2 w-[90%] h-[93%] justify-around border-[#4EA529] bg-white border border-dashed px-15 rounded-2xl py-5">
              <Image src={Hike} alt="hiking" />
              <p className="text-primary text-3xl font-bold text-center">
                5489
              </p>
              <Image src={UselessImage} alt="hiking" />
              <p className="text-black font-bold text-center">
                Happy <br /> Travelers
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl my-2 border mx-2 flex justify-center items-center h-72 w-64">
            <div className="flex items-center flex-col mx-2 my-2 w-[90%] h-[93%] justify-around border-[#4EA529] bg-white border border-dashed px-15 rounded-2xl py-5">
              <Image src={Feedback} alt="hiking" />
              <p className="text-primary text-3xl font-bold text-center">
                99.9%
              </p>
              <Image src={UselessImage} alt="hiking" />
              <p className="text-black font-bold text-center">
                Total Positive <br /> Reviews
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl my-2 border mx-2 flex justify-center items-center h-72 w-64">
            <div className="flex items-center flex-col mx-2 my-2 w-[90%] h-[93%] justify-around border-[#4EA529] bg-white border border-dashed px-15 rounded-2xl py-5">
              <Image src={Path} alt="hiking" />
              <p className="text-primary text-3xl font-bold text-center">
                190+
              </p>
              <Image src={UselessImage} alt="hiking" />
              <p className="text-black text-center font-bold">
                Tour <br /> Completed
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border my-2 mx-2 flex justify-center items-center h-72 w-64">
            <div className="flex items-center flex-col mx-2 my-2 w-[90%] h-[93%] justify-around border-[#4EA529] bg-white border border-dashed px-15 rounded-2xl py-5">
              <Image src={BadgeImage} alt="hiking" />
              <p className="text-primary text-3xl font-bold text-center">472</p>
              <Image src={UselessImage} alt="hiking" />
              <p className="text-black text-center font-bold">
                Travel <br /> Destinations
              </p>
            </div>
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
            className=" w-20 h-20 md:w-24 md:h-24 z-0 absolute bottom-[14%] left-[10%] md:bottom-[20%] md:left-[10%] "
          />
          <div className="flex flex-col gap-6 my-10 bgopacity-50 py-6 z-30 justify-center items-center">
            <h1 className="text-3xl text-black  text-center md:text-[2.7reml] md:leading-[2.4rem] font-bold">
              Testimonials
            </h1>
            <div className="w-full my-10  px-2 ">
              <TestimonialCarousel />
            </div>
            <button className="px-8 relative z-10 rounded py-3 shadow-2xl bg-primary text-white text-sm ">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>

      <div className="flex lg:flex flex-col md:px-10 mt-20 mb-20  justify- flex-wrap  items-center w-full relative md:h-[auto]">
        <p className="text-[#FBAD17] text-sm text-center">Explore the world</p>
        <h1 className="text-black sm:text-center text-center text-3xl font-bold my-2">
          Latest News & Articles
        </h1>
        <h1 className="text-black text-3xl font-bold text-center">
          <span className={`${inter.className} text-primary}`}>from</span>
          The Blog
        </h1>

        <div className="flex justify-center mt-10 flex-wrap w-full">
          {new Array(3).fill(0).map((_, index) => {
            return (
              <div
                key={index}
                className="h-[30rem] m-5 w-[22rem] bg-gray-100 shadow-2xl"
              >
                <div className="w-full relative h-1/2 ">
                  <Image src={Rect1} alt="card" className="w-full h-full" />
                  <div className="absolute text-white px-3 py-1 bottom-0 left-0 text-xs bg-[#FBAD17]">
                    Travelling
                  </div>
                </div>

                <div className="p-3 h-1/2 flex px-8 flex-col justify-between">
                  <div className="">
                    <div className="flex">
                      <div className="flex text-black text-xs items-center">
                        <CiCalendar className="text-[#FBAD17] me-1 w-5 h-5" />
                        02 Apr 2021
                      </div>
                      -
                      <div className="flex text-black text-xs items-center">
                        <FaRegComments className="text-[#FBAD17] mx-1" />
                        Comments (03)
                      </div>
                    </div>

                    <h3 className="md:text-xl text-lg text-black font-bold ">
                      The 8 best things about Touristy
                    </h3>
                    <p className="text-gray-400 my-1 md:text-base text-xs">
                      Business is the activity of making on cing or buying and
                      selling pro
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-black my-2 md:text-base text-xs">
                      Read More
                    </p>
                    <FaArrowCircleRight className="ms-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
