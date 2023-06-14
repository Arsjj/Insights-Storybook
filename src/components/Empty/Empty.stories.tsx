import type { Meta, StoryObj } from "@storybook/react";
import SiEmpty from "./index";

const meta = {
    title: "Example/Empty",
    component: SiEmpty,
} satisfies Meta<typeof SiEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyImg: Story = {

};



