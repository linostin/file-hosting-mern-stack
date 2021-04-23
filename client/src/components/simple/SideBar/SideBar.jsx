import React from 'react'
import * as S from './styled'

const SideBar = (props) => {

  const { children, direction } = props;

  const getDirection = (direction) => {
    switch (direction) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      default:
        return "flex-end";
    }
  };

  return (
    <S.SideBarWrapper direction={getDirection(direction)}>
      {children}
    </S.SideBarWrapper>
  )
}

export default SideBar
