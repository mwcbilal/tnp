"use client";

import FeaturedListings from "@/components/TourPackage/FeaturedListings";
import TourPackHero from "@/components/TourPackage/TourPackHero";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import HoneymoonFeaturedListings from "@/components/TourPackage/HoneymoonFeaturedListings";
import HoneymoonTourPackHero from "@/components/TourPackage/HoneymoonTourPackHero";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const params = useParams();
  const { category } = params;
  console.log("Param aya", category);

  const categoryVal = category?.length > 0 && category[0] === "international" || category[0] === "domestic" ? category[0] : undefined;

  const regionVal = category?.length > 1 ? category[1] : undefined;

  const packageType = category?.length > 0 && category[0] !== "international" && category[0] !== "domestic" ? category[0] : undefined;

  
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
        <HoneymoonFeaturedListings category={categoryVal} region={regionVal} package_type={packageType} />
      </div>
    );
  }

  return (
    <div>
      <TourPackHero
        heading={capitalizeFirstLetter(category.length > 0 && category[0])}
        subheading={category.length > 1 && capitalizeFirstLetter(category[1])}
      />
      <FeaturedListings category={categoryVal} region={regionVal} package_type={packageType} />
    </div>
  );
};

export default Page;
