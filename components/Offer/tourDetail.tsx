import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MyDropdown from "./dropdown";
import { DatePicker } from "antd";

interface PackageType {
  package_type_id: number;
  package_type_name: string;
}

interface Destinations {
  destination_id: number;
  destination_name: string;
  destination_minimum_tour_days: number;
}

interface Car {
  car_name: string;
  carRoom: number;
  pricePerDay: number;
  car_id: number;
}

const itemforPickUpCity = [
  {
    label: "Select",
    key: 0,
  },
  {
    key: "Islamabad",
    label: "Islamabad",
  },
];

const itemforTourWantToGo = [
  {
    label: "Select",
    key: 0,
  },
];

interface HotelType 
{
  key: string;
  price: number;
  label: string;
}

interface Props {
  selectedResponses: SelectedResponse;
  setSelectedResponses: (prm: SelectedResponse) => void;
  itemforHotelType: HotelType[];
  packageTypes: PackageType[];
  desiredArea: Destinations[];
  carsList: Car[];
  loading: boolean;
}

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

const TourDetails: NextPage<Props> = ({
  selectedResponses,
  setSelectedResponses,
  itemforHotelType,
  packageTypes,
  desiredArea,
  carsList,
  loading
}) => {
  const [minDuration, setMinDuration] = useState(0);
  const [minRooms, setMinRooms] = useState(1);

  useEffect(() => {
    console.log("Persons changed");

    const adultCount = selectedResponses.noOfAdults;
    //2 kids equal 1 adult and 1 room is max 4 persons
    const totalPersons = adultCount + Math.ceil(selectedResponses.noOfKids / 2);
    
    //the number of rooms required
    let totalRooms = Math.ceil(totalPersons / 4);
    
    //Minimum one room is needed
    if (totalRooms === 0) {
        totalRooms = 1;
    }
    
    setMinRooms(totalRooms);

    setSelectedResponses({
      ...selectedResponses,
      noOfRooms: totalRooms
    });
  }, [selectedResponses.noOfAdults, selectedResponses.noOfKids]);

  useEffect(() => {
    // console.log("Destination changed");
    const destinationIndex = desiredArea.findIndex(
      (item) =>
        item.destination_name.toLocaleLowerCase() ===
        selectedResponses.destination.toLocaleLowerCase()
    );
    const destination_min_days_count =
      destinationIndex < 0
        ? 0
        : desiredArea[destinationIndex].destination_minimum_tour_days;
    setMinDuration(destination_min_days_count);
    setSelectedResponses({
      ...selectedResponses,
      totalDuration: destination_min_days_count,
    });
    // console.log("Min count", destination_min_days_count, destinationIndex);
  }, [selectedResponses.destination]);

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }
  
  if (loading) return <div>Loading...</div>;

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
                    key: type.destination_name,
                    label: type.destination_name
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" "),
                  }))}
                  change={setSelectedResponses}
                  identifier={"destination"}
                  selected={selectedResponses}
                />
              )}
            </div>
          </div>
          <div>
            <p className="my-2">Tour Duration (Days)</p>
            <div className=" relative">
              <input
                type="number"
                min={minDuration}
                value={selectedResponses.totalDuration}
                placeholder="7 to 14 Days"
                className="rounded-md outline-none border-[#EAECEF] py-2 px-4 flex justify-between border w-11/12 md:w-[275px]"
                onChange={(e) =>
                  setSelectedResponses({
                    ...selectedResponses,
                    totalDuration: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <p className="my-2">Pick Up city (location)</p>
            <div className=" relative">
              <MyDropdown
                items={itemforPickUpCity}
                change={setSelectedResponses}
                identifier={"pickupLocation"}
                selected={selectedResponses}
              />
            </div>
          </div>
          <div>
            <p className="my-2">Vehicle type</p>
            <div className=" relative">
              <MyDropdown
                items={carsList?.map((type, i) => ({
                  key: type.car_name,
                  label:
                    type.car_name +
                    ` (Max ${type.carRoom} persons)`
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" "),
                }))}
                change={setSelectedResponses}
                identifier={"vehicleName"}
                selected={selectedResponses}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <p className="my-2">No. of adults</p>
            <div className=" relative">
              <input
                onChange={(e) =>
                  setSelectedResponses({
                    ...selectedResponses,
                    noOfAdults: parseInt(e.target.value),
                  })
                }
                value={selectedResponses.noOfAdults}
                min={0}
                type="number"
                placeholder="No. of Adults"
                className="rounded-md outline-none border-[#EAECEF] py-2 px-4 flex justify-between border w-11/12 md:w-[275px]"
              />
            </div>
          </div>
          <div>
            <p className="my-2">No. of kids (below 8 years)</p>
            <div className=" relative">
              <input
                onChange={(e) =>
                  setSelectedResponses({
                    ...selectedResponses,
                    noOfKids: parseInt(e.target.value),
                  })
                }
                value={selectedResponses.noOfKids}
                min={0}
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
              <MyDropdown
                items={itemforHotelType}
                change={setSelectedResponses}
                identifier={"hotelType"}
                selected={selectedResponses}
              />
            </div>
          </div>
          <div>
            <p className="my-2">Rooms</p>
            <div className=" relative">
              <input
                min={minRooms}
                value={selectedResponses.noOfRooms}
                type="number"
                onChange={e => setSelectedResponses({
                  ...selectedResponses,
                  noOfRooms: parseInt(e.target.value)
                })}
                placeholder="No. of Rooms"
                className="rounded-md outline-none border-[#EAECEF] py-2 px-4 flex justify-between border w-11/12 md:w-[275px]"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <p className="my-2">Package type</p>
            <div className=" relative">
              {packageTypes?.length > 0 && (
                <MyDropdown
                  items={packageTypes.map((type, i) => ({
                    key: type.package_type_id,
                    label: type.package_type_name,
                  }))}
                  change={setSelectedResponses}
                  identifier={"packageType"}
                  selected={selectedResponses}
                />
              )}
            </div>
          </div>
          <div>
            <p className="my-2">Tour you want to (but little changes)</p>
            <div className="relative">
              <MyDropdown
                items={itemforTourWantToGo}
                change={setSelectedResponses}
                identifier={"similarPackageId"}
                selected={selectedResponses}
              />
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          {/* <div>
            <p className="my-2">Additional features</p>
            <div className=" relative">
              <MyDropdown
                items={itemforTourWant}
                change={setSelectedResponses}
                identifier={"destination"}
                selected={selectedResponses}
              />
            </div>
          </div> */}
          <div>
            <p className="my-2">When would you like to go?</p>
            <div className=" relative">
              <DatePicker style={{ width: "275px", padding: "8px 16px" }} onChange={e => {
                setSelectedResponses({
                  ...selectedResponses,
                  departureDate: e.toDate()
                })
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
