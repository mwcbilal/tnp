import Bg from '../../public/aboutus/booknow.png';
import Bg1 from '../../public/aboutus/img2.png';
import { Yesteryear } from "next/font/google";
import InstaCard from "./InstaPostCard";
const inter = Yesteryear({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal']
})
const InstagramPost = () => {
    return (
        <div className="mt-16 lg:w-[80%] flex justify-center items-center flex-col mx-auto   " >
            <div className="flex justify-center text-center flex-col mx-auto ">
                <h1 className={`${inter.className} text-golden text-[2rem] text-center `}>
                    Explore the world

                </h1>
                <h1 className="text-black lg:text-4xl my-1 font-bold text-3xl text-center  ">
                    Recent Instagram Posts
                </h1>

            </div>

            <div className="   flex  justify-center items-center gap-4 mx-auto my-3 flex-col lg:flex-row">
                <InstaCard src={Bg} />
                <InstaCard src={Bg} />
                <InstaCard src={Bg} />
                <InstaCard src={Bg} />
                <InstaCard src={Bg} />
            </div>

        </div>
    );
};
export default InstagramPost;