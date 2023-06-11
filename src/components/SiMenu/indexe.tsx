import { FC } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import { css } from "@emotion/react";

type SiMenuProps = MenuProps & {
  inllineModeWithBadge?: boolean | undefined;
};

const styles = css`
  .ant-menu-inline .ant-menu-item {
  }

  .ant-menu-item {
    border-radius: 8px 0px 0px 8px;
    
    &:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected) {
      background-color: #f0f5ff; //blue1
    }
  }

  .ant-menu-submenu-title {
    &:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected) {
      background-color:  #F0F5FF; //blue1
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
    background-color:  #F0F5FF;
    border-radius: 8px 0px 0px 8px;

    &::after {
      width: 7px;
      height: 100%;
      margin: 0;
      background: #2751f4;
      border-radius: 8px 0px 0px 8px;
      content: "";
    }

    svg {
      path {
        stroke: rgba(39, 81, 244, 1); //blue 6
      }
    }
  }

  svg {
    margin-right: 12px;
  }
`;

const SiMenu: FC<SiMenuProps> = ({ inllineModeWithBadge, mode, ...rest }) => {
  const inllineModeWithBadgeStyles = inllineModeWithBadge && mode === "inline";

  return (
    <Menu css={inllineModeWithBadgeStyles && styles} {...rest} mode={mode} />
  );
};

export default SiMenu;
