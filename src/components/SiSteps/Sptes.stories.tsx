import type { Meta, StoryObj } from "@storybook/react";
import SiStep from "./index";

const meta = {
  title: "Example/Speps",
  component: SiStep,
  argTypes: {
    status: {
      control: {
        type: "select",
      },
      options: ["wait", "process", "finish", "error"],
    },
    type: {
      control: {
        type: "select",
      },
      options: ["default", "navigation", "inline"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["default", "small"],
    },
    direction: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
    labelPlacement: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
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
