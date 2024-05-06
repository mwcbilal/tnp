"use client";
import Image from "next/image";
import mobile_download from "../../assets/footer/mobile_app_download.png";
import { NavigationRows } from "../../assets/strings/NavigationString";
import LogoDetails from "./LogoDetails";
import OurCompany from "./OurCompany";
import QuickLinks from "./QuickLinks";
import OurNewsLetter from "./OurNewsLetter";
import Affiliations from "./Affiliations";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Footer = () => {
  const params = useParams();

  const { category, id } = useParams();
  console.log("paramssss founddd", { category, id });
  // console.log("footer", params);

  // console.log("paramssss founddd at footer", params);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Component has been mounted
  }, []);

  if (!isMounted) {
    return null; // Don't render anything until client-side hydration
  }
  if (params?.category && params.category[0] === "honeymoon") {
    return null;
  }



  const bgClass = (id && id[0] === 'honeymoon') || (category && category[0] === 'honeymoon') 
  ? "bg-[#fff5fb]" : "bg-white";

  return (
    <div className={`text-black ${bgClass} relative pb-4 pt-8 items-center ${id && id[0] === 'honeymoon'? "hidden" : "flex"} flex-col`}>
      <Affiliations />
      {/* <div className="flex items-center justify-center flex-col relative pt-20 pb-16">
        <Image
          src={mobile_download}
          alt="not_found_image"
          className="w-[90%]"
        />
      </div> */}
      <div className=" w-[90%] mb-5 flex flex-col lg:flex-row lg:flex-wrap justify-between">
        {NavigationRows.map((item, i) => {
          if (item === "LogoDetails") {
            return <LogoDetails key={"rendering-id-" + i} />;
          } else if (item === "OurCompany") {
            return <OurCompany key={"rendering-id-" + i} />;
          } else if (item === "QuickLinks") {
            return <QuickLinks key={"rendering-id-" + i} />;
          } else if (item === "NewsLetter") {
            return <OurNewsLetter key={"rendering-id-" + i} />;
          }
          return <div key={"rendering-id-" + i}></div>;
        })}
      </div>
      <div className="w-[90%] border h-[1px] bg-gray-300"></div>
      <div className="w-[90%] flex flex-col md:flex-row justify-between">
        <div>
          <p className="font-medium mb-4">
            {" "}
            © Copyright <span className="text-[#00ADEE]">©2023</span> . All
            Rights Reserved Copyright
          </p>
        </div>
        <div className="flex gap-4 lg:gap-7">
          <p className="font-medium">Terms and conditions</p>
          <p className="font-medium">Privacy policy</p>
          <p className="font-medium">Login / Signup</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
