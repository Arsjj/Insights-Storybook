import { useState } from "react";

import SePagination from "./components/Pagination";
import SeCollapse from "./components/Collapse";
import SeBadge from "./components/Badge";
import SeCalendar from "./components/Calendar";
import SeAvatar from "./components/Avatar";
import SeEmpty from "./components/Empty";
import SeTimeline from "./components/Timeline";
import Section from "./components/Section";
import SeTag from "./components/Tag";
import { Button, ConfigProvider, Select } from "antd";
import {
  CheckCircleTwoTone,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SeAlert from "./components/Alert";
import useSeNotification from "./components/Notification";
import SeCard from "./components/Card";
import SiStep from "./components/SiSteps";
import "./App.scss";
import SiDatePicker from "./components/SiDatePicker";
import SiMenu from "./components/SiMenu/indexe";
import { css } from "@emotion/css";

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
    // description,
    // subTitle: 'Left 00:00:08',
  },
  {
    title: "In Progress",
    // description: "dsfsdfsdf"
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
          fontSize: 16,
          fontSizeLG: 20,
          fontSizeHeading1: 32,
          fontSizeHeading2: 28,
          fontSizeHeading3: 24,
          fontSizeHeading4: 20,
          lineHeightSM: 1.375,
          lineHeightHeading1: 3,
          lineHeightHeading2: 2.5,
          lineHeightHeading3: 2.25,
          lineHeightHeading4: 1.75,
          lineWidthFocus: 0,
          paddingContentHorizontal: 16,
        },
      }}
    >
      <div className="App">
        <SiMenu />
        <Select
          popupClassName={css`
            background-color: blue;
          `}
          options={[
            {
              value: "1",
              label: "1",
            },
          ]}
        />

        <SiStep
          items={stepItems}
          type="inline"
          direction="horizontal"
          current={2}
        />
      </div>
    </ConfigProvider>
  );
}

export default App;
