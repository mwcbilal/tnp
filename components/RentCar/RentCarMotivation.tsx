import { NextPage } from "next";
import RentBannerHeader from "./RentBannerHeader";
import { getCarMotivationData } from "@/assets/strings/RentCarData";
import Image from "next/image";
import MotivationCard from "./MotivationCard";

interface Props {}

const RentCarMotivation: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <RentBannerHeader
        Title="Better Way to Find Your Perfect Car"
        Description="In hac habitasse platea dictumst. In pharetra tellus eu justo tincidunt bibendum. Morbi rutrum elit ligula, eget fringilla sem pellentesque aliquam suspendisse."
      />

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
        {getCarMotivationData.map((e, i) => (
          <MotivationCard
            Title={e.Title}
            Description={e.Description}
            IconImage={e.Image}
            key={"motivationcard-" + i}
          />
        ))}
      </div>
    </div>
  );
};

export default RentCarMotivation;
