import { FC } from "react";
import { Steps, StepsProps } from "antd";
import { styles, menuStyles } from "./styles";

type SiStepsProps = {
  menuType?: boolean;
} & StepsProps;

const SiStep: FC<SiStepsProps> = ({ menuType, type, ...rest }) => {
  return (
    <>
      {menuType ? (
        <Steps css={menuStyles} type="inline" {...rest} />
      ) : (
        <Steps css={styles} type={type} {...rest} />
      )}
    </>
  );
};

export default SiStep;
