import { NextPage } from "next";
import Image from "next/image";
import OrangeCar from "../../assets/rentcar/orangeCarImage.svg";
import badgeIcon from "../../assets/rentcar/badgeIcon.svg";
import tagIcon from "../../assets/rentcar/tagIcon.svg";
import phoneIcon from "../../assets/rentcar/phoneIcon.svg";

interface Props {}

const RentalExperiance: NextPage<Props> = ({}) => {
  return (
    <div className="bg-white flex justify-center items-center  lg:py-28">
      <div className="flex justify-center flex-col lg:flex-row items-center">
        <Image className="relative w-screen lg:w-2/4 xl:w-auto py-4 lg:py-0" alt="image_not_found" src={OrangeCar} />
        <div className="md:w-[470px] w-auto px-8 flex flex-col items-start justify-center">
          <div className="">
            <p className="text-3xl py-4">
              Feel The Best Experience With Our Rental Deals
            </p>
            <p className="text-[#8D8E93] text-base">
              Duis ut semper magna. Curabitur at scelerisque diam. Ut hendrerit
              sed sapien non iaculis. Suspendisse vitae enim ac justo semper
              euismod vivamus.
            </p>
          </div>
          <div className="my-8">
            <div className="flex my-4 justify-start">
              <Image alt="image_not_found" src={tagIcon} />
              <div className="pl-8">
                <p className="text-base font-medium mt-3">
                  Deals For Every Budget
                </p>
                <p className="text-[#8D8E93] text-sm font-normal">
                  Aenean at pellentesque mi. Praesent dictum uto tristique eros,
                  eu condimentum tellus.
                </p>
              </div>
            </div>
            <div className="flex my-4 justify-start">
              <Image alt="image_not_found" src={badgeIcon} />
              <div className="pl-8">
                <p className="text-base font-medium mt-3">
                  Best Price Guaranteed
                </p>
                <p className="text-[#8D8E93] text-sm font-normal">
                  Proin mattis at orci et finibus. Proin at molestie nisi, eu
                  efficitur lorem. In vitae arcu dolor.
                </p>
              </div>
            </div>
            <div className="flex my-4 justify-start">
              <Image alt="image_not_found" src={phoneIcon} />
              <div className="pl-8">
                <p className="text-base font-medium mt-3">Support 24/7</p>
                <p className="text-[#8D8E93] text-sm font-normal">
                  Cras eros nisi, tempus lobortis purus et, euismod porta sem.
                  Proin viverra orci suscipit nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalExperiance;
