import { FC } from "react";
import { Switch, Space } from "antd";
import { SwitchProps } from "antd";

const SiSwitch: FC<SwitchProps> = ({ ...rest }) => {
  return (
    <Space>
      <Switch {...rest} />
    </Space>
  );
};

export default SiSwitch;
