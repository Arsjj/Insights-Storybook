// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

// import {ReactComponent as ArrowDown} from './Logo.svg';
// "https://dev-website-strapi-images.s3.fr-par.scw.cloud/poster_success_stories_c45e4b4ef6.png"

const theme = {
  base: 'dark',
  brandTitle: 'Sentium Insights',
  brandUrl: 'https://example.com',
  brandImage: 'https://cdn.staff.am/staff.am/upload/f/d/7/1/fd7164a2.png',
  // brandTarget: '_self',
  // appBg: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(154,150,237,0.46559873949579833) 5%, rgba(4,2,55,1) 8%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);',
  // appContentBg: 'red',
  // appBorderColor: "blue",
  appBorderRadius: 10,

}

addons.setConfig({
  theme: theme,
});


 