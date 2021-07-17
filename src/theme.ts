import { DefaultTheme } from "styled-components";

export enum Colors {
  white = '#fff',
  black = '#000',
  whiteF0 = '#f0efeb',
  brownED = '#eddcd2',
  blue99 = '#99c1de',
  blue = '#0077b6'
}



const theme: DefaultTheme = {
  colors: Colors,
  headerHeight: '4rem',
}

export default theme;