import React from "react";
import { url } from "inspector";
import bg from "../../assets/honeymoon/rosesbg2.jpg";
import Image from "next/image";
import TourpackSearch from "./TourPackSearch";
import HeroBanner from "../Common/HeroBanner";
import { NextPage } from 'next'

interface HoneymoonTourPackHeroParams {
  heading?: string;
  subheading?: string;
}

const HoneymoonTourPackHero: NextPage<HoneymoonTourPackHeroParams> = ({ heading = "Tour Packages", subheading = "" }) => {
  return <div className="w-full">
    <div className="w-full ">
      <HeroBanner Heading={heading} Subheading={subheading} UpcommingImage={bg} />
      <div className="w-full relative xl:h-16 h-60 md:h-20 xl:-top-16 -top-10">
        <div className="w-full flex justify-center">
          <TourpackSearch color="#8b2424" color2="red"/>
        </div>
      </div>
    </div>
  </div>
}

export default HoneymoonTourPackHero;
