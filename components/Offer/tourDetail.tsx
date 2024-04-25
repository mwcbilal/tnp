import { NextPage } from "next";
import MyDropdown from "./dropdown";

interface Props {}

const TourDetails: NextPage<Props> = ({}) => {
  return (
    <div className="w-11/12 md:w-[700px] py-14 px-4 md:px-14 bg-white rounded-lg mt-4 shadow-2xl">
      <div className=" bg-[#00ADEE] text-white w-28 py-1 px-2 rounded-md -mt-8 absolute -ml-4 md:-ml-[3rem] lg:-ml-28">
        Tour Details
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <div>
          <p className="my-2">Select your desired areas</p>
          <div className="relative">
            <MyDropdown />
          </div>
        </div>
        <div>
          <p className="my-2">Tour Duration (Days)</p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between mt-2">
        <div>
          <p className="my-2">Pick Up city (location)</p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
        <div>
          <p className="my-2">Vehicle type</p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between mt-2">
        <div>
          <p className="my-2">No. of adults</p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
        <div>
          <p className="my-2">No. of kids</p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-4 md:flex-row justify-between mt-2">
        <div>
          <p className="my-2">Hotel Type</p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
        <div>
          <p className="my-2">Rooms </p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-4 md:flex-row justify-between mt-2">
        <div>
          <p className="my-2">Package type</p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
        <div>
          <p className="my-2">Additional features</p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-4 md:flex-row justify-between mt-2">
        <div>
          <p className="my-2">Tour you want to (but little changes)</p>
          <div className="relative">
            <MyDropdown />
          </div>
        </div>
        <div>
          <p className="my-2">When would you like to go?</p>
          <div className=" relative">
            <MyDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
