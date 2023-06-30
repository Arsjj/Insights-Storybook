import React from "react";
import { Radio } from "antd";
import { css } from "@emotion/react";

const styles = css`
  border-radius: 8px;
  border: 1px solid var(--gray-gray-6, #b6b9c2);
  background: var(--gray-gray-4, #e5e7ed);
  width: fit-content;

  /* &.ant-radio-group-solid {
      .ant-radio-button-wrapper-checked:not(
          .ant-radio-button-wrapper-disabled
        ) {
        color: #83848A;
        background: #FFFFFF;
        border-color: #2751f4;
      }
    } */

  .ant-radio-button-wrapper {
    border: none;
    border-radius: 8px;
    background: transparent;

    :hover{
      color: #83848A;
    }

    &::before {
      background-color: transparent;
      /* border: 0px */
    }
  }

  .ant-radio-button-wrapper-checked {
    border: none;
    color: #83848A !important;
        background: #FFFFFF !important;
    &:not(.ant-radio-button-wrapper-disabled) {
      /* background-color: #FFFFFF; */
    }

    &:not(.ant-radio-button-wrapper-disabled):hover::before {
      background-color: transparent;
    }

    
  }
`;
const SiSwitcher: React.FC = () => (
  <>
    <Radio.Group css={styles} defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hahou</Radio.Button>
      <Radio.Button value="d">Chgdu</Radio.Button>
    </Radio.Group>
  </>
);

export default SiSwitcher;
