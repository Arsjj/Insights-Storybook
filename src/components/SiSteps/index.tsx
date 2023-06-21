import { FC } from "react";
import { Steps } from "antd";
import { SiStepsProps } from "./index.d";
import { styles, menuStyles } from "./styles";

const SiStep: FC<SiStepsProps> = ({type, ...rest }) => {
  return (
    <>
      {type === "inline-step" ? (
        <Steps css={menuStyles} type="inline" {...rest} />
      ) : (
        <Steps css={styles} type={type} {...rest} />
      )}
    </>
  );
};

export default SiStep;
