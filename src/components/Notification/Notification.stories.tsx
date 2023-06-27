import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "antd";
import useSiNotification from "./index";
import { SiNotificationProps } from "./index.d";
import { css } from "@emotion/react";

const styles = css`
  margin-bottom: 20px;
`;

const SiNotification = ({ ...args }: SiNotificationProps) => {
  const { openNotification, notificationContext } = useSiNotification();

  return (
    <>
      {notificationContext}
      <Button css={styles} onClick={() => openNotification({ ...args })}>
        Click me
      </Button>
    </>
  );
};

const meta = {
  title: "SI/useSiNotification",
  component: SiNotification,
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
      control: {
        type: "select",
      },
      options: [
        "top",
        "topLeft",
        "topRight",
        "bottom",
        "bottomLeft",
        "bottomRight",
      ],
    },
    type: {
      description: "Ther are 4 options for notification type",
      table: {
        type: {
          summary: "success | info | error | warning",
        },
      },
      control: {
        type: "select",
      },
      options: [
        "success",
        "info",
        "error",
        "warning"
      ],
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
    // props: {
    //   description:
    //     "An object that can contain data-*, aria-*, or role props, to be put on the notification div. This currently only allows data-testid instead of data-* in TypeScript. See https://github.com/microsoft/TypeScript/issues/28960.	Object",
    //   table: {
    //     type: {
    //       summary: "Object",
    //     },
    //   },
    // },
  },
} satisfies Meta<typeof SiNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationExample: Story = {
  render: (args) => {
    return (
      <>
        <div>
          <SiNotification {...args} />
        </div>
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
            <p>
              Use notificationContext above colling openNotification() with
              following props{" "}
            </p>
          </div>
        </div>
      </>
    );
  },
  args: {
    message: "Example",
    placement: "topRight",
    type: "success",
  },
};
