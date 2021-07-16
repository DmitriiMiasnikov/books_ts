import type { PropsWithChildren } from "react";

import type Props from "types/testType";

import { Wrapper } from "./styled";

const DefaultTemplate = ({
  children,
  testId,
}: PropsWithChildren<Props>): JSX.Element => {
  return <Wrapper data-testid={testId}>{children}</Wrapper>;
};

export default DefaultTemplate;
