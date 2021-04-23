import React from "react";
import * as S from "./styled";

const Checkbox = () => {
  return (
    <S.CheckboxContainer>
      <S.Checkbox>
        <S.CheckboxInput type="checkbox" name="checkbox" />
        <S.CheckboxControl>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        </S.CheckboxControl>
      </S.Checkbox>
      <S.Label>Checkbox</S.Label>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
