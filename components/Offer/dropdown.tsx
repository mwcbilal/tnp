import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const MyDropdown = ({ items }) => {
  const onClick = (e) => {
    // console.log("i m clicked", e);
  };

  // Check if items is an array before mapping
  if (!Array.isArray(items)) {
    console.error("Items prop must be an array.");
    return null;
  }

  return (
    <Dropdown
      overlay={
        <Menu onClick={onClick}>
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      }>
      <a onClick={(e) => e.preventDefault()}>
        <Space className="py-2 px-4 flex justify-between border rounded-md w-11/12 md:w-[275px]">
          {items.length > 0 ? items[0].label : "Select"}
          <IoMdArrowDropdownCircle style={{ color: "#FBAD17" }} />
        </Space>
      </a>
    </Dropdown>
  );
};

export default MyDropdown;
