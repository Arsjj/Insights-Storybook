import { FC } from "react";
import { ConfigProvider, PaginationProps, theme } from "antd";
import { Pagination } from "antd";
import { styles } from "./styles";

const { darkAlgorithm, defaultAlgorithm } = theme;

const SiPagination: FC<PaginationProps> = ({ ...rest }) => (
  <ConfigProvider
    theme={{
      algorithm: defaultAlgorithm,
      token: {
        colorBgContainer: "rgba(39, 81, 244, 1)",
        colorPrimary: "rgba(255,255,255,1)",
        colorBgTextHover: "rgba(211, 214, 222, 1)",
      },
    }}
  >
    <Pagination css={styles} {...rest} />
  </ConfigProvider>
);

export default SiPagination;
