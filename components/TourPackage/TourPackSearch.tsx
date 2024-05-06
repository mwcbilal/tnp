"use client";
import { FaMapPin } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { IoMdTimer, IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { RiEqualizerLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Dropdown, Menu, Space, type MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useParams } from "next/navigation";

const items: MenuProps['items'] = [
  {
    key: '1',
    label: "1st menu item",
  },
  {
    key: '2',
    label: "2nd menu item",
  },
  {
    key: '3',
    label: "3rd menu item",
  },
  {
    key: '4',
    label: "4rth menu item",
  },
];

const locationItems: MenuProps['items'] = [
  {
    key: '0',
    label: "Select Location",
  },
  {
    key: 'karachi',
    label: "Karachi, Pakistan",
  },
  {
    key: 'lahor',
    label: "Lahore, Pakistan",
  },
  {
    key: 'islamabad',
    label: "Islamabad, Pakistan",
  },
  {
    key: 'balakot',
    label: "Balakot, Pakistan",
  },
  {
    key: 'kairan',
    label: "Kairan, Pakistan",
  },
];

const personItems: MenuProps['items'] = [
  {
    key: '3',
    label: "1 to 3",
  },
  {
    key: '6',
    label: "4 to 6",
  },
  {
    key: '9',
    label: "7 to 9",
  },
  {
    key: '12',
    label: "10 to 12",
  },
];

const typesItems: MenuProps['items'] = [
  {
    key: "0",
    label: "Booking type"
  },
  {
    key: 'group',
    label: "Group",
  },
  {
    key: 'honeymoon',
    label: "Honeymoon",
  },
  {
    key: 'private',
    label: "Private",
  },
  {
    key: 'corporate',
    label: "Corporate",
  },
];

const TourpackSearch = ({color="#00ADEE", color2="#00ADEE"}) => {
  const [selectedPerson, setSelectedPerson] = useState(personItems[0]["label"]);
  const [selectedLocation, setSelectLocation] = useState(locationItems[0]["label"]);
  const [selectedType, setSelectedType] = useState(typesItems[0]["label"]);

  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log("Item clicked", key);
  };

  const { category, id } = useParams();
  console.log("paramssss founddd", { category, id });


  const bgClass = (id && id[0] === 'honeymoon') || (category && category[0] === 'honeymoon') 
  ? "bg-[#8b2424]" 
  : "bg-[#00ADEE]";


  const textColor = (id && id[0] === 'honeymoon') || (category && category[0] === 'honeymoon') 
  ? "text-[#8b2424]" 
  : "text-[#00ADEE]";
  
  const onClickLocationDropdown: MenuProps['onClick'] = ({ key }) => {
    // console.log("Item clicked", key);
    setSelectLocation(locationItems.filter(e => e.key === key)[0]["label"]);
  };

  const onClickTypeDropdown: MenuProps['onClick'] = ({ key }) => {
    console.log("Item clicked", key);
    setSelectedType(typesItems.filter(e => e.key === key)[0]["label"])
  };

  const onClickPersonDropdown: MenuProps['onClick'] = ({ key }) => {
    console.log("Item clicked", key);
    setSelectedPerson(personItems.filter(e => e.key === key)[0]["label"])
  };

  return (
    <div className="flex my-3 flex-col md:flex-row md:mx-5 bg-white text-black flex-wrap rounded px-4 py-4" style={{ boxShadow: "-1px -1px 20px -6px #ccc" }}>
      <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
        <div className="flex items-center">
          <div className="me-2">
            <FaMapPin className={`${textColor} text-xl`}/>
          </div>
          <Dropdown
            menu={{ items: locationItems, onClick: onClickLocationDropdown, defaultValue: selectedLocation }}         
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div>
                  <p>Destination</p>
                  <p className="text-xs text-gray-500">
                    {selectedLocation}
                  </p>
                </div>
                <DownOutlined className={`${textColor} text-xl`} />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

      <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
        <div className="flex items-center">
          <div className="me-2">
            <GiMountainClimbing className={` ${textColor}  text-xl`} />
          </div>
          <Dropdown menu={{ items: typesItems, onClick: onClickTypeDropdown }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className="w-[7rem] flex justify-between">
                <div>
                  <p>Type</p>
                  <p className="text-xs text-gray-500">{selectedType}</p>
                </div>
                <DownOutlined className={`${textColor} text-xl`}/>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>

      <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

      <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
        <div className="flex items-center">
          <div className="me-2">
            <IoMdTimer className={`${textColor}  text-xl`} />
          </div>
          <Dropdown menu={{ items, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div>
                  <p>Date From</p>
                  <p className="text-xs text-gray-500">Date Start From</p>
                </div>
                <DownOutlined className={`${textColor} text-xl`} />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>

      <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

      <div className="flex mx-2 w-[15rem] md:w-auto md:justify-start justify-between  items-center">
        <div className="flex items-center">
          <div className="me-2">
            <RxAvatar className={`${textColor}  text-xl`} />
          </div>
          <Dropdown menu={{ items: personItems, onClick: onClickPersonDropdown }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div>
                  <p>Persons</p>
                  <p className="text-xs text-gray-500">{selectedPerson}</p>
                </div>
                <DownOutlined className={`${textColor} text-xl`}/>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>

      <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>
      <div className="flex mx-2 justify-between items-center">
        <div className="me-2">
          <RiEqualizerLine className={`text-[${color} text-xl`} />
        </div>
        <div className={` ${bgClass} flex items-center md:w-auto -full text-center cursor-pointer text-white rounded-md px-5 py-3 ml-4`}>
          <CiSearch className="mr-2" size={20} />
          Search
        </div>
      </div>
    </div>
  );
};
export default TourpackSearch;
