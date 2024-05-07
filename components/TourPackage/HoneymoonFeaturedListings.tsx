"use client";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import PaginationInfo from "../PaginationInfo";
import { getTourPackages } from "@/app/actions/tourpackages";
import FilterAndSearchBar from "./FilterAndSearchBar";
import HoneymoonRenderTourCards from "./HoneymoonRenderTourCards";
import FooterBg from "../TourDetails/honeymoon/Footer/page";
import { Spin } from "antd";

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
    price: "price"
}

const HoneymoonFeaturedListings = () => {
    const itemsPerPage = 8;
    const [packages, setPackages] = useState<PackageStructure[]>([]);
    const [isLoading, setIsloading] = useState(false)
    const [filters, setFilters] = useState({
        sort: "",
        date: "",
        type: "",
        price: "",
    });
    console.log("FILTERSSSS", filters);

    const [currPage, setCurrPage] = useState(1);

    async function getItems(filters: any) {
        setIsloading(true);
        const response = await getTourPackages(8, currPage - 1, filters);
        console.log("Data from API", response);
        setPackages(response?.data);
        setIsloading(false);
    }

    useEffect(() => {
        console.log("Run");
        getItems(filters);
    }, [filters]);

    const handleFilterChange = (name: any, val: any) => {
        setFilters({ ...filters, [name]: val });
    }

    return (
        <div
            className="w-full h-full flex flex-col justify-center items-center"
            style={styles.container}
        >
            {isLoading ? (<Spin tip="Loading" size="large" />) : (
                <div className="w-[80%] flex flex-col gap-4">
                    <PaginationInfo
                        currentPage={1}
                        itemsPerPage={8}
                        totalItems={packages.length}
                    />
                    <FilterAndSearchBar filters={filters} handleFilterChange={handleFilterChange} filterKeys={filterKeys} />
                    <HoneymoonRenderTourCards PackageItems={packages} />
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

            <FooterBg />
        </div>
    );
};
const styles = {
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/47be/0989/b7cc193f1c1b518c44dd794e880854c9?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdEn0gh2U-ZtcajHj5kmVUfg2UACK7DfZdyeh6cwDUM0v6LgOLo7d0IlMd0gkFxBDem28hoMCw51HErMIHjbpi0lcNGEoQxHcBCmcpTfjDAN5XfAvFUyZt3yYrO2rya8jViqIbXW9EzDFNFtd5VlgoNAFijtPTHHyLvNfjf9GnTZi~aXpYyebiGjqWA6jmRU-xm2JoF-hpz42yjsd356H-ybruEtryzLZ8R-MJl9VqXNKb0eT5CJruteymAHHYPg~7lbYLKtUlGX6JJJc5mKlo1qi1QapgUAvO6EO22-VsCISARmKN6xdLhTxwUztt~CTsYpta9lhHTyP~61LiUYIQ__")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgb(255 245 251)",
        marginTop: "-5rem",
        paddingTop: "7rem",
    },
};

export default HoneymoonFeaturedListings;
