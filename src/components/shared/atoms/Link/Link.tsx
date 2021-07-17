
import React, { PropsWithChildren } from 'react';

import ITest from 'types/testType';
import { DefaultTheme } from 'styled-components';

import { StyledLink } from './styled';

interface Props extends ITest {
  link: string,
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
  customStyles?: (theme: DefaultTheme) => string;
}

const Link = ({ children, link, onClick, testId, customStyles } : PropsWithChildren<Props>): JSX.Element => {

  return (
    <StyledLink to={link} onClick={onClick} data-testid={testId} customStyles={customStyles}>
      {children}
    </StyledLink>
  )
}

export default Link;