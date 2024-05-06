"use client";
import { useEffect, useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
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
import { getTourPackages } from "@/app/actions/tourpackages";
import FilterAndSearchBar from "./FilterAndSearchBar";
import RenderTourCards from "./RenderTourCards";
import honeymoonbg from "../../assets/honeymoon/honeymoon-bg.png";
import TourpackSearch from "./TourPackSearch";
import HoneymoonRenderTourCards from "./HoneymoonRenderTourCards";
import FooterBg from "../TourDetails/honeymoon/Footer/page";

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
}

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

const  HoneymoonFeaturedListings = () => {
  const itemsPerPage = 8;
  const [packages, setPackages] = useState<PackageStructure[]>([]);

  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    async function getItems() {
      const response = await getTourPackages();
      console.log("Data from API", response);
      setPackages(response?.data);
    }
    getItems();

  }, []);

  const startIndex = (currPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, featuredData.length);
  let currentItems = featuredData.slice(startIndex, endIndex);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center" style={styles.container}>
      <div className="w-[80%] flex flex-col gap-4  ">
        <PaginationInfo
          currentPage={1}
          itemsPerPage={6}
          totalItems={featuredData.length}
        />
        <FilterAndSearchBar />
        <HoneymoonRenderTourCards PackageItems={packages} />
        {
          packages?.length > 6 &&
          <div className="flex w-full justify-center">
            <Pagination
              currentPage={currPage}
              totalPages={Math.ceil(featuredData.length / itemsPerPage)}
              setCurr={setCurrPage}
            />
          </div>
        }
        {
          packages?.length === 0 && <div> No items were found </div>
        }
      </div>
      
      <FooterBg/>
    </div>
  );
};
const styles= {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/47be/0989/b7cc193f1c1b518c44dd794e880854c9?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdEn0gh2U-ZtcajHj5kmVUfg2UACK7DfZdyeh6cwDUM0v6LgOLo7d0IlMd0gkFxBDem28hoMCw51HErMIHjbpi0lcNGEoQxHcBCmcpTfjDAN5XfAvFUyZt3yYrO2rya8jViqIbXW9EzDFNFtd5VlgoNAFijtPTHHyLvNfjf9GnTZi~aXpYyebiGjqWA6jmRU-xm2JoF-hpz42yjsd356H-ybruEtryzLZ8R-MJl9VqXNKb0eT5CJruteymAHHYPg~7lbYLKtUlGX6JJJc5mKlo1qi1QapgUAvO6EO22-VsCISARmKN6xdLhTxwUztt~CTsYpta9lhHTyP~61LiUYIQ__")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgb(255 245 251)',
        marginTop: '-5rem',
        paddingTop: '7rem'
      },
};

export default HoneymoonFeaturedListings;
