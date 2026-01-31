import { colors, spacing, radii, shadows, typography, layout, breakpoints } from './tokens.ts';

export const theme = {
  colors,
  spacing,
  radii,
  shadows,
  typography,
  layout,
  breakpoints,
};

export type AppTheme = typeof theme;
