"use client";

import FeaturedListings from "@/components/TourPackage/FeaturedListings";
import TourPackHero from "@/components/TourPackage/TourPackHero";
import Honeymoon from "@/components/TourDetails/honeymoon/honeymoon";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import HoneymoonFeaturedListings from "@/components/TourPackage/HoneymoonFeaturedListings";
import HoneymoonTourPackHero from "@/components/TourPackage/HoneymoonTourPackHero";
import FooterBg from "@/components/TourDetails/honeymoon/Footer/page";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const params = useParams();
  console.log("Param aya", params);
  const { category } = params;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (category[0] === "honeymoon") {
    return (
      <div>
        <HoneymoonTourPackHero
          heading={capitalizeFirstLetter(category.length > 0 && category[0])}
          subheading={category.length > 1 && capitalizeFirstLetter(category[1])}
        />
        <HoneymoonFeaturedListings />
      </div>
    );
  }

  return (
    <div>
      <TourPackHero
        heading={capitalizeFirstLetter(category.length > 0 && category[0])}
        subheading={category.length > 1 && capitalizeFirstLetter(category[1])}
      />
      <FeaturedListings />
    </div>
  );
};

export default Page;
