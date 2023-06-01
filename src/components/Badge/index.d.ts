import {BadgeProps} from "antd";

type BadgeProp = "success" | "warning" | "danger" | "default" | "processing"

export declare type Props = {
    statusType?: BadgeProp,
} & BadgeProps