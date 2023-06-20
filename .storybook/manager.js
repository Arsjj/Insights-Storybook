// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import Icon from "../src/svg/index"


// "https://dev-website-strapi-images.s3.fr-par.scw.cloud/poster_success_stories_c45e4b4ef6.png"

const theme = {
  base: 'dark',
  brandTitle: `<img src='../public/Frame 249.svg' width="100%"/>`,
  brandUrl: 'https://sentium-consulting.com/',
  appBorderRadius: 10,
}

addons.setConfig({
  theme: theme,
});


