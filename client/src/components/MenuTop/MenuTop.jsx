import React, { useState } from "react";
import {
  MenuTopContainer,
  MenuTopButtonsWrapper,
  MenuTopButtonIcon,
} from "./styled";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuTopButtons from "./MenuTopButtons/MenuTopButtons";
import MenuTopViewTypeButton from "./MenuTopButtons/MenuTopViewTypeButton";

const MenuTop = ({
  checkboxSelectedFiles,
  checkboxSelectedFilesHandler,
  openMenuTop,
  backFolderFunc,
  popupOpenFunc,
  fileUploadFunc,
  downloadLoadClickHandler,
  deleteFileClickHandler,
  filesViewTypeHandler,
  filesViewType,
  openFolder,
  activeFolder,
}) => {
  const [closeButton, setCloseButton] = useState(false);

  const closeButtonHandler = () => {
    setCloseButton(!closeButton);
    if (closeButton === false) {
      checkboxSelectedFilesHandler([]);
    }
  };

  return (
    <MenuTopContainer>
      <MenuTopButtonsWrapper>
        {openFolder ? (
          <MenuTopButtons type="back" func={backFolderFunc} />
        ) : null}
        <MenuTopButtons type="create" func={popupOpenFunc} />
        <MenuTopButtons type="upload" func={fileUploadFunc} />
        {activeFolder && (
          <MenuTopButtons type="download" func={downloadLoadClickHandler} />
        )}
        {activeFolder && (
          <MenuTopButtons type="delete" func={deleteFileClickHandler} />
        )}
        {activeFolder && <MenuTopButtons type="edit" />}
        {activeFolder && <MenuTopButtons type="share" />}
      </MenuTopButtonsWrapper>
      <MenuTopButtonsWrapper>
        {activeFolder && (
          <MenuTopButtonIcon>
            <Typography color="inherit" variant="subtitle1" component="div">
              {checkboxSelectedFiles} selected
            </Typography>
            <IconButton aria-label="close" onClick={closeButtonHandler}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </MenuTopButtonIcon>
        )}
        <MenuTopViewTypeButton
          filesViewTypeHandler={filesViewTypeHandler}
          filesViewType={filesViewType}
        />
      </MenuTopButtonsWrapper>
    </MenuTopContainer>
  );
};

export default MenuTop;
