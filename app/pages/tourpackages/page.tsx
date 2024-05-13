"use client";
import FeaturedListings from "@/components/TourPackage/FeaturedListings";
import TourPackHero from "@/components/TourPackage/TourPackHero";

const tourpackages = () => {
  return (
    <div className="w-screen">
      <TourPackHero />
      <FeaturedListings category={null} package_type={null} region={null} />
    </div>
  );
};
export default tourpackages;
