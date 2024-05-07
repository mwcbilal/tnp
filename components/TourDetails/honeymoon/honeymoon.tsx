"use client";
import Cost from "@/components/Domestics/Cost";
import DomesticForm from "@/components/Domestics/DomesticForm";
import HeroDomestic from "@/components/Domestics/HeroDomestic";
import Highlights from "@/components/Domestics/Highlights";
import Itinerary from "@/components/Domestics/Itinerary";
import CarouselSlider from "@/components/Domestics/carousel";
import Overview from "@/components/Domestics/overview";
import data from "@/Data/PackageData";
import { useParams } from "next/navigation";
import "./style.css";

import FooterBg from "./Footer/page";
import { useEffect, useState } from "react";
import { getSinglePackage } from "@/app/actions/tourpackages";
import { Spin } from "antd";
import bgImage from "../../../assets/honeymoon/rosesbg2.jpg";
import bg from "../../../assets/honeymoon/honeymoon-bg2.png";

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

const Honeymoon = () => {
  const params = useParams();
  console.log(params, "<===param");
  const bannerData = data.filter((item) => {
    return item.id.toString() === "0";
  })[0];
  const renderedData = bannerData?.packages?.filter((item) => {
    return item.pid.toString() === "1";
  })[0];
  // console.log(renderedData, "rrrr");
  // console.log(data);

  const [packageDetails, setPackageDetails] = useState<PackageStructure>();
  console.log(params, "param at honeymoon");
  useEffect(() => {
    async function getItem() {
      const response = await getSinglePackage(
        "/tourpackages/single/" + params?.id[1],
      );
      console.log("Response", response);
      setPackageDetails(response.data);
    }

    getItem();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!packageDetails || !packageDetails.package_details) {
    return (
      <div className="w-full flex justify-center mt-4 h-12 pt-2">
        <Spin size="large" />
      </div>
    );
  }

  const tripDetails: TripDetails = JSON.parse(packageDetails.package_details);

  return (
    <div className="bg_color text-black">
      <div className="bg_img">
        <HeroDomestic
          heading={"Honeymoon"}
          paragraph={"Package"}
          image={bgImage}
        />

        <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-6 justify-center mx-auto my-10">
          <div className=" w-full lg:w-[60%]">
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-2 my-5 md:p-3 lg:p-0">
              <h1 className="text-1xl text-black md:text-2xl font-bold">
                {" "}
                6 Days Skardu & Bashu Valley{" "}
              </h1>

              <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm">
                <div className="w-[6rem] h-[5rem] bg-yellow-300 text-black text-3xl flex justify-center items-center">
                  6
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
              <button className="bg-[#760F22] text-white px-4 py-2 rounded hover:bg-secon w-[12rem] lg:w-[10rem]">
                Share
              </button>
              <button className="bg-[#760F22] text-white px-4 py-2 rounded hover:bg-secon w-[13rem] lg:w-[11rem]">
                Download Pdf
              </button>
            </div>
            <Overview text={renderedData?.overview} />

            <Highlights data={renderedData?.highlights} />

            <Itinerary data={renderedData?.itineraryData} />

            <Cost
              includeCost={renderedData.includeCost}
              costExclude={renderedData.costExclude}
            />
          </div>

          <div className=" w-full lg:w-[40%]  flex ">
            <DomesticForm showAvailabilityButton={undefined} />
          </div>
        </div>

        <FooterBg />
      </div>
    </div>
  );
};

export default Honeymoon;
