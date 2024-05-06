"use client";
import FeaturedListings from "@/components/TourPackage/FeaturedListings";
import TourPackHero from "@/components/TourPackage/TourPackHero";

const tourpackages = () => {
  return (
    <div className="w-screen">
      <TourPackHero />
      <FeaturedListings/>
    </div>
  );
};
export default tourpackages;
