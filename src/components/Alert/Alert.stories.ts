import type { Meta, StoryObj } from "@storybook/react";

import SiAlert from "./index";

const meta = {
  title: "SI/SiAlert",
  component: SiAlert,
  tags: ["autodocs"],
  argTypes: {
    action: {
      description: "The action of Alert",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    afterClose: {
      description: "Called when close animation is finished",
      table: {
        type: {
          summary: "() => void",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    closable: {
      description: "Whether Alert can be closed",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    closeText: {
      description: "Close text to show",
      table: {
        type: {
          summary: "ReactNode",
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
      defaultValue: {
        summary: "<CloseOutlined />",
      },
    },
    description: {
      description: "Additional content of Alert",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    icon: {
      description: "Custom icon, effective when showIcon is true",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    message: {
      description: "Content of Alert",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    showIcon: {
      description: "Whether to show icon",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false, in banner mode default is true",
      },
    },
    banner: {
      description: "Whether to show as banner",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    type: {
      description:
        "Type of Alert styles, options: success, info, warning, error",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "info, in banner mode default is warning",
      },
      control: {
        type: "select",
      },
      options: ["success", "error", "info", "warning"],
    },
  },
} satisfies Meta<typeof SiAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  args: {
    message: "Great component",
    description: "You have done good job",
    closable: true,
    showIcon: true,
    banner: false,
    type: "success"
  },
};
