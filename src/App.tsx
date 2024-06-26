import { useState } from "react";


import {Button, ConfigProvider, Dropdown} from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
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
import useAddSiTag from "./components/Tag/useAddSiTag";
import Section from "./components/Section";
import SiStep from "./components/SiSteps";
import SiRate from "./components/Rate";
import SiDatePicker from "./components/SiDatePicker";
import Header from "./Website Components/Header";
import SiSwitch from "./components/SiSwitch";
import SiDropdown from "./components/Dropdown";
import SiMenu from "./components/SiMenu";
import Navbar from "./Website Components/Navbar";

// const items = [
//   {
//     label: "2015-09-01",
//     children: "Create a services",
//   },
//   {
//     label: "2015-09-01 09:12:11",
//     children: "Solve initial network problems",
//   },
//   {
//     children: "Technical testing",
//   },
//   {
//     label: "2015-09-01 09:12:11",
//     children: "Network problems being solved",
//   },
// ];


const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'ap01p',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
]



function App() {
  const [selected, setSelected] = useState(false);
  const { openNotification, notificationContext } = useSeNotification();
  const {addSiTag, addedSiTags, siTags } = useAddSiTag([])
  console.log(siTags)

  const handleSelect = () => {
    setSelected((selected) => !selected);
    console.log(selected);
  };


  const items2 = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item </a>,
      key: "1",
    },
    // {
    //   type: 'divider',
    // },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

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
        
        {/* <Icon className="background" name="SiBackGround" /> */}
      <div className="App">
        <Navbar />
        <Header name="Alejandro" count={7} text="Welcome back" src="https://i.pinimg.com/originals/12/98/33/1298337b56128623820952a6024b803e.jpg"/>
         
        {/* <SiEmpty /> */}
        <SiAvatar size={200} children="L" src="https://qph.cf2.quoracdn.net/main-qimg-594e3c8f8659ce426902eb9fd6bebc0f-lq"/>
        <SiRate value={4}/>

        <SiSwitch  />
        <SiSwitch />
        <SiSwitch  disabled/>
        <SiSwitch  disabled defaultChecked/>
        <SiSwitch  loading defaultChecked/>
        
        {/* <SiStep
          items={stepItems}
          type="inline-step"
          // status="error"
          
          
          // direction="vertical"
          current={3}
          // status="error"
          /> */}
           <SiDropdown rotatingArrow trigger={['click']}>Click Me</SiDropdown>
          {notificationContext}
          {addSiTag({tagProps: {children: "sdfsdf"}, inputProps:{}})}
          {addedSiTags}
          <Button size="large" style={{width: "200px"}} children="Click for notification" onClick={() => openNotification({message: "fdsgsdfgsdf", type:"success"})} /> 
      {/* <SiTag add checked>Add</SiTag>
      <SiTag >Add</SiTag>
      <SiTag checkable>Add</SiTag> */}
      {/* <SiTag checked/> */}
      {/* <SiTag children="TAG" icon={<UserOutlined />} iconPosition="double"/>
      <SiTag closable children="asus"/>
      <AddSiTag children="ADD"/>
      <Section text="gsfdgsdfgsdfgdsgdfg"/>
      <CheckableSiTag checked children="fasdgasf" icon={<UserOutlined />} iconPosition="double" /> */}
      


   <SiDatePicker />
    
      </div>
    </ConfigProvider>
  );
}

export default App;
