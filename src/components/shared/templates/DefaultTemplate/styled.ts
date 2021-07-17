import styled, { css } from "styled-components";

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

export const Logo = styled.div(
  ({ theme: { colors } }) => css`
    font-size: 2rem;
    line-height: 1.75rem;
    color: ${colors.blue99};
    font-style: italic;
    margin-left: 1.5rem;
    height: fit-content;
  `
)

export const MainContent = styled.div(
  ({ theme: { headerHeight } }) => css`
  position: relative;
  margin: ${headerHeight} 0 0;
`)