import { countryDetailsArray } from "@/assets/strings/visaScreenData";
import Image from "next/image";
import WhatsApp_Img from "../../../assets/visa/Whatsapp.svg";
import Rating from "../customerreview/rating";
import "./style.css";

export default function CountryCard() {
  return (
    <div className="flex items-center relative justify-center gap-x-2 gap-y-8 flex-wrap max-w-[1440px]">
      {countryDetailsArray.map((e, i) => {
        return (
          <div className="relative overflow-hidden" key={i}>
            <div className="relative transform hover:scale-[140%] transition-transform duration-300 ease-in-out">
              <Image src={e.image} alt="image not found" />
            </div>

            <div className=" bg-primary text-white w-16 top-4 px-2 rounded-md ml-4 absolute">
              Visa
            </div>
            <div className="bg-white rounded-md shadow-lg py-4 relative -top-2">
              <div>
                <h2 className=" text-left px-10 font-bold text-xl">{e.name}</h2>
                <p className=" mr-12 p-2">
                  <Rating fontSize={15} /> {e.reviewCount + " " + "Review"}
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <button className="bg-primary border-[1px] hover:bg-white hover_affect hover:text-black text-white py-1 px-5 rounded-md transition duration-300 ease-in-out">
                  Download
                </button>

                <button className="bg-primary hover:text-black hover:bg-white hover_affect text-white py-1 px-5 rounded-md">
                  Share
                </button>
                <Image
                  className="cursor-pointer"
                  src={WhatsApp_Img}
                  alt="whatsapp"
                  onClick={() =>
                    window.open(
                      "//api.whatsapp.com/send?phone=+9290078601&text=Hey can I get information on this package??"
                    )
                  }
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
