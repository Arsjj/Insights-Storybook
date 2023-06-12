import { Breadcrumb, ConfigProvider } from "antd";
import { css } from "@emotion/react";
import { FC } from "react";

const styles = css`
  .ant-breadcrumb-link {
    color: #83848a; //gray 7
    &:hover {
      color: #1c1c20; //gray-9
    }
    /* &:active {
      color: #2751f4; //blue-6
    } */

    a {
      color: #83848a; //gray 7
      &:hover {
        color: #1c1c20; //gray-9
      }
      /* &:active {
        color: #2751f4; //blue-6
      } */
    }
  }

  .ant-breadcrumb-separator {
    color: #83848a; //gray-7

    &:hover {
      color: #83848a; //gray-7
    }
  }

  .ant-breadcrumb-overlay-link {
    &:hover {
      color: #1c1c20; //gray-9
      .ant-breadcrumb-link > a {
        color: #1c1c20; //gray-9
      }
    }

    /* &:active {
      color: #2751f4; //blue-6
      .ant-breadcrumb-link > a {
        color: #2751f4; //blue-6
      }
    } */
  }
`;

const menuItems = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];

const SiBroadcrumb: FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgTextHover: "",
        },
      }}
    >
      <Breadcrumb
        css={styles}
        items={[
          {
            title: "Ant Design",
          },
          {
            title: <a href="">Component</a>,
          },
          {
            title: <a href="">General</a>,
            menu: { items: menuItems },
          },
          {
            title: "Button",
          },
        ]}
      />
    </ConfigProvider>
  );
};

export default SiBroadcrumb;
