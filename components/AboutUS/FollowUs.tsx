import Image from "next/image";
import Bg from "../../public/aboutus/map.png";
import Bg1 from "../../public/aboutus/Capture 1.png";

const FollowUs = () => {
  return (
    <div className="lg:w-[85%] flex flex-col lg:flex-row gap-2 justify-center items-center mx-auto my-16 ">
      <div className="lg:w-[33%] relative ">
        <div className="flex  relative item-center justify-center items-center  ">
          <div className="lg:w-[4rem] w-[3rem] h-[2px] bg-gray-400 my-auto  "></div>
          <h1 className="text-1xl text-gray-400 mx-1 uppercase ">
            Where we are now
          </h1>
          <div className="lg:w-[4rem] w-[3rem] h-[2px] bg-gray-400 my-auto"></div>
        </div>
        <div
          className="mapouter"
          style={{
            position: "relative",
            textAlign: "right",
            width: "100%",
          }}
        >
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=millennium mall karachi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%]">
        <div className="flex  relative item-center justify-center items-center ">
          <div className="w-[4rem] h-[2px] bg-gray-400 my-auto "></div>
          <h1 className="text-1xl text-gray-400 mx-4 uppercase ">Follow us</h1>
          <div className="w-[4rem] h-[2px] bg-gray-400 my-auto"></div>
        </div>
        <Image src={Bg1} alt="Instagram" className="w-full h-44" />
      </div>
      <div className="lg:w-[33%] relative flex items-center flex-col justify-center">
        <div className="flex  relative item-center  mb-1">
          <div className="w-[4rem] h-[2px] bg-gray-400 my-auto "></div>
          <h1 className="text-1xl text-gray-400 mx-4 uppercase ">NEWSLETTER</h1>
          <div className="w-[4rem] h-[2px] bg-gray-400 my-auto"></div>
        </div>
        <div className="flex flex-col items-center justify-center mt-[70px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          />
          <button className="w-64 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:bg-yellow-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
