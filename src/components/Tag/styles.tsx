import { css } from "@emotion/react";

export const tagStyles = css`
  /* display: flex; */
  /* align-items: center; */
  width: fit-content;
  padding: 2px 9px 2px 9px;
  border-radius: 16px;
  color: #4a4a4e; //gray-8
  .text {
    position: relative;
    top: 1px;
  }
`;

export const checkableTagStyles = css`
  &:not(.ant-tag-checkable-checked):hover {
    color: #527aff; //blue-5
    background-color: transparent;
  }

  &.ant-tag-checkable-checked {
    background-color: #2751f4;
    color: #ffffff;
    &:hover {
      background-color: #527aff; //blue-5
    }
    &:active {
      background-color: #1735cf; //blue-7
    }
  }
`;
