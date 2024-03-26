import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import messageBtn from "../../assets/common/messageBtn.svg"

interface Props {}

const OurNewsLetter: NextPage<Props> = ({}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="min-w-72 max-w-80">
      <p className="text-xl font-semibold mb-8">Our Newsletter</p>

      <p className="mb-5">
        <a href="#">
          Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        </a>
      </p>

      <div className="flex justify-between border-gray border rounded-xl">
        <input
          className="p-4 w-4/5 rounded-xl border-0 outline-none"
          type="text"
          id="my-text-field"
          value={value}
          onChange={handleChange}
          placeholder="Enter Mail"
        />
        <Image alt="image_not_found" src={messageBtn} />
      </div>

      <div className="lg:hidden mt-16 mb-16 bg-gray-300 h-[2px] w-[300px]"></div>
    </div>
  );
};

export default OurNewsLetter;
