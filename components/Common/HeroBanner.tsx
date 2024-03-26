import { NextPage } from "next";
import Image from "next/legacy/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  UpcommingImage: string | StaticImport;
  Heading: string;
  Subheading: string;
}

const HeroBanner: NextPage<Props> = ({
  UpcommingImage,
  Heading,
  Subheading,
}) => {
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

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-left md:text-center flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl w-3/4 font-bold mb-6">{Heading}</h1>
          {Subheading && (
            <p className="text-white text-lg">North Tour Packages</p>
          )}
        </span>
      </div>
    </div>
  );
};

export default HeroBanner;
