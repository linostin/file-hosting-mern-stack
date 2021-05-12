import React from "react";
import * as S from "./styled";

import List from "../../simple/List";
import SideBar from "../../simple/SideBar";

const SideMenu = (props) => {
  const { data } = props;

  return (
    <S.SideMenuContainer>
      <SideBar direction="left">
        <List marginTop="50px" data={data} />
      </SideBar>
    </S.SideMenuContainer>
  );
};

export default SideMenu;
