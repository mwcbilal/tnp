import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Option 1",
  },
  {
    key: "2",
    label: "Option 2",
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: "Option 3",
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "Option 4",
  },
];

const MyDropdown: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space className="py-2 px-4 flex justify-between border rounded-md w-[265px]">
        Hunza
        <IoMdArrowDropdownCircle style={{ color: "#FBAD17" }} />
      </Space>
    </a>
  </Dropdown>
);

export default MyDropdown;
