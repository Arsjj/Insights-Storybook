import type { Meta, StoryObj } from "@storybook/react";
import SiRAte from "./index";

const meta = {
  title: "Si/SiRate",
  component: SiRAte,
  tags: ["autodocs"],
  argTypes: {
    allowClear: {
      description: "Whether to allow clear when click again",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "true",
      },
    },
    allowHalf: {
      description: "Whether to allow semi selection",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "false",
      },
    },
    autoFocus: {
      description: "If get focus when component mounted",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "false",
      },
    },
    character: {
      description: "The custom character of rate",
      table: {
        type: { summary: "ReactNode | (RateProps) => ReactNode" },
      },
      defaultValue: {
        summary: "<StarFilled />",
      },
    },
    className: {
      description: "The custom class name of rate",
      table: {
        type: { summary: "string" },
      },
    },
    count: {
      description: "Star count",
      table: {
        type: { summary: "number" },
      },
      defaultValue: {
        summary: "5",
      },
    },
    defaultValue: {
      description: "The default value",
      table: {
        type: { summary: "number" },
      },
      defaultValue: {
        summary: "0",
      },
    },
    disabled: {
      description: "If read only, unable to interact",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "false",
      },
    },
    style: {
      description: "The custom style object of rate",
      table: {
        type: { summary: "CSSProperties" },
      },
    },
    tooltips: {
      description: "Customize tooltip by each character",
      table: {
        type: { summary: "string[]" },
      },
    },
    value: {
      description: "The current value",
      table: {
        type: { summary: "number" },
      },
    },
    onBlur: {
      description: "Callback when component lose focus",
      table: {
        type: { summary: "function()" },
      },
    },
    onChange: {
      description: "Callback when select value",
      table: {
        type: { summary: "function(value: number)" },
      },
    },
    onFocus: {
      description: "Callback when component get focus",
      table: {
        type: { summary: "function()" },
      },
    },
    onHoverChange: {
      description: "Callback when hover item",
      table: {
        type: { summary: "function(value: number)" },
      },
    },
    onKeyDown: {
      description: "Callback when keydown on component",
      table: {
        type: { summary: "function(event)" },
      },
    },
  },
} satisfies Meta<typeof SiRAte>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rate: Story = {
  args: {
    value: 3,
    count: 7
  },
};
