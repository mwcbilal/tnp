"use client";
// import { useState } from 'react';

// const Navbar = () => {
//   const [showTourDropdown, setShowTourDropdown] = useState(false);
//   const [showDomesticDropdown, setShowDomesticDropdown] = useState(false);
//   const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
//   const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

//   const toggleTourDropdown = () => {
//     setShowTourDropdown(!showTourDropdown);
//     setShowDomesticDropdown(false);
//   };

//   const toggleDomesticDropdown = () => {
//     setShowDomesticDropdown(!showDomesticDropdown);
//   };

//   return (
//     <nav className="bg-white text-white p-4 w-full">
//       <div className="flex justify-between items-center w-full">
//         <div className="flex items-center">
//           <img src="../../assets/navbar/logo.png" alt="Logo" className="h-8 mr-4" />
//           <ul className="flex space-x-4">
//             <li className="hover:text-orange-500  text-black px-2 py-1 rounded">
//               <a href="#">Home</a>
//             </li>
//             <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
//               <button onClick={toggleTourDropdown}>Tour</button>
//               {showTourDropdown && (
//                 <div className="absolute bg-white rounded mt-8 py-2 px-4 shadow-md">
//                   <ul>
//                     <li className="hover:text-orange-500  px-2 py-1  text-black rounded">
//                       <a href="#">International</a>
//                     </li>
//                     <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
//                       <button onClick={toggleDomesticDropdown}>Domestic</button>
//                       {showDomesticDropdown && (
//                         <div className="absolute  bg-white rounded ml-32 py-2 px-4 shadow-md">
//                           <ul>
//                             <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
//                               <a href="#">North</a>
//                             </li>
//                             <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
//                               <a href="#">South</a>
//                             </li>
//                           </ul>
//                         </div>
//                       )}
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </li>
//             <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
//               <a href="#">Activities</a>
//             </li>
//             <li className="hover:text-orange-500 px-2 py-1 text-black rounded">
//               <a href="#">Hotel</a>
//             </li>
//             <li className="hover:text-orange-500 px-2 py-1 text-black rounded">
//               <a href="#">Car Rental</a>
//             </li>
//             <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
//               <a href="#">Visa</a>
//             </li>
//             <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
//               <a href="#">Packages</a>
//             </li>
//             <li className="hover:text-orange-500 px-2 py-1  text-black rounded">
//               <a href="#">Contact Us</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Make Your Own Trip
//           </button>
//           <div className="relative inline-block">
//             <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
//               Language
//             </button>
//             {showLanguageDropdown && (
//               <ul className="absolute bg-white rounded mt-2 py-2 px-4 shadow-md">
//                 <li className="hover:text-orange-500 text-black px-2 py-1 rounded">
//                   <a href="#">English</a>
//                 </li>
//                 <li className="hover:text-orange-500 text-black px-2 py-1 rounded">
//                   <a href="#">French</a>
//                 </li>
//               </ul>
//             )}
//           </div>
//           <div className="relative inline-block">
//             <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}>
//               Currency
//             </button>
//             {showCurrencyDropdown && (
//               <ul className="absolute bg-white rounded mt-2 py-2 px-4 shadow-md">
//                 <li className="hover:text-orange-500 px-2 py-1 text-black rounded">
//                   <a href="#">USD</a>
//                 </li>
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { NextPage } from "next";
import Image from "next/legacy/image";
import Logo from "../../assets/common/Logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [showTourDropdown, setShowTourDropdown] = useState<boolean>(false);
  const [currTour, setCurrTour] = useState<any>("");
  const [showPackageDropdown, setShowPackageDropdown] =
    useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="hidden lg:block">
      <header className="w-full text-sm flex justify-between px-10 bg-primary text-white">
        <div className="flex">
          <div className="flex px-1 py-2 mx-1 items-center">
            <FaPhoneAlt />
            <p className="text-whtie items-center ps-1">923362164294</p>
          </div>
          <div className="flex px-1 py-2 mx-1 items-center">
            <FaPhoneAlt />
            <p className="text-whtie ps-1">923362164294</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex py-2 items-center">
            <Link href={"/pages/aboutus"} className="mx-2">About Us</Link>
            <p className="mx-2">Blogs</p>

            <p className="mx-2">Gallery</p>
            <p className="mx-2">Brouchers</p>
          </div>
          <div className="flex py-2 items-center bg-[#FBAD17] mx-3 px-4 ">
            <FaFacebook className="text-xl text-white mx-2" />
            <FaTwitter className="text-xl text-white mx-2" />
            <FaLinkedin className="text-xl text-white mx-2" />
          </div>

          <div className="flex py-2 ms-8">
            <Link href={"/pages/login"} className="mx-1">User login</Link>
            <p>|</p>
            <p className="mx-1">Agent login</p>
          </div>
        </div>
      </header>

      <header className="w-full text-sm flex justify-between px-10 bg-white">
        <div className="flex py-2 items-center">
          <Image src={Logo} alt="logo image" width={150} />
        </div>

        <div className="bg-white-500 relative w-3/5">
          <div className="text-black items-center py-2  h-full w-full justify-around flex">
            <Link href={"/"} className="cursor-pointer font-bold">Home</Link>
            <div
              onMouseOver={() => setShowTourDropdown(true)}
              className="relative cursor-pointer font-bold"
            >
              <p>Tour</p>
              <div
                onMouseOut={() => setShowTourDropdown(false)}
                className={` ${
                  showTourDropdown ? "" : "w-0 overflow-hidden"
                } expansion absolute z-[100] top-[40px] left-[-5px]`}
              >
                <div className=" bg-white h-[8.5rem] w-max flex rounded mt-8 py-2 px-4 shadow-md">
                  <ul>
                    <li
                      onMouseOver={() => setCurrTour("International")}
                      className="hover:text-[#FBAD17] flex cursor-pointer items-center justify-between px-2 py-1 text-black rounded"
                    >
                      <a href="#">International</a>
                      <IoIosArrowForward className="ms-5" />
                    </li>
                    <li
                      onMouseOver={() => setCurrTour("Domestic")}
                      className="hover:text-[#FBAD17] flex items-center cursor-pointer justify-between px-2 py-1 text-black rounded"
                    >
                      <Link href="/pages/tourpackages">Domestic</Link>
                      <IoIosArrowForward className="ms-5" />
                    </li>
                  </ul>

                  <div
                    className={`bg-white flex flex-col flex-wrap ${
                      currTour === "International" ? "" : "w-0 overflow-hidden"
                    }`}
                  >
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                      Dubai
                    </p>
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                      Thailand
                    </p>
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                      Turkey
                    </p>
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2 ">
                      Malaysia
                    </p>
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                      Baku
                    </p>
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                      Singapore
                    </p>
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                      Sri Lanka
                    </p>
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                      Maldives
                    </p>
                  </div>
                  <div
                    className={`bg-white flex flex-col flex-wrap ${
                      currTour === "Domestic" ? "" : "w-0 overflow-hidden"
                    }`}
                  >
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                      North
                    </p>
                    <p className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                      South
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="cursor-pointer font-bold">Activities</p>
            <p className="cursor-pointer font-bold">Hotels</p>
            <Link
              href="/pages/rentcar"
              className="cursor-pointer font-bold"
            >
              Car Rental
            </Link>
            <Link href={"/pages/visa"} className="cursor-pointer font-bold">Visa</Link>
            <div
              onMouseOver={() => setShowPackageDropdown(true)}
              className="cursor-pointer font-bold relative"
            >
              <Link href="/pages/tourpackages">Packages</Link>
              <div
                onMouseOut={() => setShowPackageDropdown(false)}
                className={` ${
                  showPackageDropdown ? "" : "w-0 overflow-hidden"
                } expansion absolute z-[100] top-[40px] left-[-5px]`}
              >
                <div className=" bg-white flex rounded mt-8 py-2 px-4 shadow-md">
                  <ul>
                    <li
                      onMouseOver={() => setCurrTour("International")}
                      className="hover:text-[#FBAD17] flex cursor-pointer items-center justify-between px-2 py-1 text-black rounded"
                    >
                      <a href="#">Group</a>
                    </li>
                    <li
                      onMouseOver={() => setCurrTour("Domestic")}
                      className="hover:text-[#FBAD17] flex items-center cursor-pointer justify-between px-2 py-1 text-black rounded"
                    >
                      <a href="#">Honeymoon</a>
                    </li>
                    <li
                      onMouseOver={() => setCurrTour("Domestic")}
                      className="hover:text-[#FBAD17] flex items-center cursor-pointer justify-between px-2 py-1 text-black rounded"
                    >
                      <a href="#">Private Family</a>
                    </li>
                    <li
                      onMouseOver={() => setCurrTour("Domestic")}
                      className="hover:text-[#FBAD17] flex items-center cursor-pointer justify-between px-2 py-1 text-black rounded"
                    >
                      <a href="#">Corporate</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link href="/pages/contactus" className="cursor-pointer font-bold">Contact Us</Link>
            <p className="bg-primary px-2 py-2 rounded shadow cursor-pointer text-white">
              Make your trip
            </p>
          </div>
          <div
            style={{
              borderTop: "25px solid white",
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              bottom: "-20px",
            }}
            className="w-full absolute z-10 bg-transparent-500 items-center"
          ></div>
        </div>

        <div className="flex">
          <div className="flex py-2 items-center ms-8">
            <p className="flex items-center text-black mx-1">
              <FaGlobeEurope className="mx-1" />
              English
            </p>
            <p>|</p>
            <p className="text-black mx-1">USD</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Page;
