import { FC } from "react";
import { Tag } from "antd";
import { SiTagProps } from "../index.d";
import { tagStyles } from "../styles";

const SiTag:FC<SiTagProps> = ({icon, iconPosition, children, ...rest}) => {
  const left = iconPosition === "left";
  const right = iconPosition === "right";
  const double = iconPosition === "double";

  return (
    <Tag css={tagStyles} {...rest}>
      {(left || double) && icon}
      <span className="text">{children}</span>
      {(right || double) && icon}
    </Tag>
  );
};

export default SiTag;
