import { NextPage } from "next";
import Image from "next/image";

interface Props {
  BannerCar: any;
  moveImage: () => void;
  move: number;
}

const ImageComp: NextPage<Props> = ({ BannerCar, moveImage, move }) => {
  console.log(move);
  return (
    <div>
      <Image
        className={`absolute w-12 sm:w-20 md:w-24 lg:w-44 xl:w-56 bottom-2 md:bottom-5 left-[6%] xl:left-[5.5%] 2xl:left-[8%]  lg:bottom-6 xl:bottom-8 2xl:bottom-10 transition-all duration-500`}
        src={BannerCar}
        alt="Background_Image"
        onClick={moveImage}
        style={{ transform: `translateX(calc(${move} * 1.5vw)` }}
      />
    </div>
  );
};

export default ImageComp;
