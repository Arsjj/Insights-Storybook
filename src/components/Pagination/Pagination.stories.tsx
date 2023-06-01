import type { Meta, StoryObj } from "@storybook/react";

import SePagination from "./index";

const meta = {
  title: "Example/Pagination",
  component: SePagination,
  tags: ["autodocs"],
  argTypes: {
    current: {
      description: "Current page number",
      type: {
        summary: "number",
      },
    },
    defaultCurrent: {
      description: "Default initial page number",
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: 1,
      },
    },
    defaultPageSize: {
      description: "Default number of data items per page",
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: 10,
      },
    },
    disabled: {
      description: "Disable pagination",
      type: {
        summary: "number",
      },
    },
    hideOnSinglePage: {
      description: "Whether to hide pager on single page",
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
    pageSize: {
      description: "Number of data items per page",
      type: {
        summary: "number",
      },
    },
    pageSizeOptions: {
      description: "Specify the sizeChanger options",
      type: {
        summary: "string[] or number[]",
      },
      defaultValue: {
        summary: "[10, 20, 50, 100]",
      },
    },
    responsive: {
      description:
        "If size is not specified, Pagination would resize according to the width of the window",
      type: {
        summary: "boolean",
      },
    },
    showLessItems: {
      description: "Show less page items",
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: false,
      },
    },
    showTitle: {
      description: "Show page item's title",
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: true,
      },
    },
    showSizeChanger: {
      description:
        "Determine whether to show pageSize select, it will be true when total > 50",
      type: {
        summary: "boolean",
      },
    },
    showTotal: {
      description: "To display the total number and range",
      type: {
        summary: "function(total, range)",
      },
      defaultValue: {
        summary: "boolean",
      },
    },
    simple: {
      description: "Whether to use simple mode",
      type: {
        summary: "boolean",
      },
    },
    size: {
      description: "Specify the size of Pagination, can be set to small",
      type: {
        summary: "default or small",
      },
      defaultValue: {
        summary: "default",
      }
    },

    total: {
      description: "Total number of data items",
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: 0,
      },
    },
    showQuickJumper: {
      description: "Determine whether you can jump to pages directly",
      type: {
        summary: "boolean or { goButton: ReactNode }",
      },
      defaultValue: {
        summary: false,
      },
    },
    itemRender: {
      description: "To customize item's innerHTML",
      type: {
        summary:
          "(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode",
      },
    },
    onChange: {
      description:
        "Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments",
      type: {
        summery: "function(page, pageSize)",
      },
      control: {
        type: "",
      },
    },
    onShowSizeChange: {
      description: "Called when pageSize is changed",
      type: {
        summary: "function(current, size)"
      },
      control: {
        type: "",
      },
    }
  },
} satisfies Meta<typeof SePagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pages: Story = {
  args: {
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSize: 10,
    responsive: true,
    showLessItems: true,
    showTitle: true,
    hideOnSinglePage: false,
    showQuickJumper: true,
    showSizeChanger: false,
    total: 500,
  },
};
