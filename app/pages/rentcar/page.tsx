"use client";
import HeroBanner from "@/components/Common/HeroBanner";
import { NextPage } from "next";
import BannerImage from "../../../assets/carrent/hero_image.png";
import SearchbarAndFilters from "@/components/RentCar/SearchbarAndFilters";
import CarListingsBanner from "@/components/RentCar/CarListingsBanner";
import { useEffect, useState } from "react";
import RentCarMotivation from "@/components/RentCar/RentCarMotivation";
import RentalExperiance from "@/components/RentCar/RentalExperiance";

interface Props { }

const Page: NextPage<Props> = ({ }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Component has been mounted
  }, []);

  if (!isMounted) {
    return null; // Don't render anything until client-side hydration
  }
  return (
    <div>
      <HeroBanner
        UpcommingImage={BannerImage}
        Heading="Welcome to Car Rental"
        Subheading=""
      />

      <div className="flex justify-center relative md:h-0 h-40">
        <span className="absolute z-10 bottom-[-50px]">
          <SearchbarAndFilters />
        </span>
      </div>
      {/* space generator to separate the banner and content */}
      <div className="h-10 bg-transparent"></div>

      <RentCarMotivation />

      <CarListingsBanner />

      <RentalExperiance />
    </div>
  );
};

export default Page;
