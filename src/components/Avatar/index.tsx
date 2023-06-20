import { FC } from "react";
import { Avatar, AvatarProps } from "antd";
import { AvatarSize } from "antd/es/avatar/SizeContext";
import { styles, mediumStyles } from "./styles";
import { css } from "@emotion/react";

interface IFinal extends Omit<AvatarProps, "size"> {
  size?: AvatarSize | "medium";
}

const SiAvatar: FC<IFinal> = ({ size, ...rest }) => {
  return (
    <>
      {size === "medium" ? (
        <Avatar css={css`${styles}; ${mediumStyles}`} {...rest} />
      ) : (
        <Avatar css={styles} size={size} {...rest} />
      )}
    </>
  );
};

export default SiAvatar;
