import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButton({fileUploadFunc}) {
  const classes = useStyles();

  const onChangeFileUploadHandler = (event) => {
    fileUploadFunc(event.target.files)
  }

  return (
    <div className={classes.root}>
      <input
        // accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(event) => onChangeFileUploadHandler(event)}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}
