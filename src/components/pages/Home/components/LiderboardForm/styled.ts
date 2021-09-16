import styled, { css } from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div(
  ({ theme: { colors } }) => css`
    width: 25rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;

    &:not(:first-child) {
      border-top: 1px solid ${colors.blue99};
    }
  `
);

export const Number = styled.div(
  ({ theme: { colors } }) => css`
    background-color: ${colors.blueD6};
    color: ${colors.blue};
    border-radius: 50%;
    min-width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `
);

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 50%;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 50%;
`;
