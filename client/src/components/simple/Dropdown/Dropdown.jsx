import React, { useState } from "react";
import * as S from "./styled";

import Content from "./Content";

const Dropdown = (props) => {
  const { children, button } = props;

  const [open, setOpen] = useState(false);

  return (
    <S.DropdownContainer onClick={() => setOpen(true)}>
      {button}
      {open && (
        <Content
          onClose={() => {
            setOpen(false);
          }}
        >
          {children}
        </Content>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
