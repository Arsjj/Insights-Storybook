import { MenuFoldOutlined, UserAddOutlined } from "@ant-design/icons";
import SIRadio from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SIRadio.Group> = {
  title: "SI/SiRadio/SiRadio.Group",
  component: SIRadio.Group,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The label of the radio, passed as children",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    buttonStyle: {
      description: "The style type of radio button",
      table: {
        type: {
          summary: "outline | solid",
        },
      },
      defaultValue: {
        summary: "outline",
      },
      //   control: { type: "boolean" },
    },
    defaultValue: {
      description: "Default selected value",
      table: {
        type: {
          summary: "any",
        },
      },
    },
    disabled: {
      description: "Disable all radio buttons",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
    },
    name: {
      description: "The name property of all input[type='radio'] children",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    options: {
      description: "Set children optional",
      table: {
        type: {
          summary:
            "string[] | number[] | Array<{ label: ReactNode; value: string; disabled?: boolean; }>",
        },
      },
    },
    optionType: {
      description: "Set Radio optionType",
      table: {
        type: {
          summary: "default | button",
        },
      },
      defaultValue: {
        summary: "default",
      },
    },
    size: {
      description: "default | button",
      table: {
        type: {
          summary: "large | middle | small",
        },
      },
    },
    value: {
      description: "Used for setting the currently selected value",
      table: {
        type: {
          summary: "any",
        },
      },
    },
    onChange: {
      description:
        "The callback function that is triggered when the state changes",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "function(e:Event)",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// export const DefaultRadio: Story = {
//   args: {
//     // children: "Label",
//     // autoFocus: false,
//     // checked: false,
//     // defaultChecked: false,
//     // disabled: false,
//     // value: "testadio",
//   },
// };

export const RadioGroup: Story = {
  render: (args) => {
    return (
      <>
        <h4>Radio group can wrap a group of Radio</h4>
        <SIRadio.Group {...args}>
          <SIRadio.Button value="a">
            <UserAddOutlined /> Item
          </SIRadio.Button>
          <SIRadio.Button value="b">
            <UserAddOutlined /> Item
          </SIRadio.Button>
          <SIRadio.Button value="c">
            <MenuFoldOutlined /> Item
          </SIRadio.Button>
        </SIRadio.Group>
        <h4>
          Switcher: Wrap radio buttons with SIRadio.SwitcherGroup.
          It's buttonStyle is "solid" and it provides another design{" "}
        </h4>
        <SIRadio.SwitcherGroup {...args}>
          <SIRadio.Button value="a">
            <UserAddOutlined /> Item
          </SIRadio.Button>
          <SIRadio.Button value="d">
            <MenuFoldOutlined /> Item
          </SIRadio.Button>
        </SIRadio.SwitcherGroup>
      </>
    );
  },
  args: {
    defaultValue: "a",
  },
};

