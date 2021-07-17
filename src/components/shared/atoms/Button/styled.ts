import styled, { css } from "styled-components";

interface SBProps {
  customStyles?: string;
}

export const StyledButton = styled.div<SBProps>(
  ({ theme: { colors }, customStyles }) => css`
    color: ${colors.white};
    background-color: ${colors.blue99};
    border-radius: 0.7rem;
    padding: 0.5rem 0.8rem;
    
    &:hover {
      cursor: pointer;
    }

    ${customStyles}
  `
);
