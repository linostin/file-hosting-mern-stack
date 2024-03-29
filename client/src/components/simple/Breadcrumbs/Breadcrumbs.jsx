import React from "react";
import * as S from "./styled";

const Breadcrumbs = (props) => {
  const { data, startIcon, endIcon, pinnedFirstItem } = props;

  const pinnedFirstItemOnClick = (params) => {
    console.log("TEST");
  };

  return (
    <S.BreadcrumbsContainer>
      <S.ListWrapper>
        {pinnedFirstItem && (
          <S.ListItem onClick={pinnedFirstItemOnClick}>
            <S.Link href="#">{pinnedFirstItem}</S.Link>
          </S.ListItem>
        )}
        {data?.map((element) => (
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
