import { Rate } from "antd";
import { RateProps } from "antd";
import { FC } from "react";
import { css } from "@emotion/react";

const styles = css`
  width: fit-content;

  &.ant-rate {
    color: #f2994a;
  }
`;

const SiRate: FC<RateProps> = ({ ...rest }) => <Rate css={styles} {...rest} />;

export default SiRate;
