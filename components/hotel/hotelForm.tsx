"use client";
import React, { useState } from "react";
import { BsPerson, BsEnvelope, BsTelephone } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

const Hotelform = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        nationality: '',
        contactNo: '',
        review: '',
        destination: '',
        hotel: '',
        checkInDate: '',
        checkOutDate: '',
        adults: '',
        kids: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="bg-white mx-auto flex flex-col gap-4 lg:items-center justify-center my-16 w-[80%] max-w-screen-xl">
            <h1 className="lg:text-3xl text-1xl font-semibold my-2 text-center ">HOTEL BOOKING FORM</h1>
            <div className="w-full flex flex-col lg:flex-row gap-5 my-4 ">
                <div className="lg:w-[32%]  my-2 flex flex-col ">
                    <label htmlFor="name" className="text-black ml-2 mb-2">Name</label>
                    <div className='flex items-center bg-white border border-grayy rounded-[2px] px-1'>
                        <BsPerson className="w-6 h-6 text-gray-400 ml-2 mr-2" />
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-[2px] border-none outline-none placeholder-gray-300"
                            style={{ height: "45px" }}
                            placeholder="Name"
                        />

                    </div>
                </div>
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="email" className="text-black ml-2 mb-2">Email</label>
                    <div className='flex items-center bg-white border border-grayy rounded-[2px] px-1'>
                        <BsEnvelope className="w-6 h-6 text-gray-400  ml-2 mr-2" />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-[2px] border-none outline-none placeholder-gray-300"
                            style={{ height: "45px" }}
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="nationality" className="text-black ml-2  mb-2">Nationality</label>
                    
                    <div className="relative">
                        <select
                            id="nationality"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border  rounded-[2px] focus:outline-none focus:border-blue-500 appearance-none border-grayy"
                            style={{ height: "45px" }}
                        >
                           <option value="" className="">Select Nationality</option>
                            <option value="Nepal" className="">Pakistani</option>
                            <option value="India" className="">Indian</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none">
                            <div className="w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5 my-4 ">
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="contactNo" className="text-black ml-2 mb-2">Contact No</label>
                    <div className='flex items-center bg-white border border-grayy px-1 rounded-[2px]'>
                        <BsTelephone className="w-6 h-6 text-gray-400  ml-2 mr-2" />
                        <input
                            id="contactNo"
                            name="contactNo"
                            type="tel"
                            className="w-full px-3 py-2 rounded-[2px] border-none outline-none placeholder-gray-300 "
                            style={{ height: "45px" }}
                            placeholder="Contact No"
                            value={formData.contactNo}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="review" className="text-black ml-2 mb-2">Review</label>

                    <div className="relative">
                        <select
                            id="review"
                            name="review"
                            value={formData.review}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-grayy rounded-[2px] focus:outline-none focus:border-blue-500 appearance-none"
                            style={{ height: "45px" }}
                        >
                            <option value="">Select Review</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Bad">Bad</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none">
                            <div className="w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[32%] my-2 flex flex-col">
                    <label htmlFor="destination" className="text-black ml-2 mb-2">Destination</label>

                    <div className="relative">
                        <select
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-grayy rounded-[2px] focus:outline-none focus:border-blue-500 appearance-none"
                            style={{ height: "45px" }}
                        >
                            <option value="">Select Destination</option>
                            <option value="1">Thailand</option>
                            <option value="2">Switzerland</option>
                            <option value="3">Canada</option>
                        </select>

                        <div className="absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none">
                            <div className="w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-5 my-4 ">
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="destination" className="text-black ml-2 mb-2">Destination</label>

                    <div className="relative">
                        <select
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-grayy rounded-[2px] focus:outline-none focus:border-blue-500 appearance-none"
                            style={{ height: "45px" }}
                        >
                            <option value="">Select Destination</option>
                            <option value="1">Thailand</option>
                            <option value="2">Switzerland</option>
                            <option value="3">Canada</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none">
                            <div className="w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="destination" className="text-black ml-2 mb-2">Hotel</label>

                    <div className="relative">
                        <select
                            id="destination"
                            name="destination"
                            value={formData.hotel}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-grayy rounded-[2px] focus:outline-none focus:border-blue-500 appearance-none"
                            style={{ height: "45px" }}
                        >
                            <option value="">Select Your Hotel</option>
                            <option value="1">PC</option>
                            <option value="2">Beach Luxury</option>
                            <option value="3">xyz</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none">
                            <div className="w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="checkInDate" className="text-black ml-3 mb-2">Check-In </label>
                    <input
                        id="checkInDate"
                        name="checkInDate"
                        type="date"
                        value={formData.checkInDate}
                        onChange={handleChange}
                        className="w-full  py-2 border border-grayy rounded-[2px] focus:outline-none focus:border-blue-500"
                        style={{ height: "45px" }}
                    />
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-5 my-4 ">
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="destination" className="text-black ml-2 mb-2">Check-Out </label>
                    <input
                        id="CheckOutDate"
                        name="CheckOutDate"
                        type="date"
                        value={formData.checkOutDate}
                        onChange={handleChange}
                        className="w-full  py-2 border border-grayy rounded-[2px] focus:outline-none focus:border-blue-500"
                        style={{ height: "45px" }}
                    />
                </div>
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="destination" className="text-black ml-2 mb-2">Adults </label>

                    <div className="relative">
                        <select
                            id="adults"
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-grayy rounded-[2px] focus:outline-none focus:border-blue-500 appearance-none"
                            style={{ height: "45px" }}
                        >
                            <option value="">Select Number</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none">
                            <div className="w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[32%]  my-2 flex flex-col">
                    <label htmlFor="destination" className="text-black ml-2 mb-2">Kids </label>
                    <div className="relative">
                        <select
                            id="kids"
                            name="kids"
                            value={formData.kids}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-grayy rounded-[2px] focus:outline-none focus:border-blue-500 appearance-none"
                            style={{ height: "45px" }}
                        >
                            <option value="">Select Number</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none">
                            <div className="w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <button
                className="bg-primary hover:bg-blue-700 text-white  py-2 px-4 rounded transition duration-300 ease-in-out lg:w-[32%] w-full mx-auto my-2"
                onClick={() => console.log("Book Now clicked")}
            >
                BOOK NOW
            </button>



        </div>
    )
}
export default Hotelform