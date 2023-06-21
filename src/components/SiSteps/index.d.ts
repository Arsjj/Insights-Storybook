import { StepsProps } from "antd";

export declare interface SiStepsProps extends Omit<StepsProps, "type"> {
  type?: "default" | "navigation" | "inline" | "inline-step";
}
