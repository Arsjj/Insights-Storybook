// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

// import {ReactComponent as ArrowDown} from './Logo.svg';
// "https://dev-website-strapi-images.s3.fr-par.scw.cloud/poster_success_stories_c45e4b4ef6.png"

const theme = {
  // base: 'light',
  brandTitle: 'Sentium Insights',
  brandUrl: 'https://example.com',
  brandImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGPOTyfTP89FoIm8b_qs6bdeTgrJ7rgw1f21gRIOxVg&s',
  brandTarget: '_self',
  appBg: 'rgba(25,25,69,1)',
  // appContentBg: 'red',
  // appBorderColor: "blue",
  appBorderRadius: 10,

}

addons.setConfig({
  theme: theme,
});