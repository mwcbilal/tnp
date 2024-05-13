"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import Banner from "@/components/Offer/Banner";
import PersonalDetails from "../../../components/Offer/PersonalDetails";
import BannerImg from "../../../assets/offer/BG.svg";
import TourDetails from "../../../components/Offer/tourDetail";
import SpecialRequirments from "../../../components/Offer/specialReq";
import Payment from "@/components/Offer/payment";
import { getTourPackagesTypes } from "@/app/actions/tourpackages";
import { getAllCars, getCarsBaseOnDestination } from "@/apiFunctions/cars";
import {
  getDesiredAreas,
  getDestinationFuelEstimation,
} from "../../../apiFunctions/destination";

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

const itemforHotelType = [
  {
    key: "Standard",
    price: 6000,
    label: "Standard",
  },
  {
    key: "Delux",
    price: 12000,
    label: "Delux",
  },
  {
    key: "Executive",
    price: 25000,
    label: "Executive",
  },
];

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [counter, setCounter] = useState(0);
  const [move, setMove] = useState(20);
  const [loading, setLoading] = useState(true);
  const [packageTypes, setPackageTypes] = useState<PackageType[]>([]);
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [defaultDestinationCost, setDefaultDestinationCost] = useState(30000);
  const [desiredArea, setDesiredArea] = useState<Destinations[]>([]);
  const [estimatedCost, setEstimatedCost] = useState<number>(0);
  const [selectedResponses, setSelectedResponses] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    description: "",
    destination: "Select",
    totalDuration: 0,
    pickupLocation: "Select",
    vehicleName: "Select",
    noOfAdults: 0,
    noOfKids: 0,
    hotelType: "Select",
    noOfRooms: 0,
    packageType: "Select",
    similarPackageId: 0,
    departureDate: new Date(),
  });

  useEffect(() => {
    if (selectedResponses.destination === "Select") {
      return;
    }
    const fetchCarListing = async () => {
      try {
        const response = await getCarsBaseOnDestination(selectedResponses.destination);
        // const response = await axios.get(apiURL);
        console.log("response===>", response);
        setCarsList(response.data?.cars);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchCarListing();
  }, [selectedResponses.destination])
  

  useEffect(() => {
    const fetchPackageType = async () => {
      try {
        const response = await getTourPackagesTypes();
        // const response = await axios.get(apiURL);
        console.log("response===>", response);
        setPackageTypes(response.data?.package_types);
        // setLoading(false);
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

  useEffect(() => {
    setIsMounted(true);
  }, [selectedResponses]);

  useEffect(() => {
    if (
      selectedResponses.destination === "Select" ||
      selectedResponses.vehicleName === "Select"
    ) {
      return;
    }
    const getDestinationCost = async () => {
      const response = await getDestinationFuelEstimation(
        selectedResponses.destination,
        selectedResponses.vehicleName
      );
      const { fuel_estimation_cost } = response.data;
      console.log("estimation_fetched", fuel_estimation_cost);
      setDefaultDestinationCost(
        fuel_estimation_cost !== undefined
          ? fuel_estimation_cost
          : 35000
      );
    };

    getDestinationCost();
  }, [selectedResponses.destination, selectedResponses.vehicleName]);

  useEffect(() => {
    
    let totalCost = 0;
    totalCost = defaultDestinationCost * selectedResponses.totalDuration;
    console.log("totalCost", totalCost);
    if (selectedResponses.hotelType === "Select") {
      setEstimatedCost(totalCost);
      return;
    }
    totalCost += itemforHotelType?.filter(e => e.key === selectedResponses.hotelType)[0].price * selectedResponses.noOfRooms;
    setEstimatedCost(totalCost);
  }, [selectedResponses]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    let moveValue = 10;
    if (screenWidth <= 425) {
      moveValue = 16.5;
    }
    if (screenWidth >= 768) {
      moveValue = 16.5;
    }
    if (screenWidth >= 1024) {
      moveValue = 15.5;
    }
    if (screenWidth >= 1440) {
      moveValue = 16;
    }
    setMove(moveValue * counter);
  }, [counter]);

  const ImageForwardHandler = () => {
    setCounter(counter + 1);
  };

  const ImageBackwardHandler = () => {
    setCounter(counter - 1);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      <Banner
        UpcommingImage={BannerImg}
        Heading="MAKE YOUR OWN TRIP"
        Subheading=""
        move={move}
        setMove={setMove}
      />
      <div className="w-full mb-14 flex pb-10 flex-col items-center rounded-lg md:mt-16 mx-auto md:w-11/12">
        {counter === 0 ? (
          <PersonalDetails
            selectedResponses={selectedResponses}
            setSelectedResponses={setSelectedResponses}
          />
        ) : counter === 1 ? (
          <TourDetails
            selectedResponses={selectedResponses}
            setSelectedResponses={setSelectedResponses}
            itemforHotelType={itemforHotelType}
            carsList={carsList}
            desiredArea={desiredArea}
            loading={loading}
            packageTypes={packageTypes}
          />
        ) : counter === 2 ? (
          <SpecialRequirments selectedResponses={selectedResponses} setSelectedResponses={setSelectedResponses} />
        ) : (
          <Payment estimatedCost={estimatedCost} />
        )}
        <div
          className={`w-11/12 md:w-[700px] px-2 md:px-0 flex ${
            counter === 0 ? "justify-end" : "justify-between"
          } mt-10`}
        >
          {counter >= 1 && (
            <button
              onClick={ImageBackwardHandler}
              className="py-2 px-12 bg-[#FBAD17] rounded-sm text-sm text-white"
            >
              BACK
            </button>
          )}
          {counter < 3 ? (
            <button
              onClick={ImageForwardHandler}
              className="py-2 px-12 bg-[#00ADEE] rounded-sm text-sm text-white"
            >
              NEXT
            </button>
          ) : (
            <button
              onClick={ImageForwardHandler}
              className="py-2 px-6 bg-[#00ADEE] rounded-sm text-sm text-white"
            >
              BOOK NOW
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
