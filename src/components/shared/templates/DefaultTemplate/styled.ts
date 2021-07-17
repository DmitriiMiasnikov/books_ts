import styled, { css, DefaultTheme } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`

export const Header = styled.div(
  ({ theme: { headerHeight, colors } }) => css`
  position: fixed;
  top: 0;
  left: 0;
  height: ${headerHeight};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.whiteF0};
  border-bottom: 1px solid ${colors.brownED};
`)

export const customLogoStyles = ({ colors }: DefaultTheme) => `
  color: ${colors.blue};
  margin: 0 1.5rem;
  font-style: italic;
  font-size: 2rem;
  line-height: 1.75rem;
`

export const customMenuLinkStyles = ({ colors }: DefaultTheme) => `
  padding: 0.5rem 0.7rem;
  background-color: ${colors.blueD6};
  color: ${colors.blue};
  border-radius: 1rem;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.75rem;
`

export const MainContent = styled.div(
  ({ theme: { headerHeight } }) => css`
  position: relative;
  margin: ${headerHeight} 0 0;
`)