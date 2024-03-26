import { Yesteryear } from "next/font/google";
import AboutUsCard from "./AboutusCard";
const inter = Yesteryear({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal']
})
const ExploreTheWorld = () => {
  return (
    <>
 
    <div className="lg:w-[80%] xl:w-[75%] flex flex-col lg:flex-row gap-4 justify-center items-center mx-auto" >
      <div className="w-full lg:w-[50%] ">
      <p className={`${inter.className} text-primary text-[2rem] text-center lg:text-left`}>
                            Explore the world
                        </p>
                        <h1 className="text-black lg:text-4xl my-1 font-bold text-3xl text-center lg:text-left ">
                            Great Opportunity For
                        </h1>
                        <h1 className="text-black lg:text-4xl my-1 font-bold text-3xl text-center  lg:text-left">

                            <span className={`${inter.className} text-gray-400 text-[3rem]`}> adventure </span>
                            & Travels
                        </h1>
         </div>
      <div className="w-[90%] lg:w-[50%] text-center lg:text-left "> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, doloremque facere quod voluptatem quos in ea labore dolor, id eveniet, quaerat ipsam dicta. Ut natus nulla similique odit nostrum voluptates?</div>
    </div>

    <div className=" lg:w-[80%]  flex  justify-center items-center gap-2 mx-auto my-3 flex-col lg:flex-row ">
        <AboutUsCard    heading="Trusted Travel Guide" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit."/> 
        <AboutUsCard    heading="Trusted Travel Guide" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit."/>
        <AboutUsCard    heading="Trusted Travel Guide" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit."/>
        <AboutUsCard    heading="Trusted Travel Guide" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit."/>
    </div>

    </>

  );
}
export default ExploreTheWorld;