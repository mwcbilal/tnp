import React from "react";
import { url } from "inspector";
import bg from "../../public/TourPackage/heroimg.png";
import Image from "next/image";
import TourpackSearch from "./TourPackSearch";
import HeroBanner from "../Common/HeroBanner";
const TourPackHero = () => {
  return (
    <div className="w-full">
      <div className="w-full ">
        <HeroBanner Heading="Domestic" Subheading="" UpcommingImage={bg} />
        <div className="w-full relative xl:h-16 h-60 md:h-20 xl:-top-16 -top-32">
          <div className="w-full flex justify-center">
            <TourpackSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourPackHero;
