import styled, { css } from "styled-components";

export const BookWrapper = styled.div(
  ({ theme: { colors } }) => css`
  position: repative;
  width: 10rem;
  height: 15rem;
  background-color: ${colors.blue};
  margin: 1rem 0 0 1rem;
`)