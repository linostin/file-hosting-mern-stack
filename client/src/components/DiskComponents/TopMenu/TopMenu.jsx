import React from "react";
import * as S from "./styled";

import Button from "../../ui/Button";
import Toolbar from "../../simple/Toolbar";
import SearchInput from "../../ui/SearchInput";
import CommandButtonGroup from "../../simple/CommandButtonGroup";

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
