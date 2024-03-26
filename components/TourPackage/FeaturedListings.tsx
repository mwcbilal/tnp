"use client";
import Link from 'next/link';

import { useState } from "react";
import img1 from "../../public/TourPackage/FeaturedListing/featured listing 1.png";
import img2 from "../../public/TourPackage/FeaturedListing/featured listing 2.png";
import img3 from "../../public/TourPackage/FeaturedListing/featured listing 3.png";
import allgirlskashmir from "../../assets/tourpackages/allgirlskashmir.svg";
import sixdayskardubashu from "../../assets/tourpackages/sixdayskardubashu.svg";
import eightdayshunzaskardu from "../../assets/tourpackages/eightdayshunzaskardu.svg";
import sixdayshunzanaltar2 from "../../assets/tourpackages/sixdayhunzanaltar2.svg";
import sevendayhunzameadows from "../../assets/tourpackages/sevendayhunzameadows.svg";
import sevendayhunzaskardu from "../../assets/tourpackages/sevendayhunzaskardu.svg";
import sixdayhunzanaltar from "../../assets/tourpackages/sixdayhunzanaltar.svg";
import eightdaysakrdubashu from "../../assets/tourpackages/eightdaysakrdubashu.svg";
import Pagination from "../Pagination";
import PaginationInfo from "../PaginationInfo";
import TourCard from "./TourCard";
import Dropdown from "../Dropdown";
const FeaturedListings = () => {
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 8;

  const featuredData = [
    {
      id: 1,
      pid: 1,
      img: allgirlskashmir,
      location: "Pakistan-North",
      title: "All Girls Trip to Kashmir",
      duration: "7 days",
      people: 12,
      price: 32000,
      discountedPrice: 20987,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sixdayskardubashu,
      location: "Pakistan-North",
      title: "6 Days Skardu & Bashu Valley",
      duration: "7 days",
      people: 12,
      price: 34950,
      discountedPrice: 20987,
      reviewCount: 1,
    },
    {
      id: 1,
      pid: 1,
      img: eightdayshunzaskardu,
      location: "Pakistan-North",
      title: "8 Days Hunza & Skardu",
      duration: "7 days",
      people: 12,
      price: 45000,
      discountedPrice: 42900,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sixdayshunzanaltar2,
      location: "Pakistan-North",
      title: "6 Days Hunza & Naltar",
      duration: "7 days",
      people: 12,
      price: 34000,
      discountedPrice: 31950,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sevendayhunzameadows,
      location: "Pakistan-North",
      title: "7 Days Hunza & Fairy Meadows",
      duration: "7 days",
      people: 12,
      price: 37500,
      discountedPrice: 35450,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sevendayhunzaskardu,
      location: "Pakistan-North",
      title: "7 Days Hunza & Skardu",
      duration: "7 days",
      people: 12,
      price: 32000,
      discountedPrice: 35500,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sixdayhunzanaltar,
      location: "Pakistan-North",
      title: "6 Days Hunza & Naltar",
      duration: "7 days",
      people: 12,
      price: 32000,
      discountedPrice: 20987,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: eightdaysakrdubashu,
      location: "Pakistan-North",
      title: "8 Days Skardu & Bashu",
      duration: "7 days",
      people: 12,
      price: 35000,
      discountedPrice: 20987,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: eightdaysakrdubashu,
      location: "Pakistan-North",
      title: "8 Days Skardu & Bashu",
      duration: "7 days",
      people: 12,
      price: 35000,
      discountedPrice: 20987,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sixdayhunzanaltar,
      location: "Pakistan-North",
      title: "6 Days Hunza & Naltar",
      duration: "7 days",
      people: 12,
      price: 32000,
      discountedPrice: 20987,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sevendayhunzaskardu,
      location: "Pakistan-North",
      title: "7 Days Hunza & Skardu",
      duration: "7 days",
      people: 12,
      price: 32000,
      discountedPrice: 35500,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sevendayhunzameadows,
      location: "Pakistan-North",
      title: "7 Days Hunza & Fairy Meadows",
      duration: "7 days",
      people: 12,
      price: 37500,
      discountedPrice: 35450,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sixdayshunzanaltar2,
      location: "Pakistan-North",
      title: "6 Days Hunza & Naltar",
      duration: "7 days",
      people: 12,
      price: 34000,
      discountedPrice: 31950,
      reviewCount: 1,
    },
    {
      id: 1,
      pid: 1,
      img: eightdayshunzaskardu,
      location: "Pakistan-North",
      title: "8 Days Hunza & Skardu",
      duration: "7 days",
      people: 12,
      price: 45000,
      discountedPrice: 42900,
      reviewCount: 1,
    },
    {
      id: 0,
      pid: 1,
      img: sixdayskardubashu,
      location: "Pakistan-North",
      title: "6 Days Skardu & Bashu Valley",
      duration: "7 days",
      people: 12,
      price: 34950,
      discountedPrice: 20987,
      reviewCount: 1,
    },
    {
      id: 1,
      pid: 1,
      img: allgirlskashmir,
      location: "Pakistan-North",
      title: "All Girls Trip to Kashmir",
      duration: "7 days",
      people: 12,
      price: 32000,
      discountedPrice: 20987,
      reviewCount: 1,
    }
  ];

  const filterOptions = [
    { label: "All Filters", value: "All filters" },
    { label: "All Filters", value: "All filters" },
    { label: "All Filters", value: "All filters" },
  ];
  const dateOptions = [
    { label: "Dates", value: "dates" },
    { label: "Dates", value: "dates" },
    { label: "Dates", value: "dates" },
  ];
  const typeOptions = [
    { label: "Types", value: "types" },
    { label: "Types", value: "types" },
    { label: "Types", value: "types" },
  ];
  const priceOptions = [
    { label: "Price", value: "price" },
    { label: "Price", value: "price" },
    { label: "Price", value: "price" },
  ];
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value);
  const [selectedDates, setSelectedDates] = useState(dateOptions[0].value);
  const [selectedType, setSelectedType] = useState(typeOptions[0].value);
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0].value);

  const startIndex = (currPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, featuredData.length);
  const currentItems = featuredData.slice(startIndex, endIndex);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[80%] flex flex-col gap-4  ">
        <PaginationInfo
          currentPage={2}
          itemsPerPage={6}
          totalItems={featuredData.length}
        />
        <div className="flex flex-row gap-4 flex-wrap ">
          <Dropdown
            options={filterOptions}
            selectedOption={selectedFilter}
            onSelect={setSelectedFilter}
          />
          <Dropdown
            options={dateOptions}
            selectedOption={selectedDates}
            onSelect={setSelectedDates}
          />
          <Dropdown
            options={typeOptions}
            selectedOption={selectedType}
            onSelect={setSelectedType}
          />
          <Dropdown
            options={priceOptions}
            selectedOption={selectedPrice}
            onSelect={setSelectedFilter}
          />
        </div>
        <div className="w-full flex flex-row flex-wrap gap-10 xl:gap-24">
          {currentItems.map((item, index) => (
            <TourCard
              key={index}
              id={item?.id}
              pid={item?.pid}
              pic={item?.img}
              loc={item?.location}
              title={item?.title}
              duration={item?.duration}
              people={item?.people}
              price={item?.price}
              dprice={item?.discountedPrice}
              review={item?.reviewCount}
            />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Pagination
            currentPage={currPage}
            totalPages={Math.ceil(featuredData.length / itemsPerPage)}
            setCurr={setCurrPage}
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedListings;
