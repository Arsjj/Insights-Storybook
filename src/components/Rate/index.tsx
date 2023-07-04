import { Rate } from "antd";
import { RateProps } from "antd";
import { FC } from "react";
import {styles} from "./styles"


const SiRate: FC<RateProps> = ({ ...rest }) => <Rate css={styles} {...rest} />;

export default SiRate;
