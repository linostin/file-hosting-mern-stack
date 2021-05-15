import React from "react";
import * as S from "./styled";

const Breadcrumbs = (props) => {
  const { data, startIcon, endIcon } = props;

  return (
    <S.BreadcrumbsContainer>
      <S.ListWrapper>
        {data.map((element) => (
          <S.ListItem>
            {startIcon && <S.ListIcon></S.ListIcon>}
            <S.Link href="#">{element}</S.Link>
            {endIcon && <S.ListIcon></S.ListIcon>}
          </S.ListItem>
        ))}
      </S.ListWrapper>
    </S.BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
