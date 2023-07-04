import { MenuProps } from "antd";

export type SiMenuItem = Required<MenuProps>["items"][number];

export declare interface SiMenuProps extends Omit<MenuProps, "mode"> {
  mode?: "horizontal" | "vertical" | "inline" | "inlineWithBadge" | "horizontalGray";
}
