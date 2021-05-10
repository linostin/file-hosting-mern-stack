import React from "react";
import * as S from "./styled";

const Button = (props) => {
  const { label, startIcon, endIcon, action } = props;

  return (
    <S.Button onClick={action}>
      <S.ButtonLabel>
        {startIcon && <S.ButtonIcon>{startIcon}</S.ButtonIcon>}
        {label}
        {endIcon && <S.ButtonIcon>{endIcon}</S.ButtonIcon>}
      </S.ButtonLabel>
    </S.Button>
  );
};

export default Button;
