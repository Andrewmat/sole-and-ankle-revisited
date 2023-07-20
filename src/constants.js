export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  LAPTOP_MIN: 81.25,
  TABLET_MIN: 59.375,
  PHONE_MIN: 37.5,
};

export const MEDIA_QUERIES = {
  LAPTOP_DOWN: `(max-width: ${BREAKPOINTS.LAPTOP_MIN}rem)`,
  TABLET_DOWN: `(max-width: ${BREAKPOINTS.TABLET_MIN}rem)`,
  PHONE_DOWN: `(max-width: ${BREAKPOINTS.PHONE_MIN}rem)`,
};
