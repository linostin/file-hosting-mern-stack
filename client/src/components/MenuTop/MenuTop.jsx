import React, { useState } from "react";
import {
  MenuTopContainer,
  MenuTopButtonsWrapper,
  MenuTopButtonIcon,
} from "./styled";
import { menuTopData } from "./index";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuTopButtons from "./MenuTopButtons/MenuTopButtons"


const MenuTop = ({
  checkboxSelectedFiles,
  checkboxSelectedFilesHandler,
  openMenuTop,
}) => {
  console.log(menuTopData.buttons);

  const [closeButton, setCloseButton] = useState(true);

  const closeButtonHandler = () => {
    setCloseButton(!closeButton);
    if (closeButton === false) {
      checkboxSelectedFilesHandler([]);
    }
  };

  if (openMenuTop) {
    return (
      <MenuTopContainer>
        <MenuTopButtonsWrapper>
          <MenuTopButtons type='download'/>
          <MenuTopButtons type='delete'/>
          <MenuTopButtons type='edit'/>
          <MenuTopButtons type='share'/>
        </MenuTopButtonsWrapper>
        {closeButton && (
          <MenuTopButtonIcon>
            <Typography color="inherit" variant="subtitle1" component="div">
              {checkboxSelectedFiles} selected
            </Typography>
            <IconButton aria-label="close" onClick={closeButtonHandler}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </MenuTopButtonIcon>
        )}
      </MenuTopContainer>
    );
  } else {
    return (
      <MenuTopContainer>
        <MenuTopButtonsWrapper>
          <MenuTopButtons type='back'/>
          <MenuTopButtons type='create'/>
          <MenuTopButtons type='upload'/>
        </MenuTopButtonsWrapper>
      </MenuTopContainer>
    );
  }
};

export default MenuTop;
