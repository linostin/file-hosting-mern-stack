import React, { useState } from "react";
import * as S from "./styled";

import GetAppIcon from "@material-ui/icons/GetApp";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import SortIcon from "@material-ui/icons/Sort";
import PublishIcon from "@material-ui/icons/Publish";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import Button from "../../ui/Button";
import Toolbar from "../Toolbar";
import Dropdown from "../Dropdown/";
import List from "../List";

const listDataUploadDropdown = [
  { text: "Все файлы" },
  { text: "Недавно измененные" },
];

const CommandMenu = (props) => {
  const { modalHandler, goBackFolderHandler } = props;

  const selected = false;

  const tetsButtonClick = () => {
    console.log("Test Button Click");
  };

  return (
    <S.CommandMenuContainer>
      {selected ? (
        <Toolbar>
          <S.ButtonGroupWrapper>
            <S.ButtonCommandMenu
              label="Back"
              startIcon={<KeyboardBackspaceIcon />}
              onClick={goBackFolderHandler}
            />
            <S.ButtonCommandMenu label="Share" startIcon={<ShareIcon />} />
            <S.ButtonCommandMenu label="Download" startIcon={<GetAppIcon />} />
            <S.ButtonCommandMenu label="Delete" startIcon={<DeleteIcon />} />
            <S.ButtonCommandMenu label="Rename" startIcon={<EditIcon />} />
          </S.ButtonGroupWrapper>
          <S.ButtonGroupWrapper>
            <S.ButtonCommandMenu label="Selected" endIcon={<CloseIcon />} />
          </S.ButtonGroupWrapper>
        </Toolbar>
      ) : (
        <Toolbar>
          <S.ButtonGroupWrapper>
            <S.ButtonCommandMenu
              label="Back"
              startIcon={<KeyboardBackspaceIcon />}
              onClick={goBackFolderHandler}
            />
            <S.ButtonCommandMenu
              label="New"
              startIcon={<CreateNewFolderIcon />}
            />
            <S.ButtonCommandMenu
              label="Modal"
              startIcon={<OpenInNewIcon />}
              onClick={() => modalHandler(true)}
            />
            {/* <Dropdown
              label="Upload"
              startIcon={<PublishIcon />}
              endIcon={<ArrowDropDownIcon />}
            >
              <List data={listDataUploadDropdown} />
            </Dropdown> */}
          </S.ButtonGroupWrapper>
          <S.ButtonGroupWrapper>
            <S.ButtonCommandMenu label="Sort" startIcon={<SortIcon />} />
            <S.ButtonCommandMenu label="View" startIcon={<ViewModuleIcon />} />
          </S.ButtonGroupWrapper>
        </Toolbar>
      )}
    </S.CommandMenuContainer>
  );
};

export default CommandMenu;
