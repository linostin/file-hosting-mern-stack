import React, { useState } from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Slide from "@material-ui/core/Slide";
import {
  CardMessageContainer,
  CardMessageFileNameWrapper,
  CardMessageFileLoadingWrapper,
} from "./styled";
import LinearWithValueLabel from "../ProgressBarLinear/ProgressBarLinear";

import { useDispatch, useSelector } from "react-redux";
import { hideUploader } from "../../../reducers/uploadReducer";
import { removeUploadFile } from "../../../reducers/uploadReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      minWidth: "344px !important",
    },
  },
  card: {
    backgroundColor: "#fddc6c",
    width: "100%",
  },
  typography: {
    fontWeight: "bold",
  },
  actionRoot: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 8px 8px 16px",
  },
  icons: {
    marginLeft: "auto",
    padding: 0,
  },
  collapse: {
    padding: 15,
    marginTop: 10,
  },
  cardContent: {
      paddingTop: 0,
    // overflowY: "scroll",
    //   maxHeight: "96%",
  }
}));

const CardMessage = () => {
  const classes = useStyles();

  const files = useSelector((state) => state.upload.files);
  const isVisible = useSelector((state) => state.upload.isVisible);
  const dispatch = useDispatch();

  return (
    isVisible && (
      <CardMessageContainer>
        <Card className={classes.card}>
          <CardActions classes={{ root: classes.actionRoot }}>
            <Typography variant="subtitle1" className={classes.typography}>
              Загрузки
            </Typography>
            <div className={classes.icons}>
              <IconButton
                className={classes.expand}
                onClick={() => dispatch(hideUploader())}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </CardActions>
          <CardContent className={classes.cardContent}>
            {files.map((file) => (
              <Paper key={file.id} className={classes.collapse}>
                <CardMessageFileNameWrapper>
                  <Typography gutterBottom noWrap>
                    {file.name}
                  </Typography>
                  <IconButton
                    edge="end"
                    size="small"
                    onClick={() => dispatch(removeUploadFile(file.id))}
                  >
                    <CloseIcon size="small" />
                  </IconButton>
                </CardMessageFileNameWrapper>
                <CardMessageFileLoadingWrapper>
                  <Typography gutterBottom variant="caption">
                    Загрузка файла
                  </Typography>
                  <LinearWithValueLabel progress={file.progress} />
                </CardMessageFileLoadingWrapper>
              </Paper>
            ))}
          </CardContent>
        </Card>
      </CardMessageContainer>
    )
  );
};

export default CardMessage;
