import { NextPage } from "next";
import { FaMapPin } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { IoMdTimer } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoFilterCircleOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiEqualizerLine } from "react-icons/ri";

interface Props {}

const SearchbarAndFilters: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col lg:flex-row my-3 bg-white text-black rounded px-4 py-4 shadow-lg shadow-gray-400">
      <div className="flex mx-2 items-center">
        <div className="me-2">
          <FaMapPin className="text-[#00ADEE] text-xl" />
        </div>
        <div>
          <p>Location</p>
          <p className="text-xs text-gray-500">Choose a location</p>
        </div>
      </div>
      <div className="h-[50px] mx-5 bg-gray-300 w-[1px]"></div>
      <div className="flex mx-2 items-center">
        <div className="me-2">
          <FaCalendarAlt className="text-[#00ADEE] text-xl" />
        </div>
        <div>
          <p>Pickup Date</p>
          <p className="text-xs text-gray-500">Add Date</p>
        </div>
      </div>
      <div className="h-[50px] mx-5 bg-gray-300 w-[1px]"></div>
      <div className="flex mx-2 items-center">
        <div className="me-2">
          <FaCalendarAlt className="text-[#00ADEE] text-xl" />
        </div>
        <div>
          <p>Return Date</p>
          <p className="text-xs text-gray-500">Add Date</p>
        </div>
      </div>
      <div className="h-[50px] mx-5 bg-gray-300 w-[1px]"></div>
      <div className="flex mx-2 items-center justify-between w-44">
        <div className="me-2">
          <RiEqualizerLine className="text-[#00ADEE] text-3xl" />
        </div>
        <div className="bg-[#00ADEE] flex items-center cursor-pointer text-white rounded-md px-5 py-3">
          <CiSearch className="mx-1" size={20} />
          <p className="mx-1">Search</p>
        </div>
      </div>
    </div>
  );
};

export default SearchbarAndFilters;
