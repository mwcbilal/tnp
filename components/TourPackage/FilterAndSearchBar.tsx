import { NextPage } from "next";
import Dropdown from "../Dropdown";
import { BiSortAlt2 } from "react-icons/bi";
import { MenuProps } from "antd";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

interface Props {
  filters: any;
  handleFilterChange: any;
  filterKeys: any;
}

// const itemsPerPage = 8;

// const filterOptions: MenuProps["items"] = [
//   { label: "All Filters", key: "1" },
//   { label: "All Filters", key: "2" },
//   { label: "All Filters", key: "3" },
// ];

const dateOptions: MenuProps["items"] = [
  { label: "Dates", key: "1" },
  { label: "Dates", key: "2" },
  { label: "Dates", key: "3" },
];

const typeOptions: MenuProps["items"] = [
  { label: "Type", key: "0" },
  { label: "Group", key: "group" },
  { label: "Private", key: "private" },
  { label: "Honeymoon", key: "honeymoon" },
  { label: "Corporate", key: "corporate" },
];

const priceOptions: MenuProps["items"] = [
  { key: "0", label: "Price" },
  { key: "50000", label: "30000 to 50000" },
  { key: "100000", label: "50000 to 100000" },
  { key: "150000", label: "100000 to 150000" },
  { key: "250000", label: "200000 to 250000" },
];

const sortOptions: MenuProps["items"] = [
  { label: "Fetured", key: "package_isfeatured" },
  { label: "BestSeller ", key: "package_bestseller" },
  { label: "Price: Asc", key: "price_low_to_high" },
  { label: "Price: Desc", key: "price_high_to_low" },
  { label: "Duration: Asc", key: "duration_low_to_high" },
  { label: "Duration: Desc", key: "duration_high_to_low" },
  { label: "No of Persons: Asc", key: "package_total_persons" },
  { label: "Deluxe: Desc", key: "price_delux_high_to_low" },
  { label: "Deluxe: Asc", key: "price_delux_low_to_high" },
  // { label: "price: Asc", key: "price" },
  //    { label: "Date", key: "date" },
  //    { label: "Days", key: "package_duration_low_to_high" },
];

const FilterAndSearchBar: NextPage<Props> = ({
  filters,
  handleFilterChange,
  filterKeys,
}) => {
  //    const [currPage, setCurrPage] = useState(1);
  //    const [selectedFilter, setSelectedFilter] = useState(
  //        filterOptions[0]["label"],
  //    );
  //    const [selectedDates, setSelectedDates] = useState(dateOptions[0]["label"]);
  //    const [selectedType, setSelectedType] = useState(typeOptions[0]["label"]);
  //    const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]["label"]);
  //    const [selectedSort, setSelectedSort] = useState("featured");
  //    const [sortDirection, setSortDirection] = useState("asc");
  //
  //    const startIndex = (currPage - 1) * itemsPerPage;
  //    const endIndex = Math.min(startIndex + itemsPerPage, featuredData.length);
  //    let currentItems = featuredData.slice(startIndex, endIndex);
  //
  //    const sortData = () => {
  //        if (selectedSort === "price") {
  //            const sorted = [...currentItems].sort((a, b) =>
  //                sortDirection === "asc" ? a.price - b.price : b.price - a.price,
  //            );
  //            currentItems = sorted;
  //        }
  //    };
  //
  //    const toggleSortDirection = () => {
  //        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  //    };
  //
  //    const handleSort = () => {
  //        toggleSortDirection();
  //        sortData();
  //    };

  return (
    <div className="md:flex md:flex-row w-full md:justify-between ">
      <div className="flex flex-row gap-4 flex-wrap ">
        <Dropdown
          options={dateOptions}
          selectedOption={filters?.date}
          onSelect={handleFilterChange}
          name={filterKeys.date}
        />
        <Dropdown
          options={typeOptions}
          selectedOption={filters?.type}
          onSelect={handleFilterChange}
          name={filterKeys.type}
        />
        <Dropdown
          options={priceOptions}
          selectedOption={filters?.price}
          onSelect={handleFilterChange}
          name={filterKeys.price}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-start xl:items-center gap-1">
        <div className="flex p-2">
          <p className="text-sm">Sort By</p>
          <button className="max-h-[20px]" onClick={() => {}}>
            <BiSortAlt2 size={20} />
          </button>
        </div>
        <Dropdown
          options={sortOptions}
          selectedOption={filters?.sort}
          onSelect={handleFilterChange}
          name={filterKeys.sort}
        />
        <Link href="?modal=true">
          <div
            className={`btn-normal shadow-2xl !flex items-center md:w-auto text-center cursor-pointer text-white rounded-md px-5 py-3 ml-4`}>
            <CiSearch className="mr-2" size={20}/>
            search
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FilterAndSearchBar;
