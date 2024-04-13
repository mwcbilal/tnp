"use client";

import { NextPage } from "next";
import "./page.css";
import MyDropdown from "./dropdown";
import { useEffect, useState } from "react";
import HeroBanner from "@/components/Common/HeroBanner";

import BannerImg from "../../../assets/offer/header.svg";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Component has been mounted
  }, []);

  if (!isMounted) {
    return null; // Don't render anything until client-side hydration
  }
  return (
    <div>
      <HeroBanner
        UpcommingImage={BannerImg}
        Heading=""
        Subheading=""
      />

      <div className=" w-fill bg-img flex pb-10 flex-col items-center rounded-lg md:mt-16 mx-auto md:w-11/12">
        <h2 className="mt-10 uppercase text-2xl font-bold text-[#FBAD17] py-5">
          Make your own trip
        </h2>
        <div className="w-11/12 md:w-[700px] py-10 px-6 md:px-20 bg-white rounded-lg">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div>
              <p className="mb-1">Name</p>
              <input
                className=" rounded-md w-11/12 border-gray-300 md:w-[265px]"
                type="text"
                name=""
                id=""
                placeholder="Name"
              />
            </div>
            <div>
              <p className="mb-1">Last Name</p>
              <input
                className=" border-gray-300 rounded-md w-11/12 md:w-[265px]"
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
            <div>
              <p className="mb-1">Phone/Mobile</p>
              <input
                className="border-gray-300 rounded-md w-11/12 md:w-[265px]"
                type="number"
                name=""
                id=""
                placeholder="Phone/Mobile"
              />
            </div>
            <div>
              <p className="mb-1">Email</p>
              <input
                className="border-gray-300 rounded-md w-11/12 md:w-[265px]"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="w-11/12 md:w-[700px] py-10 px-4 md:px-14 bg-white rounded-lg mt-4">
          <div className="flex flex-col gap-12 md:flex-row justify-between">
            <div>
              <p className="my-2">Select your desired areas</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
            <div>
              <p className="my-2">Tour Duration (Days)</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 md:flex-row justify-between mt-2">
            <div>
              <p className="my-2">Pick Up city (location)</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
            <div>
              <p className="my-2">Vehicle type</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-12 md:flex-row justify-between mt-2">
            <div>
              <p className="my-2">No. of adults</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
            <div>
              <p className="my-2">No. of kids</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-12 md:flex-row justify-between mt-2">
            <div>
              <p className="my-2">Hotel Type</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
            <div>
              <p className="my-2">Rooms </p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-12 md:flex-row justify-between mt-2">
            <div>
              <p className="my-2">Package type</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
            <div>
              <p className="my-2">Additional features</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-12 md:flex-row justify-between mt-2">
            <div>
              <p className="my-2">Tour you want to (but little changes)</p>
              <div className="relative">
                <MyDropdown />
              </div>
            </div>
            <div>
              <p className="my-2">When would you like to go?</p>
              <div className=" relative">
                <MyDropdown />
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 md:w-[700px] px-12 py-10 mt-4 bg-white rounded-lg">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Brief/requirements
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Brief/requirements"></textarea>
        </div>

        <button className="py-2 px-10 md:px-32 bg-[#00ADEE] text-white mt-4 rounded-md">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Page;
