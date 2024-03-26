"use client"
import Cost from "@/components/Domestics/Cost";
import DomesticForm from "@/components/Domestics/DomesticForm";
import HeroDomestic from "@/components/Domestics/HeroDomestic";
import Highlights from "@/components/Domestics/Highlights";
import Itinerary from "@/components/Domestics/Itinerary";
import CarouselSlider from "@/components/Domestics/carousel";
import Overview from "@/components/Domestics/overview";
import data from "@/Data/PackageData"
import { useParams } from "next/navigation";


const Domestic = () => {
  const params= useParams()
  console.log(params,"param")
  const bannerData= data.filter((item)=>{return item.id.toString() === params?.id[0]})[0]
  const renderedData= bannerData?.packages?.filter((item)=>{return item.pid.toString()===params?.id[1]})[0]
  console.log(renderedData,"rrrr")
    console.log(data)
  
  return (
    <div>
      <HeroDomestic heading={bannerData.type} paragraph={bannerData.pTag} />

      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-6  justify-center mx-auto my-10">
        {/* Right Side*/}
        <div className=" w-full  lg:w-[60%]  ">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-2 my-5 md:p-3 lg:p-0">
            <h1 className="text-1xl md:text-2xl font-bold">
              {" "}
              6 Days Skardu & Bashu Valley{" "}
            </h1>

            <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm">
              <div className="w-[6rem] h-[5rem] bg-yellow-300 text-white text-3xl flex justify-center items-center">
                6
              </div>
              <div className="w-[6rem] h-[2rem] text-1xl text-black flex justify-center items-center bg-white">
                Days
              </div>
            </div>
          </div>
          <CarouselSlider />

          <div className="flex justify-end  gap-6 items-center p-2">
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[12rem] lg:w-[10rem]">
              Share
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[13rem] lg:w-[11rem]">
              Download Pdf
            </button>
          </div>
          <Overview
            text={renderedData?.overview}
          />

          <Highlights
            data={renderedData?.highlights}
          />
          <Itinerary data={renderedData?.itineraryData} />
          <Cost includeCost={renderedData.includeCost} costExclude={renderedData.costExclude}/>
        </div>

        {/* aqsa add your compoennts here */}

        {/* left side */}
        <div className=" w-full lg:w-[40%]  flex ">
          <DomesticForm />
        </div>
      </div>
    </div>
  );
};
export default Domestic;