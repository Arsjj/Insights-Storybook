import { Radio, RadioProps, RadioGroupProps } from "antd";
import * as styles from "./style";

function SIRadio({ children, ...rest }: RadioProps) {
  return (
    <Radio css={styles.radio} {...rest}>
      {children}
    </Radio>
  );
}


function Group({ children, ...rest }: RadioGroupProps) {
  return (
    <Radio.Group css={styles.group} {...rest}>
      {children}
    </Radio.Group>
  );
}

function SwitcherGroup({ children, ...rest }: RadioGroupProps) {
  return (
    <Radio.Group css={styles.switcher} buttonStyle="solid" {...rest}>
      {children}
    </Radio.Group>
  );
}

function Button({ children, ...rest }: RadioProps) {
  return <Radio.Button {...rest}>{children}</Radio.Button>;
}

SIRadio.Group = Group;
SIRadio.SwitcherGroup = SwitcherGroup;
SIRadio.Button = Button;
export default SIRadio;
