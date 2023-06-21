import { FC } from "react";
import { Avatar } from "antd";
import { SiAvatarProps } from "./index.d";
import { css } from "@emotion/react";
import { styles, mediumStyles, largeStyles, customStyles } from "./styles";

const SiAvatar: FC<SiAvatarProps> = ({ size, ...rest }) => {
  return (
    <>
      {size === "medium" ? (
        <Avatar
          css={css`
            ${styles};
            ${mediumStyles}
          `}
          {...rest}
        />
      ) : size === "large" ? (
        <Avatar
          css={css`
            ${styles};
            ${largeStyles}
          `}
          size="large"
          {...rest}
        />
      ) : size === "small" ? (
        <Avatar
          css={css`
            ${styles};
          `}
          size={size}
          {...rest}
        />
      ) : (
        <Avatar
          css={css`
            ${styles};
            ${customStyles}
          `}
          size={size}
          {...rest}
        />
      )}
    </>
  );
};

export default SiAvatar;
