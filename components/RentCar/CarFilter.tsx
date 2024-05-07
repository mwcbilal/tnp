import { NextPage } from "next";
import { useState } from "react";
import SedanImage from "../../assets/carrent/Group.svg";
import SedanImage_hover from "../../assets/carrent/download (2).svg";
import StandardImage_hover from "../../assets/carrent/Group5.svg";
import StandardImage from "../../assets/carrent/standard_hover.svg";
import LuxuryImage from "../../assets/carrent/Group (1).svg";
import LuxuryImage_hover from "../../assets/carrent/download.svg";
import SUVImage from "../../assets/carrent/Group (2).svg";
import SUVImage_hover from "../../assets/carrent/download (1).svg";
import { Form, Input, Select, TimePicker } from "antd";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { MdArrowDropDownCircle } from "react-icons/md";
import SvgImage from "./SvgImage";

interface Props {
    carFilters: any,
    setCarFilters: any
}

const CarFilter: NextPage<Props> = ({ carFilters, setCarFilters }) => {
    const onChange: DatePickerProps["onChange"] = (date, dateString) => {
        console.log(date, dateString);
    };
    console.log(carFilters)
    const handleFiltersChange = (name: string, value: any) => {
        setCarFilters({ ...carFilters, [name]: value })
    }

    return (
        <div className="bg-red-00 flex flex-col justify-center items-center">
            <div className="bg-[#EDEFF5] flex flex-wrap items-center justify-center">
                <div onClick={() => handleFiltersChange("car_class", 2)} className={`flex justify-enter text- hover:text-golden ${carFilters.car_class === 2 ? "text-golden" : "text-primary"} flex-col items-center`}>
                    <SvgImage isSelected={carFilters.car_class === 2} hoverImage={SedanImage_hover} normalImage={SedanImage} />
                    <p className="text- text-xl ">
                        Budget
                    </p>
                </div>
                <div onClick={() => handleFiltersChange("car_class", 1)} className={`flex justify-enter flex-col text- hover:text-golden items-center ${carFilters.car_class === 1 ? "text-golden" : "text-primary"}`}>
                    <SvgImage
                        isSelected={carFilters.car_class === 1}
                        hoverImage={StandardImage_hover}
                        normalImage={StandardImage}
                    />
                    <p className="text- text-xl ">
                        Standard
                    </p>
                </div>
                <div onClick={() => handleFiltersChange("car_class", 3)} className={`flex justify-enter text- hover:text-golden flex-col items-center ${carFilters.car_class === 3 ? "text-golden" : "text-primary"}`}>
                    <SvgImage isSelected={carFilters.car_class === 3} hoverImage={LuxuryImage_hover} normalImage={LuxuryImage} />
                    <p className="text-pi text-xl ">
                        Luxury
                    </p>
                </div>
                <div onClick={() => handleFiltersChange("car_class", 4)} className={`flex justify-enter text-  hover:text-golden flex-col items-center ${carFilters.car_class === 4 ? "text-golden" : "text-primary"}`}>
                    <SvgImage hoverImage={SUVImage_hover} isSelected={carFilters.car_class === 4} normalImage={SUVImage} />
                    <p className="text- text-xl ">
                        SUV
                    </p>
                </div>
                <div onClick={() => handleFiltersChange("car_class", 5)} className={`flex text- hover:text-golden justify-enter flex-col items-center ${carFilters.car_class === 5 ? "text-golden" : "text-primary"}`}>
                    {/* <SvgImage hoverImage={HiaceImage_hover} normalImage={HiaceImage} isSelected={carFilters.car_class === 5} /> */}
                    <p className=" text-xl  ">
                        VANs & Coasters
                    </p>
                </div>
            </div>
            <div className="flex lg:max-w-[70%] bg-lue-200 flex-wrap w-full items-center justify-evenly">
                <Form
                    layout={"vertical"}
                    initialValues={{ layout: "vertical" }}
                    className="mx-2 w-[90%] md:w-[23%]"
                >
                    <Form.Item label="Where to pick up" className="w-full">
                        <Select
                            placeholder="Enter your city or Address"
                            className="w-full rounded-lg border-0"
                            onChange={(val: string) => handleFiltersChange("pickup_location", val)}
                            options={[
                                { value: 'Karachi', label: 'karachi' },
                                { value: 'Islamabad', label: 'islamabad' },
                                { value: 'Lahore', label: 'lahore' },
                                { value: 'Hyderabad', label: 'hyderabad' }
                            ]}
                        />
                    </Form.Item>
                </Form>
                <Form
                    layout={"vertical"}
                    initialValues={{ layout: "vertical" }}
                    className="mx-2 w-[90%] md:w-[23%]"
                >
                    <Form.Item label="Where to Drop off" className="w-full">
                        <Select
                            placeholder="Enter your city or Address"
                            onChange={(val: string) => handleFiltersChange("dropoff_location", val)}
                            className="w-full rounded-lg border-0"
                            options={[
                                { value: 'Karachi', label: 'karachi' },
                                { value: 'Islamabad', label: 'islamabad' },
                                { value: 'Lahore', label: 'lahore' },
                                { value: 'Hyderabad', label: 'hyderabad' }
                            ]}
                        />
                    </Form.Item>
                </Form>
                <Form
                    layout={"vertical"}
                    initialValues={{ layout: "vertical" }}
                    className="mx-2 w-[90%] md:w-[23%]"
                >
                    <Form.Item label="Pick-Up Date" className="w-full">
                        <DatePicker
                            className=" w-full rounded-lg border-0 py-2"
                            onChange={(_, date) => handleFiltersChange("pickup_date", date)}
                            placeholder="Select date"
                        />
                    </Form.Item>
                </Form>
                <Form
                    layout={"vertical"}
                    initialValues={{ layout: "vertical" }}
                    className="mx-2 w-[90%] md:w-[23%]"
                >
                    <Form.Item label="Pick-Up Time" className="w-full">
                        <TimePicker
                            className=" w-full rounded-lg border-0 py-2"
                            onChange={(_, time) => handleFiltersChange("pickup_time", time)}
                            placeholder="Select Time"
                        />
                    </Form.Item>
                </Form>
                <Form
                    layout={"vertical"}
                    initialValues={{ layout: "vertical" }}
                    className="mx-2 w-[90%] md:w-[23%]"
                >
                    <Form.Item label="Drop-off Date" className="w-full">
                        <DatePicker
                            className=" w-full rounded-lg border-0 py-2"
                            onChange={(_, date) => handleFiltersChange("dropoff_date", date)}
                            placeholder="Select date"
                        />
                    </Form.Item>
                </Form>
                {/*
        <Form
          layout={"vertical"}
          initialValues={{ layout: "vertical" }}
          className="mx-2 w-[90%] md:w-[23%]"
        >
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
          className="mx-2 w-[90%] md:w-[23%]"
        >
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
         */}
            </div>
        </div>
    );
};

export default CarFilter;
