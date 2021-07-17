import styled, { css, DefaultTheme } from "styled-components";

interface SBProps {
  customStyles?: (theme: DefaultTheme) => string;
}

export const StyledButton = styled.div<SBProps>(
  ({ theme: { colors }, theme, customStyles }) => css`
    color: ${colors.white};
    background-color: ${colors.blue};
    border-radius: 0.7rem;
    padding: 0.5rem 0.8rem;
    white-space: nowrap;
    transition: 0.1s opacity;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    ${customStyles && customStyles(theme)}
  `
);
