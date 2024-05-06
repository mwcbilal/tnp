"use client";

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
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { setUserData } from "@/lib/feature/user/userSlice";
// import {useRouter} from "next/router";
import { useParams } from "next/navigation";


interface Props { }

const Page: NextPage<Props> = ({ }) => {
    const userData = useAppSelector((data) => data?.auth?.data)
    const dispatch = useAppDispatch()
    console.log(userData)
    const [showTourDropdown, setShowTourDropdown] = useState<boolean>(false);
    const [currTour, setCurrTour] = useState<any>("");
    const [showPackageDropdown, setShowPackageDropdown] =
        useState<boolean>(false);
    const params = useParams();
    const router = useRouter();
    // const {category} = useParams();
    // console.log("paramssss founddd", params);
    // const {id} = useParams();

    const { category, id } = useParams();
    console.log("paramssss founddd", { category, id });


    const bgClass = (id && id[0] === 'honeymoon') || (category && category[0] === 'honeymoon') 
    ? "bg-[#8b2424]" 
    : "bg-primary";

    
    
    return (
        <div className="hidden lg:block">
            <header className={`w-full text-sm flex justify-between px-10 ${bgClass} text-white`}>
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
                        <Link href={"/pages/gallery"} className="cursor-pointer mx-2">Gallery</Link>
                        <p className="mx-2">Brouchers</p>
                    </div>
                    <div className="flex py-2 items-center bg-[#FBAD17] mx-3 px-4 ">
                        <FaFacebook className="text-xl text-white mx-2" />
                        <FaTwitter className="text-xl text-white mx-2" />
                        <FaLinkedin className="text-xl text-white mx-2" />
                    </div>

                    <div className="flex py-2 ms-8">
                        {
                            userData?.token ? (
                                <button onClick={() => {
                                    dispatch(setUserData({
                                        token: "",
                                        name: "",
                                        lname: "",
                                        email: "",
                                        id: null
                                    }))
                                    router.push("/")
                                }} className="mx-1">Logout</button>
                            ) : (
                                <Link href={"/pages/login"} className="mx-1">User login</Link>
                            )
                        }
                        <p>|</p>
                        <p className="mx-1">Agent login</p>
                    </div>

                </div>
            </header>

            <header className="w-full text-sm flex justify-between px-10 bg-white">
                <div className="flex py- items-center">
                    <Image src={Logo} alt="logo image" height={60} width={200} />
                </div>

                <div className="bg-white-500 relative w-3/5">
                    <div className="text-black items-center h-full w-full justify-around flex">
                        <Link href={"/"} className="cursor-pointer font-bold">Home</Link>
                        <div
                            onMouseOver={() => setShowTourDropdown(true)}
                            className="relative cursor-pointer font-bold"
                        >
                            <p>Tour</p>
                            <div
                                onMouseOut={() => setShowTourDropdown(false)}
                                className={` ${showTourDropdown ? "" : "w-0 overflow-hidden"
                                    } expansion absolute z-[100] top-[40px] left-[-5px]`}
                            >
                                <div className=" bg-white h-[8.5rem] w-max flex rounded mt-8 py-2 px-4 shadow-md">
                                    <ul>
                                        <li
                                            onMouseOver={() => setCurrTour("International")}
                                            className="hover:text-[#FBAD17] flex cursor-pointer items-center justify-between px-2 py-1 text-black rounded"
                                        >
                                            <Link href="/pages/tourpackages/international">International</Link>
                                            <IoIosArrowForward className="ms-5" />
                                        </li>
                                        <li
                                            onMouseOver={() => setCurrTour("Domestic")}
                                            className="hover:text-[#FBAD17] flex items-center cursor-pointer justify-between px-2 py-1 text-black rounded"
                                        >
                                            <Link href="/pages/tourpackages/domestic">Domestic</Link>
                                            <IoIosArrowForward className="ms-5" />
                                        </li>
                                    </ul>

                                    <div
                                        className={`flex flex-col flex-wrap ${currTour === "International" ? "min-w-96" : "w-0 overflow-hidden"
                                            }`}
                                    >
                                        <Link href={"/pages/tourpackages/international/dubai"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                                            Dubai
                                        </Link>
                                        <Link href={"/pages/tourpackages/international/thailand"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                                            Thailand
                                        </Link>
                                        <Link href={"/pages/tourpackages/international/turkey"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                                            Turkey
                                        </Link>
                                        <Link href={"/pages/tourpackages/international/malaysia"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2 ">
                                            Malaysia
                                        </Link>
                                        <Link href={"/pages/tourpackages/international/baku"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                                            Baku
                                        </Link>
                                        <Link href={"/pages/tourpackages/international/singapore"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                                            Singapore
                                        </Link>
                                        <Link href={"/pages/tourpackages/international/srilanka"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                                            Srilanka
                                        </Link>
                                        <Link href={"/pages/tourpackages/international/maldives"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                                            Maldives
                                        </Link>
                                    </div>
                                    <div
                                        className={`flex flex-col flex-wrap ${currTour === "Domestic" ? "" : "w-0 overflow-hidden"
                                            }`}
                                    >
                                        <Link href={"/pages/tourpackages/domestic/north"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                                            North
                                        </Link>
                                        <Link href={"/pages/tourpackages/domestic/south"} className="mx-8 cursor-pointer hover:text-[#FBAD17] my-2">
                                            South
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="cursor-pointer font-bold">Activities</p>
                        <Link
                            href="/pages/hotel"
                            className="cursor-pointer font-bold"
                        >
                            Hotels
                        </Link>
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
                                className={` ${showPackageDropdown ? "" : "w-0 overflow-hidden"
                                    } expansion absolute z-[100] top-[40px] left-[-5px]`}
                            >
                                <div className=" bg-white flex rounded mt-8 py-2 px-4 shadow-md">
                                    <ul>
                                        <li
                                            onMouseOver={() => setCurrTour("International")}
                                            className="hover:text-[#FBAD17] flex cursor-pointer items-center justify-between px-2 py-1 text-black rounded"
                                        >
                                            <Link href="/pages/tourpackages/group">Group</Link>
                                        </li>
                                        <li
                                            onMouseOver={() => setCurrTour("Domestic")}
                                            className="hover:text-[#FBAD17] flex items-center cursor-pointer justify-between px-2 py-1 text-black rounded"
                                        >
                                            <Link href="/pages/tourpackages/honeymoon">Honeymoon</Link>
                                        </li>
                                        <li
                                            onMouseOver={() => setCurrTour("Domestic")}
                                            className="hover:text-[#FBAD17] flex items-center cursor-pointer justify-between px-2 py-1 text-black rounded"
                                        >
                                            <Link href="/pages/tourpackages/private-family">Private Family</Link>
                                        </li>
                                        <li
                                            onMouseOver={() => setCurrTour("Domestic")}
                                            className="hover:text-[#FBAD17] flex items-center cursor-pointer justify-between px-2 py-1 text-black rounded"
                                        >
                                            <Link href="/pages/tourpackages/corporate">Corporate</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Link href="/pages/contactus" className="cursor-pointer font-bold">Contact Us</Link>
                        <Link href={"/pages/offer"} className={` ${bgClass} px-4 py-2 rounded shadow-lg cursor-pointer text-white`}>
                            Make your trip
                        </Link>
                    </div>
                    <div
                        style={{
                            borderTop: "25px solid white",
                            borderLeft: "24px solid transparent",
                            borderRight: "24px solid transparent",
                            bottom: "-20px",
                        }}
                        className="w-full absolute z-10 bg-transparent-500 items-center"
                    ></div>
                </div>

                <div className="flex">
                    <div className="flex items-center ms-8">
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
