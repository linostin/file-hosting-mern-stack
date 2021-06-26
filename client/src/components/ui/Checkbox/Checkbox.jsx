import React, { useState } from "react";
import * as S from "./styled";

const Checkbox = (props) => {
  const {
    label,
    checked,
    defaultChecked,
    onChange,
    color,
    disabled,
  } = props;

  const [checkedCheckbox, setCheckedCheckbox] = useState(false)

  const handleChackboxChange = (event) => {
    setCheckedCheckbox(event.target.checked)
    console.log(event.target.checked)
    console.log(event)
  }

  if (label) {
    return (
      <S.CheckboxContainer>
        <S.Checkbox>
          <S.HiddenCheckbox checked={checked}/>
          <S.StyledCheckbox checked={checked}>
            <S.Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </S.Icon>
          </S.StyledCheckbox>
        </S.Checkbox>
        <S.Label>{label}</S.Label>
      </S.CheckboxContainer>
    );
  }

  return (
    <S.Checkbox>
      <S.HiddenCheckbox
       onClick={(event)=>handleChackboxChange(event)}
       checked={checked} />
      <S.StyledCheckbox
       checked={checked}>
        <S.Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </S.Icon>
      </S.StyledCheckbox>
    </S.Checkbox>
  );
};

export default Checkbox;
