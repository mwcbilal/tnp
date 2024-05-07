import { NextPage } from "next";
import CarTypeButtons from "./CarTypeButtons";
import { useEffect, useState } from "react";
import RentBannerHeader from "./RentBannerHeader";
import CarListing from "./CarListing";
import RentalExperiance from "./RentalExperiance";
import CarFilter from "./CarFilter";
import { fetchCars } from "@/apiFunctions/cars";

interface Props { }

const CarListingsBanner: NextPage<Props> = ({ }) => {
    const [cars, setCars] = useState([]);
    const [carFilters, setCarFilters] = useState({
        car_class: null,
        pickup_location: "",
        dropoff_location: "",
        pickup_date: "",
        pickup_time: "",
        dropoff_date: ""
    });

    const populateCars = async () => {
        const res = await fetchCars(carFilters)
        console.log("here", cars)
        setCars(res?.availableCars)
    }
    useEffect(() => {
        populateCars()
    }, [carFilters])



    return (
        <div className="bg-[#EDEFF5] py-16 flex flex-col items-center">
            <RentBannerHeader
                Title="Find Great Deals From Top-Rated Dealers"
                Description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Donec vel interdum ipsum, eu ultrices dui. Vestibulum
        eget faucibus augue."
            />
            {/*
    <CarTypeButtons selectedCarType={selectedCarType} setSelectedCarType={setselectedCarType} />
*/}

            <CarFilter carFilters={carFilters} setCarFilters={setCarFilters} />

            <CarListing carFilters={carFilters} cars={cars} />
        </div>
    );
};

export default CarListingsBanner;
