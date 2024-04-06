import { useState } from "react";
import TourCard from "./TourCard";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { NextPage } from "next";

interface Props {
  featuredata: any[];
  direction: string;
  cardsPerPage?: number;
}

const TourCardPagination: NextPage<Props> = ({
  featuredata,
  direction,
  cardsPerPage = 3,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(featuredata.length / cardsPerPage);

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
      <div className="flex md:flex-row flex-col md:gap-4 gap-4 justify-center items-center lg:w-[85%] w-[100%]  ">
        {featuredata.slice(startIndex, endIndex).map((item, index) => (
          <TourCard
          key={index}
            pic={item?.img}
            loc={item?.location}
            title={item?.title}
            duration={item?.duration}
            people={item?.people}
            price={item?.price}
            dprice={item?.discountedPrice}
            review={item?.reviewCount}
            imageCount={item?.imageCount}
            videoCount={item?.videoCount}
          />
        ))}
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
