import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import DLeft from "../../public/home/dleft.png"
import DDown from "../../public/home/Frame.png"
import Quotation from "../../public/home/quotation.png"

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: 'black',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'white',
};

const TestimonialCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} dots={{ className: '' }} >
      <div >
        <div className='flex md:flex-row flex-col w-full justify-center items-center' >
      
      <div className="relative w-full md:w-[25rem] my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">
            <Image
              src={DLeft}
              className="absolute left-0 top-10 h-[8rem]"
              alt="dleft"
            />
            <Image
              src={Quotation}
              className="absolute right-10 top-10 "
              alt="dleft"
            />
            <Image
              src={DDown}
              alt="dleft"
              className="absolute bottom-0 right-10 "
            />

            <div className="flex items-center my-3">
              <div className="w-10 h-10 rounded-full  bg-gray-300"></div>
              <div className="ms-5 text-black">Williamson</div>
            </div>

            <div className="text-black text-xs my-3">
              The most advanced revenue than this. Iwill refer everyone I like
              Level more and more each day because it makes my easier. It really
              saves me time and effort. Level is exactly business has been
              lacking.
            </div>
          </div>
          <div className="relative w-full md:w-[25rem] my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">
            <Image
              src={DLeft}
              className="absolute left-0 top-10 h-[8rem]"
              alt="dleft"
            />
            <Image
              src={Quotation}
              className="absolute right-10 top-10 "
              alt="dleft"
            />
            <Image
              src={DDown}
              alt="dleft"
              className="absolute bottom-0 right-10 "
            />

            <div className="flex items-center my-3">
              <div className="w-10 h-10 rounded-full  bg-gray-300"></div>
              <div className="ms-5 text-black">Williamson</div>
            </div>

            <div className="text-black text-xs my-3">
              The most advanced revenue than this. Iwill refer everyone I like
              Level more and more each day because it makes my easier. It really
              saves me time and effort. Level is exactly business has been
              lacking.
            </div>
          </div>
          </div>
         

        
     
       
      </div>
      <div>
      <div className='flex md:flex-row flex-col w-full justify-center items-center'>
      
      <div className="relative w-full md:w-[25rem] my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">
            <Image
              src={DLeft}
              className="absolute left-0 top-10 h-[8rem]"
              alt="dleft"
            />
            <Image
              src={Quotation}
              className="absolute right-10 top-10 "
              alt="dleft"
            />
            <Image
              src={DDown}
              alt="dleft"
              className="absolute bottom-0 right-10 "
            />

            <div className="flex items-center my-3">
              <div className="w-10 h-10 rounded-full  bg-gray-300"></div>
              <div className="ms-5 text-black">Williamson</div>
            </div>

            <div className="text-black text-xs my-3">
              The most advanced revenue than this. Iwill refer everyone I like
              Level more and more each day because it makes my easier. It really
              saves me time and effort. Level is exactly business has been
              lacking.
            </div>
          </div>
          <div className="relative w-full md:w-[25rem] my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">
            <Image
              src={DLeft}
              className="absolute left-0 top-10 h-[8rem]"
              alt="dleft"
            />
            <Image
              src={Quotation}
              className="absolute right-10 top-10 "
              alt="dleft"
            />
            <Image
              src={DDown}
              alt="dleft"
              className="absolute bottom-0 right-10 "
            />

            <div className="flex items-center my-3">
              <div className="w-10 h-10 rounded-full  bg-gray-300"></div>
              <div className="ms-5 text-black">Williamson</div>
            </div>

            <div className="text-black text-xs my-3">
              The most advanced revenue than this. Iwill refer everyone I like
              Level more and more each day because it makes my easier. It really
              saves me time and effort. Level is exactly business has been
              lacking.
            </div>
          </div>
          </div>
      </div>
      <div>
      <div className='flex md:flex-row flex-col w-full justify-center items-center'>
      
      <div className="relative w-full md:w-[25rem] my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">
            <Image
              src={DLeft}
              className="absolute left-0 top-10 h-[8rem]"
              alt="dleft"
            />
            <Image
              src={Quotation}
              className="absolute right-10 top-10 "
              alt="dleft"
            />
            <Image
              src={DDown}
              alt="dleft"
              className="absolute bottom-0 right-10 "
            />

            <div className="flex items-center my-3">
              <div className="w-10 h-10 rounded-full  bg-gray-300"></div>
              <div className="ms-5 text-black">Williamson</div>
            </div>

            <div className="text-black text-xs my-3">
              The most advanced revenue than this. Iwill refer everyone I like
              Level more and more each day because it makes my easier. It really
              saves me time and effort. Level is exactly business has been
              lacking.
            </div>
          </div>
          <div className="relative w-full md:w-[25rem] my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">
            <Image
              src={DLeft}
              className="absolute left-0 top-10 h-[8rem]"
              alt="dleft"
            />
            <Image
              src={Quotation}
              className="absolute right-10 top-10 "
              alt="dleft"
            />
            <Image
              src={DDown}
              alt="dleft"
              className="absolute bottom-0 right-10 "
            />

            <div className="flex items-center my-3">
              <div className="w-10 h-10 rounded-full  bg-gray-300"></div>
              <div className="ms-5 text-black">Williamson</div>
            </div>

            <div className="text-black text-xs my-3">
              The most advanced revenue than this. Iwill refer everyone I like
              Level more and more each day because it makes my easier. It really
              saves me time and effort. Level is exactly business has been
              lacking.
            </div>
          </div>
          </div>
      </div>
      <div>
      <div className='flex md:flex-row flex-col w-full justify-center items-center'>
      
      <div className="relative w-full md:w-[25rem] my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">
            <Image
              src={DLeft}
              className="absolute left-0 top-10 h-[8rem]"
              alt="dleft"
            />
            <Image
              src={Quotation}
              className="absolute right-10 top-10 "
              alt="dleft"
            />
            <Image
              src={DDown}
              alt="dleft"
              className="absolute bottom-0 right-10 "
            />

            <div className="flex items-center my-3">
              <div className="w-10 h-10 rounded-full  bg-gray-300"></div>
              <div className="ms-5 text-black">Williamson</div>
            </div>

            <div className="text-black text-xs my-3">
              The most advanced revenue than this. Iwill refer everyone I like
              Level more and more each day because it makes my easier. It really
              saves me time and effort. Level is exactly business has been
              lacking.
            </div>
          </div>
          <div className="relative w-full md:w-[25rem] my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">
            <Image
              src={DLeft}
              className="absolute left-0 top-10 h-[8rem]"
              alt="dleft"
            />
            <Image
              src={Quotation}
              className="absolute right-10 top-10 "
              alt="dleft"
            />
            <Image
              src={DDown}
              alt="dleft"
              className="absolute bottom-0 right-10 "
            />

            <div className="flex items-center my-3">
              <div className="w-10 h-10 rounded-full  bg-gray-300"></div>
              <div className="ms-5 text-black">Williamson</div>
            </div>

            <div className="text-black text-xs my-3">
              The most advanced revenue than this. Iwill refer everyone I like
              Level more and more each day because it makes my easier. It really
              saves me time and effort. Level is exactly business has been
              lacking.
            </div>
          </div>
          </div>
      </div>
    </Carousel>
  );
};

export default  TestimonialCarousel;
