import React, { useState } from "react";
import * as S from "./styled";

import Content from "./Content";
import Button from "../../ui/Button";

const Dropdown = (props) => {
  const { label, startIcon, endIcon, children } = props;

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    console.log("open", open);
    setOpen(!open);
    console.log("tets");
    console.log("open", open);
  };

  return (
    <S.DropdownContainer>
      <Button
        onClick={handleOpen}
        label={label}
        startIcon={startIcon}
        endIcon={endIcon}
      />
      {open && (
        <Content
          onClose={() => {
            setOpen(false);
          }}
        >
          {children}
        </Content>
      )}
      {/* <S.Content showContent={open}>{children}</S.Content> */}
    </S.DropdownContainer>
  );
};

export default Dropdown;
