import React from "react";
import * as S from "./styled";

import Button from "../../Button";
import Toolbar from "../../Toolbar";
import SearchInput from "../../SearchInput";
import CommandButtonGroup from "../../CommandButtonGroup";

const TopMenu = (props) => {
  const { label, icon } = props;

  return (
    <S.TopMenuContainer>
      <Toolbar>
        <CommandButtonGroup>
          <Button label={label} icon={icon} />
        </CommandButtonGroup>
        <CommandButtonGroup>
          <SearchInput />
        </CommandButtonGroup>
        <CommandButtonGroup>
          <Button label={label} icon={icon} />
        </CommandButtonGroup>
      </Toolbar>
    </S.TopMenuContainer>
  );
};

export default TopMenu;
