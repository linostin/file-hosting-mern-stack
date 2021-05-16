import React from 'react'
import * as S from "./styled";

const Input = (props) => {

  const { value, onChange } = props;

  return (
    <S.InputContainer>
      <S.Input value={value || ""} onChange={(event) => (onChange(event.target.value))}/>
    </S.InputContainer>
  )
}

export default Input
