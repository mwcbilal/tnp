"use client";
import { Button, message } from 'antd';
import { fetchDestinations, postHotelBooking } from "@/apiFunctions/authentication";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPerson, BsEnvelope, BsTelephone } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { useAppSelector } from '@/lib/store';

const Hotelform = () => {
const user = useAppSelector((data) => data?.auth?.data)
    const [destinations, setDestinations] = useState([])
    const [messageApi, contextHolder] = message.useMessage();
    const [formData, setFormData] = useState({
        //        name: '',
        //        email: '',
        //        nationality: '',
        //        contactNo: '',
        destination: '',
        hotel: '',
        checkInDate: '',
        checkOutDate: '',
        adults: '',
        kids: '',
    });

    const getDestinations = async () => {
        const destinations = await fetchDestinations()
        setDestinations(destinations)
    }
    useEffect(() => {
        getDestinations()
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    let filteredHotels: any;
    if (formData?.destination) {
        const temp: any = destinations?.filter((dest) => {
            return dest?.destination_id === parseInt(formData?.destination)
        })
        filteredHotels = temp[0]?.tnp_hotels
    }

    const handleSubmit = async () => {
        if (!formData?.destination || !formData?.checkInDate || !formData?.checkOutDate || !formData?.hotel || !formData?.kids || !formData?.adults) {
            messageApi.error('Fields can not be empty!');
            return
        }
        console.log(formData)
        const res = await postHotelBooking(formData, user)
        console.log(res)
        if (res?.message === "success"){
            messageApi.success('Request Submitted Successfully!');
        }else{
            messageApi.error('Ops Error, Somrthing wen wrong!');
        }
    }


    return (
        <div className="bg-white mx-auto flex flex-col gap-4 lg:items-center justify-center my-16 w-[80%] max-w-screen-xl">
          {contextHolder}
            <h1 className="lg:text-3xl text-1xl font-semibold my-2 text-center ">HOTEL BOOKING FORM</h1>

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
                            <option value="">  Select Destination </option>
                            {
                                destinations?.map((dest) => {
                                    return (<option value={dest?.destination_id}> {dest?.destination_name} </option>)
                                })
                            }
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
                            id="hotel"
                            name="hotel"
                            value={formData.hotel}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-grayy rounded-[2px] focus:outline-none focus:border-blue-500 appearance-none"
                            style={{ height: "45px" }}
                        >
                            <option value="">Select Your Hotel</option>


                            {

                                filteredHotels?.map((hotel: any) => {
                                    return (<option value={hotel?.hotel_id}>{hotel?.hotel_name}</option>
                                    )
                                })

                            }


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
                    <label htmlFor="checkOutDate" className="text-black ml-2 mb-2">Check-Out </label>
                    <input
                        id="checkOutDate"
                        name="checkOutDate"
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
                onClick={handleSubmit}
            >
                BOOK NOW
            </button>



        </div>
    )
}
export default Hotelform
