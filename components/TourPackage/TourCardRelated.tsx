import Image, { StaticImageData } from "next/image";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdPhotoCamera } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import Link from 'next/link';
import { useParams } from "next/navigation";


interface TourCardProps {
  pid: number;
  pic?: StaticImageData[] | string[];
  loc: string;
  title: string;
  duration: string;
  people: number;
  price: number;
  dprice: number;
  review: number;
  imageCount: number;
  videoCount: number;
  color?: string;
}
const TourCardRelated: React.FC<TourCardProps> = ({ pid, pic, loc, title, duration, people, price, dprice, review, imageCount, videoCount, color = "sky" }) => {
  const { category, id } = useParams();
  console.log("paramssss founddd", { category, id });


  const bgClass = (id && id[0] === 'honeymoon') || (category && category[0] === 'honeymoon') 
  ? "bg-[#8b2424]" 
  : "bg-[#00ADEE]";


  const textColor = (id && id[0] === 'honeymoon') || (category && category[0] === 'honeymoon') 
  ? "text-[#8b2424]" 
  : "text-[#00ADEE]";
  return (
    <Link  href={`/pages/packagedetails/${category && category[0] === "honeymoon" ? "honeymoon/" : ""}${pid}`} className="flex flex-col  xl:h-auto h-auto items-center justify-center lg:w-full xl:w-[380px] md:w-[45%]  shadow-lg hover:shadow-xl hover:scale-[105%] shadow-gray-400 rounded-lg duration-300 ease-in-out">
      <div className="grid grid-cols-2 ">
      <div className=" w-full relative ">
        <div className="overflow-hidden w-full h-[150px] absolute">
          <Image
            src={pic?.length > 0 && pic[0]}
            alt="not_found"
            // width={103}
            // height={80}
            fill={true}
            objectPosition="center"
            className="w-full h-52 absolute z-0 transform hover:scale-[115%] transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="absolute z-10 flex flex-row justify-between w-full">
        <p className={`${bgClass} text-white text-xs px-2 py-[2px] m-2 rounded-md`}>Featured</p> 
          <div className="flex flex-row gap-2">
            <div className="flex flex-row bg-gray-400 blur-20  gap-[2px] m-2 px-2 py-[2px] rounded-md"><MdPhotoCamera size={12} className="text-white mt-[3px]" /><p className="text-white text-xs">{imageCount}</p></div>
            {/* <div className={`flex flex-row gap-2 ${bgClass} text-white m-2 px-2 py-[2px] rounded-md`}><BiSolidVideos size={14} className="text-white mt-[3px]" /><p className="text-sm ">{videoCount}</p></div> */}
          </div>
        </div>
      </div>

      <div className="flex  flex-col gap-2 h-[150px] w-full bg-white px-5 rounded-lg">
        <div className="flex flex-row gap-2 mt-3">
          <MdLocationPin size={15} className={`${textColor}`}/>
          <p className={`text-xs font-light ${textColor}`}>{loc}</p>
        </div>

        <div className="overflow-hidden">
          <h5 className="text-xs font-bold truncate">{title}</h5>
        </div>

        <div className="flex flex-row gap-2 pb-[2px]">
          <div className="flex flex-row">
            <MdOutlineStarPurple500 size={10} className={`${textColor}`}/>
            <MdOutlineStarPurple500 size={10} className={`${textColor}`}/>
            <MdOutlineStarPurple500 size={10} className={`${textColor}`}/>
            <MdOutlineStarPurple500 size={10} className={`${textColor}`}/>
            <MdOutlineStarPurple500 size={10} className={`${textColor}`}/>
          </div>
          <p className="text-xs text-gray-500">({review} Review)</p>
        </div>

        <div className="flex flex-row gap-2 pb-[2px]">
          <div className="flex flex-row gap-1">
            <IoMdTime size={10} className={`${textColor}`} />
            <p className="text-[12px] mt-[-2px] text-gray-500">{duration}</p>
          </div>

          <div className="flex flex-row gap-2">
            <IoPersonAddOutline size={10} className={`${textColor}`}/>
            <p className="text-[12px] mt-[-2px] text-gray-500">{people} persons</p>
          </div>
        </div>

        <div className="h-[0.5px] w-full bg-gray-300 "></div>

        <div className="flex flex-row gap-2">
          <p className="text-xs text-gray-500 ">From</p>
          <p className={`text-xs ${textColor} font-semibold`}>Rs{dprice}</p>
          <p className="text-xs text-gray-500 line-through invisible ">Rs{price}</p>
        </div>
      </div>
      </div>
     
    </Link>
  );
};
export default TourCardRelated;


