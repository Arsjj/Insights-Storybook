import { FC } from "react";
import CheckableTag from "antd/es/tag/CheckableTag";
import {ChackableSiTagProps} from "../index.d";
import { tagStyles, checkableTagStyles } from "../styles";



const CheckableSiTag: FC<ChackableSiTagProps> = ({iconPosition="left", icon, children, ...rest}) => {
  const left = iconPosition === "left";
  const right = iconPosition === "right";
  const double = iconPosition === "double";

  return (
    <CheckableTag css={[tagStyles, checkableTagStyles]} {...rest}>
      {(left || double) && icon}
      <span className="text">{children}</span>
      {(right || double) && icon}
    </CheckableTag>
  );
};

export default CheckableSiTag;
