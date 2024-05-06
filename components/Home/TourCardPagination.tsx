import { useState } from "react";
import HomeTourCard from "./HomeTourCard";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { NextPage } from "next";

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

interface Props {
  featuredata: PackageStructure[];
  direction: string;
  cardsPerPage?: number;
}

const TourCardPagination: NextPage<Props> = ({
  featuredata = [],
  direction,
  cardsPerPage = 3,
}) => {
  console.log("featuredata", featuredata);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(featuredata?.length / cardsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const renderTourCards = () => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, featuredata.length);

    return (
      <div className="flex md:flex-row flex-col md:gap-4 gap-4 justify-center items-center lg:w-[85%] w-[100%] lg:h-96">
        {featuredata?.slice(startIndex, endIndex).map((item, index) => {
          const packageDetails = JSON.parse(item.package_details || "{}");
          console.log("packageDetails", packageDetails);
          const imageUrls =
            packageDetails?.TripDetailsAndCostSummary?.Images || [];
          return (
            <HomeTourCard
              key={index}
              id={item?.package_id}
              pic={imageUrls[0]}
              loc={item?.tnp_destinations.tnp_package_regions.region_name}
              title={item?.package_name}
              duration={item?.package_duration}
              people={item?.package_total_persons}
              price={item?.package_rate_deluxe}
              dprice={item?.package_rate_normal}
              review={1}
              imageCount={imageUrls.length}
              videoCount={imageUrls.length}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div
        className={`flex ${
          direction == "row" ? "md:flex-row" : "md:flex-col"
        }  flex-col gap-4  w-full  justify-center items-center`}
      >
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={`bg-gray-200 text-black h-8 w-8 hidden ${
            direction === "row" ? "md:block" : "hidden"
          } rounded-full flex items-center pl-[5px] justify-center`}
        >
          <GrFormPrevious size={18} />
        </button>
        {renderTourCards()}
        <div className="flex flex-row gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className={`bg-gray-200  text-black h-8 w-8 hidden ${
              direction === "col" ? "md:block" : "hidden"
            } rounded-full flex items-center  pl-[5px] justify-center`}
          >
            <GrFormPrevious size={18} />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-gray-200 md:block text-black h-8 w-8 rounded-full flex items-center pl-[5px] justify-center"
          >
            <GrFormNext size={18} />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex flex-row gap-2">
          <button
            onClick={handlePrevPage}
            className="px-4 py-2 bg-sky-500 text-white md:hidden block"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-sky-500 text-white md:hidden block"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
export default TourCardPagination;
