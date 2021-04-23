import React from "react";
import * as S from "./styled";

import Button from "../../Button";
import Toolbar from "../../Toolbar";
import CommandButtonGroup from "../../CommandButtonGroup";

const CommandMenu = (props) => {
  const { label, icon } = props;

  return (
    <S.CommandMenuContainer>
      <Toolbar>
        <CommandButtonGroup>
          <Button label={label} icon={icon} />
        </CommandButtonGroup>
        <CommandButtonGroup>
          <Button label={label} icon={icon} />
        </CommandButtonGroup>
      </Toolbar>
    </S.CommandMenuContainer>
  );
};

export default CommandMenu;
