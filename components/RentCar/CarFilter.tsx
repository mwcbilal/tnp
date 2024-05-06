import { NextPage } from "next";
import Image from "next/image";
import CarTypeButtons from "./CarTypeButtons";
import { useState } from "react";
import SedanImage from "../../assets/carrent/Group.svg";
import SedanImage_hover from "../../assets/carrent/download (2).svg";
import StandardImage_hover from "../../assets/carrent/Group5.svg";
import StandardImage from "../../assets/carrent/standard_hover.svg";
import LuxuryImage from "../../assets/carrent/Group (1).svg";
import LuxuryImage_hover from "../../assets/carrent/download.svg";
import SUVImage from "../../assets/carrent/Group (2).svg";
import SUVImage_hover from "../../assets/carrent/download (1).svg";
import HiaceImage from "../../assets/carrent/Car2.png";
import HiaceImage_hover from "../../assets/carrent/Car5.png";
import { Button, Form, Input, Radio, Select, TimePicker } from "antd";
import { DatePicker, Space } from "antd";

import type { DatePickerProps } from "antd";
import { AiFillAlert } from "react-icons/ai";
import { MdArrowDropDownCircle } from "react-icons/md";
import SvgImage from "./SvgImage";
type LayoutType = Parameters<typeof Form>[0]["layout"];

interface Props {}

const CarFilter: NextPage<Props> = ({}) => {
  const [selectedCarType, setselectedCarType] = useState("Sedan");
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="bg-red-00 flex flex-col justify-center items-center">
      <div className="bg-[#EDEFF5] flex flex-wrap items-center justify-center">
        <SvgImage hoverImage={SedanImage_hover} normalImage={SedanImage} />
        <SvgImage
          hoverImage={StandardImage_hover}
          normalImage={StandardImage}
        />
        <SvgImage hoverImage={LuxuryImage_hover} normalImage={LuxuryImage} />
        <SvgImage hoverImage={SUVImage_hover} normalImage={SUVImage} />
        <SvgImage hoverImage={HiaceImage_hover} normalImage={HiaceImage} />
      </div>
      <div className="flex lg:max-w-[70%] bg-lue-200 flex-wrap w-full items-center justify-evenly">
        <Form
          layout={"vertical"}
          initialValues={{ layout: "vertical" }}
          className="mx-2 w-[90%] md:w-[23%]">
          <Form.Item label="Where to pick up" className="w-full">
            <Input
              className=" w-full rounded-lg border-0"
              placeholder="Enter your city or address"
            />
          </Form.Item>
        </Form>
        <Form
          layout={"vertical"}
          initialValues={{ layout: "vertical" }}
          className="mx-2 w-[90%] md:w-[23%]">
          <Form.Item label="Where to Drop off" className="w-full">
            <Input
              className=" w-full rounded-lg border-0"
              placeholder="Enter your city or address"
            />
          </Form.Item>
        </Form>
        <Form
          layout={"vertical"}
          initialValues={{ layout: "vertical" }}
          className="mx-2 w-[90%] md:w-[23%]">
          <Form.Item label="Pick-Up Date" className="w-full">
            <DatePicker
              className=" w-full rounded-lg border-0 py-2"
              onChange={onChange}
              placeholder="Select date"
            />
          </Form.Item>
        </Form>
        <Form
          layout={"vertical"}
          initialValues={{ layout: "vertical" }}
          className="mx-2 w-[90%] md:w-[23%]">
          <Form.Item label="Pick-Up Time" className="w-full">
            <TimePicker
              className=" w-full rounded-lg border-0 py-2"
              placeholder="Select Time"
              onChange={onChange}
            />
          </Form.Item>
        </Form>
        <Form
          layout={"vertical"}
          initialValues={{ layout: "vertical" }}
          className="mx-2 w-[90%] md:w-[23%]">
          <Form.Item label="Drop-off Date" className="w-full">
            <DatePicker
              className=" w-full rounded-lg border-0 py-2"
              onChange={onChange}
              placeholder="Select date"
            />
          </Form.Item>
        </Form>
        <Form
          layout={"vertical"}
          initialValues={{ layout: "vertical" }}
          className="mx-2 w-[90%] md:w-[23%]">
          <Form.Item label="Model" className="w-full">
            <Select
              className=" w-full rounded-lg border-0 h-10"
              defaultValue="lucy"
              suffixIcon={
                <MdArrowDropDownCircle className="text-[#FBAD17] w-5 h-5" />
              }
              onChange={(val: any) => console.log(val)}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>
        </Form>
        <Form
          layout={"vertical"}
          initialValues={{ layout: "vertical" }}
          className="mx-2 w-[90%] md:w-[23%]">
          <Form.Item label="Vehicle Type" className="w-full">
            <Select
              suffixIcon={
                <MdArrowDropDownCircle className="text-[#FBAD17] w-5 h-5" />
              }
              className=" w-full rounded-lg border-0 h-10"
              defaultValue="lucy"
              onChange={(val: any) => console.log(val)}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CarFilter;
