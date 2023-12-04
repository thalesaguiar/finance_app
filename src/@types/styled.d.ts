import "styled-components/native";

import {ThemeType} from "../theme";

export type Theme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme { }
}