import type { Meta, StoryObj } from "@storybook/react";
import SeEmpty from "./index";
import emptyImg from "Empty.png"

const meta = {
    title: "Example/Empty",
    component: SeEmpty,
} satisfies Meta<typeof SeEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyImg: Story = {

};



