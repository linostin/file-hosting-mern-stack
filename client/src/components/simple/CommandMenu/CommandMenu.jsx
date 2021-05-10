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
import { TrainRounded } from "@material-ui/icons";

const CommandMenu = (props) => {
  const { label, startIcon } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
    console.log(showDropdown);
    console.log("showDropdown");
  };

  return (
    <S.CommandMenuContainer>
      <Toolbar>
        <S.ButtonGroupWrapper>
          <Button
            action={handleShowDropdown}
            label="New"
            startIcon={<CreateNewFolderIcon />}
          />
          <Dropdown
            showDropdown={showDropdown}
            dropdownButton={
              <Button
                action={handleShowDropdown}
                label="Upload"
                startIcon={<PublishIcon />}
                endIcon={<ArrowDropDownIcon />}
              />
            }
          >
            <Button label="Sort" startIcon={<SortIcon />} />
            <Button label="View" startIcon={<ViewModuleIcon />} />
          </Dropdown>
        </S.ButtonGroupWrapper>
        <S.ButtonGroupWrapper>
          <Button label="Sort" startIcon={<SortIcon />} />
          <Button label="View" startIcon={<ViewModuleIcon />} />
        </S.ButtonGroupWrapper>
      </Toolbar>
    </S.CommandMenuContainer>
  );
};

export default CommandMenu;
