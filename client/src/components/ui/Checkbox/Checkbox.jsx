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
  }

  if (label) {
    return (
      <S.CheckboxContainer>
        <S.Checkbox>
          <S.HiddenCheckbox checked={true}/>
          <S.StyledCheckbox checked={true}>
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
      <S.HiddenCheckbox checked={true} />
      <S.StyledCheckbox checked={true}>
        <S.Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </S.Icon>
      </S.StyledCheckbox>
    </S.Checkbox>
  );
};

export default Checkbox;
