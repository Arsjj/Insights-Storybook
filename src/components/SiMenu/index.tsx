import { FC } from "react";
import { Menu } from "antd";
import { SiMenuProps } from "./index.d";
import { styles } from "./styles";

const SiMenu: FC<SiMenuProps> = ({ mode, ...rest }) => {
  return (
    <>
      {mode === "inlineWithBadge" ? (
        <Menu css={styles} mode="inline" {...rest} />
      ) : (
        <Menu mode={mode} {...rest}/>
      )}
    </>
  );
};

export default SiMenu;
