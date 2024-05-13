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
import RenderTourCardsRelated from "@/components/TourPackage/RenderTourCardsRelated";
import { LoadingOutlined } from "@ant-design/icons";
import { getRelatedPackage } from "@/app/actions/tourpackages";
import HoneymoonForm from "./honeymoonForm";

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
    PDFUrl: string;
  };
}

interface RelatedPackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_category_id: number;
  package_type_id: number;
  package_region_id: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string | null;
  package_duration: string | null;
}

const Honeymoon = ({ packageDetails }) => {
  const [relatedPackageDetails, setRelatedPackageDetails] = useState<RelatedPackageStructure[]>([]);
  const [showAfterNormal, setShowAfterNormal] = useState(false);
  const [showAfterDeluxe, setShowAfterDeluxe] = useState(false);
  const [packageId, setPackageId] = useState(null);
  const [packageTypeId, setPackageTypeId] = useState(null);

  
  useEffect(() => {
    if (packageDetails) {
      setPackageId(packageDetails.package_id);
      setPackageTypeId(packageDetails.tnp_package_types?.package_type_id);
    }
  }, [packageDetails]);

 
 
  const handleNormalClick = () => {
    setShowAfterNormal(true);
    setShowAfterDeluxe(false);
  };

  const handleDeluxeClick = () => {
    setShowAfterDeluxe(true);
    setShowAfterNormal(false);
  };

  // const [packageDetails, setPackageDetails] = useState<PackageStructure>();
  const bannerData = data.filter((item) => {
    return item.id.toString() === "0";
  })[0];
  const renderedData = bannerData?.packages?.filter((item) => {
    return item.pid.toString() === "1";
  })[0];

  useEffect(() => {
    async function getRelatedPackages() {
      // Check if both packageId and packageTypeId are not null
      if (packageId !== null && packageTypeId !== null) {
        const apiurl = `/tourpackages/relatedpackages?package_type_id=${packageTypeId}&package_id=${packageId}`;
        console.log("apiurl", apiurl);
        try {
          let relatedresponse;
          relatedresponse = await getRelatedPackage(apiurl);
          setRelatedPackageDetails(relatedresponse?.data);
        } catch (error) {
          console.error("Error fetching related packages:", error);
          // Handle error
        }
      }
    }
    getRelatedPackages();
  }, [packageId, packageTypeId]);

  // console.log("related pacakges here", relatedPackageDetails);

  if (!packageDetails || !packageDetails.package_details) {
    return (
      <div className="w-full flex justify-center mt-4 h-12 pt-2">
        <Spin size="large"/>
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
                {packageDetails.package_name}{" "}
              </h1>

              <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm">
                <div className="w-[6rem] h-[5rem] bg-yellow-300 text-black text-3xl flex justify-center items-center">
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
              <>
                {!showAfterNormal && (
                  <button onClick={handleNormalClick} className="btn-normal">
                    Standard - {packageDetails?.package_rate_normal}
                  </button>
                )}
                {showAfterNormal && (
                  <button className="btn-after">
                    Standard - {packageDetails?.package_rate_normal}
                  </button>
                )}

                {!showAfterDeluxe && (
                  <button onClick={handleDeluxeClick} className="btn-deluxe">
                    Deluxe - {packageDetails?.package_rate_deluxe}
                  </button>
                )}
                {showAfterDeluxe && (
                  <button className="btn-after">
                    Deluxe - {packageDetails?.package_rate_deluxe}
                  </button>
                )}
              </>
              {/* <button onClick={() => setSelectedRate(2)} className="btn-deluxe">
                Deluxe - {packageDetails?.package_rate_deluxe}
              </button> */}
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[12rem] lg:w-[10rem]">
                Share
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[13rem] lg:w-[11rem]">
                Download Pdf
              </button>
            </div>
            <Overview text={packageDetails.package_description} />

            <Highlights
              data={tripDetails.TripDetailsAndCostSummary.Highlights}
            />

            <Itinerary
              data={tripDetails.TripDetailsAndCostSummary?.Itinerary}
            />

            <Cost
              includeCost={tripDetails.TripDetailsAndCostSummary.CostIncludes}
              costExclude={tripDetails.TripDetailsAndCostSummary.CostExcludes}
            />
          </div>

          {/* aqsa add your compoennts here */}

          {/* left side */}
          <div className="w-full lg:w-[40%]">
            <HoneymoonForm
               showAvailabilityButton={
                packageDetails.tnp_package_types.package_type_name.toLocaleLowerCase() ==
                "group"
                  ? true
                  : false
              } packageId={packageId}
              packageTypeId={packageTypeId}
              packageTotalPersons = {packageDetails.package_total_persons}
            />
            <div className="flex flex-col mt-10">
              <div className="w-full max-w-md h-max bg-transparent rounded-md flex flex-col mx-auto p-4 md:p-0">
                {" "}
                <h1 className="uppercase text-black p-5 text-2xl font-bold">
                  RELATED PACKAGES
                </h1>
              </div>
              {relatedPackageDetails.length > 0 ? (
                <RenderTourCardsRelated PackageItems={relatedPackageDetails} />
              ) : (
                <div className="w-full flex justify-center mt-4 h-12 pt-2">
                  <Spin size="large"/>  
                </div>
              )}
            </div>
          </div>
        </div>

        <FooterBg />
      </div>
    </div>
  );
};

export default Honeymoon;
