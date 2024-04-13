"use client";
import Image from "next/image";
import Logo from "../../assets/common/Logo.svg";
import { IoMdMenu } from "react-icons/io";
import { Menu, Switch } from "antd";
import type { GetProp, MenuProps } from "antd";

import React, { useState } from "react";
import { Drawer } from "antd";

type MenuItem = GetProp<MenuProps, "items">[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", null),
  getItem("Tours", "sub1", null, [
    getItem("International", "3", null, [
      getItem("Dubai", "7"),
      getItem("Thailand", "8"),
      getItem("Maldives", "9"),
      getItem("Indonesia", "10"),
      getItem("Baku", "11"),
      getItem("Srilanka", "12"),
      getItem("Malaysia", "13"),
      getItem("Turkey", "14"),
    ]),
    getItem("Domestics", "4", null, [
      getItem("North", "7"),
      getItem("South", "8"),
    ]),
  ]),
  getItem("Activities", "sub2", null),
  getItem("Hotels", "sub2", null),
  getItem("Car Rental", "sub2", null),
  getItem("Visa", "sub2", null),
  getItem("Packages", "sub2", null, [
    getItem("Group", "7"),
    getItem("Honeymoon", "8"),
    getItem("Private Family", "8"),
    getItem("Corporate", "8"),
  ]),
  getItem("Contact us", "sub2", null),
];

const MobileNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-white py-3 min-w-min flex justify-between lg:hidden w-[100%] items-center px-10">
        <div className="flex py-2 items-center">
          <Image src={Logo} alt="logo image" width={150} />
        </div>
        <IoMdMenu
          onClick={showDrawer}
          className="cursor-pointer text-3xl text-primary"
        />
      </div>
      <Drawer
        title="Nouvelliste"
        className="px-0"
        onClose={onClose}
        open={open}
      >
        <Menu
          className="w-full"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          theme={"light"}
          mode={"inline"}
          items={items}
        />
      </Drawer>
    </>
  );
};

export default MobileNavbar;
