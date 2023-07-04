import { css } from "@emotion/react";

export const styles = css`
  .ant-steps-item.ant-steps-item-finish {
    .ant-steps-item-icon {
      border-color: #219653;
      background-color: transparent;
      > .ant-steps-icon {
        .ant-steps-icon-dot {
          background-color: #219653;
          border: 0;
        }
      }
      svg {
        color: rgba(33, 150, 83, 1);
      }
    }
  }

  .ant-steps-item-error {
    .ant-steps-item-icon {
      background-color: transparent;
      svg {
        color: #eb5757;
      }
    }
  }

  .ant-steps-item.ant-steps-item-process {
    .ant-steps-item-icon {
      background-color: transparent;
      border-color: #2751f4;
      > .ant-steps-icon {
        color: #2751f4;
      }
      .ant-steps-icon-dot {
        background-color: #2751f4;
      }
    }
  }

  .ant-steps-item.ant-steps-item-wait {
    .ant-steps-item-icon {
      background-color: transparent;
      border-color: #83848a;
      > .ant-steps-icon {
        .ant-steps-icon-dot {
          background-color: #b6b9c2;
          border: 0;
        }
        svg {
        }
      }
    }
  }
`;




export const menuStyles = css`
  background-color: transparent;
  width: fit-content !important;

  .ant-steps-item-container {
    margin: 0 !important;
    &:hover {
      background-color: transparent !important;
    }
    .ant-steps-item-tail {
      display: none !important;
    }
    .ant-steps-item-icon {
      height: fit-content !important;
      width: fit-content !important;
      margin: 0 !important;
      .ant-steps-icon-dot {
        width: 10px !important;
        height: 4px !important;
        border: 0 !important;
      }
    }
    .ant-steps-item-content {
      display: none;
    }
  }

  .ant-steps-item.ant-steps-item-finish {
    .ant-steps-icon-dot {
      background-color: #00df57 !important; //green 8
    }
  }
  
  .ant-steps-item.ant-steps-item-process {
    > .ant-steps-item-container {
      display: flex;
      justify-content: center;
      .ant-steps-item-content {
        display: inline;
        position: relative;
        width: fit-content;
        height: fit-content;
        top: -19px;
        margin-left: 8px;
        .ant-steps-item-title {
          color: #ffffff; // gray-1
        }
      }
    }
    .ant-steps-item-icon {
      display: flex;
      justify-content: center;
      .ant-steps-icon-dot {
        background-color: #ffffff; //gray-1
        width: 25px !important;
      }
    }
  }

  .ant-steps-item.ant-steps-item-wait {
    .ant-steps-icon-dot {
      background-color: #ccddff !important; //blu2
    }
  }
`;



