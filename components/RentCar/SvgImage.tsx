import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  hoverImage: string | StaticImport;
  normalImage: string | StaticImport;
}

const SvgImage: NextPage<Props> = ({ hoverImage, normalImage }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <Image
        src={hovered ? hoverImage : normalImage}
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
