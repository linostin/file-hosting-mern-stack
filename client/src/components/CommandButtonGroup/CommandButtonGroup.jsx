import React from 'react'
import * as S from './styled'

const CommandButtonGroup = (props) => {

  const { children } = props;

  return (
    <S.CommandButtonGroupWrapper>
      {children}
    </S.CommandButtonGroupWrapper>
  )
}

export default CommandButtonGroup
