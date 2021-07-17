import type { PropsWithChildren } from "react";

import type Props from "types/testType";
import Link from "../../atoms/Link";

import UserControls from "../../molecules/UserControls";

import { Wrapper, Header, customLogoStyles, MainContent } from "./styled";

const DefaultTemplate = ({
  children,
  testId,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Wrapper data-testid={testId}>
      <Header>
        <Link link="/home" customStyles={customLogoStyles}>
          Books
        </Link>
        <UserControls />
      </Header>
      <MainContent>{children}</MainContent>
    </Wrapper>
  );
};

export default DefaultTemplate;
