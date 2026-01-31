import 'styled-components';
import type { AppTheme } from './design-system/theme.ts';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
