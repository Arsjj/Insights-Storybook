import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SiMenu from "./index";
import { SiMenuItem } from "./index.d";
import type { Meta, StoryObj } from "@storybook/react";


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: SiMenuItem[],
  type?: "group"
): SiMenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as SiMenuItem;
}

const items = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const meta = {
  title: "SI/SiMenu",
  component: SiMenu,
  tags: ["autodocs"],
  argTypes: {
    defaultOpenKeys: {
      description: "Array with the keys of default opened sub menus",
      table: {
        type: {
          summary: "string[]",
        },
      },
    },
    defaultSelectedKeys: {
      description: "Array with the keys of default selected menu items",
      table: {
        type: {
          summary: "string[]",
        },
      },
    },

    expandIcon: {
      description: "custom expand icon of submenu",
      table: {
        type: {
          summary:
            "ReactNode | (props: SubMenuProps & { isSubMenu: boolean }) => ReactNode",
        },
      },
    },
    forceSubMenuRender: {
      description: "Render submenu into DOM before it becomes visible",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    inlineCollapsed: {
      description: "Specifies the collapsed status when menu is inline mode",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    inlineIndent: {
      description: "Indent (in pixels) of inline menu items on each level",
      table: {
        type: {
          summery: "number",
        },
      },
      defaultValue: {
        summary: "24",
      },
    },
    items: {
      description: "Menu item content	",
      table: {
        type: {
          summary: "ItemType[]",
        },
      },
    },
    multiple: {
      description: "Allows selection of multiple items",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "false",
      },
    },
    mode: {
      description: "Type of Menu",
      table: {
        type: {
          summary: "vertical | horizontal | inline | inlineWithBadge",
        },
      },
      defaultValue: {
        summary: "vertical",
      },
      control: {
        type: "radio",
      },
      options: ["horizontal", "vertical", "inline", "inlineWithBadge"]

    },
    openKeys: {
      description: "Array with the keys of currently opened sub-menus",
      table: {
        type: {
          summary: "string[]",
        },
      },
    },
    overflowedIndicator: {
      description:
        "Customized the ellipsis icon when menu is collapsed horizontally",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      defaultValue: {
        summary: "<EllipsisOutlined />",
      },
    },
    selectable: {
      description: "Allows selecting menu items",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "true",
      },
    },
    selectedKeys: {
      description: "Array with the keys of currently selected menu items",
      table: {
        type: {
          summary: "string[]",
        },
      },
    },
    style: {
      description: "Style of the root node",
      table: {
        type: {
          summary: "CSSProperties",
        },
      },
    },
    subMenuCloseDelay: {
      description: "Delay time to hide submenu when mouse leaves (in seconds)",
      table: {
        type: {
          summary: "number",
        },
      },
      defaultValue: {
        summary: "0.1",
      },
    },
    subMenuOpenDelay: {
      description: "Delay time to show submenu when mouse enters, (in seconds)",
      table: {
        type: {
          summary: "number",
        },
      },
      defaultValue: {
        summary: "0",
      },
    },
    theme: {
      description: "Color theme of the menu",
      table: {
        type: {
          summary: "light | dark",
        },
      },
      defaultValue: {
        summary: "light",
      },
    },
    triggerSubMenuAction: {
      description: "Which action can trigger submenu open/close",
      table: {
        type: {
          summary: "hover | click",
        },
      },
      defaultValue: {
        summary: "hover",
      },
    },
    onClick: {
      description: "Called when a menu item is clicked",
      table: {
        type: {
          summary: "function({ item, key, keyPath, domEvent })",
        },
      },
    },
    onDeselect: {
      description: "Called when a menu item is deselected (multiple mode only)",
      table: {
        type: {
          summary: "function({ item, key, keyPath, selectedKeys, domEvent })",
        },
      },
    },
    onOpenChange: {
      description: "Called when sub-menus are opened or closed",
      table: {
        type: {
          summary: "function(openKeys: string[])",
        },
      },
    },
    onSelect: {
      description: "Called when a menu item is selected",
      table: {
        type: {
          summary: "function({ item, key, keyPath, selectedKeys, domEvent })",
        },
      },
    },
  },
} satisfies Meta<typeof SiMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  args: {
    // mode: "inline",
    items: items,
  },
};
