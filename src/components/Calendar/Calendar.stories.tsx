import type { Meta, StoryObj } from "@storybook/react";

import SeCalendar from "./index";

const meta = {
    title: "Example/Calendar",
    component: SeCalendar,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    },

} satisfies Meta<typeof SeCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarExample: Story = {
    args: {
        foolscreen: false,
        mode: true,
    },
};



