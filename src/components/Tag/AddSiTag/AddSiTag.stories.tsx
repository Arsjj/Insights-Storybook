import type { Meta, StoryObj } from "@storybook/react";
import AddSiTag from ".";

const meta = {
  title: "Example/Tags/AddSiTag",
  component: AddSiTag,
  tags: ["autodocs"],
  argTypes: {
    closable: {
      description: "Whether the Tag can be closed",
      table: {
        type: {
          summary: "boolean",
        },
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
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    color: {
      description: "Color of the Tag",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    icon: {
      description: "Set the icon of tag",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    bordered: {
      description: "Whether has border style",
      table: {
        type: {
          summary: "boolean",
        },
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
      table: {
        type: {
          summary: "(e) => void",
        },
      },
      control: {
        type: "",
      },
    },
  },
} satisfies Meta<typeof AddSiTag>;

export default meta;
type Story = StoryObj<typeof meta>;


export const AddTag: Story = {
  args: {
    children: "New Tag",
    color: "blue",
  },
};
