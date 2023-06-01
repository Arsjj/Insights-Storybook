import type { Meta, StoryObj } from "@storybook/react";
import SiTag from "./index";

const meta = {
  title: "Example/Tags",
  component: SiTag,
  tags: ["autodocs"],
  argTypes: {
    closable: {
      description: "Whether the Tag can be closed",
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: false,
      },
      control: {
        type: "radio",
      },
      options: [true, false],
    },
    closeIcon: {
      description: "Custom close icon",
      type: {
        summary: "ReactNode",
      },
    },
    color: {
      description: "Color of the Tag",
      type: {
        summary: "string",
      },
    },
    icon: {
      description: "Set the icon of tag",
      type: {
        summary: "ReactNode",
      },
    },
    bordered: {
      description: "Whether has border style",
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: true,
      },
      control: {
        type: "radio",
      },
      options: [true, false],
    },
    onClose: {
      description: "Callback executed when tag is closed",
      type: {
        summary: "(e) => void",
      },
      control: {
        type: "",
      },
    },
  },
} satisfies Meta<typeof SiTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tag: Story = {
  args: {
    children: "Tag",
    bordered: true,
    closable: true,
    color: "",
  },
};

export const ChackableTag: Story = {
  args: {
    checkable: true,
    children: "Click me",
    checked: true,
  },
};

export const AddTag: Story = {
  args: {
    ...Tag.args,
    children: "New Tag",
    add: true,
    color: "blue",
  },
};
