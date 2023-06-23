import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "antd";
import useSiNotification from "./index";
import { SiNotificationProps } from "./index.d";

const Notification = ({ ...args }: SiNotificationProps) => {
  const { openNotification, notificationContext } = useSiNotification();

  return (
    <>
      {notificationContext}
      <Button onClick={() => openNotification({ ...args })}>Click</Button>
    </>
  );
};

const meta = {
  title: "Example/useSiNotification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    btn: {
      description: "Customized close button",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    className: {
      description: "Customized CSS class",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    closeIcon: {
      description: "Custom close icon",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    description: {
      description: "The content of notification box (required)",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    duration: {
      description:
        "Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    icon: {
      description: "Customized icon",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    key: {
      description: "The unique identifier of the Notification",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    message: {
      description: "The title of notification box (required)",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    placement: {
      description:
        "Position of Notification, can be one of topLeft topRight bottomLeft bottomRight",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "topRight",
      },
    },
    style: {
      description: "Customized inline style",
      table: {
        type: {
          summary: "CSSProperties",
        },
      },
    },
    onClick: {
      description:
        "Specify a function that will be called when the notification is clicked",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    onClose: {
      description: "Trigger when notification closed",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    props: {
      description:
        "An object that can contain data-*, aria-*, or role props, to be put on the notification div. This currently only allows data-testid instead of data-* in TypeScript. See https://github.com/microsoft/TypeScript/issues/28960.	Object",
      table: {
        type: {
          summary: "Object",
        },
      },
    },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationExample: Story = {
  render: (type) => {
    return (
      <>
        <div>
          UseSINotification is a hook which returns 2 values
          <ul>
            <li>openNotification function</li>
            <li>notificationContext</li>
          </ul>
          <div>
            We are destructuring the returned values from UseSINotification
            <div>
              <code>
                const {"{openNotification, notificationContext}"} =
                useSiNotification()
              </code>
            </div>
            <p>NotificationContext</p>
          </div>
        </div>
        <div>
          <Notification {...type} />
        </div>
      </>
    );
  },
  args: {
    message: "Example",
    placement: "bottom",
    notificationType: "success",
  },
};
