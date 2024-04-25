import { NextPage } from 'next';
import Dropdown from "../Dropdown";
import { useState } from 'react';
import allgirlskashmir from "../../assets/tourpackages/allgirlskashmir.svg";
import sixdayskardubashu from "../../assets/tourpackages/sixdayskardubashu.svg";
import eightdayshunzaskardu from "../../assets/tourpackages/eightdayshunzaskardu.svg";
import sixdayshunzanaltar2 from "../../assets/tourpackages/sixdayhunzanaltar2.svg";
import sevendayhunzameadows from "../../assets/tourpackages/sevendayhunzameadows.svg";
import sevendayhunzaskardu from "../../assets/tourpackages/sevendayhunzaskardu.svg";
import sixdayhunzanaltar from "../../assets/tourpackages/sixdayhunzanaltar.svg";
import eightdaysakrdubashu from "../../assets/tourpackages/eightdaysakrdubashu.svg";
import { BiSortAlt2 } from 'react-icons/bi';

interface Props {}

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
      discountedPrice: 29500,
      reviewCount: 1,
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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
      imageCount: 2,
      videoCount: 2
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

const FilterAndSearchBar: NextPage<Props> = ({}) => {
  const [currPage, setCurrPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value);
  const [selectedDates, setSelectedDates] = useState(dateOptions[0].value);
  const [selectedType, setSelectedType] = useState(typeOptions[0].value);
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0].value);
  const [selectedSort, setSelectedSort] = useState('featured');
  const [sortDirection, setSortDirection] = useState("asc");
  
  const startIndex = (currPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, featuredData.length);
  let currentItems = featuredData.slice(startIndex, endIndex);

  const sortData = () => {
    if (selectedSort === "price") {
      const sorted = [...currentItems].sort((a, b) =>
        sortDirection === "asc" ? a.price - b.price : b.price - a.price
      );
      currentItems = sorted;
    }
  };

  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleSort = () => {
    toggleSortDirection();
    sortData();
  };

  return <div className='flex flex-row w-full justify-between '>
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
  <div className='flex flex-row gap-1'>
    <p className='text-sm mt-2'>Sort By</p>
    <button onClick={handleSort}><BiSortAlt2 size={20} /></button>
    <Dropdown options={[{ label: "Ascending", value: "asc" }, { label: "Descending", value: "desc" }]} selectedOption={selectedSort} onSelect={setSelectedSort} />
  </div>
</div>
}

export default FilterAndSearchBar