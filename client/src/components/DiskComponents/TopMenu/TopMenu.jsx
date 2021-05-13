import React from "react";
import * as S from "./styled";

import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "../../ui/Avatar";
import TextLogo from '../../ui/TextLogo'
import Button from "../../ui/Button";
import Toolbar from "../../simple/Toolbar";
import SearchInput from "../../ui/SearchInput";

const TopMenu = (props) => {
  const { label, icon } = props;

  return (
    <S.TopMenuContainer>
      <Toolbar>
        <S.TopMenuWrapper>
          <MenuIcon />
          <TextLogo/>
        </S.TopMenuWrapper>
        <S.TopMenuWrapper>
          <SearchInput />
        </S.TopMenuWrapper>
        <S.TopMenuWrapper>
          <Avatar />
        </S.TopMenuWrapper>
      </Toolbar>
    </S.TopMenuContainer>
  );
};

export default TopMenu;
