import type { Meta, StoryObj } from "@storybook/react";
import SiSwitch from "./index";

const meta = {
  title: "SI/SiSwitch",
  component: SiSwitch,
  tags: ["autodocs"],
  argTypes: {
    autoFocus: {
      description: "Whether get focus when component mounted",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    checked: {
      description: "Determine whether the Switch is checked",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: false,
      },
      // control: {
      //   type: "radio",
      // },
      // options: [true, false],
    },
    checkedChildren: {
      description: "The content to be shown when the state is checked",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    className: {
      description: "The additional class to Switch",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    defaultChecked: {
      description: "Whether to set the initial state",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    disabled: {
      description: "Disable switch",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    loading: {
      description: "Loading state of switch",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    size: {
      description: "The size of the Switch, options: default small",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "default",
      },
    },
    unCheckedChildren: {
      description: "The content to be shown when the state is unchecked",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    onChange: {
      description: "Trigger when the checked state is changing",
      table: {
        type: {
          summary: "function(checked: boolean, event: Event)",
        },
      },
    },
    onClick: {
      description: "Trigger when clicked",
      table: {
        type: {
          summary: "function(checked: boolean, event: Event)",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
  },
} satisfies Meta<typeof SiSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Switch: Story = {
  args: {
    disabled: false,
    size: "default",
    loading: false,
    autoFocus: false,
    checked: false,
    
  },
};
