import React from 'react'
import * as S from "./styled";

const Dropdown = (props) => {

  const { dropdownButton, children, showDropdown } = props;

  return (
    <S.DropdownContainer>
      {dropdownButton}
      <S.Content 
      showDropdown={showDropdown}
      >
      {children}
      </S.Content>
    </S.DropdownContainer>
  )
}

export default Dropdown
