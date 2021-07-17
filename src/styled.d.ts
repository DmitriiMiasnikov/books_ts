import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      black: string,
      whiteF0: string,
      brownED: string,
      blue99: string,
      blue: string,
    },
    headerHeight: string
  }
}