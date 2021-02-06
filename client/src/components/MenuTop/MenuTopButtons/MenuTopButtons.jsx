import React from "react";
import { MenuTopButtonIcon } from "../styled";
import GetAppIcon from "@material-ui/icons/GetApp";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import PublishIcon from "@material-ui/icons/Publish";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "@material-ui/core/Button";

const getButtonIcon = (type, name, func) => {
  switch (type) {
    case "download":
      return (
        <MenuTopButtonIcon>
          <GetAppIcon fontSize="small" />
          <Button size="small" onClick={(event) => func(event)}>
            {name ? name : "Скачать"}
          </Button>
        </MenuTopButtonIcon>
      );

    case "delete":
      return (
        <MenuTopButtonIcon>
          <DeleteIcon fontSize="small" />
          <Button size="small" onClick={(event) => func(event)}>
            {name ? name : "Удалить"}
          </Button>
        </MenuTopButtonIcon>
      );

    case "edit":
      return (
        <MenuTopButtonIcon>
          <EditIcon fontSize="small" />
          <Button size="small" onClick={func}>
            {name ? name : "Переименовать"}
          </Button>
        </MenuTopButtonIcon>
      );

    case "share":
      return (
        <MenuTopButtonIcon>
          <ShareIcon fontSize="small" />
          <Button size="small" onClick={func}>
            {name ? name : "Дать доступ"}
          </Button>
        </MenuTopButtonIcon>
      );

    case "create":
      return (
        <MenuTopButtonIcon>
          <CreateNewFolderIcon fontSize="small" />
          <Button size="small" onClick={func}>
            {name ? name : "Создать папку"}
          </Button>
        </MenuTopButtonIcon>
      );

    case "upload":
      return (
        <MenuTopButtonIcon>
          <PublishIcon fontSize="small" />
          <input
            // accept="image/*"
            style={{display: 'none'}}
            id="upload-button-file"
            multiple
            type="file"
            onChange={(event) => func(event.target.files)}
          />
          <label htmlFor="upload-button-file">
            <Button size="small" component="span">
              {name ? name : "Загрузить"}
            </Button>
          </label>
        </MenuTopButtonIcon>
      );

    case "back":
      return (
        <MenuTopButtonIcon>
          <KeyboardBackspaceIcon fontSize="small" />
          <Button size="small" onClick={func}>
            {name ? name : "Назад"}
          </Button>
        </MenuTopButtonIcon>
      );

    default:
      break;
  }
};

const MenuTopButtons = ({ type, name, func }) => {
  return getButtonIcon(type, name, func);
};

export default MenuTopButtons;
