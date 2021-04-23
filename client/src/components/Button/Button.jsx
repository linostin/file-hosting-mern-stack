import React from "react";
import * as S from "./styled";

const Button = (props) => {

  const { label, icon } = props;

  return (
    <S.Button>
      <S.ButtonLabel>
        {icon && <S.ButtonIcon>{icon}</S.ButtonIcon>}
        {label}
      </S.ButtonLabel>
    </S.Button>
  );
};

export default Button;
