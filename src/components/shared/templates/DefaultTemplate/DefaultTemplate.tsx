import type { PropsWithChildren } from "react";

import type Props from "types/testType";

import UserControls from "../../molecules/UserControls";

import { Wrapper, Header, Logo, MainContent } from "./styled";

const DefaultTemplate = ({
  children,
  testId,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Wrapper data-testid={testId}>
      <Header>
        <Logo>Books</Logo>
        <UserControls />
      </Header>
      <MainContent>{children}</MainContent>
    </Wrapper>
  );
};

export default DefaultTemplate;
