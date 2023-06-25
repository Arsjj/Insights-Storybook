import { useState } from "react";
import SiMenu from "../../components/SiMenu";
import Icon from "../../svg";
import { MenuProps } from "antd";
import { css } from "@emotion/react";

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
  getItem("Dashboard", "sub1", <Icon name="Cube" />),
  getItem("Team", "sub2", <Icon name="Team" />),
  getItem("Settings", "sub3", <Icon name="Setting" />),
  getItem("Feadback", "sub4", <Icon name="StarTwoTone" />),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4"];

const styles = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  width: 280px;
  height: 100%;
  background-color: #eff1f5; //grey2
  padding: 16px 0 20px 10px;
  color: #4a4a4e !important; //grey8

  .logo {
    height: 125px;
    width: fit-content;

    svg {
      position: relative;
      left: 32px;
      width: 130px;
      height: 100px;
    }
  }

  .ant-menu {
    background-color: #eff1f5;
    /* color: #4A4A4E; //grey8 */
    font-size: 16px;
    margin-bottom: 70px;

    li {
      margin-left: 8px;
      height: fit-content;
      padding-top: 4px;
      padding-bottom: 5px;
      /* margin-bottom: 0px !important; */
      margin-block: 0px;
      box-sizing: border-box;
    }
  }

  .messageContainer {
    display: flex;
    position: absolute;
    left: 46px;
    bottom: 30px;
    gap: 20px;
    cursor: pointer;
  }
`;

function SiLeftSidbar() {
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
    <div css={styles}>
      <div className="logo">
        <Icon name="SentiumLogo" />
      </div>
      <SiMenu items={items} mode="inlineWithBadge" />
      <div className="messageContainer">
        <Icon name="MessageQuestion" />
        <span>Help</span>
      </div>
    </div>
  );
}

export default SiLeftSidbar;
