import { PropsWithChildren } from "react";

import Modal from "react-modal";
import { DefaultTheme } from "styled-components";

import { modalStyles, ModalWindowWrapper, CloseButton } from "./styled";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  customStyles: (theme: DefaultTheme) => string;
}

const ModalWindow = ({
  children,
  isOpen,
  setIsOpen,
  customStyles,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          ...modalStyles.content,
        },
      }}
    >
      <ModalWindowWrapper customStyles={customStyles}>
        {children}
        <CloseButton onClick={() => setIsOpen(false)} />
      </ModalWindowWrapper>
    </Modal>
  );
};

Modal.setAppElement("body");

export default ModalWindow;
