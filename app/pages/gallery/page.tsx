'use client';



import InstaIcon from "../../../public/gallery/Group (1).png";
import TempImage from "../../../public/home/Rectangle 19368.png";
import Icon from "../../../public/gallery/Group.png";
import Image from "next/image";
import { useState } from "react";
import { Button, Modal } from 'antd';
import { Yesteryear } from "next/font/google";

const inter = Yesteryear({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal"],
});


const Gallery = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <div className="flex my-20 justify-center">

                <div className="flex flex-col items-center">
                    <div className="flex w-4/5 lg:w-3/5 md:w-3/5 h-60 lg:h-full" >
                        <div className="flex flex-col w-4/12">
                            <div className="h-40 w-full md:py-2 py-1 px-1 md:px-5 relative" onClick={showModal} >
                                <Image src={TempImage} className="h-full rounded-lg w-full" alt="gallery" />
                                <div className="h-full w-full md:py-2 py-1 px-1 md:px-5 z-10 top-0 left-0 absolute">
                                    <div className="h-full w-full grad justify-center items-center flex rounded-lg opacity-2 z-10">
                                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                            <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                                <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:h-80 h-60 md:py-2 py-1 px-1 w-full md:px-5 relative" onClick={showModal}>
                                <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                                <div className="h-full w-full md:py-2 px-1 py-1 md:px-5 z-10 top-0 left-0 absolute">
                                    <div className="h-full w-full grad justify-center items-center flex rounded-lg opacity-2 z-10">
                                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                            <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                                <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col w-4/12">
                            <div className="h-60 md:py-2 py-1 relative w-full " onClick={showModal}>
                                <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                                <div className="h-full w-full md:py-2 py-1 z-10 top-0 left-0 absolute">
                                    <div className="h-full w-full  grad justify-center items-center flex rounded-lg opacity-2 z-10">
                                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                            <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                                <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-60 md:py-2 py-1  relative w-full" onClick={showModal}>
                                <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                                <div className="h-full w-full  md:py-2 py-1 z-10 top-0 left-0 absolute">
                                    <div className="h-full w-full  grad justify-center items-center flex rounded-lg opacity-2 z-10">
                                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                            <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                                <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-4/12">
                            <div className="h-80 py-1 md:py-2 md:px-5  relative px-1 w-full" onClick={showModal}>
                                <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                                <div className="h-full w-full py-1 md:py-2 md:px-5 px-1 z-10 top-0 left-0 absolute">
                                    <div className="h-full w-full grad justify-center items-center flex rounded-lg opacity-2 z-10">
                                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                            <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                                <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-40 md:py-2 md:px-5 py-1 px-1 relative w-full" onClick={showModal}>
                                <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                                <div className="h-full w-full md:py-2 py-1 px-1 md:px-5 z-10 top-0 left-0 absolute">
                                    <div className="h-full w-full  grad justify-center items-center flex rounded-lg opacity-2 z-10">
                                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                            <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                                <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>








                <Modal title="Gallery" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className="">
                    <div className="flex h-96 justify-center items-center">
                        <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                    </div>
                </Modal>







            </div>
            <h1 className={`text-center ${inter.className} text-[#FF970D] text-2xl`}>
                Explore the world
            </h1>
            <h1 className={`text-center font-bold md:text-3xl md:my-2 text-2xl`}>
                Recent Instagram Posts
            </h1>
            <div className="w-full my-10 flex justify-center">
                <div className="w-4/5 flex justify-center flex-wrap items-center">
                    <div className="w-52 h-52 grad my-3 lg:mx-5 mx-1">
                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                <Image src={InstaIcon} className="h-6 w-6" alt="gallery" />
                        </div>
                    </div>
                    <div className="w-52 h-52 grad my-3 lg:mx-5 mx-1">
                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                <Image src={InstaIcon} className="h-6 w-6" alt="gallery" />
                        </div>
                    </div>
                    <div className="w-52 h-52 grad my-3 lg:mx-5 mx-1">
                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                <Image src={InstaIcon} className="h-6 w-6" alt="gallery" />
                        </div>
                    </div>
                    <div className="w-52 h-52 grad my-3 lg:mx-5 mx-1">
                        <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                <Image src={InstaIcon} className="h-6 w-6" alt="gallery" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Gallery;

