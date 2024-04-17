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
        className={`absolute w-16 bottom-2 md:bottom-5 md:w-36 lg:w-52 lg:bottom-6 xl:bottom-8 2xl:bottom-10 2xl:w-80 transition-all duration-500`}
        src={BannerCar}
        alt="Background_Image"
        onClick={moveImage}
        style={{ transform: `translateX(${move}vw)` }}
      />
    </div>
  );
};

export default ImageComp;
