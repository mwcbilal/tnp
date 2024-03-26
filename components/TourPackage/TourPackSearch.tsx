import { FaMapPin } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { IoMdTime, IoMdTimer, IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoFilterCircleOutline } from "react-icons/io5";
import { RiEqualizerLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
const TourpackSearch = () => {
  return (
    <div className="flex my-3 flex-col md:flex-row md:mx-5 bg-white text-black flex-wrap rounded px-4 py-4" style={{ boxShadow: "-1px -1px 20px -6px #ccc" }}>
      <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
        <div className="flex items-center">
          <div className="me-2">
            <FaMapPin className="text-[#00ADEE] text-xl" />
          </div>
          <div>
            <p>Destination</p>
            <p className="text-xs text-gray-500">
              Melbourne, Australia
            </p>
          </div>
        </div>
        <IoIosArrowDown className="ms-8" />
      </div>
      <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

      <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
        <div className="flex items-center">
          <div className="me-2">
            <GiMountainClimbing className="text-[#00ADEE] text-xl" />
          </div>
          <div>
            <p>Type</p>
            <p className="text-xs text-gray-500">Booking type</p>
          </div>
        </div>
        <IoIosArrowDown className="ms-8" />
      </div>

      <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

      <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
        <div className="flex items-center">
          <div className="me-2">
            <IoMdTimer className="text-[#00ADEE] text-xl" />
          </div>
          <div>
            <p>Date From</p>
            <p className="text-xs text-gray-500">Date Start From</p>
          </div>
        </div>
        <IoIosArrowDown className="ms-8" />
      </div>

      <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

      <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
        <div className="flex items-center">
          <div className="me-2">
            <RxAvatar className="text-[#00ADEE] text-xl" />
          </div>
          <div>
            <p>Persons</p>
            <p className="text-xs text-gray-500">0</p>
          </div>
        </div>
        <IoIosArrowDown className="ms-8" />
      </div>

      <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>
      <div className="flex mx-2 justify-between items-center">
        <div className="me-2">
          <RiEqualizerLine className="text-[#00ADEE] text-3xl" />
        </div>
        <div className="bg-[#00ADEE] flex items-center md:w-auto -full text-center cursor-pointer text-white rounded-md px-5 py-3 ml-4">
          <CiSearch className="mr-2" size={20} />
          Search
        </div>
      </div>
    </div>
  );
};
export default TourpackSearch;
