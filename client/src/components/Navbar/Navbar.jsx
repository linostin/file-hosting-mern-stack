import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/userReducer";
import Search from "./NavbarSearch/NavbarSearch";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import {
  NavbarContainer,
  NavbarElementWrapper,
  NavbarSearchField,
} from "./styled";
import { searchFiles, getFiles } from "../../actions/file";
import { uploadAvatar, deleteAvatar } from "../../actions/user";
import { showLoader, hideLoader } from "../../reducers/appReducer";
import PopupAvatar from "./PopupAvatar/PopupAvatar";
import { API_URL } from "../../config/config" 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbarAuthFalse: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  toolbarAuthTrue: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navlink: {
    textDecoration: "none",
    color: "white",
    marginLeft: "10px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const currentDir = useSelector((state) => state.files.currentDir);
  const currentUser = useSelector((state) => state.user.currentUser)
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [searchName, setSearchName] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);
  const [openPopupAvatar, setOpenPopupAvatar] = useState(false);

  const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : null


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePopupAvatar = () => {
    setOpenPopupAvatar(!openPopupAvatar);
  };

  const uploadAvatarFunc = (fileAvatar) => {
    console.log(fileAvatar)
    
    dispatch(uploadAvatar(fileAvatar))
  }

  const deleteAvatarFunc = () => {
    dispatch(deleteAvatar())
  }

  const searchChangeHandler = (event) => {
    setSearchName(event.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    dispatch(showLoader());
    if (event.target.value !== "") {
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(searchFiles(value));
          },
          750,
          event.target.value
        )
      );
    } else {
      dispatch(getFiles(currentDir));
    }
  };

  if (isAuth) {
    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbarAuthTrue}>
          <NavbarElementWrapper>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </NavbarElementWrapper>

          <NavbarElementWrapper>
            <Search
              searchName={searchName}
              searchChangeHandler={searchChangeHandler}
            />
          </NavbarElementWrapper>

          <NavbarElementWrapper>
            <NavLink
              className={classes.navlink}
              to="/login"
              onClick={() => dispatch(logout())}
            >
              <Typography variant="h6">Выйти</Typography>
            </NavLink>
            <Avatar
            src={avatar}
              onClick={handlePopupAvatar}
              style={{marginLeft: "20px", cursor: "pointer"}}
            >
              <AccountCircle />
            </Avatar>
            <PopupAvatar
              avatar={avatar}
              openPopupAvatar={openPopupAvatar}
              handlePopupAvatar={handlePopupAvatar}
              uploadAvatarFunc={uploadAvatarFunc}
              deleteAvatarFunc={deleteAvatarFunc}
            />
          </NavbarElementWrapper>
        </Toolbar>
      </AppBar>
    );
  } else {
    // TODO change mui styles in Toolbar to styled-components
    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbarAuthFalse}>
          <NavbarElementWrapper>
            <NavLink className={classes.navlink} to="/register">
              <Typography variant="h6">Регистрация</Typography>
            </NavLink>
            <NavLink className={classes.navlink} to="/login">
              <Typography variant="h6">Войти</Typography>
            </NavLink>
          </NavbarElementWrapper>
        </Toolbar>
      </AppBar>
    );
  }
}
