import { TagProps, CheckableTagProps } from "antd/es/tag";

type iconPosition = "left" | "right" | "double";

type IconProps = {
  icon?: React.ReactNode;
  iconPosition?: iconPosition;
};

type AddSiTagProps = {
  initialTags?: Array<string>;
  getTags?: (value: any) => void;
  getNewAdded?: (value: string) => void;
} & TagProps & IconProps;


export declare type ChackableSiTagProps = IconProps & CheckableTagProps;
export declare type SiTagProps = IconProps & TagProps;

