import type { Meta, StoryObj } from "@storybook/react";
import SiStep from "./index";

const meta = {
  title: "Example/SiSteps",
  component: SiStep,
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional class to Steps",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    current: {
      description:
        "To set the current step, counting from 0. You can overwrite this state by using status of Step",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    status: {
      description:
        "To specify the status of current step, can be set to one of the following values: wait process finish error",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "process",
      },
      control: {
        type: "select",
      },
      options: ["wait", "process", "finish", "error"],
    },
    type: {
      description:
        "Type of steps, can be set to one of the following values: default navigation inline",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "default",
      },
      control: {
        type: "select",
      },
      options: ["default", "navigation", "inline"],
    },
    size: {
      description:
        "To specify the size of the step bar, default and small are currently supported",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "default",
      },
      control: {
        type: "select",
      },
      options: ["default", "small"],
    },
    direction: {
      description:
        "To specify the direction of the step bar, horizontal or vertical",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "horizontal",
      },
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
    initial: {
      description: "Set the initial step, counting from 0",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    labelPlacement: {
      description:
        "Place title and description with horizontal or vertical direction	",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "horizontal",
      },
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
    percent: {
      description:
        "Progress circle percentage of current step in process status (only works on basic Steps)",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    progressDot: {
      description:
        "Steps with progress dot style, customize the progress dot by setting it to a function. labelPlacement will be vertical",
      table: {
        type: {
          summary:
            "boolean | (iconDot, {index, status, title, description}) => ReactNode",
        },
      },
      defaultValue: {
        summary: "false",
      },
    },
    responsive: {
      description:
        "Change to vertical direction when screen width smaller than 532px",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "true",
      },
    },
    onChange: {
      description: "Trigger when Step is changed",
      table: {
        type: {
          summary: "(current) => void",
        },
      },
    },
    items: {
      description: "StepItem content",
      table: {
        type: {
          summary: "StepItem",
        }
      },
      defaultValue: {
        summary: "[]"
      }
    }
  },
} satisfies Meta<typeof SiStep>;

const stepItems = [
  {
    title: "Finished",
  },
  {
    title: "In Progress",
  },
  {
    title: "In Progress",
  },
  {
    title: "Waiting",
  },
  {
    title: "Waiting",
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Steps: Story = {
  args: {
    current: 3,
    initial: 0,
    items: stepItems,
    responsive: true,
  },
};
