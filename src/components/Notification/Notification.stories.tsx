import type { Meta, StoryObj } from "@storybook/react";
import { Button, message } from "antd";
import useSiNotification from "./index";
import { notification } from "antd";
import { ArgsProps, IconType } from "antd/es/notification/interface";
import { FC } from "react";
import { CloseOutlined } from "@ant-design/icons";

const Notification = ({...mer}: ArgsProps, type: IconType) => {
  const { openNotification, context } = useSiNotification();

  return (
    <>
      {context}
      <Button onClick={() => openNotification({...mer}, "success")}>Click</Button>
    </>
  );
};

const meta = {
  title: "Example/Notification",
  component: Notification,
  // argTypes: {
  //     collapsible: {
  //         control: {
  //             type: "select",
  //         },
  //         options: ["header", "icon", "disabled"]
  //     },
  //     expandIconPosition: {
  //         control: {
  //             type: "select",
  //         },
  //         options: ["start", "end"]
  //     },
  //     size: {
  //         control: {
  //             type: "radio",
  //         },
  //         options: ["small", "middle", "large"]
  //     }
  // }
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationExample: Story = {
  args: {
    // {
    //   message: "asdad"
    // },
    
    
    
    message: "Example",
    // description: "Example description",
    // btn: <Button children="Go"/>,
    // closeIcon: <CloseOutlined/>,
    // duration: 5000,
    // placement: "topRight"
  },
   
};
