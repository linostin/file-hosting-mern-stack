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
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Button from "../../ui/Button";
import Toolbar from "../Toolbar";
import Dropdown from "../Dropdown/";
import List from "../List";

const listDataUploadDropdown = [
  { text: "Все файлы" },
  { text: "Недавно измененные" },
];

const listDataSortDropdown = [
  { text: "По имени" },
  { text: "По типу" },
  { text: "По дате" },
];

const listDataViewDropdown = [
  {text: "Список"},  
  {text: "Сетка"},   
]

const CommandMenu = (props) => {
  const { modalHandler, goBackFolderHandler, sortTypeHandler, viewTypeHandler } = props;

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
              label="New Folder"
              startIcon={<CreateNewFolderIcon />}
              onClick={() => modalHandler(true)}
            />
            <Dropdown
              button={
                <S.ButtonCommandMenu
                  label="Upload"
                  startIcon={<PublishIcon />}
                />
              }
            >
              <List data={listDataUploadDropdown} />
            </Dropdown>
          </S.ButtonGroupWrapper>
          <S.ButtonGroupWrapper>
            <Dropdown
              button={
                <S.ButtonCommandMenu label="Sort" startIcon={<SortIcon />} />
              }
            >
              <List data={listDataSortDropdown} selectedListNameHandler={sortTypeHandler}/>
            </Dropdown>
            <Dropdown
              button={
                <S.ButtonCommandMenu label="View" startIcon={<ViewModuleIcon />} />
              }
            >
              <List data={listDataViewDropdown} selectedListNameHandler={viewTypeHandler}/>
            </Dropdown>
            <S.ButtonCommandMenu label="Info" startIcon={<InfoOutlinedIcon />} />
          </S.ButtonGroupWrapper>
        </Toolbar>
      )}
    </S.CommandMenuContainer>
  );
};

export default CommandMenu;
