import type { Meta, StoryObj } from "@storybook/react";

import SiPagination from "./index";

const meta = {
  title: "SI/SiPagination",
  component: SiPagination,
  tags: ["autodocs"],
  argTypes: {
    current: {
      description: "Current page number",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    defaultCurrent: {
      description: "Default initial page number",
      table: {
        type: {
          summary: "number",
        },
      },
      defaultValue: {
        summary: 1,
      },
    },
    defaultPageSize: {
      description: "Default number of data items per page",
      table: {
        type: {
          summary: "number",
        },
      },
      defaultValue: {
        summary: 10,
      },
    },
    disabled: {
      description: "Disable pagination",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    hideOnSinglePage: {
      description: "Whether to hide pager on single page",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
    },
    pageSize: {
      description: "Number of data items per page",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    pageSizeOptions: {
      description: "Specify the sizeChanger options",
      table: {
        type: {
          summary: "string[] or number[]",
        },
      },
      defaultValue: {
        summary: "[10, 20, 50, 100]",
      },
    },
    responsive: {
      description:
        "If size is not specified, Pagination would resize according to the width of the window",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    showLessItems: {
      description: "Show less page items",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    showTitle: {
      description: "Show page item's title",
      табле: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: true,
      },
    },
    showSizeChanger: {
      description:
        "Determine whether to show pageSize select, it will be true when total > 50",
      табле: {
        type: {
          summary: "boolean",
        },
      },
    },
    showTotal: {
      description: "To display the total number and range",
      табле: {
        type: {
          summary: "function(total, range)",
        },
      },
      defaultValue: {
        summary: "boolean",
      },
    },
    simple: {
      description: "Whether to use simple mode",
      табле: {
        type: {
          summary: "boolean",
        },
      },
    },
    size: {
      description: "Specify the size of Pagination, can be set to small",
      табле: {
        type: {
          summary: "default or small",
        },
      },
      defaultValue: {
        summary: "default",
      },
    },

    total: {
      description: "Total number of data items",
      табле: {
        type: {
          summary: "number",
        },
      },
      defaultValue: {
        summary: 0,
      },
    },
    showQuickJumper: {
      description: "Determine whether you can jump to pages directly",
      табле: {
        type: {
          summary: "boolean or { goButton: ReactNode }",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    itemRender: {
      description: "To customize item's innerHTML",
      табле: {
        type: {
          summary:
            "(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode",
        },
      },
    },
    onChange: {
      description:
        "Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments",
      табле: {
        type: {
          summery: "function(page, pageSize)",
        },
      },
      control: {
        type: "",
      },
    },
    onShowSizeChange: {
      description: "Called when pageSize is changed",
      табле: {
        type: {
          summary: "function(current, size)",
        },
      },
      control: {
        type: "",
      },
    },
  },
} satisfies Meta<typeof SiPagination>;

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
