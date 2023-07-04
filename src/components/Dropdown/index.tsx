import { RightOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { SiDropdownProps } from "./index.d";
import { css } from "@emotion/react";
import { FC } from "react";
import {overlayStyles} from "./styles"

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item </a>,
    key: "1",
  },
  // {
  //   type: 'divider',
  // },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const disabledstyles = css`
  color: #b6b9c2; //gray-6
`;

const styles = css`
  color: #4a4a4e; //gray-8
  cursor: pointer;

  &.ant-dropdown-open {
    .anticon {
      transform: rotate(90deg);
      transition: 200ms;
    }
  }

  &.overlay-styles {
    width: 300px;
  }

  .extra {
    color: #b6b9c2; //gray-6
  }

  .anticon {
    width: 14px;
    transition: 250ms;
  }
`;

const SiDropdown: FC<SiDropdownProps> = ({rotatingArrow, children, ...rest }) => {
  return (
    <Dropdown
      css={styles}
      menu={{ items }}
      trigger={["click"]}
      overlayClassName={overlayStyles}
      // placement="bottomRight"
      {...rest}
    >
      <div>
        Click me
        <span className="extra">(sdfasdfasdfasd)</span>
        {children}
        {rotatingArrow && <RightOutlined />}
      </div>
    </Dropdown>
  );
};

export default SiDropdown;
