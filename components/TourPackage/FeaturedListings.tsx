"use client";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import PaginationInfo from "../PaginationInfo";
import { getTourPackages } from "@/app/actions/tourpackages";
import FilterAndSearchBar from "./FilterAndSearchBar";
import RenderTourCards from "./RenderTourCards";
import { Spin } from "antd";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface PackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_category_id: number;
  package_type_id: number;
  package_region_id: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string | null;
  package_duration: string | null;
  package_isfeatured: boolean;
}

const filterKeys = {
  sort: "sort",
  date: "date",
  type: "type",
  price: "price",
};

const FeaturedListings = ({ category, region, package_type }) => {
  const itemsPerPage = 8;
  const [packages, setPackages] = useState<PackageStructure[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const searchParams = useSearchParams();
  const [currPage, setCurrPage] = useState(1);
  const [filters, setFilters] = useState({
    sort: "",
    date: "",
    price: "",
    region,
    package_type,
    category,
  });
  const text = searchParams.get("text");
  console.log("Params", text);
  console.log("FILTERSSSS", filters);

  const handleFilterChange = (name: any, val: any) => {
    setFilters({ ...filters, [name]: val });
  };

  const fetchPackagesBySearch = async (text: string) => {
    setIsloading(true);
    const res = await axios.get("/pages/api/tourpackages/search", {
      params: {
        text,
        limit: 8,
        offset: currPage - 1,
        ...filters,
      },
    });
    console.log("DATAAA", res?.data);
    setPackages(res?.data?.data);
    setIsloading(false);
  };

  async function getItems(filters: any) {
    setIsloading(true);
    const response = await getTourPackages(8, currPage - 1, filters);
    console.log("Data from API", response);
    setPackages(response?.data);
    setIsloading(false);
  }
  useEffect(() => {
    console.log("Run");
    if (text) {
      console.log("TEXT: ", text);
      fetchPackagesBySearch(text as string);
    } else {
      getItems(filters);
    }
  }, [filters]);

  return (
    <div className="w-full h-full flex justify-center items-center mt-12">
      {isLoading ? (
        <Spin tip="Loading" size="large" style={{ marginBottom: "5px" }} />
      ) : (
        <div className="w-[80%] flex flex-col gap-4">
          <PaginationInfo
            currentPage={1}
            itemsPerPage={8}
            totalItems={packages.length}
          />
          <FilterAndSearchBar
            filters={filters}
            handleFilterChange={handleFilterChange}
            filterKeys={filterKeys}
          />
          <RenderTourCards PackageItems={packages} />
          {packages?.length > 6 && (
            <div className="flex w-full justify-center">
              <Pagination
                currentPage={currPage}
                totalPages={Math.ceil(packages.length / itemsPerPage)}
                setCurr={setCurrPage}
              />
            </div>
          )}
          {packages?.length === 0 && <div> No items were found </div>}
        </div>
      )}
    </div>
  );
};
export default FeaturedListings;
