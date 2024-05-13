"use client";
import { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiOutlineChip,
} from "react-icons/hi";
import { Toast } from "@/components/SideToast/SideToast";
import { Spin, Select } from "antd";
import axios from "axios";

const HoneymoonForm = ({
  showAvailabilityButton,
  packageId,
  packageTypeId,
  packageTotalPersons
}: {
  showAvailabilityButton: Boolean;
  packageId: string;
  packageTypeId: string;
  packageTotalPersons: number;
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [tripId, setTripId] = useState("");


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    dob: "",
    adults: "",
    kids: "",
    description: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.confirmEmail || !formData.phone || !formData.phone ||  
      !formData.description
    ) {
      Toast.fire({
        icon: "question",
        title: "Please select all fields.",
      });
      return; // Exit the function early if no date is selected
    }
    setSubmitting(true); // Start submitting
    console.log("package id", packageId);
    try {
      console.log("form data here", formData);

      const response = await axios.post(
        "http://localhost:3000/pages/api/honeymoonTrip",
        {
          trip_package_id: packageId,
          trip_date: formData.dob,
          trip_booked_count: 2
        }
      );
      setTripId(response.data.trip_id);
      console.log("trip id here", response.data.trip_id);

      await axios.post("http://localhost:3000/pages/api/bookTrip", {
        tour_client_name: formData.name,
        tour_client_email: formData.email,
        tour_client_phone: formData.phone,
        tour_trip_id: response.data.trip_id,
        tour_persons_count: 2,
        tour_children_count: 0,
        tour_description: formData.description,
      });

      Toast.fire({
        icon: "success",
        title: "You booked the trip",
      });

      console.log("Submission response for trip:", response.data);
      setFormData({
        name: "",
        email: "",
        confirmEmail: "",
        phone: "",
        dob: "",
        adults: "",
        kids: "",
        description: "",
      });
      setTripId("");
    } catch (error) {
      console.error("Error creating Destination:", error);
    } finally {
      setSubmitting(false); // Stop submitting
    }
  };

  return (
    <div className="w-full max-w-md h-max bg-transparent rounded-md flex flex-col mx-auto p-4 md:p-0">
      <h2 className="uppercase text-black p-5 text-2xl font-bold">
        Book this tour
      </h2>
      <div className="mb-4 ">
        {/* <label htmlFor="name" className="block text-white font-bold mb-2">Name</label> */}
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input-with-icon pl-8 rounded-lg w-11/12 border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <HiOutlineUser className="absolute top-3 left-6 text-gray-400" />
        </div>
      </div>
      <div className="mb-4">
        {/* <label htmlFor="email" className="block text-white font-bold mb-2">Email</label> */}
        <div className="relative flex items-center justify-center">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input-with-icon pl-8 rounded-lg border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-11/12" // Added left padding to create space for the icon
          />
          <HiOutlineMail className="absolute top-3 left-6 text-gray-400" />
        </div>
      </div>
      <div className="mb-4">
        {/* <label htmlFor="confirmEmail" className="block text-white font-bold mb-2">Confirm Email</label> */}
        <div className="relative flex items-center justify-center">
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            placeholder="Confirm Email"
            className="input-with-icon pl-8 rounded-lg border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-11/12"
          />
          <HiOutlineMail className="absolute top-3 left-6 text-gray-400" />
        </div>
      </div>
      <div className="mb-4">
        {/* <label htmlFor="phone" className="block text-white font-bold mb-2">Phone</label> */}
        <div className="relative flex items-center justify-center">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="input-with-icon pl-8 rounded-lg border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-11/12"
          />
          <HiOutlinePhone className="absolute top-3 left-6 text-gray-400" />
        </div>
      </div>
      <div className="mb-4">
        {/* <label htmlFor="dob" className="block text-white font-bold mb-2">Date of Birth</label> */}
        <div className="relative flex items-center justify-center ">
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="DD-MM-YY"
            className="input-with-icon text-gray-400 pl-8 rounded-lg border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-11/12"
          />
          <HiOutlineCalendar className="absolute top-3 left-6 text-gray-400" />
        </div>
      </div>
      {/* <div className="mb-4">
        <label htmlFor="adults" className="block text-white font-bold mb-2">Number of Adults</label>
        <div className="relative">
          <input
            type="number"
            id="adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            placeholder="Enter number of adults"
            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <HiOutlineUsers className="absolute top-3 left-3 text-white" />
        </div>
      </div> */}
      {/* <div className="mb-4">
        <label htmlFor="kids" className="block text-white font-bold mb-2">Number of Kids</label>
        <div className="relative">
          <input
            type="number"
            id="kids"
            name="kids"
            value={formData.kids}
            onChange={handleChange}
            placeholder="Enter number of kids"
            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <HiOutlineChip className="absolute top-3 left-3 text-white" />
        </div>
      </div> */}
      <div className="mb-4 flex items-center justify-center">
        {/* <label htmlFor="description" className="block text-white font-bold mb-2">Description</label> */}
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Message"
          className=" h-32 resize-none rounded-lg border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-11/12 "
        />
      </div>
      <div className="flex justify-center flex-col gap-6 items-center">
        {showAvailabilityButton && (
          <button className="bg-[#760F22] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-secon w-[15rem] lg:w-[18rem]">
            CHECK AVAILABILTY
          </button>
        )}
       <button
            type="button"
            onClick={handleSubmit}
            className="bg-[#760F22] text-white px-4 py-2 mb-8  rounded-lg shadow-lg hover:bg-secon w-[15rem] lg:w-[18rem]"
          >
            {submitting ? <Spin /> : "BOOK NOW"}
          </button>
      </div>
    </div>
  );
};

export default HoneymoonForm;