import type { Meta, StoryObj } from "@storybook/react";
import SiCollapse from "./index";
import SiPanel from "./Panel";

const meta = {
  title: "Example/Collapse",
  component: SiCollapse,
  tags: ["autodocs"],
  argTypes: {
    accordion: {
      description: "If true, Collapse renders as Accordion",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "false",
      },
    },
    activeKey: {
      description: "Key of the active panel",
      table: {
        type: {
          summary: "string[] | string or number[] | number",
        },
      },
      defaultValue: {
        summary:
          "No default value. In accordion mode, it's the key of the first panel",
      },
    },
    bordered: {
      description: "Toggles rendering of the border around the collapse block",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "true",
      },
    },
    collapsible: {
      description:
        "Specify whether the panels of children be collapsible or the trigger area of collapsible",
      table: {
        type: {
          summary: "header | icon | disabled",
        },
      },
      control: {
        type: "select",
      },
      options: ["header", "icon", "disabled"],
    },
    defaultActiveKey: {
      description: "Key of the initial active panel",
      table: {
        type: {
          summary: "string[] | string or number[] | number",
        },
      },
    },
    destroyInactivePanel: {
      description: "Destroy Inactive Panel",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
    },
    expandIcon: {
      description: "Allow to customize collapse icon",
      table: {
        type: {
          summary: "(panelProps) => ReactNode",
        },
      },
    },
    expandIconPosition: {
      description: "Set expand icon position",
      table: {
        type: {
          summary: "start | end",
        },
      },
      control: {
        type: "select",
      },
      options: ["start", "end"],
    },
    ghost: {
      description:
        "Make the collapse borderless and its background transparent",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
    },

    size: {
      description: "Set the size of collapse",
      table: {
        type: {
          summary: "large | middle | small",
        },
      },
      defaultValue: {
        summary: "middle",
      },
      control: {
        type: "radio",
      },
      options: ["small", "middle", "large"],
    },
    onChange: {
      description: "Callback function executed when active panel is changed",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof SiCollapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CollapseExample: Story = {
  render: (args) => {
    return (
      <div>
        <div>
          <h2>Collapse</h2>
          <p>A content area which can be collapsed and expanded.</p>
          <h4>When to use</h4>
          <ul>
            <li>
              Can be used to group or hide complex regions to keep the page
              clean.
            </li>
            <li>
              Accordion is a special kind of Collapse, which allows only one
              panel to be expanded at a time.
            </li>
          </ul>
        </div>
        <SiCollapse>
          <SiPanel header="This is panel header 1" key="1">
            <p>Description</p>
          </SiPanel>
          <SiPanel header="This is panel header 2" key="2">
            Description
          </SiPanel>
          <SiPanel header="This is panel header 3" key="3">
            Another desciption
          </SiPanel>
        </SiCollapse>
      </div>
    );
  },
  args: {
    bordered: false,
    accordion: false,
    destroyInactivePanel: false,
    ghost: false,
  },
};
