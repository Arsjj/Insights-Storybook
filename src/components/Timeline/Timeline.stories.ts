import type { Meta, StoryObj } from "@storybook/react";
import SeTimeline from "./index";
import { TimeLineItemProps } from "antd/es/timeline/TimelineItem";

const items: TimeLineItemProps[] = [
  {
    label: "2015-09-01",
    children: "Create a services",
  },
  {
    label: "2015-09-01 09:12:11",
    children: "Solve initial network problems",
  },
  {
    children: "Technical testing",
  },
  {
    label: "2015-09-01 09:12:11",
    children: "Network problems being solved",
  },
];

const meta = {
  title: "Example/Timeline",
  component: SeTimeline,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      description:
        "By sending alternate the timeline will distribute the nodes to the left and right",
      table: {
        type: {
          summary: "left or alternate or right",
        },
      },
    },
    pending: {
      description: "Set the last ghost node's existence or its content",
      table: {
        type: {
          summary: "boolean | ReactNode",
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
    pendingDot: {
      description: "Set the dot of the last ghost node when pending is true",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      defaultValue: {
        summary: "<LoadingOutlined />",
      },
    },
    reverse: {
      description: "Whether reverse nodes or not",
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
    items: {
      description: "Each node of timeline",
      table: {
        type: {
          summary: `
          items[]             
          `,
        },
      },
    },
  },
} satisfies Meta<typeof SeTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimeLineExample: Story = {
  args: {
    mode: "alternate",
    items: items,
  },
};
