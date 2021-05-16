import React, { useEffect } from "react";
import CloseIcon from '@material-ui/icons/Close';
import * as S from "./styled";

const Modal = (props) => {
  const { isVisible = false, title, content, footer, onClose } = props;

  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  })

  return isVisible ? (
    <S.ModalContainer onClick={onClose}>
      <S.Dialog onClick={e => e.stopPropagation()}>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Close onClick={onClose}><CloseIcon/></S.Close>
        </S.Header>
        <S.Body>
          <S.Content>{content}</S.Content>
        </S.Body>
        {footer && <S.Footer>{footer}</S.Footer>}
      </S.Dialog>
    </S.ModalContainer>
  ) : null;
};

export default Modal;
