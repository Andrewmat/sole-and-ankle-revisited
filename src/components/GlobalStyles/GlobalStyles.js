import { createGlobalStyle } from 'styled-components/macro';

export const COLORS_VAR_NAMES = {
  white: '--color-white',
  gray: {
    100: '--color-gray-100',
    300: '--color-gray-300',
    500: '--color-gray-500',
    700: '--color-gray-700',
    '700/80': '--color-gray-700-80',
    900: '--color-gray-900',
  },
  primary: '--color-primary',
  secondary: '--color-secondary',
};

export const COLORS = {
  white: 'var(--color-white)',
  gray: {
    100: 'var(--color-gray-100)',
    300: 'var(--color-gray-300)',
    500: 'var(--color-gray-500)',
    700: 'var(--color-gray-700)',
    '700/80': 'var(--color-gray-700-80)',
    900: 'var(--color-gray-900)',
  },
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
};

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html, body, #root {
  height: 100%;
}

body {
  ${COLORS_VAR_NAMES.white}: hsl(0deg 0% 100%);
  ${COLORS_VAR_NAMES.primary}: hsl(340deg 65% 47%);
  ${COLORS_VAR_NAMES.secondary}: hsl(240deg 60% 63%);
  ${COLORS_VAR_NAMES.gray[100]}: hsl(185deg 5% 95%);
  ${COLORS_VAR_NAMES.gray[300]}: hsl(190deg 5% 80%);
  ${COLORS_VAR_NAMES.gray[500]}: hsl(196deg 4% 60%);
  ${COLORS_VAR_NAMES.gray[700]}-hsl: 220deg 5% 40%;
  ${COLORS_VAR_NAMES.gray[700]}: hsl(var(${COLORS_VAR_NAMES.gray[700]}-hsl));
  ${COLORS_VAR_NAMES.gray['700/80']}: hsl(var(${COLORS_VAR_NAMES.gray[700]}-hsl) / 0.8);
  ${COLORS_VAR_NAMES.gray[900]}: hsl(220deg 3% 20%);
}
`;

export default GlobalStyles;
