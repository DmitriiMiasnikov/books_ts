import styled, { DefaultTheme } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin: 0 0.5rem 0 0;
  }
`

export const customButtonStyles = ({ colors }: DefaultTheme) => `
  background-color: transparent; 
  color: ${colors.black};
  `