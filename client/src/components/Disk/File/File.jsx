import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  divider: {
    width: "100%",
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList({ filesList }) {
  const classes = useStyles();
  console.log(filesList);
  return (
    <div className={classes.demo}>
      <List button dense>
        {filesList.map((element, index) => {
          return (
            <>
              <ListItem key={element._id}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={true}
                    tabIndex={-1}
                    disableRipple
                    //inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemIcon>
                  {element.type === "dir" ? (
                    <FolderIcon />
                  ) : (
                    <InsertDriveFileIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={element.name} />
                <ListItemSecondaryAction>
                <ListItemText primary={element.name} />
                <ListItemText primary={element.name} />
                  {/* <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton> */}
                </ListItemSecondaryAction>
              </ListItem>
              <Divider className={classes.divider} />
            </>
          );
        })}
      </List>
    </div>
  );
}
