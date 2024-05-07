import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MyDropdown from "./dropdown";
import {
  getTourPackagesTypes,
  getDesiredAreas,
} from "@/app/actions/tourpackages";
import { DatePicker } from "antd";

interface Package {
  package_type_id: number;
  package_type_name: string;
}

interface Destinations {
  destination_id: number;
  destination_name: string;
}

const TourDetails: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [packageTypes, setPackageTypes] = useState<Package[]>([]);
  const [desiredArea, setDesiredArea] = useState<Destinations[]>([]);

  useEffect(() => {
    const fetchPackageType = async () => {
      try {
        const response = await getTourPackagesTypes();
        // const response = await axios.get(apiURL);
        console.log("response===>", response);
        setPackageTypes(response.data?.package_types);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    const fetchPackageDestinations = async () => {
      try {
        const response = await getDesiredAreas();
        // const response = await axios.get(apiURL);
        console.log("response===>", response);
        setDesiredArea(response.data?.destinations);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchPackageType();

    fetchPackageDestinations();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (loading) return <div>Loading...</div>;

  // const itemsForDesiredArea = [
  //   {
  //     key: "south",
  //     label: "Hunza",
  //   },
  //   {
  //     key: "turkey",
  //     label: "Pamukkale",
  //   },
  //   {
  //     key: "north",
  //     label: "Kashmir",
  //   },
  //   {
  //     key: "north",
  //     label: "Balakot",
  //   },
  //   {
  //     key: "baku",
  //     label: "Bilgah Beach",
  //   },
  // ];

  const itemforPickUpCity = [
    {
      label: "Your City",
    },
    {
      key: "karachi",
      label: "Karachi",
    },
    {
      key: "lahore",
      label: "Lahore",
    },
  ];

  const itemforVehicleType = [
    {
      label: "Pick Your Vehicle",
    },
    {
      key: "sedan",
      label: "Sedan",
    },
    {
      key: "suv",
      label: "Suv",
    },
    {
      key: "hiace",
      label: "Hiace",
    },
  ];

  const itemforHotelType = [
    {
      key: "standard",
      label: "Standard",
    },
    {
      key: "delux",
      label: "Delux",
    },
  ];

  const itemforTourWant = [
    {
      label: "Additional features",
    },
    {
      key: "yes",
      label: "Yes",
    },
    {
      key: "no",
      label: "No",
    },
  ];

  const itemforTourWantToGo = [
    {
      label: "-Select-",
    },
  ];

  return (
    <div>
      <div className="w-11/12 md:w-[700px] py-14 px-4 md:px-14 bg-white rounded-lg mt-4 shadow-2xl">
        <div className="bg-[#00ADEE] text-white w-28 py-1 px-2 rounded-md -mt-8 absolute -ml-4 md:-ml-[3rem] lg:-ml-28">
          Tour Details
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <p className="my-2">Select your desired areas</p>
            <div className="relative">
              {desiredArea?.length > 0 && (
                <MyDropdown
                  items={desiredArea.map((type, i) => ({
                    key: type.destination_id,
                    label: type.destination_name
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" "),
                  }))}
                />
              )}
            </div>
          </div>
          <div>
            <p className="my-2">Tour Duration (Days)</p>
            <div className=" relative">
              <input
                type="number"
                placeholder="7 to 14 Days"
                className="rounded-md outline-none border-[#EAECEF] py-2 px-4 flex justify-between border w-11/12 md:w-[275px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <p className="my-2">Pick Up city (location)</p>
            <div className=" relative">
              <MyDropdown items={itemforPickUpCity} />
            </div>
          </div>
          <div>
            <p className="my-2">Vehicle type</p>
            <div className=" relative">
              <MyDropdown items={itemforVehicleType} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <p className="my-2">No. of adults</p>
            <div className=" relative">
              <input
                type="number"
                placeholder="No. of Adults"
                className="rounded-md outline-none border-[#EAECEF] py-2 px-4 flex justify-between border w-11/12 md:w-[275px]"
              />
            </div>
          </div>
          <div>
            <p className="my-2">No. of kids</p>
            <div className=" relative">
              <input
                type="number"
                placeholder="No. of Kids"
                className="rounded-md outline-none border-[#EAECEF] py-2 px-4 flex justify-between border w-11/12 md:w-[275px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <p className="my-2">Hotel Type</p>
            <div className=" relative">
              <MyDropdown items={itemforHotelType} />
            </div>
          </div>
          <div>
            <p className="my-2">Rooms</p>
            <div className=" relative">
              <input
                type="number"
                placeholder="No. of Rooms"
                className="rounded-md outline-none border-[#EAECEF] py-2 px-4 flex justify-between border w-11/12 md:w-[275px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <p className="my-2">Package type</p>
            <div className=" relative">
              {packageTypes?.length > 0 && (
                <MyDropdown
                  items={packageTypes.map((type, i) => ({
                    key: type.package_type_id,
                    label: type.package_type_name,
                  }))}
                />
              )}
            </div>
          </div>
          <div>
            <p className="my-2">Additional features</p>
            <div className=" relative">
              <MyDropdown items={itemforTourWant} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <p className="my-2">Tour you want to (but little changes)</p>
            <div className="relative">
              <MyDropdown items={itemforTourWantToGo} />
            </div>
          </div>
          <div>
            <p className="my-2">When would you like to go?</p>
            <div className=" relative">
              <DatePicker style={{ width: "275px", padding: "8px 16px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
