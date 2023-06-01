import type { Meta, StoryObj } from "@storybook/react";
import SeCollapse  from "./index";

const meta = {
    title: "Example/Collapse",
    component: SeCollapse,
    
    argTypes: {
        collapsible: {
            control: {
                type: "select",
            },
            options: ["header", "icon", "disabled"]
        },
        expandIconPosition: {
            control: {
                type: "select",
            },
            options: ["start", "end"]
        },
        size: {
            control: {
                type: "radio",
            },
            options: ["small", "middle", "large"]
        }
    }
} satisfies  Meta<typeof SeCollapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CollapseExample: Story = {
    args: {
        bordered: false,
        accordion: false,
        destroyInactivePanel: false,
        ghost: false,

    }
};






