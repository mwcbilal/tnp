"use client";
import data from '@/Data/PackageData';
import { getSinglePackage } from '@/app/actions/tourpackages';
import Cost from '@/components/Domestics/Cost';
import DomesticForm from '@/components/Domestics/DomesticForm';
import HeroDomestic from '@/components/Domestics/HeroDomestic';
import Highlights from '@/components/Domestics/Highlights';
import Itinerary from '@/components/Domestics/Itinerary';
import CarouselSlider from '@/components/Domestics/carousel';
import Overview from '@/components/Domestics/overview';
import { Spin } from 'antd';
import axios from 'axios';
import { NextPage } from 'next';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props { }

interface PackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_category: string;
  package_type: string;
  package_region: string;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string | null;
  package_duration: string | null;
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

const Page: NextPage<Props> = ({ }) => {
  const params = useParams();
  const [packageDetails, setPackageDetails] = useState<PackageStructure>();
  // console.log(params, "param");
  useEffect(() => {
    async function getItem() {
      const response = await getSinglePackage('/tourpackages/single/' + params?.id[0]);
      console.log("Response", response);
      setPackageDetails(response)
    }

    getItem();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!packageDetails) {
    return <div className='w-full flex justify-center mt-4 h-12 pt-2'>
      <Spin size="large" />
    </div>
  }

  const tripDetails: TripDetails = JSON.parse(packageDetails?.package_details);

  return (
    <div>
      <HeroDomestic heading={capitalizeFirstLetter(packageDetails.package_type)} paragraph={capitalizeFirstLetter(packageDetails.package_region)} image={tripDetails.TripDetailsAndCostSummary.Images.length > 0 && tripDetails.TripDetailsAndCostSummary.Images[0]} />
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-6  justify-center mx-auto my-10">
        {/* Right Side*/}
        <div className=" w-full  lg:w-[60%]  ">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-2 my-5 md:p-3 lg:p-0">
            <h1 className="text-1xl md:text-2xl font-bold">
              {" "}{packageDetails.package_name}{" "}
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
          <CarouselSlider ImageList={tripDetails.TripDetailsAndCostSummary.Images} />

          <div className="flex justify-end  gap-6 items-center p-2">
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[12rem] lg:w-[10rem]">
              Share
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[13rem] lg:w-[11rem]">
              Download Pdf
            </button>
          </div>
          <Overview
            text={packageDetails.package_description}
          />

          {
            tripDetails.TripDetailsAndCostSummary?.Highlights?.length > 0 &&
            <Highlights
              data={tripDetails.TripDetailsAndCostSummary?.Highlights}
            />
          }
          <Itinerary data={tripDetails.TripDetailsAndCostSummary?.Itinerary} />
          <Cost includeCost={tripDetails.TripDetailsAndCostSummary?.CostIncludes} costExclude={tripDetails.TripDetailsAndCostSummary?.CostExcludes} />
        </div>

        <div className="w-full lg:w-[40%] flex">
          <DomesticForm />
        </div>
      </div>
    </div>
  );
}

export default Page