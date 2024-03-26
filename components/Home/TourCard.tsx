import Image, { StaticImageData } from "next/image";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
interface TourCardProps {
  pic: StaticImageData;
  loc: string;
  title: string;
  duration: string;
  people: number;
  price: number;
  dprice: number;
  review: number;
}
const TourCard: React.FC<TourCardProps> = ({
  pic,
  loc,
  title,
  duration,
  people,
  price,
  dprice,
  review,
}) => {
  return (
    <div className="flex flex-col bg-white md:h-[18rem] xl:h-auto h-auto items-center justify-center lg:w-[400px] xl:w-[300px] md:w-[40%] w-[90%] shadow-lg shadow-gray-400 rounded-lg">
      <div className=" w-full h-[40%]">
        <Image src={pic} alt="tour image " className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-2 h-full w-full bg-white-300 px-2 rounded-lg py-2 ">
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
    </div>
  );
};
export default TourCard;
