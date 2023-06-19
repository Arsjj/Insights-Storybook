import type { Meta, StoryObj } from "@storybook/react";
import SiEmpty from "./index";

const meta = {
    title: "Si/SiEmpty",
    component: SiEmpty,
    tags: ["autodocs"],
    argTypes: {
        description: {
            description: "Customize description",
            table: {
                type: { summary: "ReactNode" },
              },
        },
        image: {
            description: "Customize image. Will treat as image url when string provided",
            table: {
                type: { summary: "ReactNode" },
              },
              defaultValue: {
                summary: "SiEmpty.Svg"
              }
        },
        imageStyle: {
            description: "The style of image",
            table: {
                type: {summary: "CSSProperties"},
            }
        }

    }
} satisfies Meta<typeof SiEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyImg: Story = {
    args: {
        description: "",
    }

};



