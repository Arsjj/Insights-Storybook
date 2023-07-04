import { css } from "@emotion/react";

export const inlineWithBadge = css`
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

export const horizontalGray = css`
  width: fit-content;
  .ant-menu-item {
    display: flex;
    flex-direction: row-reverse;
    width: fit-content !important;
    margin-right: 20px;
    padding: 0 0px;
    color: #83848a !important; //gray-7

    &::after {
      inset-inline: 0px !important;
      border-bottom-color: transparent !important ;
    }
  }
  .ant-menu-item.ant-menu-item-selected {
    .ant-menu-title-content {
      color: #1c1c20 !important; //gray-9
    }
    svg {
      color: #1c1c20; //gray-9
    }
    &::after {
      inset-inline: 0px;
      border-bottom-color: #2751f4 !important; //blue-6
    }
  }

  .ant-menu-item-active {
    &::after {
      border-bottom-color: transparent !important;
    }
  }
  .ant-menu-item-disabled {
    .ant-menu-title-content {
      color: #b6b9c2; //gray-6
      margin-inline-start: 0px !important;
    }
    svg {
      color: #b6b9c2; //gray-6
    }
  }
`;
