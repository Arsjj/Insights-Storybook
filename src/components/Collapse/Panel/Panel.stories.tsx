import type { Meta, StoryObj } from "@storybook/react";
import SiPanel from "./index";
import SeCollapse from "../index";
import SiCollapse from "../index";

const meta: Meta<typeof SiPanel> = {
  title: "Example/Collapse/CollapsePanel",
  component: SiPanel,
  tags: ["autodocs"],
  argTypes: {
    collapsible: {
      description:
        "Specify whether the panel be collapsible or the trigger area of collapsible",
      table: {
        type: { summary: "header | icon | disabled" },
      },
    },
    extra: {
      description: "The extra element in the corner",
      table: {
        type: { summary: "ReactNode	" },
      },
    },
    forceRender: {
      description:
        "Forced render of content on panel, instead of lazy rendering after clicking on header",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "false",
      },
    },
    header: {
      description: "Title of the panel",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    key: {
      description: "Unique key identifying the panel from among its siblings",
      table: {
        type: { summary: "string | number" },
      },
    },
    showArrow: {
      description:
        "If false, panel will not show arrow icon. If false, collapsible can't be set as icon",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "true",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Panels: Story = {
  render: (args) => {
    return <div>
        <SiCollapse>
            <SiPanel {...args}>This is panel 1</SiPanel>
        </SiCollapse>
    </div>;
  },
  args: {
    header: "CollapsePanel",
    showArrow: true,
  },
};
