import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CheckableSiTag from ".";
import { UserOutlined } from "@ant-design/icons";

const meta = {
  title: "Example/Tags/CheckableSiTag",
  component: CheckableSiTag,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      description: "Checked status of Tag",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
    },
    icon: {
      description: "Set the icon of tag",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      control: {
        type: "",
      },
    },
    iconPosition: {
      description: "Position of icon",
      table: {
        type: {
          summary: "left | right | double",
        }
      },
      defaultValue: {
        summary: "left"
      }
    },
    onClick: {
      description: "Callback executed when Tag is clicked	",
      table: {
        type: {
          summary: "(e) => void"
        }
      }
    },
    onChange: {
      description: "Callback executed when Tag is checked/unchecked	",
      table: {
        type: {
          summary: "(checked) => void"
        }
      }
    }
  },
} satisfies Meta<typeof CheckableSiTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tag: Story = {
  render: (args) => {
    const [check, setCheck] = useState(true);
    const onChange = () => {
      setCheck(!check);
    };
    return (
      <>
        <CheckableSiTag
          checked={check}
          onChange={onChange}
          children="Example"
        />
        <CheckableSiTag {...args} />
      </>
    );
  },
  args: {
    checked: true,
    children: "Configure Tag",
    icon: <UserOutlined />,
  },
};
