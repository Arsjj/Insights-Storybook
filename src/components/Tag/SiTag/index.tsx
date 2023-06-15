import { FC } from "react";
import { Tag } from "antd";
import { SiTagProps } from "../index.d";
import { tagStyles, closableStyles } from "../styles";
import { css } from "@emotion/react";

const SiTag: FC<SiTagProps> = ({
  icon,
  iconPosition = "left",
  children,
  closable,
  ...rest
}) => {
  const left = iconPosition === "left";
  const right = iconPosition === "right";
  const double = iconPosition === "double";

  return (
    <Tag
      css={css`
        ${tagStyles};
        ${closable && closableStyles}
      `}
      closable={closable}
      {...rest}
    >
      {(left || double) && icon}
      <span className="text">{children}</span>
      {(right || double) && icon}
    </Tag>
  );
};

export default SiTag;
