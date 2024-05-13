import { NextPage } from "next";

interface SelectedResponse {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  description: string;
  destination: string;
  totalDuration: number;
  pickupLocation: string;
  vehicleName: string;
  noOfAdults: number;
  noOfKids: number;
  hotelType: string;
  noOfRooms: number;
  packageType: string;
  similarPackageId: number;
  departureDate: Date;
}

interface Props {
  selectedResponses: SelectedResponse;
  setSelectedResponses: (prm: SelectedResponse) => void;
}

const PersonalDetails: NextPage<Props> = ({selectedResponses, setSelectedResponses}) => {
  return (
    <div className="relative mt-4 md:mt-0">
      <div className=" bg-[#00ADEE] text-white w-36 py-1 px-2 rounded-md mt-4 absolute ml-0 md:ml-[0rem] lg:-ml-20">
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
              placeholder="Name"
              onChange={(e) => setSelectedResponses({
                ...selectedResponses,
                firstName: e.target.value
              })}
            />
          </div>
          <div>
            <p className="mb-1">Last Name</p>
            <input
              className=" border-gray-300 rounded-md w-11/12 md:w-[274px]"
              type="text"
              name=""
              placeholder="Last Name"
              onChange={(e) => setSelectedResponses({
                ...selectedResponses,
                lastName: e.target.value
              })}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
          <div>
            <p className="mb-1">Phone/Mobile</p>
            <input
              className="border-gray-300 rounded-md w-11/12 md:w-[274px]"
              type="tel"
              name=""
              placeholder="Phone/Mobile"
              onChange={(e) => setSelectedResponses({
                ...selectedResponses,
                phone: e.target.value
              })}
            />
          </div>
          <div>
            <p className="mb-1">Email</p>
            <input
              className="border-gray-300 rounded-md w-11/12 md:w-[275px]"
              type="email"
              name=""
              placeholder="Email"
              onChange={(e) => setSelectedResponses({
                ...selectedResponses,
                email: e.target.value
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
