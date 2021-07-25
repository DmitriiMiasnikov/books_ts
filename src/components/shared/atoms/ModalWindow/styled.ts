import styled, { css, DefaultTheme } from "styled-components";

interface CBProps {
  customStyles?: (theme: DefaultTheme) => string;
}

export const modalStyles = {
  content: {
    borderRadius: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #E2EAF1',
    backgroundColor: '#FFFFFF',
    boxShadow: '1px 2px 6px 0 rgba(25, 25, 27, 0.15)',
    overflow: 'none',
  },
  overlay: {
    zIndex: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export const ModalWindowWrapper = styled.div<CBProps>(
  ({ theme, customStyles }) => css`
    position: relative;
    padding: 0.5rem;

    ${customStyles && customStyles(theme)}
  `
);

export const CloseButton = styled.div(
  ({ theme: { colors } }) => css`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: ${colors.white};
    cursor: pointer;

    &::before {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      content: "✕";
    }
  `
);
