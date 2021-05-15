import React from "react";
import * as S from "./styled";

const Modal = () => {
  return (
    <S.ModalContainer>
      <S.Dialog>
        <S.Header>
          <S.Title></S.Title>
        </S.Header>
        <S.Body>
          <S.Content>

          </S.Content>
        </S.Body>
        <S.Footer></S.Footer>
      </S.Dialog>
    </S.ModalContainer>
  );
};

export default Modal;
