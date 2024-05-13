import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const MyDropdown = ({ items, selected, change, identifier }) => {

  const onClick = (e) => {
    const index = items.findIndex(item => item.key.toString() === e.key);
    change({
      ...selected,
      [identifier]: items[index].key
    })
    console.log("clicked", items[index].key);
  };

  if (!Array.isArray(items)) {
    console.error("Items prop must be an array.");
    return null;
  }
  
  return (
    <Dropdown
      menu={{items, onClick}}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="py-2 px-4 flex justify-between border rounded-md w-11/12 md:w-[275px]">
          {items.length > 0 ? selected[identifier] : "Select"}
          <IoMdArrowDropdownCircle style={{ color: "#FBAD17" }} />
        </Space>
      </a>
    </Dropdown>
  );
};

export default MyDropdown;
