import React from "react";
import {
  CopyOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu as AntMenu } from "antd";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to="/">داشبورد</Link>, "dashboard", <DashboardOutlined />),
  getItem("مدیریت کاربران", "users", <UserOutlined />, [
    getItem(<Link to={"/person"}>لیست کاربران</Link>, "user_list"),
    getItem(<Link to={"/person/new"}>افزودن کاربر</Link>, "add_user"),
  ]),
  {
    type: "divider",
  },
  getItem("مدیریت مقالات", "posts", <CopyOutlined />, [
    getItem(<Link to="/post"> لیست مقالات</Link>, "post_list"),
    getItem("افزودن مقالات", "add_post"),
  ]),
];
const Menu = () => {
  // const onClick = e => {
  //   console.log('click ', e)
  // }
  return (
    <AntMenu
      // onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
export default Menu;
