import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75vh",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const LoaderCircular = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={80}/>
    </div>
  );
};

export default LoaderCircular;
