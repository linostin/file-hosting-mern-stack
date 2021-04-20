import React from "react";
import * as S from "./styled";

const Toolbar = (props) => {
  
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
    <S.ToolbarWrapper direction={getDirection(direction)}>
      <S.ToolbarMenu>{children}</S.ToolbarMenu>
    </S.ToolbarWrapper>
  );
};

export default Toolbar;
