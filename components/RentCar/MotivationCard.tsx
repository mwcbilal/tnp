import { NextPage } from "next";
import Image from "next/image";

interface Props {
  Title: string;
  Description: string;
  IconImage: any;
}

const MotivationCard: NextPage<Props> = ({ Title, Description, IconImage }) => {
  if (Title === "Right") {
    return (
      <Image className="hidden lg:flex" src={IconImage} alt="image_not_found" />
    );
  } else if (Title === "Left") {
    return (
      <Image className="hidden lg:flex" src={IconImage} alt="image_not_found" />
    );
  }

  return (
    <div
      className="p-8 my-8 mx-3 w-72 sm:w-80 flex flex-col items-center rounded-xl"
      style={{ boxShadow: "-1px -1px 20px -6px #ccc" }}
    >
      <Image className="mb-4" src={IconImage} alt="image_not_found" />
      <p className="my-4 text-[16px] font-medium">{Title}</p>
      <p className="text-center text-sm text-[#8D8E93]">{Description}</p>
    </div>
  );
};

export default MotivationCard;
