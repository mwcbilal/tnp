"use client";
import Image from "next/image";
import Visa_Banner from "../../../assets/visa/Domestics 1.png";
import CountryCard from "./CountryCard";
import HeroBanner from "@/components/Common/HeroBanner";

export default function Visa() {
  return (
    <div>
      <HeroBanner UpcommingImage={Visa_Banner} Heading="Visa" Subheading="" />
      <div className="text-center mt-10 mb-20 flex justify-center items-center flex-col">
        <h2 className="font-bold px-10 text-xl lg:text-2xl xl:text-3xl">
          Visa Requirements for Pakistani Passport Holders
        </h2>
        <p className="pt-5 pb-10 px-4 md:px-10 text-md xl:text-lg">
          Visa services from Karachi Pakistan along with the documents which are
          required for the visa process.
          <br />
          We deal in all type of visa services from Karachi like tour visa,
          student visa, Business Visa etc.
        </p>
        <CountryCard />
      </div>
    </div>
  );
}
