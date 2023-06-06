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
import { Button, ConfigProvider } from "antd";
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
    // description,
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
          borderRadius: 16,
          borderRadiusLG: 24,
          borderRadiusSM: 16,
          paddingContentHorizontal: 16,
        },
      }}
    >
      <div className="App">
        <SePagination total={50} defaultCurrent={3} showQuickJumper={true} />
        <SeCollapse />
        <SeBadge statusType="success" count={7} />
        <SeBadge count={128} />
        <SeCalendar />
        <SeAvatar size={100} shape="square">
          Mari
        </SeAvatar>
        <SeEmpty />
        <SeTimeline mode="alternate" items={items} />
        <Section onClick={() => console.log("log")} />
        <SeTag
          icon={<SyncOutlined spin />}
          color="processing"
          checkable
          onChange={handleSelect}
          checked={selected}
        >
          processing
        </SeTag>
        <SeTag
          add
          getTags={(tags) => console.log(tags)}
          getNewAdded={(value) => {
            console.log(value, "Value");
          }}
          children="New Tag 1"
          icon="double"
        ></SeTag>
        <SeTag
          icon={<ExclamationCircleOutlined />}
          closable
          color="warning"
          getTags={() => {}}
        >
          warning
        </SeTag>
        <SeTag icon={<ClockCircleOutlined />} iconPosition="double" closable>
          waiting
        </SeTag>
        <SeTag icon={<MinusCircleOutlined />} color="blue">
          stop
        </SeTag>
        <SeAlert message="Informational Notes" type="info" showIcon />
        <SeAlert message="Warning" type="warning" showIcon closable />
        <SeAlert message="Error" type="error" showIcon />
        <SeAlert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          showIcon
        />
        <SeCard />
        <SiStep current={1} status="process" items={stepItems} />
        {context}
        <Button
          onClick={() =>
            openNotification(
              {
                message: "Copy message",
                description: "kakoy ty description",
                placement: "bottomRight",
                icon: <UserOutlined />,
              },
              "success"
            )
          }
        >
          Notif Button
        </Button>

        <SiDatePicker />
      </div>
    </ConfigProvider>
  );
}

export default App;
