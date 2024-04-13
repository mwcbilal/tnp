import { Modal } from "antd";
import { NextPage } from "next";
import { useState } from "react";
import VideoImage from "../../public/home/image.png";
import Image from "next/image";

interface Props {}

const NewCustomerOfferModel: NextPage<Props> = ({}) => {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  return (
    <div>
      <Modal
        title="New Customer Offer"
        open={isOfferModalOpen}
        onOk={() => setIsOfferModalOpen(false)}
        onCancel={() => setIsOfferModalOpen(false)}
        width={"90%"}
        className="w-90"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
      >
        <div className="flex bg-hero hero-bg py-10 h-96 rounded-lg relative justify-evenly items-center">
          <div className="w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 z-1"></div>
          <div className="flex flex-col items-center relative z-2">
            <div className="w-60 h-60 shadow-2xl bg-[#FBAD17] flex flex-col items-center justify-center bgow-400 rounded-full">
              <p className="text-[3rem] p-0 m-0 font-bold leading-[2.7rem] text-white">
                Flat
              </p>
              <p className="text-[3rem] font-bold p-0 m-0 leading-[2.7rem] text-white">
                50% Off
              </p>
            </div>
            <button className="px-5 mt-5 py-3 rounded-lg shadow-2xl bg-[#FBAD17]  bglow-400 text-white">
              Avail Now!
            </button>
          </div>
          <div className="w-80 relative z-2">
            <Image alt="some" className="w-full h-full" src={VideoImage} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NewCustomerOfferModel;
