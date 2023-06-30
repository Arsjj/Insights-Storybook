import React from "react";
import { Radio } from "antd";
import { css } from "@emotion/react";

const styles = css`
  border-radius: 8px;
  border: 1px solid var(--gray-gray-6, #b6b9c2);
  background: var(--gray-gray-4, #e5e7ed);
  width: fit-content;

  
  
  .ant-radio-button-wrapper {
    border: none;
    border-radius: 8px;
    background: transparent;

    &::before {
      background-color: transparent;
      /* border: 0px */
    }
  }

  .ant-radio-button-wrapper-checked {
    border: none;
    &:not(.ant-radio-button-wrapper-disabled) {
      /* background-color: #FFFFFF; */
    }


    &:not(.ant-radio-button-wrapper-disabled):hover::before {
      background-color: transparent;
    }

    .ant-radio-group-solid :where(.css-dev-only-do-not-override-1mwfiz8).ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: #fff;
    background: #fadb14;
    border-color: #2751f4;
}
  }
`;
const SiSwitcher: React.FC = () => (
  <>
    <Radio.Group css={styles} defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>
);

export default SiSwitcher;
