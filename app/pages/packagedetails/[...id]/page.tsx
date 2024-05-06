"use client";
import data from "@/Data/PackageData";
import { getSinglePackage } from "@/app/actions/tourpackages";
import Cost from "@/components/Domestics/Cost";
import DomesticForm from "@/components/Domestics/DomesticForm";
import HeroDomestic from "@/components/Domestics/HeroDomestic";
import Highlights from "@/components/Domestics/Highlights";
import Itinerary from "@/components/Domestics/Itinerary";
import { TinyColor } from "@ctrl/tinycolor";
import CarouselSlider from "@/components/Domestics/carousel";
import Overview from "@/components/Domestics/overview";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import FeaturedListings from "@/components/TourPackage/FeaturedListings";
import TourPackHero from "@/components/TourPackage/TourPackHero";
import Honeymoon from "@/components/TourDetails/honeymoon/honeymoon";
import { NextPage } from "next";
import { useParams } from "next/navigation";

interface Props {}

interface PackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string;
  package_duration: number;
  package_isfeatured: boolean;
  package_bestseller: boolean;
  tnp_destinations: {
    destination_id: number;
    destination_category_id: number;
    destination_name: string;
    destination_region_id: number;
    tnp_package_categories: {
      package_category_id: number;
      package_category_name: string;
    };
    tnp_package_regions: {
      region_id: number;
      region_name: string;
    };
  };
  tnp_package_types: {
    package_type_id: number;
    package_type_name: string;
    package_type_value: string;
  };
}

interface TripDetails {
  TripDetailsAndCostSummary: {
    CostIncludes: string[];
    CostExcludes: string[];
    Itinerary: {
      day: string;
      event: string;
      description: string;
    }[];
    Highlights: string[];
    Images: string[];
  };
}

const Page: NextPage<Props> = ({}) => {
  const params = useParams();
  console.log("Param at package details", params);
  const { id } = params;

  const [packageDetails, setPackageDetails] = useState<PackageStructure>();
  // 1 Standard
  // 2 Deluxe
  const [selectedRate, setSelectedRate] = useState(null);
  // console.log(params, "param");
  useEffect(() => {
    // async function getItem() {
    //   const response = await getSinglePackage('/tourpackages/single/' + params?.id[0]);
    //   console.log("Response", response);
    //   setPackageDetails(response)
    // }

    async function getItem() {
      let response;
      if (id[0] === "honeymoon") {
        response = await getSinglePackage(
          "/tourpackages/single/" + params?.id[1]
        );
      } else {
        response = await getSinglePackage(
          "/tourpackages/single/" + params?.id[0]
        );
      }
      console.log("Response for single item", response);
      setPackageDetails(response.data);
    }

    getItem();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!packageDetails) {
    return (
      <div className="w-full flex justify-center mt-4 h-12 pt-2">
        <Spin size="large" />
      </div>
    );
  }

  if (id[0] === "honeymoon") {
    return (
      <div>
        <Honeymoon />
      </div>
    );
  }

  const tripDetails: TripDetails = JSON.parse(packageDetails?.package_details);
  
  return (
    <div>
      <HeroDomestic
        heading={capitalizeFirstLetter(
          packageDetails.tnp_package_types.package_type_name
        )}
        paragraph={capitalizeFirstLetter(
          packageDetails.tnp_destinations?.tnp_package_regions.region_name
        )}
        image={
          tripDetails.TripDetailsAndCostSummary.Images.length > 0 &&
          tripDetails.TripDetailsAndCostSummary.Images[0]
        }
      />
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-6  justify-center mx-auto my-10">
        {/* Right Side*/}
        <div className=" w-full  lg:w-[60%]  ">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-2 my-5 md:p-3 lg:p-0">
            <h1 className="text-1xl md:text-2xl font-bold">
              {" "}
              {packageDetails.package_name}{" "}
            </h1>

            <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm">
              <div className="w-[6rem] h-[5rem] bg-yellow-300 text-white text-3xl flex justify-center items-center">
                {packageDetails.package_duration}
              </div>
              <div className="w-[6rem] h-[2rem] text-1xl text-black flex justify-center items-center bg-white">
                Days
              </div>
            </div>
          </div>
          <CarouselSlider
            ImageList={tripDetails.TripDetailsAndCostSummary.Images}
          />

          <div className="flex justify-end  gap-6 items-center p-2">
            <button onClick={() => setSelectedRate(1)} className="btn-normal">
              Standard - {packageDetails?.package_rate_normal}
            </button>
            <button onClick={() => setSelectedRate(2)} className="btn-deluxe">
              Deluxe - {packageDetails?.package_rate_deluxe}
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[12rem] lg:w-[10rem]">
              Share
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[13rem] lg:w-[11rem]">
              Download Pdf
            </button>
          </div>
          <Overview text={packageDetails.package_description} />

          {tripDetails.TripDetailsAndCostSummary?.Highlights?.length > 0 && (
            <Highlights
              data={tripDetails.TripDetailsAndCostSummary?.Highlights}
            />
          )}
          <Itinerary data={tripDetails.TripDetailsAndCostSummary?.Itinerary} />
          <Cost
            includeCost={tripDetails.TripDetailsAndCostSummary?.CostIncludes}
            costExclude={tripDetails.TripDetailsAndCostSummary?.CostExcludes}
          />
        </div>

        <div className="w-full lg:w-[40%] flex">
          <DomesticForm
            showAvailabilityButton={
              packageDetails.tnp_package_types.package_type_name == "group"
                ? true
                : false
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
