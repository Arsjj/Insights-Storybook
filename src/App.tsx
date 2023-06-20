import { useState } from "react";


import { ConfigProvider, Empty} from "antd";
import {
  UserOutlined,
} from "@ant-design/icons";
import useSeNotification from "./components/Notification";
import "./App.scss";
import SiLeftSidbar from "./Website Components/SiLeftSidebar";
import SiEmpty from "./components/Empty";
import Icon from "./svg";
import SiAvatar from "./components/Avatar";
import SiTag from "./components/Tag/SiTag";
import CheckableSiTag from "./components/Tag/CheckebleSiTae";
import AddSiTag from "./components/Tag/AddSiTag";
import Section from "./components/Section";
import SiStep from "./components/SiSteps";

const items = [
  {
    label: "2015-09-01",
    children: "Create a services",
  },
  {
    label: "2015-09-01 09:12:11",
    children: "Solve initial network problems",
  },
  {
    children: "Technical testing",
  },
  {
    label: "2015-09-01 09:12:11",
    children: "Network problems being solved",
  },
];

const stepItems = [
  {
    title: "Finished",
    // description,
  },
  {
    title: "In Progress",
    icon: <UserOutlined />,
    description: "feqrveqrv",
    // subTitle: 'Left 00:00:08',
  },
  {
    title: "In Progress",
    description: "dsfsdfsdf"
  },
  {
    title: "Waiting",
    icon: <UserOutlined />,
    // description,
  },
  {
    title: "Waiting",
    icon: <UserOutlined />,

    // description,
  },
];

function App() {
  const [selected, setSelected] = useState(false);
  const { openNotification, context } = useSeNotification();

  const handleSelect = () => {
    setSelected((selected) => !selected);
    console.log(selected);
  };

  return (
    <ConfigProvider
      theme={{
        // algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: "#2751f4",
          colorPrimaryText: "#2751f4",
          colorPrimaryBgHover: "#7A9EFF",
          colorPrimaryHover: "#7A9EFF",
          colorPrimaryActive: "#1735CF",
          colorLink: "#2751F4",
          colorInfo: "#2751F4",
          colorLinkHover: "#7A9EFF",
          colorLinkActive: "#1735CF",
          colorInfoText: "#2751F4",
          colorSuccess: "#219653",
          colorWarning: "#ff8a00",
          colorError: "#eb5757",
          colorErrorBgHover: "#FF4D4F",
          colorErrorHover: "#FF4D4F",
          colorErrorActive: "#CF1322",
          colorTextDisabled: "#B6B9C2",
          colorBorder: "#D3D6DE",
          colorText: "#1C1C20",
          // fontSize: 16,
          // fontSizeLG: 20,
          // fontSizeHeading1: 32,
          // fontSizeHeading2: 28,
          // fontSizeHeading3: 24,
          // fontSizeHeading4: 20,
          // lineHeightSM: 1.375,
          // lineHeightHeading1: 3,
          // lineHeightHeading2: 2.5,
          // lineHeightHeading3: 2.25,
          // lineHeightHeading4: 1.75,
          // lineWidthFocus: 0,
          // paddingContentHorizontal: 16,
        },
      }}
    >
        <SiLeftSidbar />
      <div className="App">

        {/* <SiBroadcrumb /> */}
        <SiEmpty />
        {/* <SiAvatar size={180} children="L" src="https://media.baselineresearch.com/images/197439/197439_full.jpg"/> */}
        <SiAvatar size="medium" children="N"/>
        <SiAvatar size="large" children="N"/>
        <SiAvatar size="default" children="N"/>
        <SiStep
          items={stepItems}
        
          menuType
          // direction="vertical"
          current={5}
          // status="error"
        />
      {/* <SiTag add checked>Add</SiTag>
      <SiTag >Add</SiTag>
      <SiTag checkable>Add</SiTag> */}
      {/* <SiTag checked/> */}
      <SiTag children="TAG" icon={<UserOutlined />} iconPosition="double"/>
      <SiTag closable children="asus"/>
      <AddSiTag children="ADD"/>
      <Section text="gsfdgsdfgsdfgdsgdfg"/>
      <CheckableSiTag checked children="fasdgasf" icon={<UserOutlined />} iconPosition="double" />

      </div>
    </ConfigProvider>
  );
}

export default App;
