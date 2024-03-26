import Image, { StaticImageData } from "next/image";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import Link from 'next/link';

interface TourCardProps {
  id: number,
  pid: number,
  pic: StaticImageData;
  loc: string;
  title: string;
  duration: string;
  people: number;
  price: number;
  dprice: number;
  review: number;
}
const TourCard: React.FC<TourCardProps> = ({ id, pid, pic, loc, title, duration, people, price, dprice, review }) => {

  return (
    <Link href={`/pages/domestic/${id}/${pid}`} className="flex flex-col  md:h-[21rem] xl:h-auto h-auto items-center justify-center lg:w-[30%] xl:w-[300px] md:w-[45%] w-[100%] shadow-lg shadow-gray-400 rounded-lg">

      <div className=" w-full">
        <Image src={pic} alt="tour image " className="w-full" />
      </div>

      <div className="flex flex-col gap-2 h-full w-full bg-white-300 px-5 rounded-lg py-5 ">
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
