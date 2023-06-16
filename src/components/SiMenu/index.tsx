import { FC } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { styles } from "./styles";


type SiMenuProps = MenuProps & {
  inllineModeWithBadge?: boolean | undefined;
};

const SiMenu: FC<SiMenuProps> = ({ inllineModeWithBadge, mode, ...rest }) => {
  const inllineModeWithBadgeStyles = inllineModeWithBadge && mode === "inline";

  return (
    <Menu css={inllineModeWithBadgeStyles && styles} {...rest} mode={mode} />
  );
};

export default SiMenu;
