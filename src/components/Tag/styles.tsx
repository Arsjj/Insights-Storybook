import { css } from "@emotion/react";

export const tagStyles = css`
  /* display: flex; */
  /* align-items: center; */
  width: fit-content;
  padding: 2px 9px 2px 9px;
  border-radius: 16px;
  color: #4a4a4e; //gray-8
  &:not(.ant-tag-checkable) {
    background-color: #eff0f3; //gray-3
    border: 1px solid #d3d6de; //gray-5
  }
  &:hover:not(.ant-tag-checkable) {
    color: #1c1c20;
    border: 1px solid #b6b9c2; //gray-6
  }
  .text {
    position: relative;
    top: 1px;
  }
`;

export const closableStyles = css`
  &:active {
    background-color: aqua; //gray-4
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



export const addTag = css`
  /* display: flex;
  align-items: center; */
  background: transparent !important;
  border: 1px dashed #D3D6DE !important; //gray-5
  gap: 3px;
  &:hover {
    border: 1px dashed #B6B9C2; //gray-6
    cursor: pointer;
  }
`;

export const addedTagsContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  gap: 5px;
  row-gap: 5px;
`;

export const addedStyles = css`
  @keyframes tag {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }
  padding: 2px 0px;
  border-radius: 16px;
  animation-name: tag;
  animation-duration: 0.8s;
`;

