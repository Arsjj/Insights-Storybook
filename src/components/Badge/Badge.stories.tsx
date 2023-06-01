import type { Meta, StoryObj } from "@storybook/react";
import SeBadge from "./index";
import { Avatar } from "antd";
import { css } from "@emotion/react";

const styles = css`
  display: grid;
  gap: 50px;

  section {
    display: flex;
    gap: 20px;
  }

  div {
    border: 1px solid blue;
    border-radius: 8px;
    padding: 15px;
    margin-left: 15px;
  }
`;

const meta = {
  title: "Example/Badge",
  component: SeBadge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "Customize Badge dot color",
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "text",
      },
    },
    count: {
      description: "Number to show in badge",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    dot: {
      description: "Whether to display a red dot instead of count",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    offset: {
      description: "Set offset of the badge dot",
      table: {
        type: {
          summary: "[number, number]",
        },
      },
    },
    overflowCount: {
      description: "Max count to show",
      table: {
        type: {
          summary: "number",
        },
      },
      defaultValue: {
        summary: "99",
      },
    },
    showZero: {
      description: "Whether to show badge when count is zero",
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
      description: "If count is set, size sets the size of badge",
      table: {
        type: {
          summary: "default | small",
        },
      },
      control: {
        type: "radio",
      },
      options: ["default", "small"],
    },
    text: {
      description: "text sets the display text of the status dot",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      control: {
        type: "text",
      },
    },
    title: {
      description: "Text to show when hovering over the badge",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    statusType: {
      description: "Type of badge statu",
      table: {
        type: {
          summary: "default | success | warning | danger | processing",
        },
      },
      defaultValue: {
        summary: "default",
      },
      control: {
        type: "select",
      },
      options: ["success", "warning", "danger", "default", "processing"],
    },
  },
} satisfies Meta<typeof SeBadge>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Badge: Story = {
    render: (args) => {
        return (
            <div css={styles}>
        <section>
          <i>Change args for configuring this one</i>
          <SeBadge {...args} /> 
        </section>
        <section>
          <SeBadge count={7} />
          <SeBadge statusType="warning" count={10} />
          <SeBadge statusType="danger" count={100} />
          <SeBadge statusType="processing" count={1} />
          <SeBadge count={100} statusType="danger">
            <Avatar shape="square" size="large" />
          </SeBadge>
          <SeBadge count={7} offset={[-30, -2]} color="blue">
            <div>
              <i>Badge with offset</i>
            </div>
          </SeBadge>
        </section>
      </div>
    );
},
args: {
    count: 7,
    dot: false,
    title: "Badge",
    statusType: "success",
    overflowCount: 99,
    showZero: false,
  },
};

export const successBadge: Story = {
  args: {
    count: 7,
    dot: false,
    title: "Badge",
    statusType: "success",
    overflowCount: 99,
    showZero: false,
  },
};