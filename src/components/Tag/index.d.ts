import { TagProps, CheckableTagProps } from "antd/es/tag";

type iconPosition = "left" | "right" | "double";

type Props = {
  icon?: React.ReactNode;
  iconPosition?: iconPosition;
};

export declare type ChackableSiTagProps = Props & CheckableTagProps;
export declare type SiTagProps = Props & TagProps;

