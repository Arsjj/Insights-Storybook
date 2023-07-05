import { RightOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { SiDropdownProps } from "./index.d";
import { css } from "@emotion/react";
import { FC } from "react";
import { overlayStyles } from "./styles";

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
  /* width: fit-content; */

  &.ant-dropdown-open {
    .anticon {
      transform: rotate(90deg);
      transition: 250ms;
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
    margin: 0 4px;
  }
`;

const SiDropdown: FC<SiDropdownProps> = ({
  rotatingArrow,
  children,
  ...rest
}) => {
  return (
    <Space>
      <Dropdown css={styles} menu={{ items }} {...rest}>
        <div>
          {children}
          {rotatingArrow && <RightOutlined />}
        </div>
      </Dropdown>
    </Space>
  );
};

export default SiDropdown;
