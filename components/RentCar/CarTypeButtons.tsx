import { carTypes } from "@/assets/strings/RentCarData";
import { Button } from "antd";
import { NextPage } from "next";
import Image from "next/legacy/image";

interface Props {
  selectedCarType: string;
  setSelectedCarType: (carType: string) => void;
}

const CarTypeButtons: NextPage<Props> = ({ selectedCarType, setSelectedCarType }) => {
  return (
    <div className="flex justify-center py-4">
      <div className="w-[750px] flex justify-between">
        {carTypes.map((e, i) => {
          return (
            <Button
              icon={<IconComponent iconImage={e.iconImage} />}
              key={"cartypebtn-" + i}
              className={`h-12 w-40 text-lg ${
                selectedCarType === e.name ? `bg-[#4096FF] text-white` : "bg-white text-black"
              } flex items-center `}
              type="primary"
              onClick={()=> setSelectedCarType(e.name)}
            >
              {e.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

const IconComponent: NextPage<{ iconImage: any }> = ({ iconImage }) => {
  return (
    <div className="mr-1">
      <Image height={30} width={30} src={iconImage} />
    </div>
  );
};

export default CarTypeButtons;
