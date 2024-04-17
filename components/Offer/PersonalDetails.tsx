import { NextPage } from "next";

interface Props {}

const PersonalDetails: NextPage<Props> = ({}) => {
  return (
    <div className=" relative">
      <div className=" bg-[#00ADEE] text-white w-36 py-1 px-2 rounded-md mt-4 absolute ml-0 md:ml-[1rem] lg:-ml-20">
        Personal Details
      </div>
      <div className="w-full md:w-[700px] py-14 px-6 md:px-14 bg-white shadow-2xl rounded-lg">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div>
            <p className="mb-1">Name</p>
            <input
              className=" rounded-md w-11/12 border-gray-300 md:w-[275px]"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
          </div>
          <div>
            <p className="mb-1">Last Name</p>
            <input
              className=" border-gray-300 rounded-md w-11/12 md:w-[274px]"
              type="text"
              name=""
              id=""
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
          <div>
            <p className="mb-1">Phone/Mobile</p>
            <input
              className="border-gray-300 rounded-md w-11/12 md:w-[274px]"
              type="number"
              name=""
              id=""
              placeholder="Phone/Mobile"
            />
          </div>
          <div>
            <p className="mb-1">Email</p>
            <input
              className="border-gray-300 rounded-md w-11/12 md:w-[275px]"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PersonalDetails;
