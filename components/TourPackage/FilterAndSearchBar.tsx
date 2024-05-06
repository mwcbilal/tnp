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
import { MenuProps } from 'antd';

interface Props { }

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

const filterOptions: MenuProps['items'] = [
  { label: "All Filters", key: "1" },
  { label: "All Filters", key: "2" },
  { label: "All Filters", key: "3" },
];

const dateOptions: MenuProps['items'] = [
  { label: "Dates", key: "1" },
  { label: "Dates", key: "2" },
  { label: "Dates", key: "3" },
];

const typeOptions: MenuProps['items'] = [
  { label: "Type", key: "0" },
  { label: "Group", key: "group" },
  { label: "Private", key: "private" },
  { label: "Honeymoon", key: "honeymoon" },
  { label: "Corporate", key: "corporate" },
];

const priceOptions: MenuProps['items'] = [
  { key: "0", label: "Price" },
  { key: "50000", label: "30000 to 50000" },
  { key: "100000", label: "50000 to 100000"},
  { key: "150000", label: "100000 to 150000" },
  { key: "250000", label: "200000 to 250000" },
];

const sortOptions: MenuProps['items'] = [
  { label: "Price", key: "price_low_to_high" },
  { label: "Date", key: "date" },
  { label: "Deluxe", key: "price_delux_low_to_high" },
  { label: "Days", key: "package_duration_low_to_high" },
];

const FilterAndSearchBar: NextPage<Props> = ({}) => {
  const [currPage, setCurrPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]["label"]);
  const [selectedDates, setSelectedDates] = useState(dateOptions[0]["label"]);
  const [selectedType, setSelectedType] = useState(typeOptions[0]["label"]);
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]["label"]);
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
        onSelect={setSelectedPrice}
      />
    </div>
    <div className='flex flex-row items-center gap-1'>
      <p className='text-sm'>Sort By</p>
      <button onClick={handleSort}><BiSortAlt2 size={20} /></button>
      <Dropdown options={sortOptions} selectedOption={selectedSort} onSelect={setSelectedSort} />
    </div>
  </div>
}

export default FilterAndSearchBar