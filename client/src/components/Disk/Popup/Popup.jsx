import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const styles = (theme) => ({
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

const Popup = ({ popupOpen, popupCloseFunc, createDirHandler }) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [dirName, setDirName] = useState('')

  const onChangeValue = (event) => {
    setDirName(event.target.value)
  }

  const onClickButtonCreateFolder = (dirName) => {
    createDirHandler(dirName);
    setDirName('');
    popupCloseFunc();
  }

  return (
      <Dialog
        onClose={popupCloseFunc}
        aria-labelledby="customized-dialog-title"
        open={popupOpen}
        fullScreen={fullScreen}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" onClose={popupCloseFunc}>
          Введите название папки
        </DialogTitle>
        <DialogContent dividers>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="popup"
            label="Название директории"
            name="popup"
            value={dirName}
            onChange={onChangeValue}
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={popupCloseFunc} color="primary">
            Отмена
          </Button>
          <Button onClick={() => onClickButtonCreateFolder(dirName)} color="primary">
            Создать папку
          </Button>
        </DialogActions>

      </Dialog>
  );
};

export default Popup;
