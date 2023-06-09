import { FC } from "react";
import { Steps, StepsProps, StepProps, ConfigProvider } from "antd";
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

const styles1 = css`
.ant-steps-item.ant-steps-item-finish {
    .ant-steps-item-tail{
      &::after {background-color: transparent};
    }
    .ant-steps-item-icon {
      border-color: #219653;
      background-color: transparent;
      > .ant-steps-icon {
        .ant-steps-icon-dot {
          background-color: #00DF57; //green 8
          width: 10px;
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
      .ant-steps-item-tail{
        &::after {background-color: transparent};
      }
    .ant-steps-item-icon {
      background-color: transparent;
      border-color: #2751f4;
      > .ant-steps-icon {
        color: #2751f4;
      }
      .ant-steps-icon-dot {
        background-color: #F0F5FF; //blu1
        width: 25px;
      }
      svg {
        //color: red;
      }
    }
  }

  .ant-steps-item-container {
    .ant-steps-item-tail{
      &::after {background-color: blue};
    }
    display: flex;
  }

  .ant-steps-item.ant-steps-item-wait {
    .ant-steps-item-icon {
      background-color: transparent;
      border-color: #83848a;
      > .ant-steps-icon {
        .ant-steps-icon-dot {
          width: 10px;
          background-color: #CCDDFF; //blu2
          border: 0;
        }
        svg {
        }
      }
    }
  }

  .ant-steps.ant-steps-inline{
    background-color: #2751f4;
    .ant-steps-item{
      .ant-steps-icon-container{

        
        .ant-steps-item-tail{
          background-color: red;
        }
      }
    }
  }
  
`


const SiStep: FC<StepsProps> = ({ ...rest }) => {
  return (<ConfigProvider>
    <Steps css={styles1} {...rest} percent={60}/>
  </ConfigProvider>
    ) 
};

export default SiStep;
