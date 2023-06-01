// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

const theme = {
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://sentium-consulting.com/assets/sentium-consulting-og.png',
  brandTarget: '_self',
  appBg: '#120338',
  // appContentBg: 'red',
  // appBorderColor: "blue",
  appBorderRadius: 10,

}

addons.setConfig({
  theme: theme,
});