import { NextPage } from "next";

interface Props {}

const Payment: NextPage<Props> = ({}) => {
  return (
    <div className="w-11/12 md:w-[700px] px-12 py-14 mt-4 bg-white rounded-lg shadow-2xl">
      <div className=" bg-[#00ADEE] text-white w-32 py-1 px-2 rounded-md -mt-8 absolute ml-0 md:-ml-[3rem] lg:-ml-28">
        Total Charges
      </div>
      <div className=" flex flex-col text-center justify-center">
        <p className="font-semibold text-lg mb-4">
          Thank you Muhammad for create your own trip!
        </p>
        <p className=" font-bold text-xl">Your Own Trip Charges 34,000 PKR</p>
      </div>
    </div>
  );
};

export default Payment;
