"use client";
import Image from "next/image";
import Background_img from "../../../assets/customer_review/Rectangle 19478.png";
import Information_Icon from "../../../assets/customer_review/Vector.png";
import Tour_Icon from "../../../assets/customer_review/Group.png";
import Location_Icon from "../../../assets/customer_review/map.png";
import Review_Icon from "../../../assets/customer_review/Group (1).png";
import Gallery_Icon from "../../../assets/customer_review/Vector (1).png";
import User from "../../../assets/customer_review/user.png";
import Customer_Care from "../../../assets/customer_review/customer-service1.png";
import Activties from "../../../assets/customer_review/approve1.png";
import Insurance from "../../../assets/customer_review/Vector22.png";
import Price_Guranttee from "../../../assets/customer_review/Vector (11).png";
import News_img from "../../../assets/customer_review/image (1).png";
import "./style.css";

import ProgressBar from "./progressBar";
import RatingProgressBar from "./ratingProgressBar";
import Rating from "./rating";

import Ticket_Dropdown from "./dropdown";

export default function CustomerReview() {
  return (
    <div className="bg-white mb-96">
      <div>
        <Image className="w-full" src={Background_img} alt=".." />
      </div>
      <div className="w-11/12 px-6 md:p-0 sm:w-[97%] md:w-5/6 lg:p-4 bg-white relative font-medium mt-5 md:-mt-11 z-50 m-auto flex flex-col items-start md:flex-row md:items-center justify-around rounded-none sm:rounded-full shadow-2xl">
        <div className="flex items-center gap-2 py-4 px-2 lg:p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Information_Icon} alt=".." />
          <p>Information</p>
        </div>
        <div className="flex items-center gap-2 py-4 px-2 lg:p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Tour_Icon} alt=".." />
          <p>Tour Planning</p>
        </div>
        <div className="flex items-center gap-2 py-4 px-2 lg:p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Location_Icon} alt=".." />
          <p>Location Share</p>
        </div>
        <div className="flex items-center gap-2 py-4 px-2 lg:p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Review_Icon} alt=".." />
          <p>Reviews</p>
        </div>
        <div className="flex items-center gap-2 py-4 px-2 lg:p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Gallery_Icon} alt=".." />
          <p>Shot Gallery</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-9 mt-10">
        <div className="w-11/12 sm:w-2/3 lg:w-[54%] px-8 border-2 rounded-md py-5 lg:h-[28rem] ">
          <h2 className="text-sm lg:text-xl font-bold mt-4 mb-4 border-l-2 border-l-[#00ADEE] px-1">
            Customer Review
          </h2>
          <div>
            <div className="flex flex-col md:flex-row gap-14">
              <div>
                <ProgressBar />
              </div>
              <div className="flex gap-4 w-full flex-col">
                <div>
                  <h3 className=" font-bold">Comfort</h3>
                  <div className="flex justify-between">
                    <p className="font-medium">Rating 4.8</p>
                    <Rating />
                  </div>
                  <RatingProgressBar />
                </div>
                <div>
                  <h3 className=" font-bold">Comfort</h3>
                  <div className="flex justify-between">
                    <p className="font-medium">Rating 4.8</p>
                    <Rating />
                  </div>
                  <RatingProgressBar />
                </div>
                <div>
                  <h3 className=" font-bold">Comfort</h3>
                  <div className="flex justify-between">
                    <p className="font-medium">Rating 4.8</p>
                    <Rating />
                  </div>
                  <RatingProgressBar />
                </div>
                <div>
                  <h3 className=" font-bold">Comfort</h3>
                  <div className="flex justify-between">
                    <p className="font-medium">Rating 4.8</p>
                    <Rating />
                  </div>
                  <RatingProgressBar />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 w-full order-1">
            <div className="flex flex-col md:flex-row justify-between mb-3">
              <h2 className="text-sm lg:text-xl font-bold mb-4 border-l-2 border-l-[#00ADEE] px-1">
                Client's Review
              </h2>
              <div className="flex flex-col md:flex-row gap-2">
                <div className=" font-semibold">6 reviews</div>
                <div>
                  <Rating />
                </div>
                <div className=" font-semibold">(5 out of 5)</div>
              </div>
            </div>
            <div>
              <div className="w-full flex gap-5 border-b-2 mb-6 pb-4">
                <div>
                  <Image width={100} height={100} src={User} alt="" />
                </div>
                <div className="px-2">
                  <h3 className=" font-semibold">Rohan De Spond</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Curabitur have is covered many vulputate vestibulum
                    Phasellus rhoncus, dolor eget viverra pretium dolor tellus
                    aliquet nunc, vitae ultricies erat elit eu lacus.
                  </p>
                  <div className="font-semibold py-3">
                    <Rating /> 5.0
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">25 jan 2021</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-5 border-b-2 mb-6 pb-4">
                <div>
                  <Image width={100} height={100} src={User} alt="" />
                </div>
                <div className="px-2">
                  <h3 className=" font-semibold">Rohan De Spond</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Curabitur have is covered many vulputate vestibulum
                    Phasellus rhoncus, dolor eget viverra pretium dolor tellus
                    aliquet nunc, vitae ultricies erat elit eu lacus.
                  </p>
                  <div className="font-semibold py-3">
                    <Rating /> 5.0
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">25 jan 2021</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-5 border-b-2 mb-6 pb-4">
                <div>
                  <Image width={100} height={100} src={User} alt="" />
                </div>
                <div className="px-2">
                  <h3 className=" font-semibold">Rohan De Spond</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Curabitur have is covered many vulputate vestibulum
                    Phasellus rhoncus, dolor eget viverra pretium dolor tellus
                    aliquet nunc, vitae ultricies erat elit eu lacus.
                  </p>
                  <div className="font-semibold py-3">
                    <Rating /> 5.0
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">25 jan 2021</p>
                  </div>
                </div>
              </div>
              <div className=" bg-[#F6F6F6] rounded-sm px-6 py-8">
                <h2 className="text-xl font-bold mt-4 mb-8 border-l-2 border-l-[#00ADEE] px-1">
                  leave a comment
                </h2>
                <div className="flex flex-wrap md:flex-row justify-between">
                  <div>
                    <h3 className=" text-md md:text-lg font-semibold mb-2">
                      Value for Money*
                    </h3>
                    <Rating />
                  </div>
                  <div>
                    <h3 className=" text-md md:text-lg font-semibold mb-2">
                      Destination*
                    </h3>
                    <Rating />
                  </div>
                  <div>
                    <h3 className=" text-md md:text-lg font-semibold mb-2">
                      Accommodation*
                    </h3>
                    <Rating />
                  </div>
                  <div>
                    <h3 className=" text-md md:text-lg font-semibold mb-2">
                      Transport*
                    </h3>
                    <Rating />
                  </div>
                </div>
                <div className="w-full flex justify-center gap-y-5 items-center flex-col mt-6">
                  <div className="flex flex-col md:flex-row gap-5 md:gap-2 lg:gap-10">
                    <input
                      type="text"
                      className="lg:py-3 xl:px-6 outline-none border-none"
                      placeholder="First name"
                      value=""
                    />
                    <input
                      type="email"
                      className="lg:py-3 xl:px-6 outline-none border-none"
                      placeholder="Email Address"
                      name=""
                      id=""
                    />
                  </div>

                  <div>
                    <input
                      className="outline-none relative py-20 md:px-28 lg:px-32 xl:px-40 lg:py-20 border-none"
                      placeholder="Write Review"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" name="" id="" />
                      <p className="lg:text-sm">
                        I agree to Terms & Conditions, Refund Policy and Privacy
                        Policy of Fabrilife.
                      </p>
                    </div>

                    <button className="w-full bg-[#00ADEE] text-white py-3 mt-8">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 sm:w-2/3 lg:w-[26%]">
          <div className="bg-[#F8F8F8] px-8 py-12">
            <h2 className="text-lg font-bold mt-4 mb-4 border-l-2 border-l-[#00ADEE] px-1">
              Book This Tour
            </h2>
            <div>
              <input
                className="w-full p-2"
                type="datetime-local"
                name=""
                id=""
              />
            </div>
            <div className="w-full items-center flex gap-4 mt-4">
              <h2 className=" font-semibold">Time:</h2>
              <input className="w-full p-1" type="time" name="" id="" />
            </div>
            <div className="w-full mt-4">
              <h2 className="font-semibold">Tickets:</h2>
              <div className="flex items-center justify-between my-2">
                <p className="w-full text-[13px] text-gray-400">
                  Children(0-12 years)$129
                </p>
                <Ticket_Dropdown />
              </div>
              <div className="flex items-center justify-between my-2">
                <p className="w-full text-[13px] text-gray-400">
                  Youth(13-17 years)$169
                </p>
                <Ticket_Dropdown />
              </div>
              <div className="flex items-center justify-between">
                <p className="w-full text-[13px] text-gray-400">
                  Adult (18+ years)$189.00
                </p>
                <Ticket_Dropdown />
              </div>
            </div>
            <div className="w-full gap-4 mt-4">
              <h2 className=" font-semibold">Add Extra:</h2>
              <div className="flex items-center gap-x-2 mt-2">
                <input type="checkbox" name="" id="" />
                <p className="text-gray-400">Service per booking</p>
              </div>
              <div>
                <div className="mt-2">
                  <div className="flex items-center gap-x-2">
                    <input type="checkbox" name="" id="" />
                    <p className="text-gray-400">Service per booking</p>
                  </div>
                  <div className="ml-5">
                    <div className="flex gap-x-6">
                      <p className="text-gray-400">Adult:</p>
                      <h3>$18.00</h3>
                    </div>
                    <div className="flex gap-x-6">
                      <p className="text-gray-400">Adult:</p>
                      <h3>$18.00</h3>
                    </div>
                    <div className="flex gap-x-6">
                      <p className="text-gray-400">Adult:</p>
                      <h3>$18.00</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4 mb-6">
              <h2 className=" font-semibold">Total:</h2>
              <h3 className="text-[#00ADEE] font-bold">$130.00</h3>
            </div>
            <button className="w-11/12 py-3 flex justify-center m-auto rounded-sm text-white bg-[#00ADEE]">
              Procced Booking
            </button>
          </div>
          <div className="m-auto shadow-lg px-6 py-4 lg:py-10 mt-10">
            <h2 className="text-md font-bold mt-4 mb-4 border-l-2 border-l-[#00ADEE] px-1">
              Book With Confidence
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <Image src={Customer_Care} alt="" />
              </div>
              <p className=" text-[#44454F] text-md">
                Customer care available 24/7
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <Image src={Activties} alt="" />
              </div>
              <p className=" text-[#44454F] text-md">
                Hand-picked Tours & Activities
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <Image src={Insurance} alt="" />
              </div>
              <p className=" text-[#44454F] text-md">Free Travel Insureance</p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <Image src={Price_Guranttee} alt="" />
              </div>
              <p className=" text-[#44454F] text-md">
                No-hassle best price guarantee
              </p>
            </div>
          </div>
          <div className=" bg-white shadow-lg px-6 py-10 mt-10">
            <h2 className="text-md font-bold mt-4 mb-4 border-l-2 border-l-[#00ADEE] px-1">
              Recent News
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <Image src={News_img} alt="" />
              </div>
              <div>
                <Rating />
                <p className=" text-[#44454F] text-sm">
                  Walking the Amalfi Coast
                </p>
                <p>
                  From <span className=" text-[#00ADEE]">$129.00</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <Image src={News_img} alt="" />
              </div>
              <div>
                <Rating />
                <p className=" text-[#44454F] text-sm">
                  Walking the Amalfi Coast
                </p>
                <p>
                  From <span className=" text-[#00ADEE]">$129.00</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <Image src={News_img} alt="" />
              </div>
              <div>
                <Rating />
                <p className=" text-[#44454F] text-sm">
                  Walking the Amalfi Coast
                </p>
                <p>
                  From <span className=" text-[#00ADEE]">$129.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
