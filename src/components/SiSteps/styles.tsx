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
  .ant-steps-item-container {
    &:hover {
      background-color: transparent !important;
    }
  }

  /* .ant-steps.ant-steps-inline  {
    .ant-steps-item-container {
      padding: 10.5px 4px 0 ;
      margin: 0 2px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
} */

  .ant-steps-item.ant-steps-item-finish {
    .ant-steps-item-container {
      padding: 10.5px 0px;
      display: flex;
      justify-content: center;
    }
    /* margin-right: 5px; */

    .ant-steps-item-tail {
      &::after {
        background-color: transparent;
      }
    }
    .ant-steps-item-icon {
      border-color: #219653;
      background-color: transparent;
      > .ant-steps-icon {
        margin: 0 !important;
        .ant-steps-icon-dot {
          background-color: #00df57; //green 8
          width: 10px;
          border: 0;
        }
      }
      svg {
        color: rgba(33, 150, 83, 1);
      }
    }
    /* .ant-steps-item-content {
      display: none;
    } */
  }

  .ant-steps-item-error {
    .ant-steps-item-container {
      padding: 10.5px 0px;
    }

    .ant-steps-item-tail {
      display: none;
    }
    .ant-steps-item-icon {
      background-color: transparent;

      > .ant-steps-icon {
        .ant-steps-icon-dot {
          width: 10px;
          border: 0;
        }
      }
      svg {
        color: #eb5757;
      }
    }
    .ant-steps-item-content {
      display: none;
    }
  }

  .ant-steps-item.ant-steps-item-process {

    /* margin: 0 7px; */
    &:hover {
      border-color: #2751f4;
    }
    .ant-steps-item-container {
      display: flex;
      justify-content: center;

      align-items: center;
      /* padding: 0px; */

      .ant-steps-item-tail {
        display: none;
      }
      .ant-steps-item-icon {
        margin: 0;
      }
      .ant-steps-item-content {
        margin: 0 0 0 7px;
      }
    }
    .ant-steps-item-icon {
      background-color: #f0f5ff; //blu1
      width: 25px;
      background-color: transparent;
      border-color: #2751f4;
      > .ant-steps-icon {
        color: #2751f4;
      }
      .ant-steps-icon-dot {
        background-color: #f0f5ff; //blu1
        width: 25px;
      }
    }
  }

  .ant-steps-item.ant-steps-item-wait {
    .ant-steps-item-container {
      padding: 10.5px 0px;
    }
    .ant-steps-item-icon {
      background-color: transparent;
      border-color: #83848a;
      > .ant-steps-icon {
        .ant-steps-icon-dot {
          width: 10px;
          background-color: #ccddff; //blu2
          border: 0;
        }
      }
    }
    .ant-steps-item-tail {
      &::after {
        background-color: transparent;
      }
    }
    .ant-steps-item-content {
      display: none;
    }
  }

  .ant-steps.ant-steps-inline {
    background-color: #2751f4;
    .ant-steps-item {
      .ant-steps-icon-container {
        .ant-steps-item-tail {
          background-color: red;
        }
      }
    }
  }
`;