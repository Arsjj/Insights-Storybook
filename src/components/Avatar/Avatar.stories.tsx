import type { Meta, StoryObj } from "@storybook/react";
import SiAvatar from ".";

const meta = {
  title: "SI/SiAvatar",
  component: SiAvatar,
  tags: ["autodocs"],
  argTypes: {
    alt: {
      description:
        "This attribute defines the alternative text describing the image",
      table: {
        type: {
          summary: "stirng",
        },
      },
    },
    gap: {
      description: "Letter type unit distance between left and right sides",
      table: {
        type: {
          summary: "number",
        },
      },
      defaultValue: {
        summary: 4,
      },
    },
    icon: {
      description: "Custom icon type for an icon avatar",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    shape: {
      description: "The shape of avatar",
      table: {
        type: {
          summary: "circle | square",
        },
      },
      defaultValue: {
        summary: "circle",
      },
    },
    size: {
      description: "The size of the avatar",
      table: {
        type: {
          summary:
            "number | large | medium | small | default | { xs: number, sm: number, ...}",
        },
      },
      defaultValue: {
        summary: "default",
      },
    },
    src: {
      description:
        "The address of the image for an image avatar or image element",
      table: {
        type: {
          summary: "string | ReactNode",
        },
      },
    },
    srcSet: {
      description: "A list of sources to use for different screen resolutions",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    draggable: {
      description: "Whether the picture is allowed to be dragged",
      table: {
        type: {
          summary: "boolean | 'true' | 'false'",
        },
      },
      defaultValue: {
        summary: "true",
      },
    },
    crossOrigin: {
      description: "CORS settings attributes",
      table: {
        type: {
          summary: "'anonymous' | 'use-credentials' | ''",
        },
      },
    },
    onError: {
      description:
        "Handler when img load error, return false to prevent default fallback behavior",
      table: {
        type: {
          summary: "() => boolean",
        },
      },
    },
  },
} satisfies Meta<typeof SiAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: {
    children: "M",
    size: 108,
    alt: "image",
    shape: "square"
  },
};

Avatar.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/gHEpaCzR2ATF1vuSo2pB0n/S.I%3AFinal_Design_System?type=design&node-id=1-12973&mode=design&t=EngH59I8FI7MjHTI-0"

  }
}
