import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import CheckIcon from "@material-ui/icons/Check";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { MenuTopButtonIcon } from "../styled";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [viewType, setViewType] = useState('list');
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, viewTypeButton) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    switch (viewTypeButton) {
      case "list":
        setViewType("list");
        break;

      case "grid":
        setViewType("grid");
        break;

      default:
        break;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <MenuTopButtonIcon>
          {viewType === "list" ? <ViewListIcon fontSize="medium" /> : null}
          {viewType === "grid" ? <ViewModuleIcon fontSize="medium" /> : null}
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Представление
            <ArrowDropDownIcon fontSize="medium"/>
          </Button>
          
        </MenuTopButtonIcon>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={(event) => handleClose(event, "list")}>
                      <ListItemIcon style={{ minWidth: "30px" }}>
                        {viewType === "list" ? (
                          <CheckIcon fontSize="medium" />
                        ) : null}
                      </ListItemIcon>
                      <ListItemIcon style={{ minWidth: "35px" }}>
                        <ViewListIcon fontSize="medium" />
                      </ListItemIcon>
                      <Typography variant="inherit">Список</Typography>
                    </MenuItem>
                    <MenuItem onClick={(event) => handleClose(event, "grid")}>
                      <ListItemIcon style={{ minWidth: "30px" }}>
                        {viewType === "grid" ? (
                          <CheckIcon fontSize="medium" />
                        ) : null}
                      </ListItemIcon>
                      <ListItemIcon style={{ minWidth: "35px" }}>
                        <ViewModuleIcon fontSize="medium" />
                      </ListItemIcon>
                      <Typography variant="inherit">Сетка</Typography>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
