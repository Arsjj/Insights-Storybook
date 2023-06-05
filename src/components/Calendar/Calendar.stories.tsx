import type { Meta, StoryObj } from "@storybook/react";

import SeCalendar from "./index";

const meta = {
  title: "Example/Calendar",
  component: SeCalendar,
  tags: ["autodocs"],
  argTypes: {
    dateCalendar: {
      description:
        "Customize the display of the date cell, the returned content will be appended to the cell",
      table: {
        type: { summary: "function(date: Dayjs): ReactNode" },
      },
    },
    dateFullCalendar: {
      description:
        "Customize the display of the date cell, the returned content will override the cell",
      table: {
        type: {
          summary: " function(date: Dayjs): ReactNode",
        },
      },
    },
    defaultValue: {
      description: "The date selected by default",
      table: {
        type: { summary: "Dayjs" },
      },
    },
    disabledDate: {
      description:
        "Function that specifies the dates that cannot be selected, currentDate is same dayjs object as value prop which you shouldn't mutate it]",
      table: {
        type: { summary: "(currentDate: Dayjs) => boolean" },
      },
    },
    fullscreen: {
      description: "Whether to display in full-screen",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "true",
      },
    },
    headerRender: {
      description: "Render custom header in panel",
      table: {
        type: {
          summary:
            "function(object:{value: Dayjs, type: string, onChange: f(), onTypeChange: f()})",
        },
      },
    },
    locale: {
      description: "The calendar's locale",
      table: {
        type: { summary: "object" },
      },
    },
    mode: {
      description: "The display mode of the calendar",
      table: {
        type: { summary: "month | year" },
      },
      defaultValue: {
        summary: "month",
      },
    },
    monthCellRender: {
      description:
        "Customize the display of the month cell, the returned content will be appended to the cell",
      table: {
        type: { summary: "function(date: Dayjs): ReactNode" },
      },
    },
    monthFullCellRender: {
      description:
        "Customize the display of the month cell, the returned content will override the cell",
      table: {
        type: {
          summary: " function(date: Dayjs): ReactNode",
        },
      },
      defaultValue: {
        summary: "function(date: Dayjs): ReactNode",
      },
    },
    validChange: {
      description: "To set valid range",
      table: {
        type: { summary: "[dayjs, dayjs" },
      },
    },
    value: {
      description: "The current selected date",
      table: {
        type: { summary: "dayjs" },
      },
    },
    onChange: {
      description: "Callback function when date is changed",
      table: {
        type: { summary: "function(dayjs: Dayjs)" },
      },
    },
    onPanelChange: {
      description: "Callback function when panel is changed",
      table: {
        type: { summary: "function(panel: string)" },
      },
    },
    onSelect: {
      description: "Callback function when date is selected",
      table: {
        type: { summary: "function(dayjs: Dayjs)" },
      },
    },
  },
} satisfies Meta<typeof SeCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarExample: Story = {
  args: {},
};
