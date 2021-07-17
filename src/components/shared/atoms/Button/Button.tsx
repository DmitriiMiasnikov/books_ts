import React, { PropsWithChildren } from "react";

import type Itest from "types/testType";

import {
  StyledButton
} from './styled';

interface Props extends Itest {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  customStyles?: string,
}

const Button = ({ children, customStyles, testId, onClick }: PropsWithChildren<Props>): JSX.Element => {

  return (
    <StyledButton customStyles={customStyles} data-testid={testId} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;