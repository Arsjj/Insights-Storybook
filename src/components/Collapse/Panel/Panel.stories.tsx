import type { Meta, StoryObj } from "@storybook/react";
import SePanel from "./index";
import SeCollapse from "../index";

const meta: Meta <typeof SePanel> = {
    title: "CollapsePanel",
    component: SePanel,
    decorators: [
        (Story) => (
            <SeCollapse>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </SeCollapse>
        ),
    ],

}

export default meta;
type Story = StoryObj<typeof meta>;

export const CollapsePanel: Story = {
    args: {
        header: "CollapsePanel",
        showArrow: true,
        children: <p>Collapse description</p>
    }
};

// export const CollapsePanel: Story = {
//     render: () => <SeCollapse><SePanel key="sd" header="Pam]nel Mid">text</SePanel></SeCollapse>,
//     args: {
//         header: "CollapsePanel",
//         showArrow: true,
//         key: "collapse",
//         children: <p>Collapse description</p>
//
//     }
// };






