"use client";
import { getSinglePackage } from "@/app/actions/tourpackages";
import { getRelatedPackage } from "@/app/actions/tourpackages";
import Cost from "@/components/Domestics/Cost";
import DomesticForm from "@/components/Domestics/DomesticForm";
import HeroDomestic from "@/components/Domestics/HeroDomestic";
import Highlights from "@/components/Domestics/Highlights";
import Itinerary from "@/components/Domestics/Itinerary";
import CarouselSlider from "@/components/Domestics/carousel";
import Overview from "@/components/Domestics/overview";
import { useEffect, useState } from "react";
import Honeymoon from "@/components/TourDetails/honeymoon/honeymoon";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import RenderTourCardsRelated from "@/components/TourPackage/RenderTourCardsRelated";
import { Spin } from 'antd';
import { notification } from 'antd';

interface Props { }

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

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Page: NextPage<Props> = ({ }) => {

  const handleDownloadPdf = () => {
    // Check if pdfUrl is not null
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'your_file_name.pdf'); 
      link.style.display = 'none'; 
      document.body.appendChild(link);
      link.click(); 
      document.body.removeChild(link);
    } else {
      openNotificationWithIcon('warning', 'PDF URL is not available.');
    }
  };
  

  const openNotificationWithIcon = (type: NotificationType, message: string) => {
    notification[type]({
      message: message,
    });
  };
  
  const handleCopyPdfUrl = () => {
    navigator.clipboard.writeText(pdfUrl)
      .then(() => {
        openNotificationWithIcon('success', 'PDF URL copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        openNotificationWithIcon('error', 'Failed to copy PDF URL!');
      });
  };
  const params = useParams();
  console.log("Param at package details", params);
  const { id } = params;
  const [packageDetails, setPackageDetails] = useState<PackageStructure>();
  const [relatedPackageDetails, setRelatedPackageDetails] = useState<RelatedPackageStructure[]>([]);
  const [selectedRate, setSelectedRate] = useState(null);
  const [packageId, setPackageId] = useState(null);
  const [packageTypeId, setPackageTypeId] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  
  useEffect(() => {

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
      setPackageId(response?.data.package_id);
      setPackageTypeId(response?.data.tnp_package_types?.package_type_id);
      const packageurl = JSON.parse(response.data.package_details);
      const pdfurl = packageurl.TripDetailsAndCostSummary.PDFUrl;
      setPdfUrl(pdfurl);
    }

    getItem();
  }, []);


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
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!packageDetails) {
    return (
      <div className="w-full h-[85vh] flex items-center justify-center pt-2">
        <Spin size="large" />
      </div>
    );
  }

  if (id[0] === "honeymoon") {
    return (
      <div>
        <Honeymoon packageDetails={packageDetails} />
      </div>
    );
  }

  const tripDetails: TripDetails =
    packageDetails?.package_details &&
    JSON.parse(packageDetails?.package_details);


  console.log("package type id here", packageTypeId);

  return (
    <div>
      <HeroDomestic
        heading={capitalizeFirstLetter(
          packageDetails.tnp_package_types.package_type_name
        )}
        paragraph={capitalizeFirstLetter(
          packageDetails.tnp_destinations?.tnp_package_regions.region_name,
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
            <button
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[12rem] lg:w-[10rem]"
              onClick={handleCopyPdfUrl}>
              Share
            </button>
            <button onClick={handleDownloadPdf} className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[13rem] lg:w-[11rem]">
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

        <div className="w-full lg:w-[40%]">
          <DomesticForm
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
            <div className="w-full max-w-md h-max bg-transparent rounded-md flex flex-col mx-auto p-4 md:p-0"> <h1 className="uppercase text-black p-5 text-2xl font-bold">RELATED PACKAGES</h1></div>
            {relatedPackageDetails.length > 0 ? (
              <RenderTourCardsRelated PackageItems={relatedPackageDetails} />
            ) : (
              <div className="w-full flex justify-center mt-4 h-12 pt-2">
                <Spin size="large" />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
