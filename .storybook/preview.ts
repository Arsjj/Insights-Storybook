import type { Preview } from "@storybook/react";
import { themes, ensure } from '@storybook/theming';




const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    
    // docs: {
    //   theme: ensure(themes.dark), // The replacement theme to use
    // },

  },
};

// export const globalTypes = {
//   scheme: {
//     name: "Scheme",
//     description: "The name of the",
//     defaultValue: "both",
//     toolbar: {
//       icon: "mirror",
//       items: ["light", "dark", "both"],
//       dinamicTitle: true
//     }
//   }
// }



export default preview;
