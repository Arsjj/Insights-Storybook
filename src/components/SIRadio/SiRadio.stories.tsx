import SIRadio from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SIRadio> = {
  title: "SI/SiRadio/SIRadio.Button",
  component: SIRadio,
  tags: ["autodocs"],
  argTypes: {
    // type: { control: { type: "select" }, options: ProgresTypes },
    // percent: { control: { type: "range", min: 0, max: 100, step: 5 } },
    // size: { control: { type: "select" }, options: ["default", "small"] },
    // strokeLinecap: { control: "radio", options: ["round", "square"] },
    // status: { control: { type: "select" }, options: ["normal", "exception", "success"] },
    children: {
      description: "The label of the radio, passed as children",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    autoFocus: {
      description: "Whether get focus when component mounted",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
      control: { type: "boolean" },
    },
    checked: {
      description: "Specifies whether the radio is selected",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
      control: { type: "boolean" },
    },
    defaultChecked: {
      description:
        "Specifies the initial state: whether or not the radio is selected",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Disable radio",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
      control: { type: "boolean" },
    },
    value: {
      description:
        "According to value for comparison, to determine whether the selected",
      table: {
        type: {
          summary: "any",
        },
      },
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const DefaultRadio: Story = {
  args: {
    children: "Label",
    autoFocus: false,
    checked: false,
    defaultChecked: false,
    disabled: false,
    value: "testadio",
  },
};

export const RadioButton: Story = {
  render: (args) => {
    return (
      <SIRadio.Group>
        <SIRadio.Button {...args}>Button</SIRadio.Button>
        <SIRadio.Button {...args}>Button</SIRadio.Button>
        <SIRadio.Button {...args}>Button</SIRadio.Button>
      </SIRadio.Group>
    );
  },
};
