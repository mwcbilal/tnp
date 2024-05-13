"use client";
import { useEffect, useState } from "react";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiOutlineChip,
} from "react-icons/hi";
import axios from "axios";
import { Toast } from "../SideToast/SideToast";
import { Spin, Select } from "antd";

const { Option } = Select;

const DomesticForm = ({
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    dob: "",
    adults: "",
    kids: "",
    description: "",
    packageId: packageId,
  });
  const [tripId, setTripId] = useState("");
  const [tripDates, setTripDates] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedGroupDate, setSelectedGroupDate] = useState<string>("");


  console.log("package id at form", packageId);
  console.log("package type id here at form", packageTypeId);
  console.log("package total persons here", packageTotalPersons);

  useEffect(() => {
    const fetchTripDates = async () => {
      let response;
      try {
        response = await axios.get(
          `http://localhost:3000/pages/api/groupTrip?package_type_id=${packageId}`
        );
        // setTripDates(response.data.data.map((trip: any) => trip.trip_date));
        setTripDates(response.data.data);
      } catch (error) {
        console.error("Error fetching trip dates:", error);
      }
      console.log("hehheheh", response.data.data);
    };

    fetchTripDates();
  }, []);

  console.log("trippss date", tripDates);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = async () => {
    
    setSubmitting(true); // Start submitting
    try {
      console.log("form data here", formData);
      const totalPersons =
        parseInt(formData.adults) + Math.floor(parseInt(formData.kids) / 2);

      console.log("ye hay totallll", totalPersons);

      const response = await axios.post(
        "http://localhost:3000/pages/api/trip",
        {
          trip_package_id: formData.packageId,
          trip_date: formData.dob,
          trip_booked_count: totalPersons,
        }
      );
      setTripId(response.data.trip_id);
      console.log("trip id here", response.data.trip_id);

      await axios.post("http://localhost:3000/pages/api/bookTrip", {
        tour_client_name: formData.name,
        tour_client_email: formData.email,
        tour_client_phone: formData.phone,
        tour_trip_id: response.data.trip_id,
        tour_persons_count: formData.adults,
        tour_children_count: formData.kids,
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
        packageId: packageId,
      });
      setTripId("");
    } catch (error) {
      console.error("Error creating Destination:", error);
    } finally {
      setSubmitting(false); // Stop submitting
    }
  };

  const handleSubmitGroup = async()=>{
    if (!formData.name || !formData.email || !formData.confirmEmail || !formData.phone || !formData.phone || !formData.adults || !formData.kids || 
      !formData.description
    ) {
      Toast.fire({
        icon: "question",
        title: "Please select all fields.",
      });
      return; // Exit the function early if no date is selected
    }

   console.log("date of trip", selectedDate);

   setSubmitting(true); // Start submitting
   try {
     const totalPersons =
       parseInt(formData.adults) + Math.floor(parseInt(formData.kids) / 2);

     console.log("ye hay totallll", totalPersons);
     console.log("ye hay trip date", selectedGroupDate);
     console.log("ye hay trip package id", formData.packageId);

     const response = await axios.post(
       "http://localhost:3000/pages/api/trip",
       {
         trip_package_id: formData.packageId,
         trip_date: selectedGroupDate,
         trip_booked_count: totalPersons,
       }
     );
     setTripId(response.data.trip_id);
    console.log("trip id here", response.data.trip_id);

      await axios.post("http://localhost:3000/pages/api/bookTrip", {
        tour_client_name: formData.name,
        tour_client_email: formData.email,
        tour_client_phone: formData.phone,
        tour_trip_id: response.data.trip_id,
        tour_persons_count: formData.adults,
        tour_children_count: formData.kids,
        tour_description: formData.description,
      });

     Toast.fire({
       icon: "success",
       title: "You booked the trip",
     });
     setFormData({
       name: "",
       email: "",
       confirmEmail: "",
       phone: "",
       dob: "",
       adults: "",
       kids: "",
       description: "",
       packageId: packageId,
     });
     setTripId("");
     setSelectedGroupDate("");

   } catch (error) {
     console.error("Error creating Destination:", error);
   } finally {
     setSubmitting(false); // Stop submitting
   }
  };


  const handleDateChange = (value: string) => {
    // Splitting date and time parts, and selecting the date part
    setSelectedDate(value);
    const date = value.split("T")[0];
    setSelectedGroupDate(date);
  };

  const handleCheckAvailability = () => {
    if (!selectedDate) {
      Toast.fire({
        icon: "question",
        title: "Please select a date first.",
      });
      return; // Exit the function early if no date is selected
    }
    const selectedTrip = tripDates.find(
      (trip: any) => trip.trip_date === selectedDate
    );
    if (selectedTrip) {
      const availableSeats = packageTotalPersons - selectedTrip.trip_booked_count;
      if (availableSeats > 0) {
        setAvailabilityMessage(`Yes, ${availableSeats} seats available.`);
        setSelectedDate("");
      } else {
        setAvailabilityMessage("Sorry, all seats are booked.");
        setSelectedDate("");
      }
    }
  };

  return (
    <div className="w-full max-w-md h-max bg-transparent rounded-md flex flex-col mx-auto p-4 md:p-0">
      <h2 className="uppercase text-black p-5 text-2xl font-bold">
        Book this tour
      </h2>
      <form onSubmit={handleSubmit}>
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
              className="input-with-icon pl-8 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-11/12"
            />
            <HiOutlinePhone className="absolute top-3 left-6 text-gray-400" />
          </div>
        </div>
     
        {parseInt(packageTypeId) === 1 ? (
          <div className="mb-4">
            <div className="relative flex items-center justify-center">
              <Select
                placeholder="Select Date"
                style={{ width: "92%", height: "40px" }}
                onChange={handleDateChange}
              >
                {tripDates.map((trip:any) => (
                  <Option key={trip.trip_date} value={trip.trip_date}>
                    {new Date(trip.trip_date).toLocaleDateString()}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        ) : (
          <div className="mb-4">
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
        )}

        <div className="mb-4">
          {/* <label htmlFor="adults" className="block text-white font-bold mb-2">Number of Adults</label> */}
          <div className="relative flex items-center justify-center">
            <input
              type="number"
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              placeholder="Enter number of adults"
              className="input-with-icon pl-8 rounded-lg border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-11/12"
            />
            <HiOutlineUsers className="absolute top-3 left-6 text-gray-400" />
          </div>
        </div>
        <div className="mb-4">
          {/* <label htmlFor="kids" className="block text-white font-bold mb-2">Number of Kids</label> */}
          <div className="relative flex items-center justify-center">
            <input
              type="number"
              id="kids"
              name="kids"
              value={formData.kids}
              onChange={handleChange}
              placeholder="Enter number of kids"
              className="input-with-icon pl-8 rounded-lg border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-11/12"
            />
            <HiOutlineChip className="absolute top-3 left-6 text-gray-400" />
          </div>
        </div>

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
          
          <button
            type="button"
            onClick={parseInt(packageTypeId) === 1 ? handleSubmitGroup : handleSubmit}
            className="bg-[#760F22] text-white px-4 py-2 mb-8  rounded-lg shadow-lg hover:bg-secon w-[15rem] lg:w-[18rem]"
          >
            {submitting ? <Spin /> : "BOOK NOW"}
          </button>
        </div>
      </form>
      {showAvailabilityButton && (
        <div className="flex justify-center flex-col gap-6 items-center">
            <button type="submit" onClick={handleCheckAvailability} className="bg-[#760F22] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-secon w-[15rem] lg:w-[18rem]">
              CHECK AVAILABILTY
            </button>
            </div>
            
          )}
            {availabilityMessage && <div className="flex justify-center flex-col gap-6 items-center mt-2">{availabilityMessage}</div>}
    </div>
  );
};

export default DomesticForm;