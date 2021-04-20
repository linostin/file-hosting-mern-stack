import React from "react";
import * as S from "./styled";

const SearchInput = () => {
  return (
    <S.SearchInputWrapper>
      <S.SearchInput type="search" placeholder="Search.." />
    </S.SearchInputWrapper>
  );
};

export default SearchInput;
