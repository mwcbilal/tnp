import { availableCars } from "@/assets/strings/RentCarData";
import { NextPage } from "next";
import CarCard from "./CarCard";
import { List } from "antd";
import { useState } from "react";


interface Props {
    cars : any;
    carFilters : any
}

const CarListing: NextPage<Props> = ({cars, carFilters}) => {
  const position = "bottom";
  const align = "center";

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <List
        grid={{ gutter: 8, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
        pagination={{ position, align, hideOnSinglePage: false }}
        dataSource={cars}
        renderItem={(item : any) => (
          <List.Item className="w-full">
            <CarCard
            carFilters={carFilters}
              CarImage={item?.CarImage}
              CarTitle={item?.car_name}
              CarType={item?.transmission}
              ConsumptionType={item?.fuelType}
              DriveType={item?.engine}
              KilometersRan={item?.mileage}
              ModelYear={item?.year}
              RentPrice={item?.pricePerDay}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CarListing;
