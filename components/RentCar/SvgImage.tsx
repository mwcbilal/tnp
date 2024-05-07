import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  hoverImage: string | StaticImport;
  normalImage: string | StaticImport;
  isSelected : boolean
}

const SvgImage: NextPage<Props> = ({ hoverImage, normalImage, isSelected }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <Image
        src={hovered || isSelected ? hoverImage : normalImage}
        width={200}
        alt="sedan option"
        className="mx-10 car_bg cursor-pointer transition duration-300 ease-in-out transform"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </div>
  );
};

export default SvgImage;
