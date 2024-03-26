import { Button } from 'antd';
import { NextPage } from 'next';
import Image from 'next/image';
import meterImage from "../../assets/rentcar/meterIcon.svg";
import pumpImage from "../../assets/rentcar/pumpIcon.svg";
import gearImage from "../../assets/rentcar/gearIcon.svg";

interface Props {
    CarTitle: string;
    RentPrice: number;
    ModelYear: number;
    KilometersRan: number;
    DriveType: string;
    ConsumptionType: string;
    CarImage: any;
    CarType: string;
}

const CarCard: NextPage<Props> = ({ CarTitle, CarType, CarImage, ConsumptionType, DriveType, KilometersRan, ModelYear, RentPrice }) => {
    return <div className='m-4 pb-5 bg-white rounded-xl flex flex-col items-center' style={{ boxShadow: '-1px -1px 20px -6px #ccc' }}>
        <Image alt='image_not_found' src={CarImage} />
        <div className='py-2 px-4 w-full'>
            <p className='text-sm my-1 py-1 px-2 border-[1px] text-center text-[#8D8E93] border-gray-300 w-[60px] rounded-md'>{ModelYear}</p>
            <p className='font-medium py-1'>{CarTitle}</p>
            <span className='flex items-center'>
                <p className='font-medium text-2xl text-[#00ADEE] py-1'>PKR {RentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p className='text-[#8D8E93] px-2'>Per day</p>
            </span>
            <div className='h-[1px] bg-gray-300 w-full'></div>
            <div className='flex py-6 justify-between'>
                <div className='flex items-center'>
                    <Image className='px-1' alt='image_not_found' src={meterImage} />
                    <p className='px-2 text-[#8D8E93]'>{KilometersRan}k</p>
                </div>
                <div className='flex items-center'>
                    <Image className='px-1' alt='image_not_found' src={gearImage} />
                    <p className='px-2 text-[#8D8E93]'>{DriveType}</p>
                </div>
                <div className='flex items-center'>
                    <Image className='px-1' alt='image_not_found' src={pumpImage} />
                    <p className='px-2 text-[#8D8E93]'>{ConsumptionType}</p>
                </div>
            </div>
        </div>
        <Button className='bg-[#4096FF] py-6 w-[90%] flex items-center justify-center rounded-3xl' type='primary' >RENT NOW</Button>
    </div>
}

export default CarCard