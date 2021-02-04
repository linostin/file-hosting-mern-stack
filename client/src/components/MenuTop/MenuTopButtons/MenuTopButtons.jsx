import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";

import { MenuTopButtonWrapper } from "../styled";

const getButtonIcon = (type, name) => {
  console.log(type, name);

  switch (type) {
    case "download":
      return (
        <MenuTopButtonWrapper>
          <GetAppIcon />
          <Button>{name}</Button>
        </MenuTopButtonWrapper>
      );

    case "delete":
      return (
        <MenuTopButtonWrapper>
          <DeleteIcon />
          <Button>{name}</Button>
        </MenuTopButtonWrapper>
      );

    case "edit":
      return (
        <MenuTopButtonWrapper>
          <EditIcon />
          <Button>{name}</Button>
        </MenuTopButtonWrapper>
      );

    case "close":
      return (
        <MenuTopButtonWrapper>
          <CloseIcon />
          <Button>{name}</Button>
        </MenuTopButtonWrapper>
      );

    case "share":
      return (
        <MenuTopButtonWrapper>
          <ShareIcon />
          <Button>{name}</Button>
        </MenuTopButtonWrapper>
      );

    default:
      break;
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const MenuTopButtons = ({ type, name }) => {
  const classes = useStyles();

  return <div className={classes.root}>{getButtonIcon(type, name)}</div>;
};

export default MenuTopButtons;
