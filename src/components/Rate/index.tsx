import { Rate } from "antd";
import Icon from "../../svg";
import { RateProps } from "antd";
import { FC } from "react";
import { css } from "@emotion/react";

const styles = css`

    
`

const SiRate: FC<RateProps > = ({ ...rest }) => <Rate css={styles} {...rest} />;

export default SiRate;
