import type { Preview } from "@storybook/react";
import { themes, ensure } from '@storybook/theming';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'




const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS  // different screen sizes
    }
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
