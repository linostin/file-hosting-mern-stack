import React from "react";
import * as S from "./styled";

const Button = (props) => {
  const { label, startIcon, endIcon, ...other } = props;

  return (
    <S.Button {...other}>
      <S.ButtonLabel>
        {startIcon && <S.ButtonIcon>{startIcon}</S.ButtonIcon>}
        {label}
        {endIcon && <S.ButtonIcon>{endIcon}</S.ButtonIcon>}
      </S.ButtonLabel>
    </S.Button>
  );
};

export default Button;
