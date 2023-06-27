import type { Meta, StoryObj } from "@storybook/react";
import useAddSiTag from "./index";
import { AddSiTagProps } from "..";

const AddTag = (args: AddSiTagProps) => {
  const { addSiTag, addedSiTags, siTags } = useAddSiTag([]);

  return (
    <div>
      {addSiTag({ ...args })}
      {addedSiTags}
    </div>
  );
};

const meta = {
  title: "Example/Tags/useAddSiTag",
  component: AddTag,
  tags: ["autodocs"],
  // argTypes: {
  //   closable: {
  //     description: "Whether the Tag can be closed",
  //     table: {
  //       type: {
  //         summary: "boolean",
  //       },
  //     },
  //     defaultValue: {
  //       summary: false,
  //     },
  //     control: {
  //       type: "radio",
  //     },
  //     options: [true, false],
  //   },
  //   closeIcon: {
  //     description: "Custom close icon",
  //     table: {
  //       type: {
  //         summary: "ReactNode",
  //       },
  //     },
  //   },
  //   color: {
  //     description: "Color of the Tag",
  //     table: {
  //       type: {
  //         summary: "string",
  //       },
  //     },
  //   },
  //   icon: {
  //     description: "Set the icon of tag",
  //     table: {
  //       type: {
  //         summary: "ReactNode",
  //       },
  //     },
  //   },
  //   bordered: {
  //     description: "Whether has border style",
  //     table: {
  //       type: {
  //         summary: "boolean",
  //       },
  //     },
  //     defaultValue: {
  //       summary: true,
  //     },
  //     control: {
  //       type: "radio",
  //     },
  //     options: [true, false],
  //   },
  //   onClose: {
  //     description: "Callback executed when tag is closed",
  //     table: {
  //       type: {
  //         summary: "(e) => void",
  //       },
  //     },
  //     control: {
  //       type: "",
  //     },
  //   },
  // },
} satisfies Meta<typeof AddTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddTag1: Story = {
  render: (args) => {
    return (
      <>
        <div>
          <AddTag {...args} />
        </div>
        <div>
          UseAddSiTag is a hook which returns 3 values
          <ul>
            <li>addSiTag - tag component which add tags </li>
            <li>addedSiTags - a div of added tags</li>
            <li>siTags - an array of added tags</li>
          </ul>
          <div>
            We are destructuring the returned values from UseSINotification
            <div>
              <code>
                const {"{addSiTag, addedSiTags, siTags}"} = useAddSiTag();
              </code>
            </div>
            <p>
              {/* Use notificationContext above colling openNotification() with
              following props{" "} */}
            </p>
          </div>
        </div>
      </>
    );
  },
  args: {
    tagProps: {
      children: "children",
    },
    // inputProps: {}
  },
};
