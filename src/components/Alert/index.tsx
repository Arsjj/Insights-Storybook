import { FC } from "react";
import { Alert, AlertProps } from "antd";
import { css } from "@emotion/react";

const styles = css`
  border-radius: 8px;
  &.ant-alert-info {
    background-color: #f0f5ff;
    border: 1px solid #2751f4;
    svg {
      color: #2751f4;
    }
  }
  &.ant-alert-warning {
    background-color: #fff7e6;
    border: 1px solid #f2c94c;
    svg {
        color: #F2994A
    }
  }
  &.ant-alert-error {
    background-color: rgba(235, 47, 150, 0.05);
    border: 1px solid #eb5757;
    svg{
        color:  #EB5757;
    }
  }
`;

const SiAlert: FC<AlertProps> = ({ ...rest }) => (
  <Alert css={styles} {...rest} />
);

export default SiAlert;
