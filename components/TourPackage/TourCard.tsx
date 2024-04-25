import Image, { StaticImageData } from "next/image";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
// import image from "../../public/TourPackage/FeaturedListing/imageicon.png"; 
// import video from "../../public/TourPackage/FeaturedListing/videoicon.png";
import { MdPhotoCamera } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import Link from 'next/link';

interface TourCardProps {
  pid: number,
  pic?: StaticImageData[] | string[];
  loc: string;
  title: string;
  duration: string;
  people: number;
  price: number;
  dprice: number;
  review: number;
  imageCount: number;
  videoCount: number
}
const TourCard: React.FC<TourCardProps> = ({ pid, pic, loc, title, duration, people, price, dprice, review, imageCount, videoCount }) => {
  return (
    <Link href={`/pages/packagedetails/${pid}`} className="flex flex-col  md:h-[21rem] xl:h-auto h-auto items-center justify-center lg:w-[30%] xl:w-[300px] md:w-[45%] w-[100%] shadow-lg shadow-gray-400 rounded-lg">

      <div className=" w-full relative bg-pink-400">

        <Image src={pic?.length > 0 && pic[0]} alt="not_found" width={300} height={300} className="w-full h-52 absolute z-0" />
        <div className="absolute z-10 flex flex-row justify-between w-full">
          <p className="bg-sky-500 text-white text-sm px-2 py-[2px] m-2 rounded-md">Featured</p>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row bg-gray-400 blur-20  gap-[2px] m-2 px-2 py-[2px] rounded-md"><MdPhotoCamera size={14} className="text-white mt-[3px]" /><p className="text-white text-sm">{imageCount}</p></div>
            <div className="flex flex-row gap-2 bg-sky-500 text-white m-2 px-2 py-[2px] rounded-md"><BiSolidVideos size={14} className="text-white mt-[3px]" /><p className="text-sm ">{videoCount}</p></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 h-full w-full bg-white-300 px-5 rounded-lg py-5 mt-[12.5rem] ">
        <div className="flex flex-row gap-2">
          <MdLocationPin size={15} className="text-blue-500" />
          <p className="text-xs font-light text-gray-500">{loc}</p>
        </div>

        <div>
          <h5 className="text-xs font-bold">{title}</h5>
        </div>

        <div className="flex flex-row gap-2 pb-[2px]">
          <div className="flex flex-row">
            <MdOutlineStarPurple500 className="text-yellow-400" />
            <MdOutlineStarPurple500 className="text-yellow-400" />
            <MdOutlineStarPurple500 className="text-yellow-400" />
            <MdOutlineStarPurple500 className="text-yellow-400" />
            <MdOutlineStarPurple500 className="text-yellow-400" />
          </div>
          <p className="text-xs text-gray-500">({review} Review)</p>
        </div>

        <div className="flex flex-row gap-8 pb-[2px]">
          <div className="flex flex-row gap-2">
            <IoMdTime className="text-blue-400" />
            <p className="text-xs text-gray-500">{duration}</p>
          </div>

          <div className="flex flex-row gap-2">
            <IoPersonAddOutline className="text-blue-400" />
            <p className="text-xs text-gray-500">{people} persons</p>
          </div>
        </div>

        <div className="h-[0.5px] w-full bg-gray-300 "></div>

        <div className="flex flex-row gap-2">
          <p className="text-xs text-gray-500 ">From</p>
          <p className="text-xs text-blue-400 font-semibold ">Rs{dprice}</p>
          <p className="text-xs text-gray-500 line-through">Rs{price}</p>
        </div>

      </div>
    </Link>
  )
}
export default TourCard;
