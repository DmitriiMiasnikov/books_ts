import styled, { css, DefaultTheme } from "styled-components";
import { NavLink } from "react-router-dom";

interface SLProps {
  customStyles?: (theme: DefaultTheme) => string;
}

export const StyledLink = styled(NavLink)<SLProps>(
  ({ theme: { colors }, theme, customStyles }) => css`
  color: ${colors.black};
  text-decoration: none;
  transition: .1s opacity;

  &:hover {
    opacity: 0.8;
  }

  ${customStyles && customStyles(theme)}
`)