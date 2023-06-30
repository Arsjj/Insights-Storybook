import { FC } from "react";
import { Switch, Space, ConfigProvider } from "antd";
import { SwitchProps } from "antd";
import { css } from "@emotion/react";

const styles = css`
  width: fit-content;
  background: #B6B9C2; //gray-6
`;

const SiSwitch: FC<SwitchProps> = ({ ...rest }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: "#91caff",
          // colorPrimary: "brown"
        },
      }}
    >
      <Switch css={styles} {...rest} />
    </ConfigProvider>
  );
};

export default SiSwitch;
