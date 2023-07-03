import React from "react";
import { Radio } from "antd";
import { css } from "@emotion/react";
import { MenuFoldOutlined, UserAddOutlined } from "@ant-design/icons";

const styles = css`
  border-radius: 8px;
  border: 1px solid #d3d6de; //gray-5
  background: #e5e7ed;
  width: fit-content;

  .ant-radio-button-wrapper {
    border: none;
    border-radius: 8px;
    background: transparent;
    padding: 0 8px;
    color: #83848a;
    /* font-size: 12px; */
    font-weight: 600;

    :hover {
      color: #83848a;
    }

    &::before {
      background-color: transparent;
    }
  }

  .ant-radio-button-wrapper-checked {
    border: none;
    color: #1c1c20 !important;
    background: #ffffff !important;
    &:not(.ant-radio-button-wrapper-disabled) {
    }

    &:not(.ant-radio-button-wrapper-disabled):hover::before {
      background-color: transparent;
    }
  }
`;

const SiSwitcher: React.FC = () => (
  <>
    <Radio.Group css={styles} defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">
        <UserAddOutlined /> Item
      </Radio.Button>
      <Radio.Button value="d">
        <MenuFoldOutlined /> Item
      </Radio.Button>
    </Radio.Group>
  </>
);

export default SiSwitcher;
