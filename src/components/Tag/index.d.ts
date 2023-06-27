import { TagProps, CheckableTagProps } from "antd/es/tag";

type iconPosition = "left" | "right" | "double";

type IconProps = {
  icon?: React.ReactNode;
  iconPosition?: iconPosition;
};

export declare type AddSiTagProps = {
  tagProps: TagProps,
  inputProps?: InputProps
}

export declare type ChackableSiTagProps = IconProps & CheckableTagProps;
export declare type SiTagProps = IconProps & TagProps;

