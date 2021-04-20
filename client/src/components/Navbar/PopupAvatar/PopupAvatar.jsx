import React, { useState } from "react";
  // import { PopupAvatarPropsTypes } from './PopupAvatar.types'
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Slide from "@material-ui/core/Slide";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import { createStyles } from '@material-ui/core';
// import { Theme } from '@material-ui/core/styles/createMuiTheme';

const styles = (theme) => createStyles({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const PopupAvatar = ({
  avatar,
  openPopupAvatar,
  handlePopupAvatar,
  createDirHandler,
  uploadAvatarFunc,
  deleteAvatarFunc,
}: PopupAvatarPropsTypes) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [dirName, setDirName] = useState("");

  const onChangeValue = (event) => {
    setDirName(event.target.value);
  };

  const onClickButtonCreateFolder = (dirName) => {
    createDirHandler(dirName);
    setDirName("");
    handlePopupAvatar();
  };

  return (
    <Dialog
      onClose={handlePopupAvatar}
      aria-labelledby="customized-dialog-title"
      open={openPopupAvatar}
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle id="customized-dialog-title" onClose={handlePopupAvatar}>
        Настройки аватара
      </DialogTitle>
      <DialogContent dividers style={{display: "flex", justifyContent: "center"}}>
        <Avatar
          src={avatar}
          style={{ width: "100px", height: "100px" }}
        />
      </DialogContent>
      <DialogActions style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Button onClick={deleteAvatarFunc} color="primary">
          Удалить аватар
        </Button>
        <input
            accept="image/*"
            style={{display: 'none'}}
            id="upload-avatar-file"
            multiple
            type="file"
            onChange={(event) => uploadAvatarFunc(event.target.files[0])}
          />
          <label htmlFor="upload-avatar-file">
            <Button component="span" color="primary">
            Загрузить аватар
            </Button>
          </label>
      </DialogActions>
    </Dialog>
  );
};

export default PopupAvatar;
