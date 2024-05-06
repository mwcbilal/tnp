import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const items = [
  {
    key: "turkey",
    label: "Pamukkale",
  },
  {
    key: "south",
    label: "Hunza",
  },
  {
    key: "north",
    label: "Kashmir",
  },
  {
    key: "north",
    label: "Balakot",
  },
  {
    key: "baku",
    label: "Bilgah Beach",
  },
];

const MyDropdown = ({}) => {
  const onclick = (e) => {
    console.log("i m clicked", e);
  };
  return (
    <Dropdown
      overlay={
        <Menu onClick={onclick}>
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      }>
      <a onClick={(e) => e.preventDefault()}>
        <Space className="py-2 px-4 flex justify-between border rounded-md w-11/12 md:w-[275px]">
          {items[0].label}
          <IoMdArrowDropdownCircle style={{ color: "#FBAD17" }} />
        </Space>
      </a>
    </Dropdown>
  );
};

export default MyDropdown;
