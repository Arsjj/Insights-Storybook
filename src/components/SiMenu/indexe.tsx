import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { css } from "@emotion/react";
import Plus from "../../svg/Plus";

const styles = css`
  .ant-menu-item {
    border-radius: 8px 0px 0px 8px;
    &:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected) {
      background-color: #f0f5ff; //blue1
    }
  }

  .ant-menu-submenu-title {
    &:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected) {
      background-color: #f0f5ff; //blue1
    }
    border-radius: 8px 0px 0px 8px;
  }

  /* .ant-menu-submenu.ant-menu-submenu-open {
    div {
      &::before {
        position: absolute;
        right: 0;
        width: 10px;
        height: 100%;
        background: #2751f4;
        border-radius: 8px 0px 0px 8px;
        content: "";
      }
    }
  } */

  .ant-menu-item-selected {
    background-color: #f0f5ff;
    border-radius: 8px 0px 0px 8px;

    &::after {
      width: 10px;
      height: 100%;
      background: #2751f4;
      border-radius: 8px 0px 0px 8px;
      content: "";
    }
  }
`;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "sub1", <MailOutlined />),
  getItem("Team", "sub2", <AppstoreOutlined />),
  getItem("Settings", "sub3", <Plus color="" size={18}/>),
  getItem("", "sub4", <AppstoreOutlined />),
  getItem("Navigation Three", "sub5", <SettingOutlined />
  ),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5"];

const SiMenu: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      css={styles}
      mode="inline"
      openKeys={openKeys}
      items={items}
      onOpenChange={onOpenChange}
    />
  );
};

export default SiMenu;
