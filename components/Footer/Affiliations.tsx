import { NextPage } from "next";
import Image from "next/image";
import { AffiliationsData } from "@/assets/strings/NavigationString";

interface Props {}

const Affiliations: NextPage<Props> = ({}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[90%] flex justify-center items-center mb-8">
        <div className="w-1/3 md:w-2/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 h-0.5 bg-gray-300"></div>
        <div className="w-2/3 md:w-2/4 lg:w-3/4 xl:w-3/4 2xl:w-2/5">
          <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-center">
            Affiliations
          </p>
        </div>
        <div className="w-1/3 md:w-2/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 h-0.5 bg-gray-300"></div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-around items-center mb-12">
        {AffiliationsData.map((item, i) => (
          <Image className="m-4 h-20" alt="image_not_found" src={item.image} key={"affiliations-image-id-" + i} />
        ))}
      </div>
    </div>
  );
};

export default Affiliations;
