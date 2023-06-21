import type { Meta, StoryObj } from "@storybook/react";
import { Button, message } from "antd";
import useSiNotification from "./index";
import { notification } from "antd";
import { ArgsProps, IconType } from "antd/es/notification/interface";
import { FC } from "react";
import { CloseOutlined } from "@ant-design/icons";

const Notification = ({...args}: ArgsProps, type:IconType) => {
  const { openNotification, context } = useSiNotification();

  return (
    <>
      {context}
      <Button onClick={() => openNotification({...args})}>Click</Button>
    </>
  );
};

const meta = {
  title: "Example/Notification",
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
      
  }
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationExample: Story = {
  render: (args, type) => { return (
    <div>
      <Notification {...args} />
    </div>
  )},
  args: {
    
    
    
    
    message: "Example",
    placement: "bottom"
    
  },
   
};
