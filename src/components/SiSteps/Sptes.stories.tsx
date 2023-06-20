import type { Meta, StoryObj } from "@storybook/react";
import SiStep from "./index";
import { css } from "@emotion/react";

const styles = css`
  padding: 20px;
  background-color: #bdbcbc21;
  border-radius: 8px;
  margin: 40px 0;


  h3 {
    margin: 0;
  }

  table {
    font-family: Nunito Sans;
    border-collapse: collapse;
    width: 100%;
  }

  th {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    font-weight: 400;
    padding: 20px 20px 10px 0px;
  }

  td {
    font-size: 13px;
    font-weight: normal;
    vertical-align: text-top;
  }

  td:nth-child(1) {
    font-family: Nunito Sans;
    font-weight: 600 ;
    color: #2e3438;
    font-size: 15px;
    /* color: blue */
  }


  td:nth-child(2) {
    width: 300px;
    padding-right: 30px;
  }

  td:nth-child(3) {
    color: #c41d7f
  }

  td {
    padding: 10px 0px;
  }

  span {
    border: 1px solid #ecf4f9;
    color: rgba(46, 52, 56, 0.9);
    background-color: #f7fafc;
    width: fit-content;
    padding: 0px 5px;
    margin: 2px;
  }
`;

const meta = {
  title: "Example/SiSteps",
  component: SiStep,
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional class to Steps",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    current: {
      description:
        "To set the current step, counting from 0. You can overwrite this state by using status of Step",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    status: {
      description:
        "To specify the status of current step, can be set to one of the following values: wait process finish error",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "process",
      },
      control: {
        type: "select",
      },
      options: ["wait", "process", "finish", "error"],
    },
    type: {
      description:
        "Type of steps, can be set to one of the following values: default navigation inline",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "default",
      },
      control: {
        type: "select",
      },
      options: ["default", "navigation", "inline"],
    },
    menuType: {
      description: "Additional inline type",
      table: {
        type: {
          summary: "bollean",
        },
      },
      // control: {
      //   type: "radio",
      // },
      // options: ["true", "false"],
    },
    size: {
      description:
        "To specify the size of the step bar, default and small are currently supported",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "default",
      },
      control: {
        type: "select",
      },
      options: ["default", "small"],
    },
    direction: {
      description:
        "To specify the direction of the step bar, horizontal or vertical",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "horizontal",
      },
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
    initial: {
      description: "Set the initial step, counting from 0",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    labelPlacement: {
      description:
        "Place title and description with horizontal or vertical direction	",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "horizontal",
      },
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
    percent: {
      description:
        "Progress circle percentage of current step in process status (only works on basic Steps)",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    progressDot: {
      description:
        "Steps with progress dot style, customize the progress dot by setting it to a function. labelPlacement will be vertical",
      table: {
        type: {
          summary:
            "boolean | (iconDot, {index, status, title, description}) => ReactNode",
        },
      },
      defaultValue: {
        summary: "false",
      },
    },
    responsive: {
      description:
        "Change to vertical direction when screen width smaller than 532px",
      table: {
        type: {
          summary: "boolean",
        },
      },
      defaultValue: {
        summary: "true",
      },
    },
    onChange: {
      description: "Trigger when Step is changed",
      table: {
        type: {
          summary: "(current) => void",
        },
      },
    },
    items: {
      description: "StepItem content",
      table: {
        type: {
          summary: "StepItem",
        },
      },
      defaultValue: {
        summary: "[]",
      },
    },
  },
} satisfies Meta<typeof SiStep>;

const stepItems = [
  {
    title: "Finished",
  },
  {
    title: "In Progress",
  },
  {
    title: "In Progress",
  },
  {
    title: "Waiting",
  },
  {
    title: "Waiting",
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Steps: Story = {
  render: (args) => {
    return (
      <>
        <p>
          Steps is a navigation bar that guides users through the steps of a
          task.
        </p>

        <SiStep {...args}/>

        <div css={styles}>
          <h3>StepItem</h3>
          <table>
            <tr>
              <th>Property </th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
            <tr>
              <td>disabled </td>
              <td>Disable click</td>
              <td>boolean</td>
              <td>boolean</td>
            </tr>
            <tr>
              <td>description</td>
              <td>Description of the step, optional property</td>
              <td>ReactNode</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>Icon of the step, optional property</td>
              <td>ReactNode</td>
            </tr>
            <tr>
              <td>status</td>
              <td>
                To specify the status. It will be automatically set by
                <span>current</span> of Steps if not configured. Optional values
                are: <span>wait</span>
                <span>process</span>
                <span>finish</span>
                <span>error</span>
              </td>
              <td>string</td>
              <td>
                <span>wait</span>
              </td>
            </tr>
            <tr>
              <td>subTitle</td>
              <td>Subtitle of the step</td>
              <td>ReactNode</td>
            </tr>
            <tr>
              <td>title</td>
              <td>Title of the step</td>
              <td>ReactNode</td>
            </tr>
          </table>
        </div>
      </>
    );
  },
  args: {
    current: 3,
    initial: 0,
    items: stepItems,
    responsive: true,
    menuType: false
  },
};


// export const Step:Story = {
//   args: {
//     current: 3,
//     initial: 0,
//     items: stepItems,
//     responsive: true,

//   }

// }
