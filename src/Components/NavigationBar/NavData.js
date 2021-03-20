import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiOutlineContacts />,
    cName: "nav-text",
  },
  {
    title: "Location",
    path: "/location",
    icon: <FaIcons.FaMapMarked />,
    cName: "nav-text",
  },
  {
    title: "Menu",
    path: "/menu",
    icon: <BiIcons.BiFoodMenu />,
    cName: "nav-text",
  },
];
