import { FC } from "react";
import { Menu } from "antd";
import { SiMenuProps } from "./index.d";
import { inlineWithBadge, horizontalGray } from "./styles";



const SiMenu: FC<SiMenuProps> = ({ mode, ...rest }) => {
  return (
    <>
      {mode === "inlineWithBadge" ? (
        <Menu css={inlineWithBadge} mode="inline" {...rest} />
      ) : mode === "horizontalGray" ? (
        <Menu css={horizontalGray} mode="horizontal" {...rest} />
      ) : (
        <Menu mode={mode} {...rest} />
      )}
    </>
  );
};

export default SiMenu;
