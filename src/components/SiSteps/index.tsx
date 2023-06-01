import { FC } from "react";
import { Steps, StepsProps } from "antd";
import { css } from "@emotion/react";


const styles = css`
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
      svg {
        //color: red;
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


const SiStep: FC<StepsProps> = ({ ...rest }) => {
  return <Steps css={styles} {...rest} />;
};

export default SiStep;
