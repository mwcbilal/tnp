import Image from "next/image";
import Visa_Banner from "../../../assets/visa/Domestics 1.png";
import CountryCard from "./CountryCard";

export default function Visa() {
  return (
    <div>
      <div className="flex items-center bg-[#C4C4C4] justify-center">
        <h2 className=" absolute font-bold text-4xl">Visa</h2>
        <Image className="w-full object-contain" src={Visa_Banner} alt="" />
      </div>
      <div className="text-center mt-10 mb-20 flex justify-center items-center flex-col">
        <h2 className=" font-bold text-xl lg:text-2xl xl:text-5xl">
          Visa Requirements for Pakistani Passport Holders
        </h2>
        <p className="pt-5 pb-10 md:px-10 text-md xl:text-2xl">
          Visa services from Karachi Pakistan along with the documents which are
          required for the visa process.<br/>We deal in all type of visa services
          from Karachi like tour visa, student visa, Business Visa etc.
        </p>
        <CountryCard />
      </div>
    </div>
  );
}
