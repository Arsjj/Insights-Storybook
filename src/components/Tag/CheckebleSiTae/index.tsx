import { FC } from "react";
import CheckableTag from "antd/es/tag/CheckableTag";
import {ChackableSiTagProps} from "../index.d";
import { tagStyles } from "../styles";



const CheckableSiTag: FC<ChackableSiTagProps> = ({iconPosition, icon, children, ...rest}) => {
  const left = iconPosition === "left";
  const right = iconPosition === "right";
  const double = iconPosition === "double";

  return (
    <CheckableTag css={tagStyles} {...rest}>
      {(left || double) && icon}
      <span className="text">{children}</span>
      {(right || double) && icon}
    </CheckableTag>
  );
};

export default CheckableSiTag;
