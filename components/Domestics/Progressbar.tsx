import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { Steps } from "antd";

interface TripDetails {
  day: string;
  event: string;
  description: string;
}

interface Props {
  data: TripDetails[];
}

const Progressbar: React.FC<Props> = ({ data }) => {
  // console.log("Iteneries data", data);
  return (
    <Steps
      direction="vertical"
      size="small"
      current={0}
      items={data.map((item, index) => ({
        title: (
          <span className="font-semibold text-lg">
            {item.day}:{" " + item.event}
          </span>
        ),
        status: "process",
        description: <span className="text-sm ">{item.description}</span>,
        icon:
          index === 0 || index === data.length - 1 ? (
            <SlLocationPin
              size={20}
              className="bg-sky-400 p-[3px] rounded-full"
            />
          ) : (
            <div className="w-2 h-2 mt-2 ml-2 bg-sky-500 rounded-full"></div>
          ),
      }))}
    />
  );
};

export default Progressbar;
