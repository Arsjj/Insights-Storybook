import type { Meta, StoryObj } from "@storybook/react";
import SiDropdown from "./index";


const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item </a>,
      key: "1",
    },
    // {
    //   type: 'divider',
    // },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

const meta = {
  title: "Si/SiDropdown",
  component: SiDropdown,
  tags: ["autodocs"],
  argTypes: {
    arrow: {
      description: "Whether the dropdown arrow should be visible",
      table: {
        type: { summary: "boolean | { pointAtCenter: boolean }" },
      },
      defaultValue: {
        summary: "false",
      },
    },
    autoAdjustOverflow: {
      description:
        "Whether to adjust dropdown placement automatically when dropdown is off screen",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "true",
      },
    },
    autoFocus: {
      description: "Focus element in overlay when opened",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "false",
      },
    },
    disabled: {
      description: "Whether the dropdown menu is disabled",
      table: {
        type: { summary: "boolean" },
      },
    },
    destroyPopupOnHide: {
      description: "Whether destroy dropdown when hidden",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: {
        summary: "false",
      },
    },
    dropdownRender: {
      description: "Customize dropdown content",
      table: {
        type: { summary: "(menus: ReactNode) => ReactNode	" },
      },
    },
    getPopupContainer: {
      description:
        "To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition.",
      table: {
        type: { summary: "(triggerNode: HTMLElement) => HTMLElement" },
      },
      defaultValue: {
        summary: "() => document.body	",
      },
    },
    menu: {
      description: "The menu props",
      table: {
        type: { summary: "MenuProps" },
      },
    },
    overlayClassName: {
      description: "The class name of the dropdown root element",
      table: {
        type: { summary: "string" },
      },
    },
    overlayStyle: {
      description: "The style of the dropdown root element",
      table: {
        type: { summary: "CSSProperties" },
      },
    },
    placement: {
      description: "Placement of popup menu: ",
      table: {
        type: { summary: "bottom | bottomLeft | bottomRight | top | topLeft | topRight" },
      },
      defaultValue: {
        summary: "bottomRight",
      },
      control: {
        type: "select"
      },
      options: ["bottom", "bottomLeft", "bottomRight",  "top", "topLeft", "topRight"]
    },
    rotatingArrow: {
        description: "Down rotating arrow icon when menu is open",
        table: {
            type: {
                summary: "true | undefined"
            }
        }
    },
    children: {
        description: "",
        table: {
            type: { summary: "ReactNode" },
          },

    },
    trigger: {
      description:
        "The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens",
      table: {
        type: { summary: "Array<click|hover|contextMenu>" },
      },
      defaultValue: {
        summary: "[hover]",
      },
    //   control: {
    //     type: "",
    //   },
      
    },
    open: {
      description: "Whether the dropdown menu is currently open.",
      table: {
        type: { summary: "boolean" },
      },
    },
    onOpenChange: {
      description:
        "Called when the open state is changed. Not trigger when hidden by click item.",
      table: {
        type: { summary: "(open: boolean) => void" },
      },
    },
  },
} satisfies Meta<typeof SiDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dropdown: Story = {
  args: {
    disabled: false,
    // trigger: ["click"],
    autoFocus: false,
    rotatingArrow: true,
    children: <>Click Me </>,
    menu: {items},
    placement: "bottomRight"
  },
};
