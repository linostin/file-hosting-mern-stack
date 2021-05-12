import React, { useState } from "react";
import * as S from "./styled";

import GetAppIcon from "@material-ui/icons/GetApp";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AddIcon from "@material-ui/icons/Add";
import SortIcon from "@material-ui/icons/Sort";
import PublishIcon from "@material-ui/icons/Publish";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import Button from "../../ui/Button";
import Toolbar from "../Toolbar";
import Dropdown from "../Dropdown/";
import List from "../List";

const listDataUploadDropdown = [
  { text: "Все файлы" },
  { text: "Недавно измененные" },
];

const CommandMenu = (props) => {
  // const { selected } = props;

  const selected = true;

  return (
    <S.CommandMenuContainer>
      {selected ? (
        <Toolbar>
          <S.ButtonGroupWrapper>
            <S.ButtonCommandMenu label="New" startIcon={<CreateNewFolderIcon />} />
            <S.ButtonCommandMenu label="New" startIcon={<CreateNewFolderIcon />} />
            <S.ButtonCommandMenu label="New" startIcon={<CreateNewFolderIcon />} />
            <S.ButtonCommandMenu label="New" startIcon={<CreateNewFolderIcon />} />
            <S.ButtonCommandMenu label="New" startIcon={<CreateNewFolderIcon />} />
          </S.ButtonGroupWrapper>
          <S.ButtonGroupWrapper>
            <Button label="Sort" startIcon={<SortIcon />} />
            <Button label="View" startIcon={<ViewModuleIcon />} />
          </S.ButtonGroupWrapper>
        </Toolbar>
      ) : (
        <Toolbar>
          <S.ButtonGroupWrapper>
            <Button label="New" startIcon={<CreateNewFolderIcon />} />
            <Dropdown
              label="Upload"
              startIcon={<PublishIcon />}
              endIcon={<ArrowDropDownIcon />}
            >
              <List data={listDataUploadDropdown} />
            </Dropdown>
          </S.ButtonGroupWrapper>
          <S.ButtonGroupWrapper>
            <Button label="Sort" startIcon={<SortIcon />} />
            <Button label="View" startIcon={<ViewModuleIcon />} />
          </S.ButtonGroupWrapper>
        </Toolbar>
      )}
    </S.CommandMenuContainer>
  );
};

export default CommandMenu;
