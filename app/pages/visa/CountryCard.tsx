import { countryDetailsArray } from "@/assets/strings/visaScreenData";
import Image from "next/image";
import WhatsApp_Img from "../../../assets/visa/Whatsapp.svg";
import Rating from "../customerreview/rating";

export default function CountryCard() {
  return (
    <div className="flex items-center justify-center gap-x-2 gap-y-8 flex-wrap max-w-[1440px]">
      {countryDetailsArray.map((e,i) => {
        return (
          <div key={i}>
            <div>
              <Image src={e.image} alt="image not found" />
            </div>
            <div className="bg-white rounded-md py-4 relative -top-2">
              <div>
                <h2 className=" text-left px-10 font-bold text-xl">{e.name}</h2>
                <p className="mr-6 p-2">
                  <Rating /> {e.reviewCount + " " + "Review"}
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <button className=" bg-primary text-white py-1 px-5 rounded-md">
                  Download
                </button>
                <button className=" bg-primary text-white py-1 px-5 rounded-md">
                  Share
                </button>
                <Image src={WhatsApp_Img} alt="whatsapp" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
