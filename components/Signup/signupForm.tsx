// components/ResponsiveLayout.js
"use client";

import { Button, message, Space } from 'antd';
import React from "react";
import { auth } from '../../firebase/config'
import Image from "next/image";
import Bg from "../../assets/login/pic.png";
import icon1 from "../../public/aboutus/plane 2.png";
import icon2 from "../../public/aboutus/travel-and-tourism 1.png";
import icon3 from "../../public/aboutus/location 1.png";
import Link from 'next/link';

import { useState } from "react";
import {
    HiOutlineUser,
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineCalendar,
    HiOutlineUsers,
    HiOutlineChip,
} from "react-icons/hi";
import googlepic from "../../assets/login/googlePic.png";
import facebookpic from "../../assets/login/facebook.png";
import Signup from '@/app/pages/signup/page';
import { signUp } from '@/apiFunctions/authentication';
import { useAppDispatch } from '@/lib/store';
import { setUserData } from '@/lib/feature/user/userSlice';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
 const dispatch = useAppDispatch();

const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();
    const [formData, setFormData] = useState({
        name: "",
        lname: "",
        email: "",
        password: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async () => {
            console.log("yeah")
        if (!formData.name) {
            messageApi.open({
                type: 'error',
                content: 'Name cannot be empty',
            })
            return
        }
        else if (!formData.lname) {
            messageApi.open({
                type: 'error',
                content: 'Name cannot be empty',
            })
            return
        }
        else if (formData.password?.length < 8) {
            messageApi.open({
                type: 'error',
                content: 'Password must be atleast 8 characters long',
            })
            return
        }
        else if (!formData.email) {
            messageApi.open({
                type: 'error',
                content: 'Email can not be empty',
            })
            return
        }

        try {
            const response = await signUp(formData);
            console.log("yeah")
            dispatch(setUserData(response?.data?.userData))
            console.log("yeah")
            router.push('/');
            messageApi.open({
                type: 'success',
                content: "Logged in successfully"
            })

        } catch (error) {
        console.log(error.response)
            messageApi.open({
                type: 'error',
                content: error?.response?.data?.message
            })
                
        }




    }


    return (
        <div className="  bg-white mx-auto flex flex-col lg:flex-row lg:items-center justify-center  my-16 w-[90%]">
            {contextHolder}
            <div className="lg:w-[40%] flex justify-center  mb-4 lg:mb-0  ">
                <Image src={Bg} alt="Image" className="lg:w-full lg:max-w-xs w-1/2 " />
            </div>
            <div className="lg:w-[60%] lg:pl-8">
                <h2 className="text-black text-3xl my-1 font-bold mb-4 text-center lg:text-left ">
                    Create An Account To Get started
                </h2>
                <span className="mb-4  p-1 text-white rounded-sm h-8 bg-yellow-400 w-[10rem] ">
                    20% OFF
                </span>{" "}
                <span>get 20% off for web signup</span>
                <div className="flex flex-col lg:flex-row gap-4 my-3">
                    <div className="mb-4 ">
                        <label
                            htmlFor="First Name"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            First Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                            />
                            <HiOutlineUser className="absolute top-3 left-3 text-gray-500" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="Last Name"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Last Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="lname"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                                placeholder="Enter your Last name"
                                className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full" // Added left padding to create space for the icon
                            />
                            <HiOutlineMail className="absolute top-3 left-3 text-gray-500" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="Your email"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Your Email{" "}
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                        />
                        <HiOutlinePhone className="absolute top-3 left-3 text-gray-500" />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="Your password"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Your password{" "}
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter  password"
                            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                        />
                        <HiOutlinePhone className="absolute top-3 left-3 text-gray-500" />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-[50%] h-[1px] rounded-sm  bg-gray-200"> </div>
                    <span className=" mx-5">OR</span>
                    <div className="w-[50%] h-[1px] rounded-sm  bg-gray-200"> </div>
                </div>
                <div className="flex flex-col lg:flex-row my-3 gap-4">
                    <button className="bg-white text-black py-2 px-5 rounded flex items-center border border-gray-400">
                        <Image src={googlepic} alt="Google icon" className="w-6 h-6 mr-2" />{" "}
                        Sign In with Google
                    </button>
                    <button className="bg-white text-black py-2 px-5 rounded flex items-center border border-gray-300">
                        <Image
                            src={facebookpic}
                            alt="Facebook icon"
                            className="w-6 h-6 mr-2"
                        />{" "}
                        Sign In With Facebook
                    </button>
                </div>
                <div className="flex justify-center lg:justify-normal items-center">
                    <button
                        className="bg-primary w-full hover:bg-blue-600 text-white py-2 px-5 rounded"
                        onClick={handleSubmit}
                    >
                        SIGN UP{" "}
                    </button>
                </div>
                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-primary rounded-md"
                        id="termsCheckbox"
                    />
                    <label htmlFor="termsCheckbox" className="ml-2 text-gray-700">
                        By signing up, you agree to Customers.ai’s Terms Of Service and
                        Privacy Policy
                    </label>
                </div>
                <div className="flex items-center justify-center lg:justify-normal ">
                    <p className="text-gray-700">Don&apos;t have an account?</p>
                    <button className="ml-2 bg-primary hover:bg-blue-600 text-white  py-2 px-4 rounded">
                        <Link href="/pages/login">Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
