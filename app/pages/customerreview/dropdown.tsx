import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    label: "1",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Ticket_Dropdown: React.FC<{ selectedNum: number }> = ({
  selectedNum,
}) => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button
        style={{ width: 90, display: "flex", justifyContent: "space-between" }}
      >
        <Space>
          {selectedNum}
          <DownOutlined style={{ marginLeft: 30 }} />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);

export default Ticket_Dropdown;
