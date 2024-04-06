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
        <div className="bg-white mx-auto flex flex-col lg:items-center justify-center my-16 w-[90%]">
            <h1 className="lg:text-3xl text-2xl font-semibold my-2 text-center ">HOTEL BOOKING FORM</h1>
            <div className="w-full flex flex-col lg:flex-row gap-2 my-2">
                <div className="lg:w-[33%] space-x-2 my-2">
                    <label htmlFor="name" className="text-black ml-2">Name</label>
                    <div className='flex items-center bg-white border border-gray-300 rounded-md px-1'>
                        <BsPerson className="w-6 h-6 text-gray-400" />
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-md border-none"
                            placeholder="Name"
                        />
                    </div>
                </div>
                <div className="lg:w-[33%] space-x-2 my-2">
                    <label htmlFor="email" className="text-black ml-2">Email</label>
                    <div className='flex items-center bg-white border border-gray-300 rounded-md px-1'>
                        <BsEnvelope className="w-6 h-6 text-gray-400" />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-md border-none"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="lg:w-[32%] space-x-2 my-2">
                    <label htmlFor="nationality" className="text-black ml-2">Nationality</label>
                    <div className='flex items-center bg-white border border-gray-300'>
                        <select
                            id="nationality"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-md border-none"
                        >
                            <option value="">Select Nationality</option>
                            <option value="Nepal">Pakistani</option>
                            <option value="India">Indian</option>
                        </select>

                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-2 my-2">
                <div className="lg:w-[33%] space-x-2 my-2">
                    <label htmlFor="contactNo" className="text-black ml-2">Contact No</label>
                    <div className='flex items-center bg-white border border-gray-300 px-1 rounded-md'>
                        <BsTelephone className="w-6 h-6 text-gray-400" />
                        <input
                            id="contactNo"
                            name="contactNo"
                            type="tel"
                            className="w-full px-3 py-2 rounded-md border-none"
                            placeholder="Contact No"
                            value={formData.contactNo}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="lg:w-[33%] space-x-2 my-2">
                    <label htmlFor="review" className="text-black ml-2">Review</label>
                    <select
                        id="review"
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 appearance-none"
                    >
                        <option value="">Select Review</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Bad">Bad</option>
                    </select>
                </div>
                <div className="lg:w-[32%] space-x-2 my-2">
                    <label htmlFor="destination" className="text-black ml-2">Destination</label>
                    <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 appearance-none"
                    >
                        <option value="">Select Destination</option>
                      
                    </select>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-2 my-2">
                <div className="lg:w-[33%] space-x-2 my-2">
                    <label htmlFor="destination" className="text-black ml-2">Destination</label>
                    <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 appearance-none"
                    >
                        <option value="">Select Destination</option>
                       
                    </select>
                </div>
                <div className="lg:w-[33%] space-x-2 my-2">
                    <label htmlFor="destination" className="text-black ml-2">Hotel</label>
                    <select
                        id="destination"
                        name="destination"
                        value={formData.hotel}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 appearance-none"
                    >
                        <option value="">Select Your Hotel</option>
                      
                    </select>
                </div>
                <div className="lg:w-[32%] space-x-2 my-2">
                    <label htmlFor="checkInDate" className="text-black ml-3">Check-In </label>
                    <input
                        id="checkInDate"
                        name="checkInDate"
                        type="date"
                        value={formData.checkInDate}
                        onChange={handleChange}
                        className="w-full  py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-2 my-2">
                <div className="lg:w-[33%] space-x-2 my-2">
                    <label htmlFor="destination" className="text-black ml-2">Check-Out </label>
                    <input
                        id="CheckOutDate"
                        name="CheckOutDate"
                        type="date"
                        value={formData.checkOutDate}
                        onChange={handleChange}
                        className="w-full  py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="lg:w-[33%] space-x-2 my-2">
                    <label htmlFor="destination" className="text-black ml-2">Adults </label>
                    <select
                        id="adults"
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 appearance-none"
                    >
                        <option value="">Select Number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                       
                    </select>
                </div>
                <div className="lg:w-[33%] space-x-2 my-2">
                    <label htmlFor="destination" className="text-black ml-2">Kids </label>
                    <select
                        id="kids"
                        name="kids"
                        value={formData.kids}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 appearance-none"
                    >
                        <option value="">Select Number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                       
                    </select>
                </div>
            </div>

            <button
                    className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out lg:w-[33%] w-full mx-auto my-2"
                    onClick={() => console.log("Book Now clicked")}
                >
                    Book Now
                </button>



        </div>
    )
}
export default Hotelform