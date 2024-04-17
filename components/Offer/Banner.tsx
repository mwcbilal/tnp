import { NextPage } from "next";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import BannerImg from "../../assets/offer/Group 1000003265.svg";
import BannerCar from "../../assets/offer/Group 1000003260.svg";
import { useEffect, useState } from "react";
import ImageComp from "./ImageComp";
// import { transform } from "next/dist/build/swc";

interface Props {
  UpcommingImage: string | StaticImport;
  Heading: string;
  Subheading: string;
  move: number;
  setMove: (newMove: number) => void;
}

const Banner: NextPage<Props> = ({
  UpcommingImage,
  Heading,
  Subheading,
  move,
  setMove,
}) => {
  const moveImage = () => {
    console.log("Move image function called");
    setMove(move + 100);
  };

  useEffect(() => {
    console.log(move + "<===moving");
  }, [move]);

  return (
    <div className="heroAboutUs relative w-full h-[50vh]">
      {/* Background Image */}
      <span className="absolute inset-0">
        <Image
          src={UpcommingImage}
          layout="fill"
          objectFit="cover"
          alt="Background_Image"
        />
      </span>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="md:text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-6 text-[#FBAD17]">
            {Heading}
          </h1>
          {Subheading && <p className="text-white text-lg">{Subheading}</p>}
        </span>
      </div>
      <div className="bottom-0 w-full absolute">
        <ImageComp BannerCar={BannerCar} move={move} moveImage={moveImage} />
        <Image
          className="w-full"
          src={BannerImg}
          objectFit="cover"
          alt="Background_Image"
        />
      </div>
    </div>
  );
};

export default Banner;
